import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      correo: "",
      contraseña: "",
      fecha: new Date(),
      fechas: new Date().getFullYear(),
    };
    this.changeName = this.changeName.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
  }

  changeName(e) {
    this.setState({
      nombre: e.target.value,
    });
  }
  changeEmail(e) {
    this.setState({
      correo: e.target.value,
    });
  }
  changePassword(e) {
    this.setState({
      contraseña: e.target.value,
    });
  }
  cambiarFecha(e) {
    this.setState({
      fecha: new Date(),
    });
  }
  cambiadate(e) {
    this.setState({
      fechas: new Date(),
    });
  }

  render() {
    return (
      <>
        <div className="ed-grid">
          <h2>Fecha actual: {Math.round(this.state.fecha / 1000)}</h2>
          <form action="/hola" id="element">
            <div className="ed-grid m-grid-2">
              <div className="form__item">
                <label> Nombre:</label>
                <input type="text" onChange={this.changeName} />
              </div>
              <div className="form__item">
                <label> Correo Electronico:</label>
                <input type="text" onChange={this.changeEmail} />
              </div>
              <div className="form__item">
                <label> Contraseña:</label>
                <input type="text" onChange={this.changePassword} />
              </div>
            </div>
          </form>
          <div>
            <h2>{`Hola ${this.state.nombre}`}</h2>
            <span>{`Tu correo es: ${this.state.correo} y tu contraseña es ${this.state.contraseña}`}</span>
          </div>
          <div>
            <span>{`Tu año es: ${this.state.fechas}`}</span>
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
