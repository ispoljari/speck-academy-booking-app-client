import React from 'react';

import {
  CitizensHeader,
  CitizensSelectHall,
  CitizensSelectDateTime,
  CitizensEditEventInfo,
  CitizensSubmitRequest
} from '../';

import { Footer, Modal } from '../../common';

const CitizensPage = () => (
  <React.Fragment>
    <CitizensHeader />
    <CitizensSelectHall />
    {/* <CitizensSelectDateTime />
    <CitizensEditEventInfo />
    <CitizensSubmitRequest />
    <Footer /> */}
    <Modal />
  </React.Fragment>
);

export default CitizensPage;
