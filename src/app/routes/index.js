import React from "react";
import { Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import BasePage from "./basePage";
import ErrorsPage from "app/pages/ErrorPages";
import { Layout } from "theme/layout";

function Routes() {
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );

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
