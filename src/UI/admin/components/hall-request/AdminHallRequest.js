import React from 'react';

import {
  HallReqContainer,
  HallReqTitle,
  HallDiv,
  ImageDiv,
  TextDiv,
  ButtonDiv,
  ImageHall,
  HeaderHall,
  AdressHall,
  EventItem,
  EventName,
  EventDesc
} from './AdminHallRequestStyle';

const AdminHallRequest = () => (
  <HallDiv>
    <ImageDiv>
      <ImageHall />
    </ImageDiv>

    <TextDiv>
      <HeaderHall>Konferencijska Dvorana RCP</HeaderHall>
      <AdressHall>Franje Tuđmana 20 </AdressHall>
      <EventItem> DOGAĐAJ</EventItem>
      <EventName>Speck party 3.0</EventName>
      <EventDesc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum,
        leo pulvinar aliquet sagittis, neque ligula sagittis augue, eget finibus
        lectus leo nec ipsum. Cras nec diam in erat dignissim vehicula non eu
        leo. Suspendisse potenti. Pellentesque a cursus libero. Praesent ligula
        lectus, elementum nec tristique non, vehicula at leo.
      </EventDesc>
    </TextDiv>

    <ButtonDiv />
  </HallDiv>
);

export default AdminHallRequest;
