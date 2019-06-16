import React, { Component } from 'react';

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
    adminLoginVisible: false
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.key === 'Escape' && this.state.adminLoginVisible) {
      this.closeAdminLogin();
    }
  };

  openAdminLogin = () => {
    this.setState({
      adminLoginVisible: true
    });
  };

  closeAdminLogin = () => {
    this.setState({
      adminLoginVisible: false
    });
  };

  render() {
    const { adminLoginVisible } = this.state;

    return (
      <React.Fragment>
        <CitizensHeader onClick={this.openAdminLogin} />
        {/* <CitizensSelectHall />
        <CitizensSubmitRequest />
        <CitizensSelectDateTime /> */}
        {adminLoginVisible ? (
          <Modal onClick={this.closeAdminLogin}>
            <CitizensAdminLogin />
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
