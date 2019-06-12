import React from 'react';

import {
  CitizensHeader,
  CitizensAdminLogin,
  CitizensSelectHall,
  CitizensSelectDateTime,
  CitizensEditEventInfo,
  CitizensSubmitRequest
} from '../';

import Error404 from '../../common/error404/Error404';

import { Footer, Modal } from '../../common';

const CitizensPage = () => (
  <React.Fragment>
    <CitizensHeader />
    {/* <CitizensSelectHall />
    <CitizensSubmitRequest />
    <CitizensSelectDateTime /> */}
    <CitizensAdminLogin />
    {/* <Error404 />
    <Footer /> */}
  </React.Fragment>
);

export default CitizensPage;
