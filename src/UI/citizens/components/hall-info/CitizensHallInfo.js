import React from 'react';
import hallImage from '../../../../images/radnik.png';

import {
  HallInfoContainer,
  HallInfoTitle,
  HallInfoPanel,
  HallImage,
  HallName,
  HallNameTitle,
  HallDescription,
  HallInfo,
  HallInfoName,
  HallInfoDescription,
  HallLocation,
  HallDesc,
  HallAddress,
  HallDetail
} from './CitizensHallInfoStyle';

const CitizensHallInfo = () => (
  <HallInfoContainer>
    <HallInfoTitle>Informacije</HallInfoTitle>
    <HallInfoPanel>
      <HallImage img src={hallImage} />
      <HallDescription>
        <HallName>
          <HallNameTitle>VELIKA SPORTSKA DVORANA</HallNameTitle>
        </HallName>
        <HallInfo>
          <HallInfoName>
            <HallLocation>LOKACIJA</HallLocation>
            <HallDesc>OPIS</HallDesc>
          </HallInfoName>
          <HallInfoDescription>
            <HallAddress>Potočka ul.27</HallAddress>
            <HallDetail>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              dictum, leo pulvinar aliquet sagittis, neque ligula sagittis
              augue, eget finibus lectus leo nec ipsum. Que ligula sagittis
              augue, eget finibus lectus leo nec ipsumLorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nunc dictum, leo pulvinar
              aliquet sagittis, neque ligula sagittis augue, eget finibus lectus
              leo nec ipsum
            </HallDetail>
          </HallInfoDescription>
        </HallInfo>
      </HallDescription>
    </HallInfoPanel>
  </HallInfoContainer>
);

export default CitizensHallInfo;
