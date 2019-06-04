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
  EventDesc,
  LeftText,
  RightText,
  DateInfo,
  Datum,
  DatumInput,
  Time,
  TimeInput,
  ContactInfo,
  Namesurname,
  NamesurnameInput,
  Organizacija,
  OrganizacijaInput,
  Email,
  EmailInput,
  Phone,
  PhoneInput,
  ButtonUp,
  ButtonDown,
  Podneseno,
  PodnesenoDatum,
  ButtonAcc,
  ButtonDen
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
      <LeftText>
        <DateInfo> TRAŽENI TERMIN</DateInfo>
        <Datum>DATUM</Datum>
        <DatumInput>25.04.2019</DatumInput>
        <Time>VRIJEME</Time>
        <TimeInput>09:00 - 22:00 </TimeInput>
      </LeftText>
      <RightText>
        <ContactInfo>KONTAKT PODACI</ContactInfo>
        <Namesurname>IME I PREZIME</Namesurname>
        <NamesurnameInput>Ivana Horvatić</NamesurnameInput>
        <Organizacija>ORGANIZACIJA</Organizacija>
        <OrganizacijaInput>Speck agency d.o.o</OrganizacijaInput>
        <Email>E-MAIL</Email>
        <EmailInput>hello@speck.agency</EmailInput>
        <Phone>TEL / MOB</Phone>
        <PhoneInput>099 / 12 34 567</PhoneInput>
      </RightText>
    </TextDiv>

    <ButtonDiv>
      <ButtonUp>
        <Podneseno>PODNESENO</Podneseno>
        <PodnesenoDatum>28.02.2019., 16:58</PodnesenoDatum>
      </ButtonUp>
      <ButtonDown>
        <ButtonAcc>PRIHVATI</ButtonAcc>
        <ButtonDen>ODBIJ</ButtonDen>
      </ButtonDown>
    </ButtonDiv>
  </HallDiv>
);

export default AdminHallRequest;
