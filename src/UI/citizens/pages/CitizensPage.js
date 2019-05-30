import React from 'react';

import {
  CitizensHeader,
  CitizensAdminLogin,
  CitizensSelectHall,
  CitizensSelectDateTime,
  CitizensEditEventInfo,
  CitizensSubmitRequest
} from '../';

import { Footer } from '../../common';

const CitizensPage = () => (
  <React.Fragment>
    <CitizensHeader />
    <CitizensSelectHall />
    <CitizensAdminLogin />
    {/* <CitizensSelectDateTime />
    <CitizensEditEventInfo />
    <CitizensSubmitRequest />
    <Footer /> */}
  </React.Fragment>
);

export default CitizensPage;
