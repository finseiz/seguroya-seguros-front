import React from 'react'
import { Switch, Route } from "react-router-dom";
import { CarsHomeRoute, CarsProcessRoute } from './routes'
import CarsPage from 'app/pages/carsPage';

const CarsInsuranceRoute = React.lazy(() =>
  import("app/modules/carsInsurance/carsInsuranceRoute")
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

        </Switch>
    )
}
