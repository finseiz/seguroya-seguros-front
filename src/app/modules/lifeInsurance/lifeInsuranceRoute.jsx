import React from "react";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { Content } from "theme/layout/utils/content";
import { LifeProcessAuthorizationRoute, LifeProcessBeneficiariesRoute, LifeProcessDetailsPlanRoute, LifeProcessDone, LifeProcessInsurabilityRoute, LifeProcessOTP, LifeProcessPersonAndMoreDataRoute, LifeProcessSelectPlanRoute } from "app/routes/childs/Life/routes";
import { SelectLifePlan } from "./components/ShortProcess/select-plan/SelectLifePlan";
import { PlanDetails } from "./components/ShortProcess/select-plan/PlanDetails";
import { insuranceProcessSteps } from "./helpers/process-steps";
import { AsideProcess } from "./../../components/process/AsideProcess";
import InsurabilityInfo from "./components/ShortProcess/fill-data/InsurabilityInfo";
import { Beneficiaries } from "./components/ShortProcess/fill-data/beneficiaries/Beneficiaries";
import { PersonAndOthers } from "./components/ShortProcess/fill-data/person-others/PersonAndOthers";
import { Authorization } from "./components/ShortProcess/fill-data/Authorization";
import { ConfirmationCode } from "./components/ShortProcess/fill-data/OTP";
import { ProcessDone } from "../_general/ProcessDone";

const dataInit = {
  documentType: "Cédula de Ciudadanía",
  identification: "123456789",
  firstName: "Jhoan",
  firstLastName: "Lozano",
  birthDepartment: "VALLE DEL CAUCA",
  brithCity: "CALI",
  gender: "Masculino",
  residentDepartment: "VALLE DEL CAUCA",
  residentCity: "CALI",
  address: "cll 12 13 14",
  ocupation: "Empleado",
  cellphone: "3215469878",
  email: "jhlozano99@gmail.com",
  publiclyExposed: false,
  publiclyExposedVinculation: false,
  taxObligations: false,
  usTaxResidentOrPlayer: false,
  taxObligationsOutsideColombia: false,
};

function LifeInsuranceRoute() {

  return (

    <Switch>

      <Route exact={true} path={LifeProcessSelectPlanRoute} component={SelectLifePlan} />

      <Route exact={true} path={LifeProcessDetailsPlanRoute} component={PlanDetails} />

      <Content
        aside={() =>
          <AsideProcess
            title="Compra Seguro de Vida - Colmena"
            process={insuranceProcessSteps}
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
          component={ConfirmationCode}
        />

        <Route
          exact={true}
          path={LifeProcessDone}
          component={ProcessDone}
        />

      </Content>

      <Redirect to="/error/404" />

    </Switch>
  );
}

export default LifeInsuranceRoute;
