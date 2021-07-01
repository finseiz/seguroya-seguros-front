import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { Content } from "theme/layout/utils/content";
import { LifeProcessDetailsPlanRoute, LifeProcessInsurabilityRoute, LifeProcessSelectPlanRoute } from "app/routes/childs/Life/routes";
import { SelectLifePlan } from "./components/ShortProcess/select-plan/SelectLifePlan";
import { PlanDetails } from "./components/ShortProcess/select-plan/PlanDetails";
import { insuranceProcessSteps } from "./helpers/process-steps";
import { AsideProcess } from "./../../components/process/AsideProcess";
import InsurabilityInfo from "./components/ShortProcess/fill-data/InsurabilityInfo";

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
  const history = useHistory();
  const { clientData } = useSelector((state) => state.lifeInsurance);
  const [data, setData] = React.useState({});

  const addData = (values) => {
    setData((prevState) => ({ ...prevState, ...values }));
  };

  return (
    
    <Switch>

      <Route exact={true} path={LifeProcessSelectPlanRoute} component={ SelectLifePlan } />

      <Route exact={true} path={LifeProcessDetailsPlanRoute} component={ PlanDetails } />

      <Content
        aside={ () => <AsideProcess title="Compra Seguro de Vida - Colmena" process={ insuranceProcessSteps } /> }
      >
        <Route
          exact={true}
          path={ LifeProcessInsurabilityRoute }
          component={ InsurabilityInfo }
        />

        {/*
        <Route
          exact={true}
          path={`/life-process/${beneficiary_enrollment.path}`}
        >
          <BeneficiaryEnrollment
            handleSubmit={(values) => {
              addData(values);
              history.push(`${more_info.path}`);
            }}
          />
        </Route>

        <Route exact={true} path={`/life-process/${more_info.path}`}>
          <MoreInfo
            handleSubmit={(values) => {
              addData(values);
              history.push(`${authorizations.path}`);
            }}
          />
        </Route>

        <Route exact={true} path={`/life-process/${authorizations.path}`}>
          <Authorization
            handleSubmit={async (values) => {
              addData(values);
              const config = {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({ ...clientData, ...data }),
              };
              await fetch("http://localhost:3001/api/colmena", config);
              //history.push(`${confimation_code.path}`);
            }}
          />
        </Route>

        <Route exact={true} path={`/life-process/${confimation_code.path}`}>
          <ConfirmationCode
            handleSubmit={async () => {
              //history.push("select-plan");
            }}
          />
        </Route> */}

      </Content>

      <Redirect to="/error/404" />

    </Switch>
  );
}

export default LifeInsuranceRoute;
