import React from 'react';
import { API_BASE_URL } from '../../../../config';
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
  let id = props.id;
  const handleAccept = () => {
    fetch(API_BASE_URL + '/reservations/update/' + id, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'PATCH',
      body: JSON.stringify({ reservationStatus: 'approved' })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('There has been an error');
        }
        return response.status === 200 && response.json();
      })
      .then(res => {
        props.updatePage();
      })
      .catch(err => {
        console.error(err);
      });
  };
  const handleDenied = () => {
    fetch(API_BASE_URL + '/reservations/update/' + id, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'PATCH',
      body: JSON.stringify({ reservationStatus: 'denied' })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('There has been an error');
        }
        return response.status === 200 && response.json();
      })
      .then(res => {
        props.updatePage();
      })
      .catch(err => {
        console.error(err);
      });
  };
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
