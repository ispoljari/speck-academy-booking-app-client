import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
import { CitizensPageWrapper } from './CitizensPageStyle';

class CitizensPage extends Component {
  state = {
    adminLoginVisible: false
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  confirmAdminLogin = async () => {
    await this.closeLoginModal();
    this.props.authenticateAdmin(true);
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
    const { adminLoginVisible } = this.state;
    const { loggedIn } = this.props;

    if (loggedIn) {
      return <Redirect to="/admin-requests" />;
    }

    return (
      <CitizensPageWrapper>
        <CitizensHeader onClick={this.openLoginModal} />
        <CitizensSelectHall />
        <CitizensSelectDateTime />
        <CitizensEditEventInfo />
        <CitizensSubmitRequest />
        <Footer />
        {/* <Error404 /> */}
        {adminLoginVisible ? (
          <Modal onClick={this.closeLoginModal}>
            <CitizensAdminLogin confirmAdminLogin={this.confirmAdminLogin} />
          </Modal>
        ) : (
          ''
        )}
      </CitizensPageWrapper>
    );
  }
}

export default CitizensPage;
