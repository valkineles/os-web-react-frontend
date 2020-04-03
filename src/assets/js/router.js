import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Client from '../../pages/Clients/clients';
import Home from '../../pages/Home';
import Login from '../../pages/Login/login';
import product from '../../pages/Products/products';
import { PrivateRouter } from './private.router';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRouter path="/home" component={Home} />
      <PrivateRouter path="/client" component={Client} />
      <PrivateRouter path="/product" component={product} />
    </Switch>
  </BrowserRouter>
);
