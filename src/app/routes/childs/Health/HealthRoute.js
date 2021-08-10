import HealthPage from 'app/pages/healthPage';
import React from 'react'
import { Switch, Route } from "react-router-dom";
import { HealthHomeRoute, HealthProcessRoute } from './routes';

const HealthInsuranceRoute = React.lazy(() =>
  import("app/modules/healthInsurance/healthInsuranceRoute")
);

/**
 * Contains [Health] publics routes 
 * @returns HealthRoutesComponente 
 */
export const HealthRoutes = () => {

    return (
        <Switch>
            <Route
                exact
                path={ HealthHomeRoute } 
                component={ HealthPage } 
            />

            <Route path={ HealthProcessRoute } component={HealthInsuranceRoute} />

        </Switch>
    )
}
