import React from "react";
import "./Navbare.css";
import { Link, NavLink } from "react-router-dom";

const Navbare = (props) => {
  return (
    <header className="ba">
      <div className=" ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          <Link
            className="ss active right-b"
            style={{ textDecoration: "none" }}
            to={"/"}
          >
            Home
          </Link>
        </div>

        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <nav>
            <ul>
              <li className="nav-item activate">
                <NavLink
                  activeClassName="activo"
                  className="ss"
                  style={{ textDecoration: "none" }}
                  to={"/cursos"}
                >
                  Cursos
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="activo"
                  className="ss"
                  style={{ textDecoration: "none" }}
                  to={"/login"}
                >
                  Registrate
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="activo"
                  className="ss"
                  style={{ textDecoration: "none" }}
                  to={"/login"}
                >
                  Proximamente
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbare;
