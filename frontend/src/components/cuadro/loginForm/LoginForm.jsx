import React, { useState } from "react";
import "./loginForm.css";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import Image from "next/image";
import Swal from "sweetalert2";
import { useApiContext } from "../../../context/apiContext";
import withReactContent from "sweetalert2-react-content";

const MySweetAlert = withReactContent(Swal);

const LoginForm = () => {
  console.log(process.env.NEXT_PUBLIC_API_BACKEND);
  const { setToken } = useApiContext();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const submitHandler = async (data) => {
    MySweetAlert.fire({
      position: "center",
      title: "Login...",
      showConfirmButton: false,
    });

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND}auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      switch (res.status) {
        case 200:
          const json = await res.json();
          Cookies.set("token", json.token);
          setToken(json.token);
          MySweetAlert.close();
          router.push("/dashboard");
          break;
        case 401:
          MySweetAlert.fire("Error", "Email o password Incorrecto", "error");
          break;
        default:
          console.log("Server error");
          MySweetAlert.fire("Error", "Server error", "error");
          break;
      }
    } catch (error) {
      console.log(error);
      MySweetAlert.fire("Error", "Server error", "error");
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(submitHandler)} className="form">
        <div className="form__group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Ingrese un Correo Electrónico"
            {...register("email", {
              required: {
                value: true,
                message: "Required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Formato incorrecto",
              },
            })}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Ingrese su contraseña"
            {...register("password", {
              required: {
                value: true,
                message: "Required",
              },
            })}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>
        <div className="form__bottom">
          <Link href={"/register"} className="form__login-link">
            <p className="form__p">Registrarse</p>
          </Link>
          <button type="submit" className="form__btn">
            INICIAR SESIÓN
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
