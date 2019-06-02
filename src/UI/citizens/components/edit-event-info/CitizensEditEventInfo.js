import React from 'react';

import {
  MainContainer,
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

const CitizensEditEventInfo = () => (
  <MainContainer>
    <MainHeader>Podaci o događaju i Vama</MainHeader>
    <MainDescription>
      Recite nam ime svog događaja i pobliže ga objasnite. Nemojte zaboraviti
      ostaviti svoje kontakte podatke kako bismo Vas mogli kontaktirati u vezi
      dodatnih detalja i potvrđivanja rezervacije.
    </MainDescription>
    <FormContainer>
      <FormHeader>Naziv događaja:</FormHeader>
      <FormInput />
      <FormHeader>Opis događaja:</FormHeader>
      <FormInputText placeholder="OPIŠITE SVOJ DOGAĐAJ..." />
      <FormInputTextCharacterCounter>
        0 / 500 znakova
      </FormInputTextCharacterCounter>
      <FormHeader>Vaši kontakt podaci:</FormHeader>
      <FormContainerInfoGroup>
        <FormInlineInput>
          <FormInlineLabel>Ime i prezime</FormInlineLabel>
          <FormInput />
        </FormInlineInput>
        <FormInlineInput>
          <FormInlineLabel>Organizacija (neobavezno)</FormInlineLabel>
          <FormInput />
        </FormInlineInput>
        <FormInlineInput>
          <FormInlineLabel>E-mail adresa</FormInlineLabel>
          <FormInput />
        </FormInlineInput>
        <FormInlineInput>
          <FormInlineLabel>Broj telefona/Mobitela</FormInlineLabel>
          <FormInput />
        </FormInlineInput>
      </FormContainerInfoGroup>
    </FormContainer>
  </MainContainer>
);

export default CitizensEditEventInfo;
