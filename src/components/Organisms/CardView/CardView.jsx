import React from "react";
import CardStructure from "../../Molecules/CardStructure/CardStructure";
import cursos from "../../Atoms/CoursesList/CoursesList";

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
