"use client";
import React, { useState } from "react";
import "./loginForm.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useApiContext } from "../../../context/apiContext";
import withReactContent from "sweetalert2-react-content";
import { validateHeaderValue } from "http";

const MySweetAlert = withReactContent(Swal);

const LoginForm = () => {
  const { setToken, setReset, updateUser } = useApiContext();

  const handleUpdateUser = async () => {
    const { value: claves } = await Swal.fire({
      title: "Seleccione el codigo de validación",
      input: "select",
      inputOptions: {
        Clave: {
          Cosmos: "Cosmos",
          infinito: "infinito",
          raudal: "raudal",
          bienestar: "bienestar",
          prosperidad: "prosperidad",
          afluencia: "afluencia",
        },
      },
      inputPlaceholder: "Seleccione una palabra clave",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (
            value === "afluencia" ||
            value === "raudal" ||
            value === "prosperidad"
          ) {
            resolve();
          } else {
            resolve("Necesito que selecciones el código que se te envió :)");
          }
        });
      },
    });

    if (claves) {
      Swal.fire(`Usted selecciono: ${claves}`);

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const updatedUsers = await updateUser(email, password);
        if (updatedUsers) {
          // alert("¡Usuario actualizado correctamente! Ya puede iniciar sesion");
          Swal.fire(
            "¡Usuario actualizado correctamente! Ya puede iniciar sesion",
          );
        }

        // Si es necesario, realiza alguna acción adicional después de actualizar el usuario
      } catch (error) {
        console.error("Error al actualizar usuario:", error);
        // Swal.fire("SweetAlert2 is working!");
        Swal.fire(
          "Ha ocurrido un error al actualizar el usuario. Por favor, inténtalo de nuevo más tarde.",
        );
      }
    }
  };
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
        },
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
          console.log("Correo electrónico o contraseña incorrectos");
          MySweetAlert.fire(
            "Error",
            "Correo electrónico o contraseña incorrectos",
            "error",
          );
          break;
        default:
          console.log("Server error");
          MySweetAlert.fire("Error", "Error del servidor", "error");
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="title">TodosUno</div>
      <form onSubmit={handleSubmit(submitHandler)} className="form_login">
        <div className="form__group_login">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            className="input_login"
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
                message: "The format is incorrect",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form__group_login">
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            className="input_login"
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
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="form_bottom_login">
          <Link href={"/contact"} className="form__login-link">
            REGISTRARSE
          </Link>
          <button type="submit" className="form_btn_login">
            INICIAR SESIÓN
          </button>
        </div>
      </form>
      <div>
        <button onClick={handleUpdateUser} className="form__login-link">
          ACTUALIZAR USUARIO
        </button>
      </div>
    </>
  );
};

export default LoginForm;
