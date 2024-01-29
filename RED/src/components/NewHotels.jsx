/* eslint-disable react/prop-types */
import { useState } from "react";
import FormModals from "./FormModals";
import HotelServices from "../services/hotelServices";
import { toast } from "sonner";

function Hotels(props) {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState("");
  const [img, setImg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Créer un nouvel objet FormData
    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("address", address);
    formDataToSend.append("email", email);
    formDataToSend.append("number", number);
    formDataToSend.append("price", price);
    formDataToSend.append("currency", currency || "Dollar");
    if (img) {
      formDataToSend.append("img", img);
    }

    try {
      const response = await HotelServices.addHotel(formDataToSend);
      console.log(response.data);
      props.fetchHotels;
      toast.success("Hôtel ajouté avec succès");
      setTitle("");
      setAddress("");
      setEmail("");
      setNumber(0);
      setPrice(0);
      setImg(null);
      props.onHide();
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un hôtel", error);
      toast.error("Erreur lors de l'ajout d'un hôtel");
    }
  };

  const handleImageChange = (selectedFile) => {
    setImg(selectedFile);
  };

  return (
    <FormModals
      title={title}
      address={address}
      email={email}
      number={number}
      price={price}
      currency={currency}
      img={img}
      funcTitle={(e) => setTitle(e.target.value)}
      funcAddress={(e) => setAddress(e.target.value)}
      funcEmail={(e) => setEmail(e.target.value)}
      funcNumber={(e) => setNumber(e.target.value)}
      funcPrice={(e) => setPrice(e.target.value)}
      funcCurrency={(e) => setCurrency(e.target.value)}
      funcImg={handleImageChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default Hotels;
