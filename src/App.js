import React, { Fragment } from "react";
import "./styles/styles.scss";
import Curso from "./Curso";
import cursos from "./Listado";

const App = () => (
  <Fragment>
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
            <a href="https://youtube.com" className="button">
              Inicia CUBO
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      {cursos.map((cursos) => (
        <Curso
          nombre={cursos.nombre}
          price={cursos.price}
          profesor={cursos.profesor}
          nameProfesor={cursos.nameProfesor}
          imagenCurso={cursos.imagenCurso}
          linkC={cursos.linkC}
        />
      ))}
    </div>
  </Fragment>
);
export default App;

//reglas JSX
//1; TODAS LAS ETIQUETAS DEBE CERRARSE
//2; LOS COMPONENETES DEBEN DEVOLVER UN SOLO ELEMENTO PADRE
//3; apoyarte de fragment
//4; Frament => <> hijos </>
//5; siempre cierran los img
//6; class pasa a ser className
//7; for => htmlFor

/*
<Fragment>
    <div className="SALUDO">
      <h1>Hola mundo</h1>
      <p>Hola, soy Heriberto Figueroa Michel</p>
    </div>
    
    <div>
      <h1>Hola mundo</h1>
      <p>Hola, soy Camila Itzel Figueroa Michel</p>
      <img src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-cute-cartoon-light-bulb-image_1134759.jpg"></img>
    </div>
  </Fragment>
*/
