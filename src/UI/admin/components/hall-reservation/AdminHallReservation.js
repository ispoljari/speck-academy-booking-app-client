import React from 'react';

import {
  MainWrapper,
  MainTitle,
  TableAndInfoWrapper,
  Table,
  Info,
  InfoTitle,
  InfoTime,
  InfoButton,
  InfoEraseButton
} from './style.js';

//const a = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 222];

const ScheduleComponenet = () => (
  <MainWrapper>
    <MainTitle>Moj Veeeliki naslov</MainTitle>
    <TableAndInfoWrapper>
      <Table />
      <Info>
        <InfoTitle />
        <InfoTime />
        <InfoButton />
        <InfoEraseButton />
      </Info>
    </TableAndInfoWrapper>
  </MainWrapper>
);

export default ScheduleComponenet;
