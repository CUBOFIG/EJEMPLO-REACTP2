import React from "react";
import { Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrimaryView from "";

const PrivateRoutes = ({ auth }) => (
  <Switch>
    <PublicRoute path="/" component="" auth={auth} exact />
  </Switch>
);

export default PrivateRoutes;
