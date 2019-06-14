import React from 'react';
import ReactDOM from 'react-dom';
import ScheduleComponenet from './UI/admin/components/hall-reservation/AdminHallReservation.js';
//import { dummyDataArray } from './UI/admin/components/hall-reservation/dummyreservations.js';
import dataArray from './UI/admin/components/hall-reservation/newData.js';
//import dataArray from './UI/admin/components/hall-reservation/newData.js';
import AdminReservationsPage from './UI/admin/pages/reservations/AdminReservationsPage.js';

console.log(dataArray);
//console.log(dataArray);

ReactDOM.render(
  //<ScheduleComponenet dummyDataArray={dummyDataArray} />,
  //<ScheduleComponenet dummyDataArray={dataArray} />,
  //<ScheduleComponenet />,
  <AdminReservationsPage />,
  document.getElementById('root')
);
