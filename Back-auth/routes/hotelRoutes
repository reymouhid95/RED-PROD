const express = require("express");
const HotelController = require("../controllers/hotelController");
const router = express.Router();

// Création des routes
router.post("/hotels", HotelController.addHotel);
router.get("/hotels", HotelController.getHotels);
router.get("/hotels/:hotelId", HotelController.getHotelById);
router.put("/hotels/:hotelId", HotelController.updateHotel);
router.delete("/hotels/:hotelId", HotelController.deleteHotel);

module.exports = router;
