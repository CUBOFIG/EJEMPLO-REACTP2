import React, { Component } from "react";
import CardView from "../../Organisms/CardView/CardView";
import axios from "axios";

class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cursos: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://my-json-server.typicode.com/CUBOFIG/JSON-React/cursos/")
      .then((resp) => this.setState({ cursos: resp.data }));
  }

  render() {
    const { cursos } = this.state;

    return <CardView cursos={cursos} />;
  }
}

export default Courses;
