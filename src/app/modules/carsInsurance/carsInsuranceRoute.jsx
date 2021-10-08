import React from "react";
import { AsideProcess } from "app/components/process/AsideProcess";
import { CarsHomeRoute, CarsProcessDetailsPlanRoute, CarsProcessDoneRoute, CarsProcessOtpRoute, CarsProcessSarlaftRoute, CarsProcessSelectPlanRoute, CarsProcessSheduleAppointmentRoute } from "app/routes/childs/Cars/routes";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { Content } from "theme/layout/utils/content";
import { SelectCarsPlan } from "./components/Process/select-plan/SelectCarsPlan";
import { PlanDetails } from "./components/Process/select-plan/PlanDetails";
import { ConfirmationCode } from "../_general/OTP";
import { carsProcessSteps } from "app/helpers/process-steps";
import { SarlaftForm } from "../_general/sarlaft-form/SarlaftForm";
import { ScheduleAppointment } from "./components/Process/aditionalData/ScheduleAppointment";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./redux";
import { ProcessDone } from "../_general/ProcessDone";
import { sendOtp, verifyOtp } from "./components/Process/controller";

export default function CarsInsuranceRoute() {

  const { dataToSend:{email}, selectedPlan:{quoteId}, progress:{initial} } = useSelector(state => state.carsInsurance);
  const dispatch = useDispatch();
  const history = useHistory();

  /** Health Route Protection */
  if ( !email && !(initial === 100) ){
    history.push(CarsHomeRoute)
  }

  return (
    <Switch>

      <Route exact={true} path={CarsProcessSelectPlanRoute} component={SelectCarsPlan} />

      <Route exact={true} path={CarsProcessDetailsPlanRoute} component={PlanDetails} />

      <Content
        aside={() =>
          <AsideProcess
            title="Compra Seguro para Autos"
            process={carsProcessSteps}
            insuranceName="carsInsurance"
            processIndicatorName="uniqueProcess"
          />
        }
      >
        <Route
          exact={true}
          path={CarsProcessSheduleAppointmentRoute}
          component={ScheduleAppointment}
        />

        <Route
          exact={true}
          path={CarsProcessOtpRoute}
          component={() => <ConfirmationCode 
            email={email}
            onSubmit={(otp) => verifyOtp(quoteId, otp) }
            redirectRoute={CarsProcessSarlaftRoute} 
            messageIndex={1}

          />}
        />

        <Route
          exact={true}
          path={CarsProcessSarlaftRoute}
          component={() => <SarlaftForm
            redirectRoute={CarsProcessDoneRoute}
            onLoad={() => {
              dispatch(actions.setUniqueProgress(1))
            }}
          />}
        />
        
        <Route
          exact={true}
          path={CarsProcessDoneRoute}
          component={() => <ProcessDone
            bottomMessage="Te llamaremos pronto para concluir el proceso"
          />}
        />

      </Content>

      <Redirect to={CarsHomeRoute} />

    </Switch>
  );
}
