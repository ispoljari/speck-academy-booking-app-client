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
    return (
      <React.Fragment>
        <CitizensHeader />
        {/* <CitizensSelectHall />
        <CitizensSubmitRequest />
        <CitizensSelectDateTime /> */}
        <Modal>
          <CitizensAdminLogin />
        </Modal>
        {/* <Error404 />
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default CitizensPage;
