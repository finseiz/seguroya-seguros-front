import React, { Suspense } from 'react'
import { Switch, Route } from "react-router-dom";
import { LifeHomeRoute, LifeProcessRoute } from './routes'
import LifePage from 'app/pages/lifePage';

const LifeInsuranceRoute = React.lazy(() =>
  import("app/modules/lifeInsurance/lifeInsuranceRoute")
);

/**
 * Contains [Life] publics routes 
 * @returns LifeRoutesComponente 
 */
export const LifeRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path={ LifeHomeRoute } 
                component={ LifePage } 
            />

            <Route path={ LifeProcessRoute } component={LifeInsuranceRoute} />

        </Switch>
    )
}
