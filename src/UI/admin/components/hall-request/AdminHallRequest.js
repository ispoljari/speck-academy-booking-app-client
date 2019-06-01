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
  AdressHall
} from './AdminHallRequestStyle';

const AdminHallRequest = () => (
  <HallDiv>
    <ImageDiv>
      <ImageHall />
    </ImageDiv>

    <TextDiv>
      <HeaderHall>Konferencijska Dvorana RCP</HeaderHall>
      <AdressHall>Franje Tuđmana 20 </AdressHall>
    </TextDiv>

    <ButtonDiv />
  </HallDiv>
);

export default AdminHallRequest;
