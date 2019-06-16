import React from 'react';

import { AdminRequestsPage, AdminReservationsPage, AdminHallsPage } from './';
import { PrivateRoute } from '../../common';

const AdminPages = ({ loggedIn }) => (
  <>
    <PrivateRoute
      loggedIn={loggedIn}
      path="/admin-requests"
      component={AdminRequestsPage}
    />
    <PrivateRoute
      loggedIn={loggedIn}
      path="/admin-reservations"
      component={AdminReservationsPage}
    />
    <PrivateRoute
      loggedIn={loggedIn}
      path="/admin-halls"
      component={AdminHallsPage}
    />
  </>
);

export default AdminPages;
