/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import HotelServices from "../services/hotelServices";

function CardContentHotels({ img, title, adress, price }) {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      // Utilisez la méthode getHotels pour récupérer la liste des hôtels
      const response = await HotelServices.getHotels();
      setHotels(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des hôtels :", error);
    }
  };

  return (
    <div>
      {hotels.map((hotel, index) => (
        <div key={index} className="card p-0 mb-4" style={{ width: "15rem" }}>
          <img src={img} className="card-img-top img-fluid" alt="Hôtel" />
          <div className="card-body">
            <p style={{ color: "#8D4B38", fontSize: "10px" }}>
              {hotel.address}
            </p>
            <h6 className="card-title fw-bold" style={{ color: "#222222" }}>
              {hotel.title}
            </h6>
            <p className="card-text">{hotel.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardContentHotels;
