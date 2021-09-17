import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import BasePage from "./basePage";
import ErrorsPage from "app/pages/ErrorPages";
import { Layout } from "theme/layout";
import { useDispatch } from "react-redux";
import { actions } from "app/modules/auth/_redux/authRedux";
import jwt_decode from "jwt-decode";
import { getUserInformation } from "app/modules/auth/helpers/controller";

function Routes() {

  const { isAuthorized, authToken } = useSelector( ({ auth }) => ({ isAuthorized: auth.authToken != undefined, ...auth }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {

    if ( isAuthorized ){
      const decodedToken = jwt_decode(authToken);
      const currentDate = new Date();

      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        dispatch(actions.logout())
      }else{
        getUserInformation(authToken, dispatch);
      }
    }
  }, [isAuthorized, authToken])

  return (
    <Switch>
      <Layout>
        <Route path="/error" component={ErrorsPage} />
        <BasePage />
      </Layout>
    </Switch>
  );
}

export default Routes;
