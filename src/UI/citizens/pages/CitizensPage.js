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

  adminLoginOpen = () => {
    this.setState({
      adminLoginVisible: true
    });
  };

  adminLoginClose = () => {
    this.setState({
      adminLoginVisible: false
    });
  };

  render() {
    const { adminLoginVisible } = this.state;

    return (
      <React.Fragment>
        <CitizensHeader onClick={this.adminLoginOpen} />
        {/* <CitizensSelectHall />
        <CitizensSubmitRequest />
        <CitizensSelectDateTime /> */}
        <Modal
          visible={adminLoginVisible}
          onClick={this.adminLoginClose}
          onEscapeKeyPress={this.adminLoginClose}
        >
          <CitizensAdminLogin />
        </Modal>
        {/* <Error404 />
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default CitizensPage;
