import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { AppRoutes } from './helpers/app.routes';
import DashboardPage from './pages/dashboard';
export const RootRouter = memo(() => {
  return (
    <Switch>
      <Route path={AppRoutes.home} component={DashboardPage} />

      <Redirect path="*" to={AppRoutes.home} />
    </Switch>
  );
});
