import { useState } from "react";
import HotelsInfos from "./HotelsInfos";

/* eslint-disable react/prop-types */
function CardContentHotels({
  title,
  address,
  price,
  currency,
  email,
  number,
  img,
  handleUpdate,
  handleDelete,
  setTitle,
  setAddress,
  setPrice,
  setCurrency,
  setEmail,
  setNumber,
  setImg,
}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="card p-0 mb-4 cardHotels" style={{ width: "14rem" }}>
      <img
        src={img}
        className="card-img-top img-fluid pe-auto imageCard"
        alt="Image"
        onClick={() => setModalShow(true)}
      />
      <div className="card-body">
        <p style={{ color: "#8D4B38", fontSize: "10px" }}>{address}</p>
        <h6 className="card-title fw-bold" style={{ color: "#222222" }}>
          {title}
        </h6>
        <div>
          <p className="card-text">
            {price} {currency} par nuit
          </p>
        </div>
      </div>
      <HotelsInfos
        show={modalShow}
        title={title}
        currency={currency}
        img={img}
        number={number}
        email={email}
        address={address}
        price={price}
        onHide={() => setModalShow(false)}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        setTitle={setTitle}
        setAddress={setAddress}
        setEmail={setEmail}
        setPrice={setPrice}
        setNumber={setNumber}
        setCurrency={setCurrency}
        setImg={setImg}
      />
    </div>
  );
}

export default CardContentHotels;
