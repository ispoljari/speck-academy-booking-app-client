import React from 'react';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './globalStyle';
import {
  AdminRequestsPage,
  AdminReservationsPage,
  AdminHallsPage
} from './UI/admin';
import { CitizensPage } from './UI/citizens';
import Footer from './UI/common/footer/Footer';

const App = () => (
  <Router>
    <Normalize />
    <GlobalStyle />
    <Switch>
      <Route path="/" exact component={CitizensPage} />
      <Route path="/" exact component={Footer} />
      <Route path="/admin-requests" component={AdminRequestsPage} />
      {/* <Route path="/admin-reservations" component={AdminReservationsPage} />
    <Route path="/admin-halls" component={AdminHallsPage} /> */}
    </Switch>
  </Router>
);

export default App;
