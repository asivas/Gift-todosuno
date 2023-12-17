"use client"
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import React, { useRef, useState } from 'react'
import withReactContent from "sweetalert2-react-content";
import "./registerForm.css";
import Link from "next/link";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";
const MySweetAlert = withReactContent(Swal);
import { useApiContext } from "../../../context/apiContext";

const RegisterForm = () => {

  const { dataUser, traerCuadroPadre} = useApiContext();

  const router = useRouter()

    const searchParams = useSearchParams();
  const username = searchParams.get("username");
  console.log(username)


    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        mode: "onBlur"
    });
    const password = useRef({});
    password.current = watch("password", "");

    
    const submitHandler = async data => {

        MySweetAlert.fire({
            position: "center",
            title: "Loading...",
            showConfirmButton: false,
        });
      
        try {
        let res;
          if (username !== undefined) {
                    res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}auth/createUser/${username}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    username: data.username,
                    name: data.name,
                    password: data.password,
                })   })
          } 
            
          const json = await res.json()

            if (dataUser.referidos.length === 2) {
              console.log("ya esta lleno y listo para probar")
            }
        
      
            switch(res.status){
                case 201: 
                    MySweetAlert.close()
                    router.push(`/login`)
                    break
                case 400:
                    console.log("ya registrado",json)
                    MySweetAlert.fire(
                        'Error',
                        'Email already registered',
                        'error'
                      )
                    break
                default:
                    console.log("error en el server")
                    MySweetAlert.fire(
                        'Error',
                        'Error en el server',
                        'error'
                      )
                    break
            }
           

        } catch (error) {
            console.log(error)
        }
        
    }

const termsAndConditions = () => {
  MySweetAlert.fire({
    title: "<strong>Terminos y condiciones</strong>",
  icon: "info",
  html: ` 
  Somos una comunidad comprometida con el intercambio voluntario y la creación colaborativa. Queremos enfatizar que en ningún caso garantizamos ganancias ni promovemos la venta de productos o inversiones de ningún tipo.
  Somos una comunidad de regalías donde la participación implica un compromiso voluntario de contribuir con generosidad y creatividad. Cada miembro que se une a nuestra plataforma está de acuerdo en participar mediante un regalo o donacion  voluntario.
  Es importante subrayar que para obtener resultados en nuestra comunidad se requiere dedicación y trabajo. No ofrecemos atajos ni promesas de beneficios rápidos y sin esfuerzo. Aquí valoramos el esfuerzo individual y colectivo, donde la colaboración y la pasión por el trabajo son fundamentales.
  Además, es crucial destacar que la plataforma "Todos Uno" no se responsabiliza de ninguna pérdida de dinero. No manejamos transacciones financieras ni promovemos inversiones. Cada miembro es responsable de sus acciones y decisiones dentro de la comunidad.
  Nuestra plataforma se basa en la idea de compartir, colaborar y construir juntos. No vendemos productos ni servicios, ni promovemos inversiones financieras. Nos destacamos por ser una comunidad comprometida con la generosidad y las donaciones.
  Al unirse a nuestra comunidad, cada miembro acepta estos principios y se compromete a contribuir de manera voluntaria y activa para el beneficio colectivo. ¡Únete a nosotros para formar parte de esta experiencia de crecimiento conjunto y gratificante!
  `,
  showCloseButton: true,
  focusConfirm: false,
  confirmButtonText: `
    <i class="fa fa-thumbs-up"></i> OK
  `
});
}


  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} action="#" className="form_register">
        {
          username ?
          <p>
          Referido por: <span className="form__span">{username} </span>
            </p>
            : <></>
        }
        <div className='inputs_register'>
        <div className="form__group_register">
          <label for="nombre">Nombre y Apellido:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Ingrese un nombre"
            {...register("name", {
              required: {
                value: true,
                message: "Required"
              }
            })}
          />
        </div>
        <div className="form__group_register">
          <label for="usuario">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Ingrese un nombre de usuario"
             {...register("username", {
              required: {
                value: true,
                message: "Required"
              }
            })}
          />
        </div>
        <div className="form__group_register">
          <label for="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Ingrese un Correo Electrónico"
            {...register("email", {required:{
                    value: true,
                    message: "Required"
                }, pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "The format is incorrect."
                }})}

          />
          {errors.email && <span>{errors.email.message}</span>}   
        </div>
        <div className="form__group_register">
          <label for="confirmarEmail">Confirmar correo electrónico:</label>
          <input
            type="email"
            id="confirmarEmail"
            name="confirmarEmail"
            required
            placeholder="Confirme Correo Electrónico"
          />
        </div>
        <div className="form__group_register">
          <label for="contrasena">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Ingrese su contraseña"
            {...register("password", {required:{
                    value: true,
                    message: "Required"
                }, minLength: {
                    value: 8,
                    message: "The password must have a minimum of 8 characters"
                }, maxLength: {
                    value: 16,
                    message: "The password must have a maximum of 16 characters"
                }})}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="form__group_register">
          <label for="confirmarContrasena">Confirmar contraseña:</label>
          <input
            type="password"
            id="cpsw"
            name="cpsw"
            required
            placeholder="Confirme su contraseña"
            {...register("cpsw", {required:{
                    value: true,
                    message: "Required"
                },validate: value => value === password.current || "The passwords do not match"})}

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
              value === "todosuno2024" ||
              "Código de invitación incorrecto",
          })}
        />
        {errors.codigoInvitacion && (
          <span>{errors.codigoInvitacion.message}</span>
        )}
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
          <button onClick={termsAndConditions}>Terminos y condiciones</button>
        </div>
        {errors.terminosCondiciones && (
          <span>{errors.terminosCondiciones.message}</span>
        )}
      </div>  
       
       
        </div>     
        <button type="submit" className="register_btn">
            REGISTRARSE
          </button>
        <Link href={"/login"} className="form__register-link">
            ¿Ya se registró?
          </Link> 
      </form>
    </>
  );
};

export default RegisterForm;


/*else {
           res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}auth/createUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    username: data.username,
                    name: data.name,
                    password: data.password,
                })
             
              }
            )
            console.log("2")
          }*/