import React from 'react';

import dataArray from '../../components/hall-reservation/newData.js';
import ScheduleComponenet from '../../components/hall-reservation/AdminHallReservation';
import {
  DayPickerTitle,
  DayPicker1,
  DayPicker2
} from '../../components/hall-reservation/AdminHallReservationStyle.js';

/*const WeekPicker = () => (
  <React.Fragment>
    {
  
    }
  </React.Fragment>
);*/

const AllHallsReservations = () => (
  <React.Fragment>
    <DayPickerTitle>PREGLEDAJ REZERVACIJE ZA DANE:</DayPickerTitle>
    <DayPicker1>
      {
        <form action="/action_page.php">
          <input type="date" name="year_week" />
          <input type="date" name="year_week2" />
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
      return <ScheduleComponenet data={data} />;
    })}
  </React.Fragment>
);

export default AllHallsReservations;
