import React from "react";
import { connect } from "react-redux"

const CartCounter = ({ cartLength }) => (
  <button className="buttonj tiny ghost">
    Carrito: {cartLength.length}
  </button>
);

const mapStateToProps = state => (
  {
    cartLength: state.cart
  }
)

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter);
