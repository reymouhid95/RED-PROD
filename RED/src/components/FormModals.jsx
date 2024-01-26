/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import InputModal from "./InputModal";
import HotelServices from "../services/hotelServices";
import Button from "./Button";

function FormModals() {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    email: "",
    number: 0,
    price: 0,
    currency: "F XOF",
    img: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, img: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Créer un objet FormData pour envoyer les données multipart/form-data
    const formData = new FormData();
    formData.append("title", formData.title);
    formData.append("address", formData.address);
    formData.append("email", formData.email);
    formData.append("number", formData.number);
    formData.append("price", formData.price);
    formData.append("currency", formData.currency);
    formData.append("image", formData.img);
    if (formData.img) {
      formData.append("img", formData.img);
    }

    try {
      const response = await HotelServices.addHotel(formData);
      console.log(response.data);

      // Réinitialiser le formulaire après l'ajout réussi
      setFormData({
        title: "",
        address: "",
        email: "",
        number: 0,
        price: 0,
        currency: "F XOF",
        img: null,
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout d'un hôtel", error);
    }
  };

  return (
    <div className="modal-body px-5">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row">
          <InputModal
            type={"text"}
            label={"Nom de l'hotel"}
            name={"title"}
            // value={formData.title}
            func={handleInputChange}
          />
          <InputModal
            type={"text"}
            label={"Adresse"}
            name={"address"}
            // value={formData.address}
            func={handleInputChange}
          />
        </div>
        <div className="row">
          <InputModal
            type={"email"}
            label={"E-mail"}
            name={"email"}
            // value={formData.email}
            func={handleInputChange}
          />

          <InputModal
            type={"text"}
            label={"Numéro de téléphone"}
            name={"number"}
            // value={formData.number}
            func={handleInputChange}
          />
        </div>
        <div className="row">
          <InputModal
            type={"text"}
            label={"Prix par nuit"}
            name="price"
            // value={formData.price}
            func={handleInputChange}
          />
          <div className="col">
            <label htmlFor="devise" className="form-label">
              Devise
            </label>
            <select
              className="form-select"
              id="devise"
              defaultValue="Euro"
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
            >
              <option>F XOF</option>
              <option>Euro</option>
              <option>Dollar</option>
            </select>
          </div>
        </div>
        <div className="row mb-3 mt-3">
          <div className="col p-0 border rounded py-4 d-flex align-items-center justify-content-center flex-column">
            <input
              type="file"
              className="form-control visually-hidden"
              id="image"
              value={formData.img}
              onChange={handleFileChange}
              accept="image/*"
            />
            <span className="ms-2 imageModal">
              <i className="bi bi-image fs-1"></i>
            </span>
            <p className="textImg">Ajouter une image</p>
          </div>
        </div>
        <div className="col-3 modal-footer">
          <Button text={"Enregistré"} id={"save"} type="submit" />
        </div>
      </form>
    </div>
  );
}

export default FormModals;
