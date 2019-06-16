import React from 'react';

import {
  MainContainer,
  CricleMark,
  NumberMark,
  MainHeader,
  MainDescription,
  FormContainer,
  FormHeader,
  FormContainerInfoGroup,
  FormInput,
  FormInputText,
  FormInputTextCharacterCounter,
  FormInlineLabel,
  FormInlineInput
} from './CitizensEditEventInfoStyle';

export default ({ handleChange, post }) => {
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
      <FormContainer>
        <FormHeader>Naziv događaja:</FormHeader>
        <FormInput
          type="text"
          name="eventName"
          onChange={handleChange}
          value={post.name}
          required
        />
        <FormHeader>Opis događaja:</FormHeader>
        <FormInputText
          placeholder="OPIŠITE SVOJ DOGAĐAJ..."
          type="text"
          name="eventDescription"
          onChange={handleChange}
          maxLength="500"
          required
        />
        <FormInputTextCharacterCounter>
          <span>{post.charCounter} / 500 znakova</span>
        </FormInputTextCharacterCounter>
        <FormHeader>Vaši kontakt podaci:</FormHeader>
        <FormContainerInfoGroup>
          <FormInlineInput>
            <FormInlineLabel>Ime i prezime</FormInlineLabel>
            <FormInput
              type="text"
              name="nameAndSurname"
              onChange={handleChange}
              required
            />
          </FormInlineInput>
          <FormInlineInput>
            <FormInlineLabel>Organizacija (nije obavezno)</FormInlineLabel>
            <FormInput
              type="text"
              name="organisation"
              onChange={handleChange}
              required
            />
          </FormInlineInput>
          <FormInlineInput>
            <FormInlineLabel>E-mail adresa</FormInlineLabel>
            <FormInput
              type="email"
              name="email"
              onChange={handleChange}
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
              required
            />
          </FormInlineInput>
          <FormInlineInput>
            <FormInlineLabel>Broj telefona/Mobitela</FormInlineLabel>
            <FormInput
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              pattern="(\+[0-9]{0,16})|[0-9]{0,15}"
              required
            />
          </FormInlineInput>
        </FormContainerInfoGroup>
      </FormContainer>
    </MainContainer>
  );
};
