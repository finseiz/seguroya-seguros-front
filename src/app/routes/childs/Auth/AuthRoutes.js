import React from 'react'
import { Switch, Route } from "react-router-dom";

import { Login } from 'app/modules/auth/components/Login';
import { LoginRoute, RegistryRoute } from './routes'
import { Registry } from 'app/modules/auth/components/Registry';

/**
 * Contains [Auth] publics routes 
 * @returns AuthRoutes 
 */
export const AuthRoutes = () => {
    return (
        <Switch>

            <Route exact path={ LoginRoute } component={ Login } />

            <Route exact path={ RegistryRoute } component={ Registry } />

        </Switch>
    )
}
