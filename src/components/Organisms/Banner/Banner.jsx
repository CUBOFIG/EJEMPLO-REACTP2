import React from "react";
import { Link } from "react-router-dom";

const Banner = () => (
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img
          className="main-banner__img"
          alt="banner"
          src="https://image.freepik.com/foto-gratis/codigo-fuente-escritorio-papel-tapiz-lenguaje-computadora-codificacion-programacion_33771-600.jpg"
        ></img>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">HERIBERTO FIGUEROA MICHEL</p>
          <p> ESTUDIANDO REACT</p>
          <Link className="button" to={"/cursos"}>
            Inicia CUBO
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
