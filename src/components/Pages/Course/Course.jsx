import React, { useState } from "react";

import "./Course.css";
import useCourse from "../../CustomHooks/useCourse/useCourse";

const Course = ({ match }) => {
  const state = useCourse(match.params.id);
  const [comment, setComment] = useState("sin comentarios");

  const Myomment = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="ed-grid m-grid-3">
          {state ? (
            <>
              <h1 className="m-cols-3">{state.nombre}</h1>
              <img className="m-col-1" src={state.imagenCurso} alt="img-curs" />
              <p className="m-cols-2 text-white">
                Profesor: {state.nameProfesor}
              </p>
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
        <div>
          <h2>Escribe tu nombre</h2>
          <input
            type="text"
            placeholder="escribe tu nombre"
            onChange={Myomment.bind(this)}
          />
          <h1>{comment}</h1>
        </div>
      </div>
    </>
  );
};

export default Course;
