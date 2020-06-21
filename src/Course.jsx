import React from "react";
import cursos from "./Listado";

import "./index.css";

const Course = ({ match }) => {
  const CursoActual = cursos.filter(
    (e) => e.id === parseInt(match.params.id)
  )[0];

  return (
    <>
      <div>
        <div className="ed-grid m-grid-3">
          {CursoActual ? (
            <>
              <h1 className="m-cols-3">{CursoActual.nombre}</h1>
              <img
                className="m-col-1"
                src={CursoActual.imagenCurso}
                alt="img-curs"
              />
              <p className="m-cols-2">Profesor:{CursoActual.nameProfesor}</p>
              <p className="m-cols-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
                fuga expedita! Eaque, laboriosam deleniti? Blanditiis quae natus
                dolorum, corrupti nam aperiam modi, veniam quod explicabo illum
                odio, aliquid quidem minima!
              </p>
            </>
          ) : (
            <h1 className="m-cols-2">No existe este curso</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Course;
