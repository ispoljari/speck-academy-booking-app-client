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

function AdminHallRequest(props) {
  function handleAccept(props) {
    console.log('acc');
  }
  function handleDenied(props) {
    console.log('den');
  }
  return (
    <HallDiv>
      <ImageContainer>
        <ImageHall src={props.imageUrl} />
      </ImageContainer>

      <TextContainer>
        <HeaderHall>{props.name}</HeaderHall>
        <AdressHall>{props.adress}</AdressHall>
        <EventItem> DOGAĐAJ</EventItem>
        <EventName>{props.eventName}</EventName>
        <EventDescription>{props.eventDescription}</EventDescription>
        <LeftContainer>
          <DateBanner> TRAŽENI TERMIN</DateBanner>
          <DateLabel>DATUM</DateLabel>
          <DateSet>{props.reservationDate}</DateSet>
          <TimeLabel>VRIJEME</TimeLabel>
          <TimeSet>{props.reservationTime}</TimeSet>
        </LeftContainer>
        <RightContainer>
          <ContactBanner>KONTAKT PODACI</ContactBanner>
          <NameSurnameLabel>IME I PREZIME</NameSurnameLabel>
          <NameSurnameSet>{props.nameSurname}</NameSurnameSet>
          <OrganisationLabel>ORGANIZACIJA</OrganisationLabel>
          <OrganisationSet>{props.organizationName}</OrganisationSet>
          <EmailLabel>E-MAIL</EmailLabel>
          <EmailSet>{props.email}</EmailSet>
          <PhoneLabel>TEL / MOB</PhoneLabel>
          <PhoneSet>{props.phone}</PhoneSet>
        </RightContainer>
      </TextContainer>

      <ButtonContainer>
        <ButtonUp>
          <Submit>PODNESENO</Submit>
          <SubmitDate>{props.submitDate}</SubmitDate>
        </ButtonUp>
        <ButtonDown>
          <ButtonAccept onClick={handleAccept}>PRIHVATI</ButtonAccept>
          <ButtonDenied onClick={handleDenied}>ODBIJ</ButtonDenied>
        </ButtonDown>
      </ButtonContainer>
    </HallDiv>
  );
}

export default AdminHallRequest;
