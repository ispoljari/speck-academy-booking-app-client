import React from 'react';
import ScheduleComponenet from '../../components/hall-reservation/AdminHallReservation';
import { DayPickerTitle } from '../../components/hall-reservation/AdminHallReservationStyle.js';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { API_BASE_URL } from '../../../../config';
import { DateTime } from 'luxon';
class AllHallsReservations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedDay: ''
    };
    this.handleDayChange = this.handleDayChange.bind(this);
    this.FetchRequests = this.FetchRequests.bind(this);
  }

  FetchRequests() {
    const url = new URL(API_BASE_URL + '/halls/reservations');
    const params = {
      startDate: DateTime.fromFormat(
        this.state.selectedDay.toDateString(),
        'EEE MMM dd yyyy'
      ).toFormat('LL-dd-yyyy'),
      endDate: DateTime.fromFormat(
        this.state.selectedDay.toDateString(),
        'EEE MMM dd yyyy'
      )
        .plus({ days: 7 })
        .toFormat('LL-dd-yyyy')
    };
    url.search = new URLSearchParams(params);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('There has been an error');
        }

        return response.json();
      })
      .then(data => {
        this.setState({ data: data });
      })
      .catch(error => console.log(error));
  }

  handleDayChange(selectedDay) {
    this.setState(
      {
        selectedDay: selectedDay
      },
      this.FetchRequests
    );
  }

  render() {
    const selectedDay = this.state.selectedDay;
    return (
      <React.Fragment>
        <DayPickerTitle>PREGLEDAJ REZERVACIJE ZA TJEDAN:</DayPickerTitle>
        <DayPickerInput
          value={selectedDay}
          dayPickerProps={{
            selectedDays: selectedDay,
            disabledDays: {
              daysOfWeek: [0, 2, 3, 4, 5, 6]
            },
            firstDayOfWeek: 1,
            weekdaysShort: ['Ned', 'Pon', 'Uto', 'Sri', 'Cet', 'Pet', 'Sub'],
            months: [
              'Siječanj',
              'Veljača',
              'Ožujak',
              'Travanj',
              'Svibanj',
              'Lipanj',
              'Srpanj',
              'Kolovoz',
              'Rujan',
              'Listopad',
              'Studeni',
              'Prosinac'
            ]
          }}
          onDayChange={this.handleDayChange}
          style={{ margin: '4px calc((100vw - 1024px) / 2) 24px' }}
        />
        {this.state.data.map((sdata, index) => {
          return (
            <ScheduleComponenet
              data={sdata}
              key={index}
              updatePage={this.FetchRequests}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
export default AllHallsReservations;
