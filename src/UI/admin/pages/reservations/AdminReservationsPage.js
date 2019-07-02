import React from 'react';

import { AdminHeader } from '../../';
import { Footer } from '../../../common';
import AllHallsReservations from '../../components/hall-reservation/AdminAllHallsReservation';

const AdminReservationsPage = () => (
  <React.Fragment>
    <div style={{ minHeight: 'calc(100vh - 128px)' }}>
      <AdminHeader />
      <AllHallsReservations />
    </div>
    <Footer />
  </React.Fragment>
);

export default AdminReservationsPage;
