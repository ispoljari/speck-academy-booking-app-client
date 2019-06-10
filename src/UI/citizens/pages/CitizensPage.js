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

import { Footer } from '../../common';

const CitizensPage = () => (
  <React.Fragment>
    <CitizensHeader />
    <CitizensSelectHall />

    <CitizensSubmitRequest />
    {/* <CitizensSelectDateTime />
    <CitizensEditEventInfo />
       <Footer /> */}
    <CitizensAdminLogin />
    <Error404 />
    {/* <CitizensSelectDateTime />
    <CitizensEditEventInfo />
    <CitizensSubmitRequest />
     */}
    <Footer />
      

  </React.Fragment>
);

export default CitizensPage;
