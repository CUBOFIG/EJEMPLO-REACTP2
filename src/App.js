import React, {Fragment} from 'react';
import "./styles/styles.scss"
import Curso from './Curso'

const cursos = [
  {
    nombre:"Curso De React",
    price:"$200 MX",
    profesor:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Julian_Barnes_in_2019_02_%28cropped%29.jpg/640px-Julian_Barnes_in_2019_02_%28cropped%29.jpg",
    nameProfesor:"Josse",
    imagenCurso:"https://miro.medium.com/max/3150/0*p4oHn_Px5DokmoAr.png"
  },{
    nombre:"Curso Angular",
    price:"$600 MX",
    profesor:"https://observer.com/wp-content/uploads/sites/2/2020/01/elon-musk-twitter-advice.jpg?quality=80",
    nameProfesor:"Manny",
    imagenCurso:"https://muckibu.de/wp-content/uploads/2014/08/angular_bg1.png"
  },{
    nombre:"Curso VUE",
    price:"$300 MX",
    profesor:"https://observer.com/wp-content/uploads/sites/2/2020/01/elon-musk-twitter-advice.jpg?quality=80",
    nameProfesor:"Manny",
    imagenCurso:"https://programacion.net/files/article/20160316010348_vue-js.jpg"
  }
]

const App = () => (
  <Fragment>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="https://image.freepik.com/foto-gratis/codigo-fuente-escritorio-papel-tapiz-lenguaje-computadora-codificacion-programacion_33771-600.jpg"></img>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">HERIBERTO FIGUEROA MICHEL</p>
            <p> ESTUDIANDO REACT</p>
            <a href="https://youtube.com" className="button">Inicia CUBO</a>
          </div>
        </div>
      </div>
  </div>

  <div className="ed-grid m-grid-3">
      {
        cursos.map(curso => <Curso nombre={curso.nombre} price={curso.price} profesor={curso.profesor} nameProfesor={curso.nameProfesor} imagenCurso={curso.imagenCurso}/>)
      }
  </div>
 </Fragment>
)


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