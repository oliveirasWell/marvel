import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { routes } from '../routes';
import NotFound from '../../pages/NotFound/NotFound';

export const RoutesList = () => (
  <ErrorBoundary>
    <Switch>
      <Redirect exact from="/" to={routes.LIST.path} />
      {Object.values(routes).map(({ path, exact, component: Component }) => (
        <Route key={path} path={path} component={Component} exact={exact} />
      ))}
      <Route component={NotFound} />
    </Switch>
  </ErrorBoundary>
);
