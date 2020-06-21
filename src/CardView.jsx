import React from "react";
import CardEs from "./CardEs";
import cursos from "./Listado";

const CardView = () => (
  <>
    <div className="ed-grid m-grid-4">
      {cursos.map((cursos) => (
        <CardEs
          id={cursos.id}
          nombre={cursos.nombre}
          price={cursos.price}
          profesor={cursos.profesor}
          nameProfesor={cursos.nameProfesor}
          imagenCurso={cursos.imagenCurso}
          des={cursos.des}
        />
      ))}
    </div>
  </>
);

export default CardView;
