import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  loggedIn,
  closeActiveSession,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} closeActiveSession={closeActiveSession} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
