const Hotel = require("../models/HotelList");

const HotelController = {
  // Ajouter un nouvel hôtel
  addHotel: async (req, res) => {
    try {
      const { title, price, address, number, email, currency } = req.body;

      // Vérifier que les champs requis sont présents
      if (!title || !price || !address) {
        return res.status(400).json({
          message: "Les champs titre, prix et adresse sont obligatoires",
        });
      }

      // Récupérer le nom du fichier d'image, s'il existe
      const img = req.file ? req.file.filename : null;

      // Créer une nouvelle instance d'hôtel
      const newHotel = new Hotel({
        img,
        title,
        price,
        address,
        number,
        email,
        currency,
      });

      // Enregistrer l'hôtel dans la base de données
      const savedHotel = await newHotel.save();

      res.status(201).json({ ...savedHotel._doc, imgURL: `/images/${img}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  // Récupérer la liste des hôtels
  getHotels: async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  // Récupérer un hôtel par son ID
  getHotelById: async (req, res) => {
    try {
      const hotelId = req.params.hotelId;

      // Rechercher l'hôtel par son ID
      const hotel = await Hotel.findById(hotelId);

      // Vérifier si l'hôtel existe
      if (!hotel) {
        return res.status(404).json({ message: "Hôtel non trouvé" });
      }

      res.status(200).json(hotel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  // Mettre à jour les informations d'un hôtel
  updateHotel: async (req, res) => {
    try {
      const hotelId = req.params.hotelId;
      const updateData = req.body;

      // Mettre à jour l'hôtel et renvoyer la version mise à jour
      const updatedHotel = await Hotel.findByIdAndUpdate(hotelId, updateData, {
        new: true,
      });

      // Vérifier si l'hôtel existe
      if (!updatedHotel) {
        return res.status(404).json({ message: "Hôtel non trouvé" });
      }

      res.status(200).json(updatedHotel);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  // Supprimer un hôtel par son ID
  deleteHotel: async (req, res) => {
    try {
      const hotelId = req.params.hotelId;

      // Supprimer l'hôtel par son ID
      await Hotel.findByIdAndDelete(hotelId);

      res.status(204).send({ message: "Hotel deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
};

module.exports = HotelController;
