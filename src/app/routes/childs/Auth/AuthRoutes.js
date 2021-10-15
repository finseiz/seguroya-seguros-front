import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import { Login } from 'app/modules/auth/components/Login';
import { LoginRoute, RegistryRoute } from './routes'
import { Registry } from 'app/modules/auth/components/Registry';
import { useSelector } from 'react-redux';
import { HomeRoute } from 'app/routes/routes';

/**
 * Contains [Auth] publics routes 
 * @returns AuthRoutes 
 */
export const AuthRoutes = () => {

    const { isAuthorized } = useSelector( ({ auth }) => ({ isAuthorized: auth.authToken != undefined }));

    return (
        <Switch>

            {
                isAuthorized &&
                (
                    <Redirect to={HomeRoute} />
                )
            }

            <Route exact path={ LoginRoute } component={ Login } />

            <Route exact path={ RegistryRoute } component={ Registry } />

        </Switch>
    )
}
