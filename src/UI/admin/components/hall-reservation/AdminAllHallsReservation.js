import React from 'react';

import dataArray from '../../components/hall-reservation/newData.js';
import ScheduleComponenet from '../../components/hall-reservation/AdminHallReservation';
import {
  DayPickerTitle,
  DayPicker1
} from '../../components/hall-reservation/AdminHallReservationStyle.js';

import { API_BASE_URL } from '../../../../config';

let startDay, endDay;
function handledChange1(event) {
  if (event.target.id === 'startDay') {
    startDay = event.target.value;
  } else if (event.target.id === 'endDay') {
    endDay = event.target.value;
  }
  fetchIt(startDay, endDay);
}

function fetchIt(startDay, endDay) {
  var url = new URL(API_BASE_URL + '/halls/reservations');
  var params = { startDate: '2017-05-25', endDate: '2020-10-25' };
  url.search = new URLSearchParams(params);
  fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => (dataArray = data));
}

const AllHallsReservations = () => (
  <React.Fragment>
    <DayPickerTitle>PREGLEDAJ REZERVACIJE ZA DANE:</DayPickerTitle>
    <DayPicker1>
      {
        <form action="/action_page.php">
          <input type="date" id="startDay" onChange={handledChange1} />
          <input type="date" id="endDay" onChange={handledChange1} />
          <input type="submit" />
        </form>
      }
    </DayPicker1>
    {/* <DayPicker2>
      {
        <form action="/action_page.php">
        <input type="date" name="year_week" />
        <input type="submit" />
      </form>
      }
    </DayPicker2> */}

    {dataArray.map(data => {
      // {realData.map(data => {
      return <ScheduleComponenet data={data} />;
    })}
  </React.Fragment>
);

export default AllHallsReservations;
