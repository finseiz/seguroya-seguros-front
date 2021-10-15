import { AsideProcess } from "app/components/process/AsideProcess";
import { healthProcessSteps } from "app/helpers/process-steps";
import { HealthHomeRoute, HealthProcessAuthRoute, HealthProcessBeneficiariesRoute, HealthProcessDetailsPlanRoute, HealthProcessDoneRoute, HealthProcessInsurabilityRoute, HealthProcessSelectPlanRoute,HealthProcessOTPRoute } from "app/routes/childs/Health/routes";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { Content } from "theme/layout/utils/content";
import { ProcessDone } from "../_general/ProcessDone";
import { Authorization } from "./components/SuraProcess/fill-data/Auth/Authorization";
import { Beneficiaries } from "./components/SuraProcess/fill-data/beneficiaries/Beneficiares";
import InsurabilityInfo from "./components/SuraProcess/fill-data/Insurability/Insurability";
import { PlanDetails } from "./components/SuraProcess/select-plan/PlanDetails";
import { SelectSuraHealthPlan } from "./components/SuraProcess/select-plan/SelectHealthPlan";
import { sendOtp, verifyOtp } from "./components/SuraProcess/controller.js";
import { ConfirmationCode } from "../_general/OTP";

export default function HealthInsuranceRoute() {

  const { data:{client}, progress:{initial}, selectedPlan:{quoteId}  } = useSelector(state => state.healthInsurance)
  const history = useHistory()

  /** Health Route Protection */
  if ( !client.email && !(initial === 100) ){
    history.push(HealthHomeRoute)
  }

  return (
    <Switch>

      <Route exact path={HealthProcessSelectPlanRoute} component={SelectSuraHealthPlan} />

      <Route exact path={HealthProcessDetailsPlanRoute} component={PlanDetails} />

      <Content
        aside={() =>
          <AsideProcess
            title="Compra Seguro de Salud Sura"
            process={healthProcessSteps}
            insuranceName="healthInsurance"
            processIndicatorName="sura"
          />
        }
      >
        <Route
          exact={true}
          path={HealthProcessBeneficiariesRoute}
          component={Beneficiaries}
        />

        <Route
          exact={true}
          path={HealthProcessInsurabilityRoute}
          component={InsurabilityInfo}
        />

        <Route
          exact={true}
          path={HealthProcessAuthRoute}
          component={Authorization}
        />

        <Route
          exact={true}
          path={HealthProcessOTPRoute}
          component={
            () => <ConfirmationCode 
              email={client.email}
              onSubmit={(otp) => verifyOtp(quoteId, otp) }
              redirectRoute={HealthProcessDoneRoute} 
              messageIndex={1}
           />
          }
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

