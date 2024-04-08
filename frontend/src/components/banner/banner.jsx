import React from "react";
import "./banner.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner">
      <h1 id="logo-banner">TodosUno</h1>
      <span>
        <button className="btn-entrar">
          <Link href="/login">Entrar</Link>{" "}
        </button>
        <button id="registrarse" className="btn-registrarse">
          Registrarse
        </button>{" "}
        {/* Botón Registrarse */}
      </span>
      <div id="modos" style={{ display: "none" }}>
        {/* Contenedor para los botones Modo Carrera y Modo Libre */}
        <button className="btn-carrera" id="modo-carrera">
          Modo Carrera
        </button>
        <button className="btn-libre" id="modo-libre">
          Modo Libre
        </button>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.getElementById("registrarse").addEventListener("click", function() {
            // Mostrar los botones Modo Carrera y Modo Libre al hacer clic en Registrarse
            document.getElementById("modos").style.display = "block";
          });

          document.getElementById("modo-carrera").addEventListener("click", function() {
            window.location.href = "/contact";
          });

          document.getElementById("modo-libre").addEventListener("click", function() {
            window.location.href = "/registerFree";
          });
          `,
        }}
      />
    </div>
  );
};

export default Banner;
