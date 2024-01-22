import iconLogo from "../assets/icons/logo.svg";
import FormConnexion from "./FormConnexion";

function PageConnexion() {
  return (
    <div className="connexion">
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="mx-3">
          <img src={iconLogo} alt="icon" className="logoIns" />
        </h2>
        <h2 className="text-white fw-bold titleAppli">RED PRODUCT</h2>
      </div>
      <div className="">
        <FormConnexion />
      </div>
    </div>
  );
}

export default PageConnexion;
