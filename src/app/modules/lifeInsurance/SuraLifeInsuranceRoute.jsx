import React from "react";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { Content } from "theme/layout/utils/content";
import { SuraLifeBeneficiariesRoute, SuraLifeInfoRoute, SuraLifeProcessDetailsPlanRoute, SuraLifeProcessDone, SuraLifeProcessInsurabilityRoute, SuraLifeProcessOTP, SuraLifeSelectPlanRoute } from "app/routes/childs/Life/routes";
import { suraLifeProcessSteps } from "../../helpers/process-steps";
import { AsideProcess } from "./../../components/process/AsideProcess";
import { useDispatch, useSelector } from "react-redux";
import { InfoSura } from "./components/SuraProcess/Info/Info";
import { SuraSelectLifePlan } from "./components/SuraProcess/select-plan/SelectLifePlan";
import { Beneficiaries } from "./components/SuraProcess/beneficiaries/Beneficiares";
import { SuraInsurabilityInfo } from "./components/SuraProcess/Insurability/Insurability";
import { SuraPlanDetails } from "./components/SuraProcess/select-plan/PlanDetails";
import { ConfirmationCode } from "../_general/OTP";
import { verifyOtp } from "./components/SuraProcess/controller";
import { ProcessDone } from "../_general/ProcessDone";
import { actions } from "./redux";

function SuraLifeInsuranceRoute() {

  const { clientData, selectedPlan:{redirectValues, paymentID, data}, progress:{initial} } = useSelector(state => state.lifeInsurance);
  const history = useHistory();
  const dispatch = useDispatch();

  /** Life Route Protection */
  // if ( !clientData.email && !(initial === 100) ){
  //   history.push(LifeHomeRoute)
  // }

  return (

    <Switch>

      <Route exact={true} path={SuraLifeSelectPlanRoute} component={SuraSelectLifePlan} />

      <Route exact={true} path={SuraLifeProcessDetailsPlanRoute} component={SuraPlanDetails} />

      <Content
        aside={() =>
          <AsideProcess
            title="Compra Seguro de Vida - Sura"
            process={suraLifeProcessSteps}
            insuranceName="lifeInsurance"
            processIndicatorName="shortProcess"
          />
        }
      >
        <Route
          exact={true}
          path={SuraLifeInfoRoute}
          component={InfoSura}
        />

        <Route
          exact={true}
          path={SuraLifeBeneficiariesRoute}
          component={Beneficiaries}
        />

        <Route
          exact={true}
          path={SuraLifeProcessInsurabilityRoute}
          component={SuraInsurabilityInfo}
        />

        <Route
          exact={true}
          path={SuraLifeProcessOTP}
          component={
            () => <ConfirmationCode 
              email={clientData.email}
              onSubmit={async (otp) => await verifyOtp(redirectValues, otp) }
              redirectRoute={SuraLifeProcessDone} 
              messageIndex={1}
           />
          }
        />

        <Route
          exact={true}
          path={SuraLifeProcessDone}
          component={() => <ProcessDone
            bottomMessage="¡Tu poliza ya está en camino! Realiza el pago para continuar"
            onInit={ () => dispatch(actions.setShortProcess(4))}
            payment={{
              amount: data.tarifas.pagos[paymentID],
              description: "Seguro de vida Sura",
              name: "Seguro de vida"
            }}
          />}
        />

      </Content>

      <Redirect to="/error/404" />

    </Switch>
  );
}

export default SuraLifeInsuranceRoute;
