"use client"
import React, { useState, useEffect } from 'react';
import { useApiContext } from "../../../context/apiContext";
import "../sideBar/sidebar.css";

const InactiveUsers = () => {
    const {
      inactiveUsers,
      activarUsuario,
      dataCuadro,
      legend,
      dataUser,
      cuadroIdHijo,
      traerCuadroPadre,
      hijoIzq,
      cambiarEstadoComplete,
      hijoDer,
      createCuadros
    } = useApiContext();
  
    const [showButton, setShowButton] = useState(true);
    const [usuariosInactivos, setUsuariosInactivos] = useState(
      inactiveUsers.filter((user) => {
        const username = user.username;
    
        // Verifica si alguna de las propiedades existe antes de comparar
        return (
          username &&
          (
            username === dataCuadro.lado_derecho.builders1?.username ||
            username === dataCuadro.lado_derecho.builders2?.username ||
            username === dataCuadro.lado_izquierdo.builders1?.username ||
            username === dataCuadro.lado_izquierdo.builders2?.username
          )
        );
      })
    );
    const [usuarioActivado, setUsuarioActivado] = useState(null);
  
    const completar_cuadro_refer = () => {
      traerCuadroPadre();
      cambiarEstadoComplete();
      setShowButton(false);
    }


    useEffect(() => {

      cuadroIdHijo();
      // Verificar si se activó un usuario recientemente
      if (usuarioActivado) {
        // Actualizar la lista de usuarios inactivos eliminando el usuario activado
        setUsuariosInactivos((prevUsuarios) =>
          prevUsuarios.filter((user) => user._id !== usuarioActivado._id)
        );
  
        // Manejar la lógica después de activar al usuario
        handlePostActivarUsuario(usuarioActivado);
  
        // Reiniciar el estado de usuario activado
        setUsuarioActivado(null);
      }
    }, [usuarioActivado]);
  
    const handlePostActivarUsuario = (usuario) => {
      console.log("usuario activado", usuario);
      activarUsuario(usuario.username);
  
    };
  
    const handleActivarUsuario = (usuario) => {
      // Actualizar el estado de usuario activado
      setUsuarioActivado(usuario);

      createNewCuadro();
      
      // Verificar si alguna propiedad en dataCuadro está vacía
      const propiedades = Object.keys(dataCuadro);
      for (const propiedad of propiedades) {
        if (dataCuadro[propiedad] === null || dataCuadro[propiedad] === "") {
          console.log("esta vacia");
          return;
        }
      }
  
      if (
        !dataCuadro.lado_derecho.builders1 ||
        !dataCuadro.lado_derecho.builders2 ||
        !dataCuadro.lado_izquierdo.builders1 ||
        !dataCuadro.lado_izquierdo.builders2
      ) {
       // console.log("No se encuentran las propiedades builder", dataCuadro);
        return;
      }

      // Si todas las propiedades tienen valores, dispara la función
   
    //  deleteUser();
    //console.log("esta lleno");
    ascenderNivel();


    };
  

    const createNewCuadro = () => {
      let lado;
      let builder;
      let userHijo;
    
      if (dataCuadro.lado_derecho.builders1 && !hijoDer) {
        lado = 'derecho';
        builder = 'builders1';
        userHijo = dataCuadro.lado_derecho.guide;
        console.log("La propiedad pertenece al lado derecho, builder1");
      } else if (dataCuadro.lado_derecho.builders2 && !hijoDer) {
        lado = 'derecho';
        builder = 'builders2';
        userHijo = dataCuadro.lado_derecho.guide;
        console.log("La propiedad pertenece al lado derecho, builder2");
      } else if (dataCuadro.lado_izquierdo.builders1 && !hijoIzq) {
        lado = 'izquierdo';
        builder = 'builders1';
        userHijo = dataCuadro.lado_izquierdo.guide;
        console.log("La propiedad pertenece al lado izquierdo, builder1");
      } else if (dataCuadro.lado_izquierdo.builders2 && !hijoIzq) {
        lado = 'izquierdo';
        builder = 'builders2';
        userHijo = dataCuadro.lado_izquierdo.guide;
        console.log("La propiedad pertenece al lado izquierdo, builder2");
      } else {
        return console.log("Todas las propiedades están vacías");
      }
    
      // Supongamos que createCuadros también devuelve información
      createCuadros(lado, builder, userHijo);
    
    
    };
    

    const ascenderNivel = async () => {

      const username = dataUser.username;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BACKEND}user/subirNivel`,  // Ajusta la ruta según tu configuración
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username }),
        }
      );
  
     // deleteCuadro();
    }

    


    return (
      <div className="dashboard__top">

      
          <ul>
            {usuariosInactivos.map((usuario) => (
              <li key={usuario._id} className='acceptPay'>
              <p>Recibir regalo de:</p>
              <span>{usuario.email}</span> 
              <div className='buttons'>
                <button className="btnPay" onClick={() => handleActivarUsuario(usuario)} style={{backgroundColor:"rgb(8 143 8)", borderColor:"rgb(8 143 8)"}}>
                  Aceptar
                </button>
                <button className="btnPay" style={{backgroundColor:"red", borderColor:"red"}}>
                  Borrar
                </button>
              </div>
                
              </li>
            ))}
          </ul>
        
          <p className='noPays'>No se encuentran solicitudes</p>
        
        {showButton && dataUser.complete === true ? 
        <button className="addToRefer" onClick={completar_cuadro_refer}>Agregar a cuadro padre</button>
      
        : <p></p> }
      </div>
    );
  };
  
  export default InactiveUsers;



 