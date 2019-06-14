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
//OLD CODE
// const CitizensEditEventInfo = () => (
//   <MainContainer>
//     <CricleMark>
//       <NumberMark>3</NumberMark>
//     </CricleMark>
//     <MainHeader>Podaci o događaju i Vama</MainHeader>
//     <MainDescription>
//       Recite nam ime svog događaja i pobliže ga objasnite. Nemojte zaboraviti
//       ostaviti svoje kontakte podatke kako bismo Vas mogli kontaktirati u vezi
//       dodatnih detalja i potvrđivanja rezervacije.
//     </MainDescription>
//     <FormContainer>
//       <FormHeader>Naziv događaja:</FormHeader>
//       <FormInput />
//       <FormHeader>Opis događaja:</FormHeader>
//       <FormInputText placeholder="OPIŠITE SVOJ DOGAĐAJ..." />
//       <FormInputTextCharacterCounter>
//         0 / 500 znakova
//       </FormInputTextCharacterCounter>
//       <FormHeader>Vaši kontakt podaci:</FormHeader>
//       <FormContainerInfoGroup>
//         <FormInlineInput>
//           <FormInlineLabel>Ime i prezime</FormInlineLabel>
//           <FormInput />
//         </FormInlineInput>
//         <FormInlineInput>
//           <FormInlineLabel>Organizacija (neobavezno)</FormInlineLabel>
//           <FormInput />
//         </FormInlineInput>
//         <FormInlineInput>
//           <FormInlineLabel>E-mail adresa</FormInlineLabel>
//           <FormInput />
//         </FormInlineInput>
//         <FormInlineInput>
//           <FormInlineLabel>Broj telefona/Mobitela</FormInlineLabel>
//           <FormInput />
//         </FormInlineInput>
//       </FormContainerInfoGroup>
//     </FormContainer>
//   </MainContainer>
// );
//OLD CODE END

class CitizensEditEventInfo extends React.Component {
  state = {
    charCounter: 0
  };

  handleCharCount = event => {
    const charCount = event.target.value.length;
    const counter = this.state.charCounter;
    const charLength = +charCount;
    this.setState({ charCounter: charLength });
  };

  render() {
    return (
      <MainContainer>
        <CricleMark>
          <NumberMark>3</NumberMark>
        </CricleMark>
        <MainHeader>Podaci o događaju i Vama</MainHeader>
        <MainDescription>
          Recite nam ime svog događaja i pobliže ga objasnite. Nemojte
          zaboraviti ostaviti svoje kontakte podatke kako bismo Vas mogli
          kontaktirati u vezi dodatnih detalja i potvrđivanja rezervacije.
        </MainDescription>
        <FormContainer>
          <FormHeader>Naziv događaja:</FormHeader>
          <FormInput required />
          <FormHeader>Opis događaja:</FormHeader>
          <FormInputText
            placeholder="OPIŠITE SVOJ DOGAĐAJ..."
            type="text"
            maxLength="500"
            onChange={this.handleCharCount}
            required
          />
          <FormInputTextCharacterCounter>
            {this.state.charCounter} / 500 znakova
          </FormInputTextCharacterCounter>
          <FormHeader>Vaši kontakt podaci:</FormHeader>
          <FormContainerInfoGroup>
            <FormInlineInput>
              <FormInlineLabel>Ime i prezime</FormInlineLabel>
              <FormInput required />
            </FormInlineInput>
            <FormInlineInput>
              <FormInlineLabel>Organizacija (nije obavezno)</FormInlineLabel>
              <FormInput />
            </FormInlineInput>
            <FormInlineInput>
              <FormInlineLabel>E-mail adresa</FormInlineLabel>
              <FormInput type="email" required />
            </FormInlineInput>
            <FormInlineInput>
              <FormInlineLabel>Broj telefona/Mobitela</FormInlineLabel>
              <FormInput type="text" pattern="[0-9]*" required />
            </FormInlineInput>
          </FormContainerInfoGroup>
        </FormContainer>
      </MainContainer>
    );
  }
}

export default CitizensEditEventInfo;
