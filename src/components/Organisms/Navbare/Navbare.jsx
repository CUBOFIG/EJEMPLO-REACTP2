import React from "react";
import "./Navbare.css";
import { Link, NavLink } from "react-router-dom";
import CartCounter from "../../Atoms/CartCounter/CartCounter";

const Navbare = (props) => {
  return (
    <nav className="navbar navbar-expand-lg ba navbar-dark">
      <Link
        className="ss active right-b navbar-brand"
        style={{ textDecoration: "none" }}
        to={"/"}
      >
        Home
      </Link>

      <button
        className="navbar-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon  "></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav ba">
          <li>
            <NavLink
              activeClassName="activo "
              className="ss"
              style={{ textDecoration: "none" }}
              to={"/cursos"}
            >
              Cursos
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="activo "
              className="ss"
              style={{ textDecoration: "none" }}
              to={"/usuarios"}
            >
              Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="activo "
              className="ss "
              style={{ textDecoration: "none" }}
              to={"/login"}
            >
              Registrate
            </NavLink>
          </li>

          <li>
            <NavLink
              activeClassName="activo "
              className="ss"
              style={{ textDecoration: "none" }}
              to={"/extra"}
            >
              Proximamente
            </NavLink>
          </li>
          <li className="ss m-auto">
            <CartCounter className=" center " />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbare;
