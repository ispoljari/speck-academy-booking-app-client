import React from 'react';

import { AdminHeader } from '../../';
import { Footer } from '../../../common';
import AllHallsReservations from '../../components/hall-reservation/AdminAllHallsReservation';

const AdminReservationsPage = () => (
  <React.Fragment>
    <AdminHeader />
    <AllHallsReservations />
    <Footer />
  </React.Fragment>
);

export default AdminReservationsPage;
