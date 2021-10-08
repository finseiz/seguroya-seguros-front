
import { AsideProcess } from 'app/components/process/AsideProcess'
import { carsKmProcessSteps } from 'app/helpers/process-steps'
import { CarsHomeRoute, CarsKmProcessDataAutorizationRoute, CarsKmProcessDetailsPlanRoute, CarsKmProcessDoneRoute, CarsKmProcessOtpRoute, CarsKmProcessSelectPlanRoute } from 'app/routes/childs/Cars/routes'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router-dom'
import { Content } from 'theme/layout/utils/content'
import { ConfirmationCode } from '../_general/OTP'
import { ProcessDone } from '../_general/ProcessDone'
import { Authorization } from './components/KmProcess/Authorization'
import { KmPlanDetails } from './components/KmProcess/select-plan/PlanDetails'
import { SelectCarsPlanKm } from './components/KmProcess/select-plan/SelectCarsPlan'
import { verifyOtp } from "./components/KmProcess/controller";

export default function CarsInsuranceKmRoute() {

    const { dataToSend:{ email }, progress:{initial}, selectedPlan } = useSelector(state => state.carsInsurance)
    const history = useHistory();

    /** Health Route Protection */
    if ( !email && !(initial === 100) ){
        history.push(CarsHomeRoute)
    }

    return (
        <Switch>

            <Route exact={true} path={CarsKmProcessSelectPlanRoute} component={SelectCarsPlanKm} />

            <Route exact={true} path={CarsKmProcessDetailsPlanRoute} component={KmPlanDetails} />

            <Content
                aside={() =>
                    <AsideProcess
                        title="Compra Seguro para Autos - Bolívar Auto Oro"
                        process={carsKmProcessSteps}
                        insuranceName="carsInsurance"
                        processIndicatorName="uniqueProcess"
                    />
                }
            >
                <Route
                    exact={true}
                    path={CarsKmProcessDataAutorizationRoute}
                    component={ Authorization }
                />

                <Route
                    exact={true}
                    path={CarsKmProcessOtpRoute}
                    component={() => <ConfirmationCode 
                        redirectRoute={CarsKmProcessDoneRoute} 
                        messageIndex={1} 
                        email={email}
                        onSubmit={(otp) => verifyOtp(selectedPlan.carId, otp) }
                    />}
                />

                <Route
                    exact={true}
                    path={CarsKmProcessDoneRoute}
                    component={() => <ProcessDone
                        bottomMessage="¡Tu poliza ya está en camino! Pronto la enviaremos a tu correo electrónico"
                    />}
                />



            </Content>

        </Switch>
    )
}
