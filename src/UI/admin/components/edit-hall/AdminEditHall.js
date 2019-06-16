import React from 'react';
import arena from '../../../../util/images/arena.webp';
import {
  BigRectangle,
  Button,
  Opis,
  Rectangle,
  SlimText,
  Wrapper,
  Title,
  TopPart,
  ArenaPicture,
  MidPart,
  MidRightPart
} from './AdminEditHallStyle';

const EditHallComponent = props => (
  <Wrapper>
    <TopPart>
      <Title>Uredi podatke o dvorani</Title>
    </TopPart>
    <MidPart>
      <ArenaPicture src={arena} />
      <MidRightPart>
        <SlimText>NAZIV</SlimText>
        <Rectangle>{}</Rectangle>
        <SlimText>LOKACIJA</SlimText>
        <Rectangle>{}</Rectangle>
      </MidRightPart>
    </MidPart>
    <Opis>
      <SlimText>OPIS</SlimText>
      <BigRectangle>{}</BigRectangle>
    </Opis>
    <Button>SPREMI</Button>
  </Wrapper>
);

export default EditHallComponent;
