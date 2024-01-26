const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/authRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
require("dotenv").config();
const multer = require("multer");
const path = require("path");

const PORT = process.env.PORT || 5000;

// Configuration du stockage pour les fichiers téléchargés via multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "images"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

app.use("/images", express.static("images"));
app.use(upload.single("img"));

// Ajout du log de la date au démarrage du serveur
const serverStartTime = new Date();
console.log(`Le serveur a démarré le ${serverStartTime}`);

app.use("/api", authRoutes);
app.use("/api", hotelRoutes);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connecté à la base de données");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Le serveur est démarré au port ${PORT}`);
});
