import React from 'react';

//import { AdminHeader } from '../../';
//import { Footer, Modal } from '../../../common';
import dataArray from '../../components/hall-reservation/newData.js';
import ScheduleComponenet from '../../components/hall-reservation/AdminHallReservation';

const AdminReservationsPage = () => (
  <React.Fragment>
    {dataArray.map(data => {
      return <ScheduleComponenet data={data} />;
    })}
    {/* <Footer /> */}
  </React.Fragment>
);

export default AdminReservationsPage;
