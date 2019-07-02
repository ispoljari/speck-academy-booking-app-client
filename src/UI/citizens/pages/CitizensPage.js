import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { CitizensPageWrapper } from './CitizensPageStyle';

import {
  CitizensHeader,
  CitizensAdminLogin,
  CitizensSelectHall,
  CitizensSelectDateTime,
  CitizensEditEventInfo,
  CitizensSubmitRequest
} from '../';

import { Footer, Modal } from '../../common';
// import { Component } from '../components/login/CitizensAdminLoginStyle.js';

import sampleData from '../components/select-date-time/SampleData';
/* const drawFromDB = require('../components/select-date-time/CitizensSelectDateTime'); */

//import SampleHallData from '../components/select-hall/SampleHallData'

class CitizensPage extends Component {
  state = {
    //CitizenSelectHall FILE
    //hallSelectId: '',
    //hallName: '',
    //hallPictureUrl:'',
    //GodHelpUsAll
    hallId: '',
    reservationDate: '',
    reservationStartTime: '',
    reservationEndTime: '',
    post: {
      hallSelectId: '',
      eventName: '',
      eventDescription: '',
      nameAndSurname: '',
      email: '',
      organisation: '',
      phoneNumber: '',
      charCounter: 0
    },
    reservations: [],
    adminLoginVisible: false
  };

  componentDidMount() {
    this.setState({ reservations: sampleData });
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

  handleHallSelect = hallId => () => {
    const { halls } = this.props;
    const hall = halls.find(hall => hall.id === hallId);
    this.setState({
      hallId,
      reservations: hall.hallReservations
    });
  };

  handleReservationDateChange = day => {
    this.setState({ reservationDate: day });
  };

  handleReservationTimeChange = field => time => {
    this.setState({ [field]: time });
  };

  handleChange = e => {
    const { name, value } = e.target;
    let charCounter = this.state.post.charCounter;

    /*
    if (name === 'something') {
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
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/admin/requests" />;
    }

    return (
      <CitizensPageWrapper>
        <CitizensHeader onClick={this.openLoginModal} />
        <CitizensSelectHall /* handleHallSelect={handleHallSelect} */ />
        <CitizensSelectDateTime
          handleReservationDateChange={this.handleReservationDateChange}
          handleReservationTimeChange={this.handleReservationTimeChange}
          hallName={this.state.hallId}
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
        <Footer />
        {/* <Error404 /> */}
        {this.state.adminLoginVisible ? (
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
