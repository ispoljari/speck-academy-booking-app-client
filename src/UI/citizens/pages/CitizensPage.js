import React from 'react';

import {
  CitizensHeader,
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
    <CitizensSubmitRequest />
    {/* <CitizensSelectDateTime />
    <CitizensEditEventInfo />
    
    <Footer /> */}
  </React.Fragment>
);

export default CitizensPage;
