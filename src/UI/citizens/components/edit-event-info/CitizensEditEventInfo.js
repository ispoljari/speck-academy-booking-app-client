import React from 'react';

import {
  MainContainer,
  CricleMark,
  NumberMark,
  MainHeader,
  MainDescription,
  FormContainer,
  FormHeader,
  ContainerInfoGroup,
  FormInput,
  FormInputText,
  FormInputTextCharacterCounter,
  FormInlineLabel,
  FormInlineInput
} from './CitizensEditEventInfoStyle';

export default ({ handleChange, post, enableForm }) => {
  return (
    <MainContainer>
      <CricleMark>
        <NumberMark>3</NumberMark>
      </CricleMark>
      <MainHeader>Podaci o događaju i Vama</MainHeader>
      <MainDescription>
        Recite nam ime svog događaja i pobliže ga objasnite. Nemojte zaboraviti
        ostaviti svoje kontakte podatke kako bismo Vas mogli kontaktirati u vezi
        dodatnih detalja i potvrđivanja rezervacije.
      </MainDescription>
      <FormContainer id="form-citizens-reservation">
        <FormHeader>Naziv događaja:</FormHeader>
        <FormInput
          type="text"
          name="reservationTitle"
          onChange={handleChange}
          value={post.reservationTitle}
          required
          disabled={!enableForm}
        />
        <FormHeader>Opis događaja:</FormHeader>
        <FormInputText
          placeholder="OPIŠITE SVOJ DOGAĐAJ..."
          type="text"
          name="reservationDescription"
          onChange={handleChange}
          value={post.reservationDescription}
          maxLength="500"
          required
          disabled={!enableForm}
        />
        <FormInputTextCharacterCounter>
          <span>{post.charCounter} / 500 znakova</span>
        </FormInputTextCharacterCounter>
        <FormHeader>Vaši kontakt podaci:</FormHeader>
        <ContainerInfoGroup>
          <FormInlineInput>
            <FormInlineLabel>Ime i prezime</FormInlineLabel>
            <FormInput
              type="text"
              name="citizenFullName"
              onChange={handleChange}
              value={post.citizenFullName}
              required
              disabled={!enableForm}
            />
          </FormInlineInput>
          <FormInlineInput>
            <FormInlineLabel>Organizacija (nije obavezno)</FormInlineLabel>
            <FormInput
              type="text"
              name="citizenOrganization"
              onChange={handleChange}
              value={post.citizenOrganization}
              required
              disabled={!enableForm}
            />
          </FormInlineInput>
          <FormInlineInput>
            <FormInlineLabel>E-mail adresa</FormInlineLabel>
            <FormInput
              type="email"
              name="citizenEmail"
              onChange={handleChange}
              value={post.citizenEmail}
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
              required
              disabled={!enableForm}
            />
          </FormInlineInput>
          <FormInlineInput>
            <FormInlineLabel>Broj telefona/Mobitela</FormInlineLabel>
            <FormInput
              type="text"
              name="citizenPhoneNumber"
              onChange={handleChange}
              value={post.citizenPhoneNumber}
              pattern="(\+[0-9]{0,16})|[0-9]{0,15}"
              required
              disabled={!enableForm}
            />
          </FormInlineInput>
        </ContainerInfoGroup>
      </FormContainer>
    </MainContainer>
  );
};
