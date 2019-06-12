import React from 'react';

import {
  CitizensHeader,
  CitizensAdminLogin,
  CitizensAdminLoginUnsuccessfull,
  CitizensSelectHall,
  CitizensSelectDateTime,
  CitizensEditEventInfo,
  CitizensSubmitRequest
} from '../';

import Error404 from '../../common/error404/Error404';

import { Footer } from '../../common';

const CitizensPage = () => (
  <React.Fragment>
    <CitizensHeader />
    <CitizensSelectHall />
    <CitizensSubmitRequest />

    <CitizensSelectDateTime />

    <CitizensAdminLogin />
    <CitizensAdminLoginUnsuccessfull />
    <Error404 />
    <Footer />
  </React.Fragment>
);

export default CitizensPage;
