import React from 'react';

import { AdminHeader } from '../..';
import { Footer } from '../../../common';
import ScheduleComponenet from '../../components/hall-reservation/AdminHallReservation';
const AdminReservationsPage = () => (
  <React.Fragment>
    <AdminHeader />
    <ScheduleComponenet />
    <Footer />
  </React.Fragment>
);

export default AdminReservationsPage;
