import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import { PrivateRouter } from './private.router';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRouter path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);
