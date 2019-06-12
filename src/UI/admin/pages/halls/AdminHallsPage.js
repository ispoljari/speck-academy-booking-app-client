import React from 'react';

import { AdminHeader } from '../../';
import { Footer, Modal } from '../../../common';
import AdminAvailableHall from '../../components/available-hall/AdminAvailableHall';
import AdminAddHall from '../../components/add-hall/AdminAddHall';

const AdminHallsPage = () => (
  <React.Fragment>
    <AdminHeader />
    <AdminAvailableHall />
    <AdminAddHall />
    {/* <Footer /> */}
  </React.Fragment>
);

export default AdminHallsPage;
