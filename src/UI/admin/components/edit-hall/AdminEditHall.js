import React from 'react';
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
      <ArenaPicture src={props.pictureUrl} />
      <MidRightPart>
        <SlimText>NAZIV</SlimText>
        <Rectangle placeholder={props.naziv} />
        <SlimText>LOKACIJA</SlimText>
        <Rectangle placeholder={props.location} />
      </MidRightPart>
    </MidPart>
    <Opis>
      <SlimText>OPIS</SlimText>
      <BigRectangle placeholder={props.description} />
    </Opis>
    <Button>SPREMI</Button>
  </Wrapper>
);

export default EditHallComponent;
