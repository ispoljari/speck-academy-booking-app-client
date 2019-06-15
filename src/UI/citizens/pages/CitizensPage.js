import React, { Component } from 'react';
import styled from 'styled-components';

import { CitizensPageWrapper } from './CitizensPageStyle.js';

import {
  CitizensHeader,
  CitizensAdminLogin,
  CitizensSelectHall,
  CitizensSelectDateTime,
  CitizensEditEventInfo,
  CitizensSubmitRequest
} from '../';

import Error404 from '../../common/error404/Error404';

import { Footer } from '../../common';
// import { Component } from '../components/login/CitizensAdminLoginStyle.js';

class CitizensPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        eventName: '',
        eventDescription: '',
        nameAndSurname: '',
        email: '',
        organisation: '',
        phoneNumber: '',
        charCounter: 0
      },
      reservationInfo: []
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  render() {
    return (
      <React.Fragment>
        <CitizensPageWrapper>
          <CitizensHeader />

          <CitizensSelectHall />

          <CitizensSelectDateTime />

          <CitizensEditEventInfo
            handleChange={this.handleChange}
            post={this.state.post}
          />

          <CitizensSubmitRequest />
          {/* <CitizensAdminLogin /> */}
          {/* <Error404 /> */}
          <Footer />
        </CitizensPageWrapper>
      </React.Fragment>
    );
  }
}

export default CitizensPage;

//Old code
// const CitizensPage = () => (
//   <React.Fragment>
//     <CitizensPageWrapper>
//       <CitizensHeader />

//       <CitizensSelectHall />

//       <CitizensSelectDateTime />

//       <CitizensEditEventInfo />

//       <CitizensSubmitRequest />
//       {/* <CitizensAdminLogin /> */}
//       {/* <Error404 /> */}
//       <Footer />
//     </CitizensPageWrapper>
//   </React.Fragment>
// );

// export default CitizensPage;
