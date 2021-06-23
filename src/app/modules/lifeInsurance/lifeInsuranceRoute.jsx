import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { StepsInsuranceProcess } from "app/const";
import { Content } from "theme/layout/utils/content";
import InsurabilityInfo from "app/pages/purchasingProcess/insurabilityInfo";
import BeneficiaryEnrollment from "app/pages/purchasingProcess/beneficiaryEnrollment";
import { BaseAsideProcess } from "app/components/UI/auxComponents";
import MoreInfo from "app/pages/purchasingProcess/moreInfo";
import Authorization from "app/pages/purchasingProcess/authorization";
import ConfirmationCode from "app/pages/purchasingProcess/confirmationCode";
import SelectPlanPage from "app/pages/selectPlanPage";

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

  const {
    insurability_information,
    beneficiary_enrollment,
    more_info,
    authorizations,
    confimation_code,
  } = StepsInsuranceProcess;

  const process = [
    insurability_information,
    beneficiary_enrollment,
    more_info,
    authorizations,
    confimation_code,
  ];

  const addData = (values) => {
    setData((prevState) => ({ ...prevState, ...values }));
  };

  React.useEffect(() => console.log(data), [data]);

  return (
    <Content
      aside={() => (
        <BaseAsideProcess
          title="Compra Seguro de Vida - Colmena"
          process={process}
        />
      )}
    >
      <Switch>
        
        <Redirect
          exact={true}
          from="/life-process"
          to={`/life-process/${insurability_information.path}`}
        />

        <Route
          exact={true}
          path="/life/select-plan"
          component={ SelectPlanPage }
        />

        <Route
          exact={true}
          path={`/life-process/${insurability_information.path}`}
        >
          <InsurabilityInfo
            handleSubmit={(values) => {
              addData(values);
              history.push(`${beneficiary_enrollment.path}`);
            }}
          />
        </Route>
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
        </Route>
        <Redirect to="/error/404" />
      </Switch>
    </Content>
  );
}

export default LifeInsuranceRoute;
