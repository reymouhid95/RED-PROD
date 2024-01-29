/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../services/authServices";
import { useForm, Controller } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";

function FormConnexion() {
  const navigate = useNavigate();

  // // Vérification de la connexion de l'utilisateur
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("hotelUser"));
  //   if (user) {
  //     // Si l'utilisateur est connecté, rediriger vers la page du tableau de bord
  //     navigate("/admin/dashboard");
  //   }
  // }, [navigate]);

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
      const userExists = await AuthServices.checkUserExists(data.email);
      // Vérifier si l'utilisateur existe
      if (!userExists.data.exists) {
        toast.warning(
          "Utilisateur non trouvé. Veuillez vérifier vos informations."
        );
        return;
      }
      // Si l'utilisateur existe, continuer avec la connexion
      const response = await AuthServices.loginUser(data);
      localStorage.setItem("hotelUser", JSON.stringify(response.data));
      reset();
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err.message);
      toast.error("Erreur lors de la connexion");
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
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
                    Garder moi connecter
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
