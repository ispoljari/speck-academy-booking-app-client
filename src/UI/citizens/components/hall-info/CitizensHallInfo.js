import React from 'react';
import Radnik from '../../../../images/radnik.png';

import {
  HallInfoContainer,
  HallInfoTitle,
  HallInfoPanel,
  HallImage,
  HallDescription
} from './CitizensHallInfoStyle';

const CitizensHallInfo = () => (
  <HallInfoContainer>
    <HallInfoTitle>Informacije</HallInfoTitle>
    <HallInfoPanel>
      <HallImage img src={Radnik} />
      <HallDescription />
    </HallInfoPanel>
  </HallInfoContainer>
);

export default CitizensHallInfo;
