
import { AsideProcess } from 'app/components/process/AsideProcess'
import { carsKmProcessSteps } from 'app/helpers/process-steps'
import { CarsKmProcessDetailsPlanRoute, CarsKmProcessDoneRoute, CarsKmProcessOtpRoute, CarsKmProcessSarlaftRoute, CarsKmProcessSelectPlanRoute } from 'app/routes/childs/Cars/routes'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Content } from 'theme/layout/utils/content'
import { ConfirmationCode } from '../_general/OTP'
import { ProcessDone } from '../_general/ProcessDone'
import { SarlaftForm } from '../_general/sarlaft-form/SarlaftForm'
import { KmPlanDetails } from './components/KmProcess/select-plan/PlanDetails'
import { SelectCarsPlanKm } from './components/KmProcess/select-plan/SelectCarsPlan'
import { actions } from "./redux";

export default function CarsInsuranceKmRoute() {

    const dispatch = useDispatch();

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
                    component={() => <ConfirmationCode redirectRoute={CarsKmProcessSarlaftRoute} />}
                />

                <Route
                    exact={true}
                    path={CarsKmProcessSarlaftRoute}
                    component={() => <SarlaftForm
                        redirectRoute={CarsKmProcessDoneRoute}
                        onLoad={() => {
                            dispatch(actions.setUniqueProgress(1))
                        }}
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
