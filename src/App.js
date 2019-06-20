import React, { Component } from 'react';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './globalStyle';
import { findSessionCookie, deleteSessionCookie } from './util';
import { AdminPages } from './UI/admin';
import { CitizensPage } from './UI/citizens';
import { Error404, PrivateRoute } from './UI/common';

class App extends Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    this.detectActiveSession();
  }

  detectActiveSession = () => {
    const isSessionCookie = findSessionCookie('sessionId');
    this.authenticateAdmin(isSessionCookie);
  };

  closeActiveSession = () => {
    deleteSessionCookie('sessionId');
    this.authenticateAdmin(false);
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
          <PrivateRoute
            loggedIn={loggedIn}
            closeActiveSession={this.closeActiveSession}
            path="/admin"
            component={AdminPages}
          />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default App;

