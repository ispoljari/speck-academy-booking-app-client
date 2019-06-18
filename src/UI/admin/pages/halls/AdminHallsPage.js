import React from 'react';

import { Modal } from '../../../common';
import AdminAvailableHall from '../../components/available-hall/AdminAvailableHall';
import AdminAddHall from '../../components/add-hall/AdminAddHall';
import { AdminHallPageContainer } from '../../components/available-hall/AdminAvailableHallStyle';
const AdminHallsPage = () => (
  <React.Fragment>
    <AdminHallPageContainer>
      <AdminAvailableHall />
      <AdminAddHall />
    </AdminHallPageContainer>
  </React.Fragment>
);

export default AdminHallsPage;
