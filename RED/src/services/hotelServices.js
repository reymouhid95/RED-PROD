import axios from "axios";

// URL du serveur où se trouve l'API
const SERVER_URL = "https://red-pro.onrender.com/api";

// Ajouter un nouvel hôtel
const addHotel = (data) => {
  return axios.post(`${SERVER_URL}/hotels`, data);
};

// Récupérer la liste des hôtels
const getHotels = () => {
  return axios.get(`${SERVER_URL}/hotels`);
};

// Récupérer un hôtel
const getHotelById = (hotelId) => {
  return axios.get(`${SERVER_URL}/hotels/${hotelId}`);
};

// Mettre à jour les informations d'un hôtel
const updateHotel = (hotelId, data) => {
  return axios.put(`${SERVER_URL}/hotels/${hotelId}`, data);
};

// Supprimer un hôtel
const deleteHotel = (hotelId) => {
  return axios.delete(`${SERVER_URL}/hotels/${hotelId}`);
};

const HotelServices = {
  addHotel,
  getHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
};

export default HotelServices;
