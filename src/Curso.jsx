import React from 'react'
import PropTypes from 'prop-types'

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

const Curso = ({imagenCurso,nombre,profesor,nameProfesor,price}) =>(
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={imagenCurso} alt="Poster de curso"></img>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">
        {nombre}
        </h3>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src={profesor} alt={nameProfesor}></img>
              </div>
            </div>
            <span className="small">{nameProfesor}</span>
          </div>
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="https://youtube.com">
            {price}
          </a>
        </div>
      </div>
    </article>
    
)

Curso.propTypes={
  imagenCurso:  PropTypes.string,
  nombre:       PropTypes.string,
  profesor:     PropTypes.string,
  nameProfesor: PropTypes.string,
  price:        PropTypes.string
}
Curso.defaultProps={
  imagenCurso: "https://videochums.com/article/switch-exclusive-indie-games-1.jpg",
  nombre:       "Informacion no encontrada",
  profesor:     "Informacion no encontrada",
  nameProfesor: "Informacion no encontrada",
  price:        "Informacion no encontrada",
}

export default Curso