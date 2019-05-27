import React from 'react';
import { Normalize } from 'styled-normalize';
import { Router, Route, Switch } from 'react-router';

import GlobalStyle from './globalStyle';
import { AdminHallsPage, AdminRequestsPage, AdminReservationsPage } from './UI/admin';
import { CitizensPage } from './UI/citizens';

const App = () => (
  <Router>
    <Normalize />
    <GlobalStyle />
    <Switch>
      <Route path="/" exact component={CitizensPage} />
      <Route path="/admin-halls" component={AdminHallsPage} />
      <Route path="/admin-requests" component={AdminRequestsPage} />
      <Route path="/admin-reservations" component={AdminReservationsPage} />
    </Switch>
  </Router>
);

export default App;