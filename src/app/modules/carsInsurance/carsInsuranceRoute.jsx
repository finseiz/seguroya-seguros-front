import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Switch, Route, useHistory } from "react-router-dom";
import { StepsInsuranceProcess } from "app/const";
import { Content } from "theme/layout/utils/content";
import { BaseAsideProcess } from "app/components/UI/auxComponents";
import ConfirmationCode from "app/pages/purchasingProcess/confirmationCode";
import SarlaftForm from "app/pages/purchasingProcess/sarlaftForm";
import UploadDocuments from "./pages/uploadDocuments";
import Schedule from "./pages/schedule";

export default function CarsInsuranceRoute() {
  const history = useHistory();
  const { clientData } = useSelector((state) => state.lifeInsurance);
  const [data, setData] = React.useState({});

  const {
    confimation_code,
    sarlaft,
    upload_car_documents,
    appointment_schedule,
  } = StepsInsuranceProcess;

  const process = [
    confimation_code,
    sarlaft,
    upload_car_documents,
    appointment_schedule,
  ];

  const addData = (values) => {
    setData((prevState) => ({ ...prevState, ...values }));
  };

  React.useEffect(() => console.log(data), [data]);

  return (
    <Content
      aside={() => (
        <BaseAsideProcess title="Compra Seguro para Autos" process={process} />
      )}
    >
      <Switch>
        <Redirect
          exact={true}
          from="/cars-process"
          to={`/cars-process/${confimation_code.path}`}
        />
        <Route exact={true} path={`/cars-process/${confimation_code.path}`}>
          <ConfirmationCode
            handleSubmit={(values) => {
              addData(values);
              history.push(`${sarlaft.path}`);
            }}
          />
        </Route>
        <Route exact={true} path={`/cars-process/${sarlaft.path}`}>
          <SarlaftForm
            handleSubmit={(values) => {
              addData(values);
              history.push(`${appointment_schedule.path}`);
            }}
          />
        </Route>
        <Route exact={true} path={`/cars-process/${appointment_schedule.path}`}>
          <Schedule
            handleSubmit={(values) => {
              addData(values);
            }}
          />
        </Route>
        <Redirect to="/error/404" />
      </Switch>
    </Content>
  );
}
