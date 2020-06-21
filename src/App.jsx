import React from "react";
import "./styles/styles.scss";
import Banner from "./Banner";
import CardView from "./CardView";
import Form from "./Form";
import Course from "./Course.jsx";
import Navbare from "./components/Navbare/Navbare";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div className="bg-o">
      <div className="m20">
        <Navbare />
      </div>

      <Switch>
        <Route path="/" exact component={Banner} />
        <Route path="/cursos/:id" component={Course} />
        <Route path="/cursos" component={CardView} />
        <Route path="/login" exact component={() => <Form name="CUBO" />} />

        <Route
          component={() => (
            <div className="ed-grid">
              <h1>ERRO 404</h1>
              <span>Página no encontrada</span>
            </div>
          )}
        />
      </Switch>
    </div>
  </Router>
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

//match, location, history
