import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { authFirebase } from './auth';

export const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest} //passanto todas a propriedades vindo do paramentro para a rota
    render={props =>
      authFirebase || authFirebase.isLogged() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }
  />
);
