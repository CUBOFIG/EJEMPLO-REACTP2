import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/*const curso=[{
    "nombre":"Curso De React", 
    "price":"$200 MX", 
    "profesor":"https://observer.com/wp-content/uploads/sites/2/2020/01/elon-musk-twitter-advice.jpg?quality=80",
    "nameProfesor":"Manny",
    "imagenCurso": "https://miro.medium.com/max/3150/0*p4oHn_Px5DokmoAr.png"
  },
  {
    "nombre":"Curso VUE",
    "price":"$300 MX",
    "profesor":"https://observer.com/wp-content/uploads/sites/2/2020/01/elon-musk-twitter-advice.jpg?quality=80",
    "nameProfesor":"Manny",
    "imagenCurso": "https://programacion.net/files/article/20160316010348_vue-js.jpg"
  }]*/

const CardStructure = ({
  imagenCurso,
  nombre,
  profesor,
  nameProfesor,
  price,
  id,
  des,
}) => (
  <article className="card ">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${id}`}>
        <img src={imagenCurso} alt="Poster de curso"></img>
      </Link>
    </div>

    <div class="s-border s-radius-br s-radius-bl s-shadow-bottom s-bg-white">
      <div class="s-pxy-2">
        <h3 className="t3 s-mb-2 s-center ">{nombre}</h3>
        <p class="s-mb-0">{des}</p>
      </div>
      <footer class="s-cross-center s-bg-grey s-pxy-2">
        <div class="s-10 s-mr-1">
          <div class="circle img-container">
            <img src={profesor} alt={nameProfesor}></img>
          </div>
        </div>
        <p class="s-mb-0">{nameProfesor}</p>
        <div class="s-to-right">
          <Link
            to={`/cursos/${id}`}
            className="button--ghost-alert button--tiny"
          >
            {price}
          </Link>
        </div>
      </footer>
    </div>
  </article>
);

CardStructure.propTypes = {
  imagenCurso: PropTypes.string,
  nombre: PropTypes.string,
  profesor: PropTypes.string,
  nameProfesor: PropTypes.string,
  price: PropTypes.string,
  dC: PropTypes.string,
};
CardStructure.defaultProps = {
  imagenCurso:
    "https://videochums.com/article/switch-exclusive-indie-games-1.jpg",
  nombre: "Informacion no encontrada",
  profesor: "Informacion no encontrada",
  nameProfesor: "Informacion no encontrada",
  price: "Informacion no encontrada",
  dC: "https://www.google.com",
};

export default CardStructure;
