import React, { Suspense, useEffect } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import { LifeHomeRoute, LifeProcessRoute, UserPurchasesRoute } from './routes'
import LifePage from 'app/pages/lifePage';
import { UserPurchases } from 'app/modules/user/purchases';
import { useSelector } from 'react-redux';
import { HomeRoute } from 'app/routes/routes';

/**
 * Contains [User] publics routes 
 * @returns UserRoutesComponente 
 */
export const UserRouter = () => {

    const { isAuthorized } = useSelector( ({ auth }) => ({ isAuthorized: auth.authToken != undefined }));

    return (
        <Switch>

            {
                !isAuthorized &&
                (
                    <Redirect to={HomeRoute} />
                )
            }

            <Route
                exact
                path={ UserPurchasesRoute } 
                component={ UserPurchases } 
            />

        </Switch>
    )
}
