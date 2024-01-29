/* eslint-disable react/prop-types */
import { useRef } from "react";
import InputModal from "./InputModal";
import Button from "./Button";

function FormModals({
  title,
  address,
  email,
  number,
  price,
  currency,
  funcTitle,
  funcAddress,
  funcEmail,
  funcNumber,
  funcPrice,
  funcCurrency,
  img,
  funcImg,
  handleSubmit,
  Annulation,
}) {
  const fileInputRef = useRef(null);
  const handleImageIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      funcImg(selectedFile);
    }
  };

  return (
    <div className="modal-body px-5 border-0 formModals">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="border-none"
      >
        <div className="row inputs">
          <InputModal
            type={"text"}
            label={"Nom de l'hotel"}
            name={"title"}
            value={title}
            func={funcTitle}
          />
          <InputModal
            type={"text"}
            label={"Adresse"}
            name={"address"}
            value={address}
            func={funcAddress}
          />
        </div>
        <div className="row">
          <InputModal
            type={"email"}
            label={"E-mail"}
            name={"email"}
            value={email}
            func={funcEmail}
          />
          <InputModal
            type={"text"}
            label={"Numéro de téléphone"}
            name={"number"}
            value={number}
            func={funcNumber}
          />
        </div>
        <div className="row">
          <InputModal
            type={"text"}
            label={"Prix par nuit"}
            name="price"
            value={price}
            func={funcPrice}
          />
          <div className="col">
            <label htmlFor="devise" className="form-label">
              Devise
            </label>
            <select
              className="form-select"
              id="devise"
              name="currency"
              value={currency}
              onChange={funcCurrency}
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
              name="img"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              required
            />
            <span className="ms-2 imageModal" onClick={handleImageIconClick}>
              <div className="imageModal" onClick={handleImageIconClick}>
                {img ? (
                  <img src={URL.createObjectURL(img)} alt="img" />
                ) : (
                  <i className="bi bi-image fs-1"></i>
                )}
              </div>
            </span>
            <p className="textImg">Ajouter une image</p>
          </div>
        </div>
        <div className="modal-footer border-0">
          <div className="col-3">
            <Button text={"Enregistré"} id={"save"} type={"submit"} />
          </div>
          {Annulation}
        </div>
      </form>
    </div>
  );
}

export default FormModals;



