import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AppLayout from "layouts/AppLayout";
import { appRoutes } from "./router.config";

const Routes = () => (
  <Suspense fallback={<div />}>
    <Switch>
      {appRoutes.map((route, i) => (
        <Route
          key={i}
          exact
          path={route.path}
          render={(props: any) => (
            <AppLayout {...props} component={route.component} />
          )}
        />
      ))}
      <Redirect from="/" to="/home" />
    </Switch>
  </Suspense>
);

export default Routes;
