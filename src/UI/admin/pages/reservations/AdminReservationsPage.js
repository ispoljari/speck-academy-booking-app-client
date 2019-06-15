import React from 'react';

import { AdminHeader } from '../../';
import { Footer, Modal } from '../../../common';
//import dataArray from '../../components/hall-reservation/newData.js';
//import ScheduleComponenet from '../../components/hall-reservation/AdminHallReservation';
import AllHallsReservations from '../../components/hall-reservation/AdminAllHallsReservation';

const AdminReservationsPage = () => (
  <React.Fragment>
    <AdminHeader />
    <AllHallsReservations />
    {/* <Footer /> */}
  </React.Fragment>
);

export default AdminReservationsPage;
