import React, { Suspense } from 'react'
import { Switch, Route } from "react-router-dom";
import { LifeHomeRoute, LifeProcessRoute, UserPurchasesRoute } from './routes'
import LifePage from 'app/pages/lifePage';
import { UserPurchases } from 'app/modules/user/purchases';

/**
 * Contains [User] publics routes 
 * @returns UserRoutesComponente 
 */
export const UserRouter = () => {
    return (
        <Switch>

            <Route
                exact
                path={ UserPurchasesRoute } 
                component={ UserPurchases } 
            />

        </Switch>
    )
}
