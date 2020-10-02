import React from "react";
import "../styles/styles.scss";
import AppRoutess from "./Routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./Redux/store";

const App = () => (
  <Provider store={store}>
    <AppRoutess />
  </Provider>
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
