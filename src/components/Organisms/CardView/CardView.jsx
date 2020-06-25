import React from "react";
import CardStructure from "../../Molecules/CardStructure/CardStructure";
import withLoader from "../../HOC/withLoader/withLoader";
import "./CardView.css";

const CardView = ({ cursos }) => {
  return (
    <>
      <div className="ed-grid m-grid-4 m20">
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
};

export default withLoader("cursos", CardView);
