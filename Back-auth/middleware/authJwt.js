const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

// Middleware pour l'authentification par token
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Vérification de la présence du jeton
  if (!authHeader)
    return res.status(401).send({ message: `Echec de l'authentification` });

  // Extraction du jeton à partir de l'en-tête
  const token = authHeader.split(" ")[1];

  // Vérification et décryptage du jeton
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ message: "Token not valid, Please Login Again" });
    }

    // Affichage des informations décryptées du jeton
    console.log("Decoded Token:", decoded);

    req.user = decoded;

    next();
  });
};

module.exports = authenticateToken;
