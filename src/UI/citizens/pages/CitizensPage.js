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
    showAdminLogin: false
  };

  handleAdminLogin = () => {
    this.setState({
      showAdminLogin: true
    });
  };

  render() {
    const { showAdminLogin } = this.state;

    return (
      <React.Fragment>
        <CitizensHeader onClick={() => this.handleAdminLogin()} />
        {/* <CitizensSelectHall />
        <CitizensSubmitRequest />
        <CitizensSelectDateTime /> */}
        <Modal visible={showAdminLogin}>
          <CitizensAdminLogin />
        </Modal>
        {/* <Error404 />
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default CitizensPage;
