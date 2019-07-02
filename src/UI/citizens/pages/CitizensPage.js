import React, { Component } from 'react';

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
import sampleData from '../components/select-date-time/SampleData';

class CitizensPage extends Component {
  state = {
    allHalls: [],
    reservations: [],
    selectedHall: null,
    hallInfo: null,
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
    modalVisibility: {
      login: false,
      hallInfo: false
    }
  };

  componentDidMount() {
    // this.setState({ reservations: sampleData }); //TODO: remove this
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
      console.log(allHalls);
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
    this.setState(
      {
        hallInfo
      },
      () => {
        console.log(this.state.hallInfo);
      }
    );

    this.openModal('hallInfo');
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
        <CitizensHeader onClick={() => this.openModal('login')} />
        <CitizensSelectHall
          handleHallSelect={this.handleHallSelect}
          onInfoClick={hallInfo => this.displayHallInfo(hallInfo)}
          allHalls={this.state.allHalls}
          selectedHallId={this.state.selectedHall && this.state.selectedHall.id}
        />
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
        {this.state.modalVisibility.login ? (
          <Modal onClick={() => this.closeModal('login')}>
            <CitizensAdminLogin confirmAdminLogin={this.confirmAdminLogin} />
          </Modal>
        ) : (
          ''
        )}
        {this.state.modalVisibility.hallInfo ? (
          <Modal onClick={() => this.closeModal('hallInfo')}>
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
