const express = require("express");
const AuthController = require("../controllers/authController");
const router = express.Router();

// Créaion des routes
router.post("/register", AuthController.registerUser);
router.post("/check-user", AuthController.checkUserExists);
router.post("/login", AuthController.loginUser);
router.post("/logout", AuthController.logoutUser);
router.post("/reset-password", AuthController.resetPassword);

module.exports = router;
