import React from 'react';
import { Grid, Row, Col } from '@smooth-ui/core-sc';

import {
  CitizensHeader,
  CitizensSelectHall,
  CitizensSelectDateTime,
  CitizensEditEventInfo,
  CitizensSubmitRequest
} from '../';

import { Footer } from '../../common';

const CitizensPage = () => (
  <Grid fluid>
    <Row>
      <Col xs={12} md={8} omd={2} lg={6} olg={3}>
        <CitizensHeader />
      </Col>
    </Row>
    {/* <CitizensSelectHall />
    <CitizensSelectDateTime />
    <CitizensEditEventInfo />
    <CitizensSubmitRequest />
    <Footer /> */}
  </Grid>
);

export default CitizensPage;
