"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import "./registerPage.css";
const MySweetAlert = withReactContent(Swal);
import withReactContent from "sweetalert2-react-content";
import { useApiContext } from "../../../context/apiContext";

const registerPage = () => {
  const { getAllUsers } = useApiContext();

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const username = "todosuno";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onBlur",
  });
  const password = useRef({});
  password.current = watch("password", "");

  const submitHandler = async (data) => {
    setLoading(true);

    try {
      // Verificar si el usuario ya existe
      const users = await getAllUsers();
      const existingUser = users.find(
        (user) => user.username === data.username || user.email === data.email,
      );
      console.log("ema1", existingUser);
      if (existingUser) {
        MySweetAlert.fire(
          "Error",
          "El usuario o correo electrónico ya está registrado",
          "error",
        );
        setLoading(false);
        return;
      } else {
        // Si el usuario no existe, realizar el registro
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BACKEND}auth/createUserFree`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: data.email,
              username: data.username,
              password: data.password,
              name: data.name,
              nivel: data.nivel,
            }),
          },
        );
        if (!res.ok) {
          throw new Error("Error en la solicitud para crear un nuevo usuario");
        }

        MySweetAlert.fire("Registro exitoso", "¡Bienvenido!", "success");
        router.push(`/login`);

        const data1 = await res.json();
        console.log("ema2", data1);
        return data1;
      }
    } catch (error) {
      console.error(error);
      MySweetAlert.fire("Error", "Error en el servidor", "error");
    } finally {
      setLoading(false);
    }
  };
  const termsAndConditions = () => {
    MySweetAlert.fire({
      title: "<strong>Terminos y condiciones</strong>",
      icon: "info",
      html: ` 
  TodosUno es una comunidad creada con el fin del beneficio colectivo, desarrollando un sistema de ayuda mutua.
  Bajo ningún punto de vista garantizamos o aseguramos algún tipo de resultado económico, esto depende 100% del trabajo de cada participante, con esto mismo desvinculo de cualquier reclamo tanto a la persona que me invito como a la propia comunidad.
  Soy consciente y estoy de acuerdo con hacer un regalo voluntario para simplemente aplicar la Ley universal de “Dar y Recibir”. 
  `,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> OK
  `,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitHandler)}
        action="#"
        className="form_register"
      >
        <div className="inputs_register">
          <div className="form__group_register">
            <label htmlFor="nombre">Nombre y Apellido:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Ingrese un nombre"
              {...register("name", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
          </div>
          <div className="form__group_register">
            <label htmlFor="usuario">Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Ingrese un nombre de usuario"
              {...register("username", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
            />
          </div>
          <div className="form__group_register">
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
                  message: "The format is incorrect.",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div className="form__group_register">
            <label htmlFor="confirmarEmail">
              Confirmar correo electrónico:
            </label>
            <input
              type="email"
              id="confirmarEmail"
              name="confirmarEmail"
              required
              placeholder="Confirme Correo Electrónico"
            />
          </div>
          <div className="form__group_register">
            <label htmlFor="contrasena">Contraseña:</label>
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
                minLength: {
                  value: 8,
                  message: "The password must have a minimum of 8 characters",
                },
                maxLength: {
                  value: 16,
                  message: "The password must have a maximum of 16 characters",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>
          <div className="form__group_register">
            <label htmlFor="confirmarContrasena">Confirmar contraseña:</label>
            <input
              type="password"
              id="cpsw"
              name="cpsw"
              required
              placeholder="Confirme su contraseña"
              {...register("cpsw", {
                required: {
                  value: true,
                  message: "Required",
                },
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors.cpsw && <span>{errors.cpsw.message}</span>}
          </div>

          {/*ACA VA EL CODIGO DE INVITACION*/}
          <div className="form__group_register">
            <label htmlFor="codigoInvitacion">Codigo de Invitación:</label>
            <input
              type="text"
              placeholder="Codigo de invitacion"
              {...register("codigoInvitacion", {
                required: {
                  value: true,
                  message: "Código de invitación es obligatorio",
                },
                validate: (value) =>
                  value === "todosuno2024" || "Código de invitación incorrecto",
              })}
            />
            {errors.codigoInvitacion && (
              <span>{errors.codigoInvitacion.message}</span>
            )}
          </div>

          <div className="form__group_register">
            <label htmlFor="nivel">Nivel:</label>
            <select
              {...register("nivel")}
              id="nivel"
              type="text"
              name="nivel"
              defaultValue="Pablo10"
            >
              <option value="Pablo1">1</option>
              <option value="Pablo2">2</option>
              <option value="Pablo3">3</option>
              <option value="Pablo4">4</option>
              <option value="Pablo5">5</option>
              <option value="Pablo6">6</option>
              <option value="Pablo7">7</option>
              <option value="Pablo8">8</option>
              <option value="Pablo9">9</option>
              <option value="Pablo10">10</option>
            </select>
          </div>

          <div className="form__group_register">
            <label htmlFor="terminosCondiciones">
              Acepta los términos y condiciones:
            </label>
            <div className="tyc">
              <input
                type="checkbox"
                {...register("terminosCondiciones", {
                  required: "Debes aceptar los términos y condiciones",
                })}
              />
              <button onClick={termsAndConditions}>
                Terminos y condiciones
              </button>
            </div>
            {errors.terminosCondiciones && (
              <span>{errors.terminosCondiciones.message}</span>
            )}
          </div>
        </div>
        <button type="submit" className="register_btn" disabled={loading}>
          {loading ? "Cargando..." : "REGISTRARSE"}
        </button>
        <Link href={"/login"} className="form__register-link">
          ¿Ya se registró?
        </Link>
      </form>
    </>
  );
};

export default registerPage;
