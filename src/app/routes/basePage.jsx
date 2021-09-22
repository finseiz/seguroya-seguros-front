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
import { UserRouter } from "./childs/User/UserRouter.js";
import { UserRoute } from "./childs/User/routes.js";
import { HomeRoute, AboutUsRoute, FrequentQuestionsRoute, OffersRoute } from "./routes.js";
import { AboutUs } from "app/pages/home/AboutUs.js";
import { FrecuentQuestions } from "app/pages/home/frecuent-questions/index.js";
import { Offers } from "app/pages/home/Offers.js";

function BasePage() {

  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Redirect exact from="/" to={HomeRoute} />

        <Route exact path={HomeRoute} component={Home} />

        <Route exact path={AboutUsRoute} component={AboutUs} />

        <Route exact path={FrequentQuestionsRoute} component={FrecuentQuestions} />

        <Route exact path={OffersRoute} component={Offers} />

        {/* Modules */}
        
        <Route path={LifeHomeRoute} component={LifeRoutes} />

        <Route path={HealthHomeRoute} component={HealthRoutes} />

        <Route path={CarsHomeRoute} component={CarsRoutes} />

        <Route path={AuthRoute} component={AuthRoutes} />

        <Route path={UserRoute} component={UserRouter} />
        
        <Redirect to="/error/404" />

      </Switch>
    </React.Suspense>
  );
}

export default BasePage;
