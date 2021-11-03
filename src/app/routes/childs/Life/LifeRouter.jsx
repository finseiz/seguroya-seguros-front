import React, { Suspense } from 'react'
import { Switch, Route } from "react-router-dom";
import { LifeHomeRoute, LifeProcessRoute, SuraLifeProcessRoute } from './routes'
import LifePage from 'app/pages/lifePage';

const LifeInsuranceRoute = React.lazy(() =>
  import("app/modules/lifeInsurance/lifeInsuranceRoute")
);

const SuraLifeInsuranceRoute = React.lazy(() =>
  import("app/modules/lifeInsurance/SuraLifeInsuranceRoute")
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

            <Route path={ SuraLifeProcessRoute } component={SuraLifeInsuranceRoute} />

        </Switch>
    )
}
