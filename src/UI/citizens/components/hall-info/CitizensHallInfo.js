import React from 'react';
import Radnik from '../../../../images/radnik.png';

import {
  HallInfoContainer,
  HallInfoTitle,
  HallInfoPanel,
  HallImage,
  HallName,
  HallNameTitle
} from './CitizensHallInfoStyle';

const CitizensHallInfo = () => (
  <HallInfoContainer>
    <link
      href="https://fonts.googleapis.com/css?family=Lora&display=swap"
      rel="stylesheet"
    />

    <HallInfoTitle>Informacije</HallInfoTitle>
    <HallInfoPanel>
      <HallImage img src={Radnik} />
      <HallName>
        <HallNameTitle>VELIKA SPORTSKA DVORANA</HallNameTitle>
      </HallName>
    </HallInfoPanel>
  </HallInfoContainer>
);

export default CitizensHallInfo;
