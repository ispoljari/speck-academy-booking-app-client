import React from 'react';

import {
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

const CitizensHallInfo = ({ hallInfo }) => (
  <>
    <HallInfoTitle>Informacije</HallInfoTitle>
    <HallInfoPanel>
      <HallImage img src={hallInfo.pictureUrl} />
      <HallDescription>
        <HallName>
          <HallNameTitle>{hallInfo.name}</HallNameTitle>
        </HallName>
        <HallInfo>
          <HallInfoName>
            <HallLocation>LOKACIJA</HallLocation>
            <HallDesc>OPIS</HallDesc>
          </HallInfoName>
          <HallInfoDescription>
            <HallAddress>{hallInfo.address}</HallAddress>
            <HallDetail>{hallInfo.description}</HallDetail>
          </HallInfoDescription>
        </HallInfo>
      </HallDescription>
    </HallInfoPanel>
  </>
);

export default CitizensHallInfo;
