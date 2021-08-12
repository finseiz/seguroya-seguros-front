import React from 'react'
import { Switch, Route } from "react-router-dom";
import { CarsHomeRoute, CarsKmProcessRoute, CarsProcessRoute } from './routes'
import CarsPage from 'app/pages/carsPage';

const CarsInsuranceRoute = React.lazy(() =>
  import("app/modules/carsInsurance/carsInsuranceRoute")
);

const CarsInsuranceKmRoute = React.lazy(() =>
  import("app/modules/carsInsurance/CarsInsuranceKmRoute")
);

/**
 * Contains [Car] publics routes 
 * @returns LifeRoutesComponente 
 */
export const CarsRoutes = () => {
    return (
        <Switch>
            <Route
                exact 
                path={ CarsHomeRoute } 
                component={ CarsPage } 
            />

            <Route path={ CarsProcessRoute } component={CarsInsuranceRoute} />

            <Route path={ CarsKmProcessRoute } component={CarsInsuranceKmRoute} />

        </Switch>
    )
}
