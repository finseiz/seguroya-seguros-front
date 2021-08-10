import { HealthProcessDetailsPlanRoute, HealthProcessSelectPlanRoute } from "app/routes/childs/Health/routes";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PlanDetails } from "./components/SuraProcess/select-plan/PlanDetails";
import { SelectSuraHealthPlan } from "./components/SuraProcess/select-plan/SelectHealthPlan";

export default function HealthInsuranceRoute() {

  console.log("golaa");
  
  return (
    <Switch>

      <Route exact path={HealthProcessSelectPlanRoute} component={SelectSuraHealthPlan} />

      <Route exact path={HealthProcessDetailsPlanRoute} component={PlanDetails} />

      <Redirect to="/error/404" />

    </Switch>
  )

}

