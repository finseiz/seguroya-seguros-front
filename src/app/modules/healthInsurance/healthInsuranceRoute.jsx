import { AsideProcess } from "app/components/process/AsideProcess";
import { healthProcessSteps } from "app/helpers/process-steps";
import { HealthProcessAuthRoute, HealthProcessDetailsPlanRoute, HealthProcessDoneRoute, HealthProcessSelectPlanRoute } from "app/routes/childs/Health/routes";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Content } from "theme/layout/utils/content";
import { ProcessDone } from "../_general/ProcessDone";
import { Authorization } from "./components/SuraProcess/fill-data/Auth/Authorization";
import { PlanDetails } from "./components/SuraProcess/select-plan/PlanDetails";
import { SelectSuraHealthPlan } from "./components/SuraProcess/select-plan/SelectHealthPlan";

export default function HealthInsuranceRoute() {

  return (
    <Switch>

      <Route exact path={HealthProcessSelectPlanRoute} component={SelectSuraHealthPlan} />

      <Route exact path={HealthProcessDetailsPlanRoute} component={PlanDetails} />

      <Content
        aside={() =>
          <AsideProcess
            title="Compra Seguro de Vida - Colmena"
            process={healthProcessSteps}
            insuranceName="healthInsurance"
            processIndicatorName="sura"
          />
        }
      >
        <Route
          exact={true}
          path={HealthProcessAuthRoute}
          component={Authorization}
        />

        <Route
          exact={true}
          path={HealthProcessDoneRoute}
          component={() => <ProcessDone
            bottomMessage="Te llamaremos pronto para concluir el proceso"
          />}
        />

      </Content>

      <Redirect to="/error/404" />

    </Switch>
  )

}

