import React from 'react';

import { AdminHeader } from '../../';
import { Footer, Modal } from '../../../common';
import AdminAvailableHall from '../../components/available-hall/AdminAvailableHall';
import AdminAddHall from '../../components/add-hall/AdminAddHall';
import { AdminHallPageContainer } from '../../components/available-hall/AdminAvailableHallStyle';
const AdminHallsPage = () => (
  <React.Fragment>
    <AdminHeader />
    <AdminHallPageContainer>
      <AdminAvailableHall />
      <AdminAddHall />
    </AdminHallPageContainer>
    <Footer />
  </React.Fragment>
);

export default AdminHallsPage;
