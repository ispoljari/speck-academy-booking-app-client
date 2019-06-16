import React from 'react';
import { Route } from 'react-router-dom';

import { AdminRequestsPage, AdminReservationsPage, AdminHallsPage } from '..';

const AdminPages = ({ match }) => (
  <>
    <Route path={`${match.path}/requests`} component={AdminRequestsPage} />
    <Route
      path={`${match.path}/reservations`}
      component={AdminReservationsPage}
    />
    <Route path={`${match.path}/halls`} component={AdminHallsPage} />
  </>
);

export default AdminPages;
