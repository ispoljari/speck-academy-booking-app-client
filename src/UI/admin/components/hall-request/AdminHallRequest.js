import React from 'react';

import {
  HallDiv,
  ImageContainer,
  TextContainer,
  ButtonContainer,
  ImageHall,
  HeaderHall,
  AdressHall,
  EventItem,
  EventName,
  EventDescription,
  LeftContainer,
  RightContainer,
  DateBanner,
  DateLabel,
  DateSet,
  TimeLabel,
  TimeSet,
  ContactBanner,
  NameSurnameLabel,
  NameSurnameSet,
  OrganisationLabel,
  OrganisationSet,
  EmailLabel,
  EmailSet,
  PhoneLabel,
  PhoneSet,
  ButtonUp,
  ButtonDown,
  Submit,
  SubmitDate,
  ButtonAccept,
  ButtonDenied
} from './AdminHallRequestStyle';

const AdminHallRequest = props => (
  <HallDiv>
    <ImageContainer>
      <ImageHall />
    </ImageContainer>

    <TextContainer>
      <HeaderHall>Konferencijska Dvorana RCP</HeaderHall>
      <AdressHall>Franje Tuđmana 20 </AdressHall>
      <EventItem> DOGAĐAJ</EventItem>
      <EventName>Speck party 3.0</EventName>
      <EventDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum,
        leo pulvinar aliquet sagittis, neque ligula sagittis augue, eget finibus
        lectus leo nec ipsum. Cras nec diam in erat dignissim vehicula non eu
        leo. Suspendisse potenti. Pellentesque a cursus libero. Praesent ligula
        lectus, elementum nec tristique non, vehicula at leo.
      </EventDescription>
      <LeftContainer>
        <DateBanner> TRAŽENI TERMIN</DateBanner>
        <DateLabel>DATUM</DateLabel>
        <DateSet>25.04.2019</DateSet>
        <TimeLabel>VRIJEME</TimeLabel>
        <TimeSet>09:00 - 22:00</TimeSet>
      </LeftContainer>
      <RightContainer>
        <ContactBanner>KONTAKT PODACI</ContactBanner>
        <NameSurnameLabel>IME I PREZIME</NameSurnameLabel>
        <NameSurnameSet>Ivana Horvatić</NameSurnameSet>
        <OrganisationLabel>ORGANIZACIJA</OrganisationLabel>
        <OrganisationSet>Speck agency d.o.o</OrganisationSet>
        <EmailLabel>E-MAIL</EmailLabel>
        <EmailSet>hello@speck.agency</EmailSet>
        <PhoneLabel>TEL / MOB</PhoneLabel>
        <PhoneSet>099 / 12 34 567</PhoneSet>
      </RightContainer>
    </TextContainer>

    <ButtonContainer>
      <ButtonUp>
        <Submit>PODNESENO</Submit>
        <SubmitDate>28.02.2019., 16:58</SubmitDate>
      </ButtonUp>
      <ButtonDown>
        <ButtonAccept>PRIHVATI</ButtonAccept>
        <ButtonDenied>ODBIJ</ButtonDenied>
      </ButtonDown>
    </ButtonContainer>
  </HallDiv>
);

export default AdminHallRequest;
