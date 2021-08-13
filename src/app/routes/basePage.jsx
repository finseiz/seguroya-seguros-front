import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import { LoadingScreen } from "theme/layout";
import { LifeRoutes } from "./childs/Life/LifeRouter.jsx";
import { CarsRoutes } from "./childs/Cars/CarsRouter";
import { LifeHomeRoute } from "./childs/Life/routes.js";
import { CarsHomeRoute } from "./childs/Cars/routes.js";
import { HealthHomeRoute } from "./childs/Health/routes.js";
import { HealthRoutes } from "./childs/Health/HealthRoute.js";
import { AuthRoutes } from "./childs/Auth/AuthRoutes.js";
import { AuthRoute } from "./childs/Auth/routes.js";

function BasePage() {

  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route exact path="/home" component={Home} />
        
        <Route path={LifeHomeRoute} component={LifeRoutes} />

        <Route path={HealthHomeRoute} component={HealthRoutes} />

        <Route path={CarsHomeRoute} component={CarsRoutes} />

        <Route path={AuthRoute} component={AuthRoutes} />
        
        <Redirect to="/error/404" />

      </Switch>
    </React.Suspense>
  );
}

export default BasePage;
