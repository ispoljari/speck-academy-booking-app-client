import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './globalStyle';
import { findSessionCookie } from './util';
import {
  AdminRequestsPage,
  AdminReservationsPage,
  AdminHallsPage
} from './UI/admin';
import { CitizensPage } from './UI/citizens';

class App extends Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    this.detectActiveSession();
  }

  detectActiveSession = () => {
    const isSessionCookie = findSessionCookie();
    this.authenticateAdmin(isSessionCookie);
  };

  authenticateAdmin = loggedIn => {
    this.setState({
      loggedIn
    });
  };

  render() {
    const { loggedIn } = this.state;

    return (
      <Router>
        <Normalize />
        <GlobalStyle />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <CitizensPage
                {...props}
                loggedIn={loggedIn}
                authenticateAdmin={auth => this.authenticateAdmin(auth)}
              />
            )}
          />
          <Route path="/admin-requests" component={AdminRequestsPage} />
          {/* <Route path="/admin-reservations" component={AdminReservationsPage} />
        <Route path="/admin-halls" component={AdminHallsPage} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
