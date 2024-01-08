import React from 'react'
import UserPoint from "../userPoint/userPoint"
import "./mandala.css"
import { useApiContext } from "../../../context/apiContext";


const Mandala = () => {

    const { dataUser, dataCuadro } = useApiContext();

     // Define las coordenadas para cada punto
  const puntos = [
      { x: 28, y: 74, propiedadUsuario: dataCuadro?.legend, active: true },
      { x: 85, y: 74, propiedadUsuario: dataCuadro?.lado_derecho?.guide, active: true },
      { x: -29, y: 74, propiedadUsuario: dataCuadro?.lado_izquierdo?.guide, active: true },
      { x: -59, y: 34, propiedadUsuario: dataCuadro?.lado_izquierdo?.builders1?.username, active: true },
      { x: -59, y: 114, propiedadUsuario: dataCuadro?.lado_izquierdo?.builders2?.username, active: true },
      { x: 115, y: 34, propiedadUsuario: dataCuadro?.lado_derecho?.builders1?.username, active: true },
      { x: 115, y: 114, propiedadUsuario: dataCuadro?.lado_derecho?.builders2?.username, active: false },
      // ... Agrega más coordenadas según tu diseño
  ];
  

   return (
    <div className="mandala-container">
    {dataCuadro && dataCuadro.lado_izquierdo &&
      puntos.map((coordenada, index) => (
        <UserPoint
          key={index}
          x={coordenada.x}
          y={coordenada.y}
          active={coordenada.active}
          propiedadUsuario={coordenada.propiedadUsuario ?? ""}
        />
      ))}
  </div>

  );
}

export default Mandala