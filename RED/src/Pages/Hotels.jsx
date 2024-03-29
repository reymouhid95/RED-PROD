import { useState } from "react";

import HotelsCard from "../components/HotelsCard";
import Modals from "../components/Modals";
import Button from "../components/Button";

function Hotels() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div to="/admin/hotels" style={{ textDecoration: "none", color: "#000" }}>
      <div className="hotels">
        <div className="titleHotels d-flex justify-content-between px-4 align-items-center">
          <h6>Hotels</h6>
          <div className="pb-2">
            <Button
              text={"Créer un nouveau hôtel"}
              func={() => setModalShow(true)}
              id={"createHotel"}
              icon={<i className="bi bi-plus fs-4"></i>}
            />
          </div>
        </div>
        <div className="hotelsCard py-5 mt-4">
          <HotelsCard />
        </div>
        <Modals show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

export default Hotels;
