import React from "react";
import { Route } from "react-router-dom";
import { Content } from "theme/layout/utils/content";

export const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname;

export function ContentRoute({ component, aside = false, ...props }) {
  return (
    <Route {...props}>
      <Content aside={aside}>{React.createElement(component)}</Content>
    </Route>
  );
}
