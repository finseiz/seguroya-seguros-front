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
import { verifyOtp } from "./components/Process/controller";

export default function CarsInsuranceRoute() {

  const { dataToSend:{email}, selectedPlan, progress:{initial} } = useSelector(state => state.carsInsurance);
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
          <div className="row">
              <AsideProcess
                title="Compra Seguro para Autos"
                process={carsProcessSteps}
                insuranceName="carsInsurance"
                processIndicatorName="uniqueProcess"
              />
          </div>
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
            onSubmit={(otp) => verifyOtp(selectedPlan.quoteId, otp) }
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
              dispatch(actions.setUniqueProgress(3))
            }}
            canSkip
          />}
        />
        
        <Route
          exact={true}
          path={CarsProcessDoneRoute}
          component={() => <ProcessDone
            bottomMessage="Continúe con el pago para finalizar tu seguro"
            payment={{
              name: "Seguro todo riesto",
              description: `Seguro por kilómetro ${selectedPlan.insuranceName}`,
              amount: selectedPlan[selectedPlan.selectedPayment]
            }}
          />}
        />

      </Content>

      <Redirect to={CarsHomeRoute} />

    </Switch>
  );
}
