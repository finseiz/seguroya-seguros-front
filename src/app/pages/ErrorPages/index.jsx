import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import page404 from "./404.jsx";

function ErrorsPage() {
  return (
    <Switch>
      <Redirect from="/error" exact={true} to="/error/404" />
      <Route path="/error/404" component={page404} />
      <Redirect to="/error" />
    </Switch>
  );
}

export default ErrorsPage;
