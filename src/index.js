/*
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
*/

import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleComponenet from './UI/admin/components/hall-reservation/AdminHallReservation.js';
import { dummyDataArray } from './UI/admin/components/hall-reservation/dummyreservations.js';

console.log(dummyDataArray);

ReactDOM.render(
  <ScheduleComponenet dummyDataArray={dummyDataArray} />,
  document.getElementById('root')
);
