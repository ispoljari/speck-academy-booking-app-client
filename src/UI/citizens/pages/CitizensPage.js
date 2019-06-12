import React from 'react';
import styled from 'styled-components';

import { CitizensPageWrapper } from './CitizensPageStyle.js';

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
    <CitizensPageWrapper>
      <CitizensHeader />

      <CitizensSelectHall />

      <CitizensSelectDateTime />

      <CitizensEditEventInfo />

      <CitizensSubmitRequest />
      {/* <CitizensAdminLogin /> */}
      {/* <Error404 /> */}
      <Footer />
    </CitizensPageWrapper>
  </React.Fragment>
);

export default CitizensPage;
