import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      correo: "",
      contraseña: "",
      fecha: new Date(),
    };
    this.cambiarNombre = this.cambiarNombre.bind(this);
    this.cambiarContraseña = this.cambiarContraseña.bind(this);
    this.cambiarCorreo = this.cambiarCorreo.bind(this);
  }

  cambiarNombre(e) {
    this.setState({
      nombre: e.target.value,
    });
  }
  cambiarCorreo(e) {
    this.setState({
      correo: e.target.value,
    });
  }
  cambiarContraseña(e) {
    this.setState({
      contraseña: e.target.value,
    });
  }
  cambiarFecha(e) {
    this.setState({
      fecha: new Date(),
    });
  }

  render() {
    return (
      <>
        <div className="ed-grid">
          <h1>Formulario {this.props.name}</h1>
          <h2>Fecha actual: {Math.round(this.state.fecha / 1000)}</h2>
          <form action="/hola" id="element">
            <div className="ed-grid m-grid-2">
              <div className="form__item">
                <label> Nombre:</label>
                <input type="text" onChange={this.cambiarNombre} />
              </div>
              <div className="form__item">
                <label> Correo Electronico:</label>
                <input type="text" onChange={this.cambiarCorreo} />
              </div>
              <div className="form__item">
                <label> Contraseña:</label>
                <input type="text" onChange={this.cambiarContraseña} />
              </div>
            </div>
          </form>
          <div>
            <h2>{`Hola ${this.state.nombre}`}</h2>
            <span>{`Tu correo es: ${this.state.correo} y tu contraseña es ${this.state.contraseña}`}</span>
          </div>
        </div>
      </>
    );
  }

  //manipular DOOM de manera segura porqeu ya existen estos elementos
  componentDidMount() {
    let element = document.getElementById("element");
    console.log(element);

    this.intervalDate = setInterval(() => {
      this.cambiarFecha();
      console.log(new Date());
    }, 1000);
  }

  //Propiedades previas y estado previo
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps, prevState);
  // }

  componentWillMount() {
    clearInterval(this.intervalDate);
  }
}

export default Form;

//ForceUpdate()

//capas REACT montaje, desmontaje, actualizacion

//limpiar intervalos para evitar perdida de recursos

//EXTRA: getDerivedStateFromProps ShouldComponentUpdate getSnapshotBeforeUpdate
