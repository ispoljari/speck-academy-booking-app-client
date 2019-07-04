import React, { Component } from 'react';
import moment from 'moment';

import { Redirect } from 'react-router-dom';
import { CitizensPageWrapper } from './CitizensPageStyle';
import {
  CitizensHeader,
  CitizensAdminLogin,
  CitizensSelectHall,
  CitizensHallInfo,
  CitizensSelectDateTime,
  CitizensEditEventInfo,
  CitizensSubmitRequest
} from '../';
import { API_BASE_URL } from '../../../config';
import { Footer, Modal } from '../../common';

class CitizensPage extends Component {
  state = {
    allHalls: [],
    selectedHall: null,
    hallInfo: null,
    reservationDate: '',
    reservationStartTime: '',
    reservationEndTime: '',
    reservedDateTimeSlots: [],
    modalVisibility: {
      login: false,
      hallInfo: false
    },
    post: {
      reservationTitle: '',
      reservationDescription: '',
      citizenFullName: '',
      citizenEmail: '',
      citizenOrganization: '',
      citizenPhoneNumber: ''
    },
    charCounter: 0
  };

  componentDidMount() {
    this.getAllHalls();
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  getAllHalls = async () => {
    try {
      const rawResponse = await fetch(`${API_BASE_URL}/halls`);
      if (!rawResponse.ok) throw new Error('Someting went wrong');
      const allHalls = await rawResponse.json();
      this.setState({
        allHalls
      });
    } catch (error) {
      console.log(error); //TODO: warn user
    }
  };

  confirmAdminLogin = async () => {
    await this.closeModal('login');
    this.props.authenticateAdmin(true);
  };

  handleKeyPress = e => {
    if (e.key === 'Escape') {
      this.state.modalVisibility.login && this.closeModal('login');
      this.state.modalVisibility.hallInfo && this.closeModal('hallInfo');
    }
  };

  displayLogin = () => {
    this.openModal('login');
  };

  openModal = type => {
    this.setState({
      modalVisibility: {
        [type]: true
      }
    });
  };

  closeModal = type => {
    return new Promise(resolve => {
      this.setState(
        {
          modalVisibility: {
            [type]: false
          }
        },
        () => {
          resolve();
        }
      );
    });
  };

  handleHallSelect = selectedHall => {
    this.setState({
      selectedHall
    });
  };

  displayHallInfo = hallInfo => {
    this.setState({
      hallInfo
    });

    this.openModal('hallInfo');
  };

  handleReservationDateChange = day => {
    this.setState(
      {
        reservationDate: day
      },
      () => {
        if (this.state.selectedHall.hallReservations.length > 0) {
          const reservedDateTimeSlots = this.findHallReservationsForSelectedDate();
          this.setState({
            reservedDateTimeSlots
          });
        }
      }
    );
  };

  findHallReservationsForSelectedDate = () => {
    const hallReservationsLength = this.state.selectedHall.hallReservations
      .length;
    const selectedDate = moment(this.state.reservationDate).format(
      'YYYY-MM-DD'
    );
    const reservations = [];

    for (let i = 0; i < hallReservationsLength; i++) {
      if (
        this.state.selectedHall.hallReservations[
          i
        ].reservationDate.toString() === selectedDate
      ) {
        reservations.push({
          startTime: this.createHourMinuteMomentPair(
            this.state.selectedHall.hallReservations[i].reservationStartTime
          ),
          endTime: this.createHourMinuteMomentPair(
            this.state.selectedHall.hallReservations[i].reservationEndTime
          )
        });
      }
    }

    return reservations;
  };

  createHourMinuteMomentPair = time => ({
    hour: moment(time, 'HH:mm:ss').hours(),
    minute: moment(time, 'HH:mm:ss').minutes()
  });

  handleReservationTimeChange = field => time => {
    this.setState({ [field]: time });
  };

  handleChange = e => {
    const { name, value } = e.target;
    let charCounter;

    if (name === 'eventDescription') {
      charCounter = value.length;
    }

    this.setState(prevState => ({
      post: {
        ...prevState.post,
        [name]: value
      },
      charCounter: charCounter
    }));
  };

  isRequestDataReady = () => {
    for (const prop in this.state.post)
      if (!this.state.post[prop]) return false;

    return true;
  };

  onSubmitRequest = async e => {
    const requestReady = this.isRequestDataReady();

    if (requestReady) {
      e.preventDefault();

      const postReservationEndpoint = `${API_BASE_URL}/reservations/create`;
      const postHttpConfig = {
        method: 'POST',
        body: JSON.stringify({
          ...this.state.post,
          hallFk: this.state.selectedHall.id.toString(),
          reservationDate: moment(this.state.reservationDate).format(
            'YYYY-MM-DD'
          ),
          reservationStartTime: moment(
            this.state.reservationStartTime,
            'HH:mm:ss'
          ).format('HH:mm'),
          reservationEndTime: moment(
            this.state.reservationEndTime,
            'HH:mm:ss'
          ).format('HH:mm')
        }),
        headers: { 'Content-Type': 'application/json' }
      };

      try {
        const apiResponse = await fetch(
          postReservationEndpoint,
          postHttpConfig
        );
        if (!apiResponse.ok) {
          throw new Error('Something went wrong!');
        }

        if (apiResponse.status === 201) {
          this.processSuccessSubmit();
        }
      } catch (error) {
        console.log(error); //TODO: warn user
        this.processFailSubmit();
      }
    }
  };

  processSuccessSubmit = () => {
    console.log('Success!');
  };

  processFailSubmit = () => {
    console.log('Fail!');
  };

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/admin/requests" />;
    }

    return (
      <CitizensPageWrapper>
        <CitizensHeader onClick={this.displayLogin} />
        <CitizensSelectHall
          handleHallSelect={this.handleHallSelect}
          onInfoClick={this.displayHallInfo}
          allHalls={this.state.allHalls}
          selectedHallId={this.state.selectedHall && this.state.selectedHall.id}
        />
        <CitizensSelectDateTime
          handleReservationDateChange={this.handleReservationDateChange}
          handleReservationTimeChange={this.handleReservationTimeChange}
          selectedHallName={
            this.state.selectedHall ? this.state.selectedHall.name : ''
          }
          selectedHallReservations={
            this.state.selectedHall
              ? this.state.selectedHall.hallReservations
              : []
          }
          reservationDate={this.state.reservationDate}
          reservationStartTime={this.state.reservationStartTime}
          reservationEndTime={this.state.reservationEndTime}
          reservedDateTimeSlots={this.state.reservedDateTimeSlots}
        />

        <CitizensEditEventInfo
          handleChange={this.handleChange}
          post={this.state.post}
          enableForm={!!this.state.reservationEndTime}
        />
        <CitizensSubmitRequest
          onSubmitRequest={this.onSubmitRequest}
          enableForm={!!this.state.reservationEndTime}
        />
        <Footer />
        {this.state.modalVisibility.login ? (
          <Modal onClick={this.closeModal.bind(this, 'login')}>
            <CitizensAdminLogin confirmAdminLogin={this.confirmAdminLogin} />
          </Modal>
        ) : (
          ''
        )}
        {this.state.modalVisibility.hallInfo ? (
          <Modal onClick={this.closeModal.bind(this, 'hallInfo')}>
            <CitizensHallInfo hallInfo={this.state.hallInfo} />
          </Modal>
        ) : (
          ''
        )}
      </CitizensPageWrapper>
    );
  }
}

export default CitizensPage;
