import React from "react";
import { AsideProcess } from "app/components/process/AsideProcess";
import { CarsHomeRoute, CarsProcessDetailsPlanRoute, CarsProcessOtpRoute, CarsProcessSarlaftRoute, CarsProcessSelectPlanRoute } from "app/routes/childs/Cars/routes";
import { Redirect, Route, Switch } from "react-router-dom";
import { Content } from "theme/layout/utils/content";
import { SelectCarsPlan } from "./components/Process/select-plan/SelectCarsPlan";
import { PlanDetails } from "./components/Process/select-plan/PlanDetails";
import { ConfirmationCode } from "../_general/OTP";
import { carsProcessSteps } from "app/helpers/process-steps";
import { SarlaftForm } from "../_general/sarlaft-form/SarlaftForm";

export default function CarsInsuranceRoute() {

  return (
    <Switch>

      <Route exact={true} path={CarsProcessSelectPlanRoute} component={SelectCarsPlan} />

      <Route exact={true} path={CarsProcessDetailsPlanRoute} component={PlanDetails} />

      <Content
        aside={() =>
          <AsideProcess
            title="Compra Seguro para Autos - Bolívar Auto Oro"
            process={carsProcessSteps}
            insuranceName="carsInsurance"
            processIndicatorName="uniqueProcess"
          />
        }
      >
        <Route
          exact={true}
          path={CarsProcessOtpRoute}
          component={() => <ConfirmationCode redirectRoute={CarsProcessSarlaftRoute} />}
        />

        <Route
          exact={true}
          path={CarsProcessSarlaftRoute}
          component={SarlaftForm}
        />



      </Content>

      <Redirect to={CarsHomeRoute} />

    </Switch>
  );
}
