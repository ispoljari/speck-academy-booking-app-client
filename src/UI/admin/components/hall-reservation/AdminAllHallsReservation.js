import React from 'react';

import dataArray from '../../components/hall-reservation/newData.js';
import ScheduleComponenet from '../../components/hall-reservation/AdminHallReservation';

const WeekPicker = () => (
  <React.Fragment>
    {
      <form action="/action_page.php">
        <input type="date" name="year_week" />
        <input type="submit" />
      </form>
    }
  </React.Fragment>
);

const AllHallsReservations = () => (
  <React.Fragment>
    <WeekPicker />
    {dataArray.map(data => {
      return <ScheduleComponenet data={data} />;
    })}
  </React.Fragment>
);

export default AllHallsReservations;
