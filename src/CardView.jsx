import React from "react";
import CardStructure from "./CardStructure";
import cursos from "./CoursesList";

const CardView = () => (
  <>
    <div className="ed-grid m-grid-4">
      {cursos.map((cursos) => (
        <CardStructure
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
