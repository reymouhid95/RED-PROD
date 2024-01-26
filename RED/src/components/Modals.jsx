/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import FormModals from "./FormModals";

function Modals(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`modal fade ${props.show ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: props.show ? "block" : "none" }}
      role="dialog"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content px-3">
          <div className="modal-header border-none">
            <button type="button" className="btn arrow" onClick={props.onHide}>
              <i className="bi bi-arrow-left fs-4"></i>
            </button>
            <h5 className="modal-title" id="contained-modal-title-vcenter">
              Créer un nouveau hôtel
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={props.onHide}
              aria-label="Close"
            ></button>
          </div>
          <FormModals show={showModal} onHide={handleHideModal} />
          <div className="modal-footer border-none"></div>
        </div>
      </div>
    </div>
  );
}

export default Modals;
