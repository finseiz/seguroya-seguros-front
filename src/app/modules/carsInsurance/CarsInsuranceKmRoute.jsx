
import { AsideProcess } from 'app/components/process/AsideProcess'
import { carsKmProcessSteps } from 'app/helpers/process-steps'
import { CarsKmProcessDetailsPlanRoute, CarsKmProcessDoneRoute, CarsKmProcessOtpRoute, CarsKmProcessSarlaftRoute, CarsKmProcessSelectPlanRoute } from 'app/routes/childs/Cars/routes'
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Content } from 'theme/layout/utils/content'
import { ConfirmationCode } from '../_general/OTP'
import { ProcessDone } from '../_general/ProcessDone'
import { KmPlanDetails } from './components/KmProcess/select-plan/PlanDetails'
import { SelectCarsPlanKm } from './components/KmProcess/select-plan/SelectCarsPlan'

export default function CarsInsuranceKmRoute() {

    const { dataToSend:{ email } } = useSelector(state => state.carsInsurance)

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
                    path={CarsKmProcessOtpRoute}
                    component={() => <ConfirmationCode 
                        redirectRoute={CarsKmProcessDoneRoute} 
                        messageIndex={1} 
                        email={email}
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
