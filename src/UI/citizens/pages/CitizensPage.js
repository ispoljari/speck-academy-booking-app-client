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

import sampleData from '../components/select-date-time/SampleData';

class CitizensPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hallId: '',
      reservationDate: '',
      reservationStartTime: '',
      reservationEndTime: '',
      post: {
        eventName: '',
        eventDescription: '',
        nameAndSurname: '',
        email: '',
        organisation: '',
        phoneNumber: '',
        charCounter: 0
      },
      reservations: []
    };
  }

  componentDidMount() {
    this.setState({ reservations: sampleData });
  }

  handleFilterChange = e => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value,
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    let charCounter = this.state.post.charCounter;

    /*
    if (name === 'pero') {
      const isValid = event.target.validity.valid;

      if (value && !isValid) return;
    }
    */

    if (name === 'eventDescription') {
      console.log('length', value.length);
      charCounter = value.length;
    }

    this.setState(prevState => ({
      post: {
        ...prevState.post,
        [name]: value,
        charCounter: charCounter
      }
    }));
  };

  onSubmitRequest = () => {
    const { charCounter, ...rest } = this.state.post;

    console.log('post data', rest);

    /*
      console.log('event name', rest.eventName);
      rest.eventName:
      rest.eventDescription
      rest.nameAndSurname
    */
  }

  render() {

    console.log('date', this.state.reservationDate);

    return (
      <React.Fragment>
        <CitizensPageWrapper>
          <CitizensHeader />

          <CitizensSelectHall />

          <CitizensSelectDateTime 
            handleFilterChange={this.handleFilterChange}
            hallId={this.state.hallId}
            reservationDate={this.state.reservationDate}
            reservationStartTime={this.state.reservationStartTime}
            reservationEndTime={this.state.reservationEndTime}
            reservations={this.state.reservations}
          />

          <CitizensEditEventInfo
            handleChange={this.handleChange}
            post={this.state.post}
          />

          <CitizensSubmitRequest onSubmitRequest={this.onSubmitRequest} />
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
