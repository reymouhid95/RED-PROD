const mongoose = require("mongoose");
const { Schema } = mongoose;

// Ceéation du schema
const hotelSchema = new Schema({
  img: String,
  title: String,
  price: Number,
  address: String,
  number: Number,
  email: String,
  currency: String,
});

// Création du modèle Hotel à partir du schéma
const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
