import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import FormP from "../Pages/Form/FormP";
import Course from "../Pages/Course/Course.jsx";
import Navbare from "../Organisms/Navbare/Navbare";
import History from "../Pages/History/History";
import Users from "../Pages/Users/Users";
import Courses from "../Pages/Courses/Courses";
import ExtraPag from "../Pages/ExtraPag/ExtraPag";

const AppRoutess = () => (
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
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <div className="container">
                  <h1 className="text-white">ERRO 404</h1>
                  <span className="text-white">Página no encontrada</span>
                </div>
              </div>
            </div>
          )}
        />
      </Switch>
    </div>
  </Router>
);

export default AppRoutess;
