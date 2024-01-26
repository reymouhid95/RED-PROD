const User = require("../models/User.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = process.env.JWT_SECRET;
const blacklist = new Set();

// Inscire un utilisateur
async function registerUser(req, res) {
  let { name, email, password } = req.body;
  try {
    const duplicate = await User.find({ email });
    if (duplicate && duplicate.length > 0)
      return res.status(400).send({ message: "Cet email a été déjà utilisé" });
    let user = new User({ name, email, password });
    const result = await user.save();
    console.log(result);
    res.status(201).send({ message: "Uilisateur inscrit" });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

// Connecter un utilisateur
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ err: "La connexion a échoué" });
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).send({ err: "Mot de passe incorrect" });
    }
    let token = jwt.sign({ userId: user?._id }, secretKey, {
      expiresIn: "1h",
    });
    let finalData = {
      userId: user?._id,
      email: user?.email,
      name: user?.name,
      token,
    };
    res.send(finalData);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

// Déconnecter un utilisateur
async function logoutUser(req, res) {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .send({ message: "Token manquant dans l'en-tête Authorization" });
    }

    const [, cleanedToken] = token.split(" ");

    if (!cleanedToken) {
      return res.status(401).send({ message: "Token invalide" });
    }

    if (blacklist.has(cleanedToken)) {
      return res.status(401).send({ message: "Le jeton a déjà été révoqué" });
    }

    blacklist.add(cleanedToken);

    res.send({ message: "Utilisateur déconnecté" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ message: "Erreur lors de la déconnexion de l'utilisateur" });
  }
}

// Restauration du mot de passe
async function resetPassword(req, res) {
  try {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "Utilisateur non trouvé" });
    }

    // Mettre à jour le mot de passe de l'utilisateur
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.send({ message: "Mot de passe réinitialisé avec succès" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ message: "Erreur lors de la réinitialisation du mot de passe" });
  }
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
};
