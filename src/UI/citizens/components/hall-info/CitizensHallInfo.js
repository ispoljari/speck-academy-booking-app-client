import React from 'react';

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
      <HallImage />
      <HallDescription />
    </HallInfoPanel>
  </HallInfoContainer>
);

export default CitizensHallInfo;
