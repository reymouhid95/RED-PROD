/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import AuthServices from "../services/authServices";
import { Toaster, toast } from "sonner";

function FormInscription() {
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    acceptTerms: false,
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = async (data) => {
    try {
      const response = await AuthServices.registerUser(data);
      toast.success("Utilisateur inscrit avec succès");
      reset();
      setTimeout(() => {
        navigate("/connexion");
      }, 2000);
    } catch (err) {
      console.error(err.message);
      toast.error(
        "Erreur lors de l'inscription. Veuillez vérifier les détails."
      );
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
      <div className="card form-demo">
        <h5 className="text-start">Inscrivez-vous en tant qu'Admin</h5>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col">
                <label>Nom</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="form-control no-outline"
                    />
                  )}
                />
                {errors.name && (
                  <p className="error-message">Ce champ est requis.</p>
                )}
              </div>
            </div>
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
                      className="form-control no-outline"
                    />
                  )}
                />
                {errors.email && (
                  <p className="error-message">
                    Veuillez entrer une adresse e-mail valide.
                  </p>
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
                      className="form-control no-outline"
                    />
                  )}
                />
                {errors.password && (
                  <p className="error-message">Le mot de passe est requis.</p>
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
                  {errors.acceptTerms && (
                    <p className="error-message">
                      Vous devez accepter les termes et la politique.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Button text={"S'inscrire"} id={"signUp"} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="form-footer mt-3">
        <div>
          <p className="m-0 text-center">
            Vous avez déjà un compte?{" "}
            <Link to="/connexion" style={{ textDecoration: "none" }}>
              <span>Se connecter</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormInscription;
