/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import HotelServices from "../services/hotelServices";
import CardContentHotels from "./CardContentHotels";

function HotelsCard(props) {
  const [hotels, setHotels] = useState([]);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState("");
  const [img, setImg] = useState(null);

  // Récupérer la liste des hôtels depuis la base de données
  const fetchHotels = useCallback(() => {
    try {
      const unsubscribeHotels = async () => {
        const response = await HotelServices.getHotels();
        setHotels(response.data);
      };

      unsubscribeHotels();
    } catch (error) {
      console.error("Erreur lors du chargement des hôtels :", error);
      toast.error("Erreur lors du chargement des hôtels");
    }
  }, []);

  useEffect(() => {
    fetchHotels();
  }, []);

  // Mise à jour d'un hôtel
  const handleUpdate = async (hotelId) => {
    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("address", address);
    formDataToSend.append("email", email);
    formDataToSend.append("number", number);
    formDataToSend.append("price", price);
    formDataToSend.append("currency", currency);
    try {
      const response = await HotelServices.updateHotel(hotelId);
      setHotels(response.data);
      fetchHotels();
      toast.success("Mise à jour effectuée!");
    } catch (err) {
      console.error("Error");
      toast.error("Erreur lors de la mise à jour!");
    }
  };

  // Suppression d'un hôtel
  const handleDelete = async (hotelId) => {
    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("address", address);
    formDataToSend.append("email", email);
    formDataToSend.append("number", number);
    formDataToSend.append("price", price);
    formDataToSend.append("currency", currency);
    try {
      const response = await HotelServices.deleteHotel(hotelId);
      setHotels(response.data);
      fetchHotels();
      toast.success("Suppression effectuée!");
    } catch (err) {
      console.error("Error");
      toast.error("Erreur lors de la suppression!");
    }
  };

  return (
    <div>
      <div className="row m-0 px-2 d-flex justify-content-around flex-wrap">
        {Array.isArray(hotels) &&
          hotels.map((hotel, index) => (
            <CardContentHotels
              {...hotel}
              key={index}
              img={hotel.imgURL}
              handleUpdate={() => handleUpdate(hotel._id)}
              handleDelete={() => handleDelete(hotel._id)}
              setTitle={(e) => setTitle(e.target.value)}
              setAddress={(e) => setAddress(e.target.value)}
              setEmail={(e) => setEmail(e.target.value)}
              setNumber={(e) => setNumber(e.target.value)}
              setCurrency={(e) => setCurrency(e.target.value)}
              setPrice={(e) => setPrice(e.target.value)}
              setImg={(selectedFile) => setImg(selectedFile)}
            />
          ))}
      </div>
    </div>
  );
}

export default HotelsCard;
