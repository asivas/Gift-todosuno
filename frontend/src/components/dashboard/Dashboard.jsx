"use client";
import { useEffect, useState } from "react";
import "./dashboard.css";
import { useApiContext } from "../../../context/apiContext";
import Mandala from "../mandala/mandala"
import InactiveUsers from "../inactiveUsers/inactiveUsers"
//import * as d3 from 'd3';

//import ReferidosDiagram from "../cuadro/ReferidosDiagram ";

const Dashboard = () => {
   
  const {activarUsuario, dataCuadro, deleteCuadro,  } = useApiContext();
  const [pay, setPay] = useState(true)
    

  const mandalaContainerClassName = `mandala-container pool-${dataCuadro.poolId}`;

  


  return (
    
   <div> 
   
  <div id="dashboard" className={mandalaContainerClassName}>
      
  <Mandala/>
  </div>
  
  </div>
       
);
};

export default Dashboard;

/*   {pay &&  legend ? 
      
      <div className="dashboard__top">
      {usuariosInactivos.map((user) => (
            <p key={user.username} className="acceptPay">
              Aceptar pago de: {user.username}{" "}
              <button onClick={() => changeState(user.username)}>
                Aceptar
              </button>
            </p>
          ))}
  </div> : 
  ( <p className="noPays">No hay solicitudes pendientes.</p> )}*/