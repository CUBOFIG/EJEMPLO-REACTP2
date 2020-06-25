import React, { Component } from "react";
import Spinnerr from "../../Atoms/Spinner/Spinner.jsx";

const withLoader = (propValue, WrappedComponent) => {
  return class WithLoader extends Component {
    render() {
      return this.props[propValue].length === 0 ? (
        <Spinnerr />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default withLoader;

//tambien =(propvalue)=>(wrappedComponent)=>{}

//() ()
