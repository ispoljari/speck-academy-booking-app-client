import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import {
  CitizensHeader,
  CitizensAdminLogin,
  CitizensSelectHall,
  CitizensSelectDateTime,
  CitizensEditEventInfo,
  CitizensSubmitRequest
} from '../';

import Error404 from '../../common/error404/Error404';

import { Footer, Modal } from '../../common';

class CitizensPage extends Component {
  state = {
    adminLoginVisible: false,
    loggedIn: false
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    this.detectActiveSession();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  detectActiveSession = () => {
    const cookies = new Cookies();
    const isSessionCookie = !!cookies.get('sessionId');

    this.authenticateAdmin(isSessionCookie);
  };

  handleAdminLogin = async () => {
    await this.closeLoginModal();
    this.authenticateAdmin(true);
  };

  authenticateAdmin = loggedIn => {
    this.setState({
      loggedIn
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Escape' && this.state.adminLoginVisible) {
      this.closeLoginModal();
    }
  };

  openLoginModal = () => {
    this.setState({
      adminLoginVisible: true
    });
  };

  closeLoginModal = () => {
    return new Promise(resolve => {
      this.setState(
        {
          adminLoginVisible: false
        },
        () => {
          resolve();
        }
      );
    });
  };

  render() {
    const { adminLoginVisible, loggedIn } = this.state;

    if (loggedIn) {
      return <Redirect to="/admin-requests" />;
    }

    return (
      <React.Fragment>
        <CitizensHeader onClick={this.openLoginModal} />
        {/* <CitizensSelectHall />
        <CitizensSubmitRequest />
        <CitizensSelectDateTime /> */}
        {adminLoginVisible ? (
          <Modal onClick={this.closeLoginModal}>
            <CitizensAdminLogin handleAdminLogin={this.handleAdminLogin} />
          </Modal>
        ) : (
          ''
        )}
        {/* <Error404 />
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default CitizensPage;
