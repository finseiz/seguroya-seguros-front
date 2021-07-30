import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import HealthPage from "app/pages/healthPage.jsx";
import Home from "../pages/home.jsx";
import { LoadingScreen } from "theme/layout";
import { LifeRoutes } from "./childs/Life/LifeRouter.jsx";
import { CarsRoutes } from "./childs/Cars/CarsRouter";
import { LifeHomeRoute } from "./childs/Life/routes.js";
import { CarsHomeRoute } from "./childs/Cars/routes.js";

function BasePage() {

  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route exact path="/home" component={Home} />
        
        <Route path={LifeHomeRoute} component={LifeRoutes} />

        <Route path={CarsHomeRoute} component={CarsRoutes} />

        <Route exact={true} path="/health" component={HealthPage} />
        
        <Redirect to="/error/404" />
      </Switch>
    </React.Suspense>
  );
}

export default BasePage;
