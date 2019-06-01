import React from 'react';
import hallImage from '../../../../images/radnik.png';

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
    <HallInfoTitle>Informacije</HallInfoTitle>
    <HallInfoPanel>
      <HallImage img src={hallImage} />
      <HallName>
        <HallNameTitle>VELIKA SPORTSKA DVORANA</HallNameTitle>
      </HallName>
    </HallInfoPanel>
  </HallInfoContainer>
);

export default CitizensHallInfo;
