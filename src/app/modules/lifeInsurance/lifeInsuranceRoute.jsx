import React from "react";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { Content } from "theme/layout/utils/content";
import { LifeProcessAuthorizationRoute, LifeProcessBeneficiariesRoute, LifeProcessDetailsPlanRoute, LifeProcessDone, LifeProcessInsurabilityRoute, LifeProcessOTP, LifeProcessPersonAndMoreDataRoute, LifeProcessSelectPlanRoute } from "app/routes/childs/Life/routes";
import { SelectLifePlan } from "./components/ShortProcess/select-plan/SelectLifePlan";
import { PlanDetails } from "./components/ShortProcess/select-plan/PlanDetails";
import { lifeProcessSteps } from "../../helpers/process-steps";
import { AsideProcess } from "./../../components/process/AsideProcess";
import InsurabilityInfo from "./components/ShortProcess/fill-data/InsurabilityInfo";
import { Beneficiaries } from "./components/ShortProcess/fill-data/beneficiaries/Beneficiaries";
import { PersonAndOthers } from "./components/ShortProcess/fill-data/person-others/PersonAndOthers";
import { Authorization } from "./components/ShortProcess/fill-data/Authorization";
import { ConfirmationCode } from "../_general/OTP";
import { ProcessDone } from "../_general/ProcessDone";

function LifeInsuranceRoute() {

  return (

    <Switch>

      <Route exact={true} path={LifeProcessSelectPlanRoute} component={SelectLifePlan} />

      <Route exact={true} path={LifeProcessDetailsPlanRoute} component={PlanDetails} />

      <Content
        aside={() =>
          <AsideProcess
            title="Compra Seguro de Vida - Colmena"
            process={lifeProcessSteps}
            insuranceName="lifeInsurance"
            processIndicatorName="shortProcess"
          />
        }
      >
        <Route
          exact={true}
          path={LifeProcessInsurabilityRoute}
          component={InsurabilityInfo}
        />

        <Route
          exact={true}
          path={LifeProcessBeneficiariesRoute}
          component={Beneficiaries}
        />

        <Route
          exact={true}
          path={LifeProcessPersonAndMoreDataRoute}
          component={PersonAndOthers}
        />

        <Route
          exact={true}
          path={LifeProcessAuthorizationRoute}
          component={Authorization}
        />

        <Route
          exact={true}
          path={LifeProcessOTP}
          component={ () => <ConfirmationCode redirectRoute={LifeProcessDone} /> }
        />

        <Route
          exact={true}
          path={LifeProcessDone}
          component={() => <ProcessDone 
            bottomMessage="¡Tu poliza ya está en camino! Pronto la enviaremos a tu correo electrónico"
          />}
        />

      </Content>

      <Redirect to="/error/404" />

    </Switch>
  );
}

export default LifeInsuranceRoute;
