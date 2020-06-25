import React from "react";
import "../styles/styles.scss";
import Home from "./Pages/Home/Home";
import FormP from "./Molecules/Form/Form";
import Course from "./Pages/Course/Course.jsx";
import Navbare from "./Organisms/Navbare/Navbare";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import History from "./Pages/History/History";
import Users from "./Pages/Users/Users";
import Courses from "./Pages/Courses/Courses";
import ExtraPag from "./Pages/ExtraPag/ExtraPag";

const App = () => (
  <Router>
    <div className="bg-o">
      <Navbare />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cursos/:id" component={Course} />
        <Route path="/cursos" component={Courses} />
        <Route path="/historial" component={History} />
        <Route path="/usuarios" component={Users} />
        <Route path="/extra" component={ExtraPag} />
        <Route path="/login" exact component={() => <FormP name="CUBO" />} />
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
