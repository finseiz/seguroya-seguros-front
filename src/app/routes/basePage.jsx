import React from "react";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Redirect, Switch, Route } from "react-router-dom";
import HealthPage from "app/pages/healthPage.jsx";
import Home from "../pages/home.jsx";
import SelectPlanPage from "app/pages/selectPlanPage";
import { LoadingScreen } from "theme/layout";
import CarsPage from "app/pages/carsPage.jsx";
import { LifeRoutes } from "./childs/Life/LifeRouter.jsx";

const CarsInsuranceRoute = React.lazy(() =>
  import("app/modules/carsInsurance/carsInsuranceRoute")
);

function BasePage() {
  const history = useHistory();
  const { carPlans } = useSelector(
    ({ carsInsurance }) => ({
      carPlans: carsInsurance.plans,
    }),
    shallowEqual
  );

  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Redirect exact={true} from="/" to="/home" />
        <Route exact={true} path="/home" component={Home} />
        
        <LifeRoutes />

        <Route exact={true} path="/health" component={HealthPage} />
        <Route exact={true} path="/cars" component={CarsPage} />
        <Route
          exact={true}
          path="/cars/select-plan"
          component={() => (
            <SelectPlanPage
              plans={carPlans}
              selectPlan={() => history.push("/cars-process")}
            />
          )}
        />
        
        <Route path="/cars-process" component={CarsInsuranceRoute} />
        <Redirect to="/error/404" />
      </Switch>
    </React.Suspense>
  );
}

export default BasePage;
