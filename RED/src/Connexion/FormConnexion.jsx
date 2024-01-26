/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../services/authServices";
import { useForm, Controller } from "react-hook-form";

function FormConnexion() {
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    email: "",
    acceptTerms: false,
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
  } = useForm(defaultValues);
  const onSubmit = async (data) => {
    try {
      const response = await AuthServices.loginUser(data);
      localStorage.setItem("hotelUser", JSON.stringify(response.data));
      alert("Utilisateur connecté");
    } catch (err) {
      console.error(err.message);
    }
    reset();
    navigate("/admin/dashboard");
  };

  return (
    <div className="">
      <div className="card form-demo">
        <h5 className="text-start">Connectez-vous en tant que Admin</h5>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col">
                <label>Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className="form-control outline-0"
                    />
                  )}
                />
                {errors.email && (
                  <p className="error-message">Ce champ est requis.</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Mot de passe</label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="password"
                      className="form-control outline-0"
                    />
                  )}
                />
                {errors.password && (
                  <p className="error-message">Ce champ est requis.</p>
                )}
              </div>
            </div>
            <div className="row py-3">
              <div className="col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register("acceptTerms", { required: true })}
                  />
                  <label className="form-check-label">
                    Accepter les termes et la politique
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button text={"Se connecter"} id={"signIn"} type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="form-footer mt-2">
        <Link to="/rejet" style={{ textDecoration: "none" }}>
          <h5 className="text-center">Mot de passe oublié?</h5>
        </Link>
        <div>
          <p className="text-center">
            Vous n'avez pas de compte?{" "}
            <Link to="/inscription" style={{ textDecoration: "none" }}>
              <span>S'inscrire</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormConnexion;
