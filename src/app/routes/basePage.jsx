import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { ContentRoute } from "theme/helpers";
import LifePage from "app/pages/lifePage.jsx";
import HealthPage from "app/pages/healthPage.jsx";
import Home from "../pages/home.jsx";
import SelectPlanPage from "app/pages/selectPlanPage";
import { LoadingScreen } from "theme/layout";
import CarsPage from "app/pages/carsPage.jsx";

const LifeInsuranceRoute = React.lazy(() =>
  import("app/modules/lifeInsurance/lifeInsuranceRoute")
);

const CarsInsuranceRoute = React.lazy(() =>
  import("app/modules/carsInsurance/carsInsuranceRoute")
);

export default function BasePage() {
  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Redirect exact={true} from="/" to="/home" />
        <Route exact={true} path="/home" component={Home} />
        <Route exact={true} path="/life" component={LifePage} />
        <Route exact={true} path="/health" component={HealthPage} />
        <Route exact={true} path="/cars" component={CarsPage} />
        <ContentRoute
          exact={true}
          path="/select-plan"
          component={SelectPlanPage}
        />
        <Route path="/life-process" component={LifeInsuranceRoute} />
        <Route path="/cars-process" component={CarsInsuranceRoute} />
        <Redirect to="/error/404" />
      </Switch>
    </React.Suspense>
  );
}
