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
  constructor(props) {
    super(props);
    this.state = {
      eventName: '',
      eventDescription: '',
      nameAndSurname: '',
      email: '',
      organisation: '',
      phoneNumber: '',
      charCounter: 0
    };
  }

  handleEventNameChange = event => {
    this.setState({ eventName: event.target.value });
  };

  handleEventDescriptionChange = event => {
    this.setState({ eventDescription: event.target.value });
  };

  handleNameAndSurnameChange = event => {
    this.setState({ nameAndSurname: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleOrganisationChange = event => {
    this.setState({ organisation: event.target.value });
  };

  handlePhoneNumberChange = event => {
    this.setState({ phoneNumber: event.target.value });
  };

  // state = {
  //   charCounter: 0
  // };

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
          <FormInput
            type="text"
            value={this.state.eventName}
            onChange={this.handleEventNameChange}
            required
          />
          <FormHeader>Opis događaja:</FormHeader>
          <FormInputText
            placeholder="OPIŠITE SVOJ DOGAĐAJ..."
            type="text"
            maxLength="500"
            onChange={this.handleCharCount}
            value={this.state.eventDescription}
            onChange={this.handleEventDescriptionChange}
            required
          />
          <FormInputTextCharacterCounter>
            {this.state.charCounter} / 500 znakova
          </FormInputTextCharacterCounter>
          <FormHeader>Vaši kontakt podaci:</FormHeader>
          <FormContainerInfoGroup>
            <FormInlineInput>
              <FormInlineLabel>Ime i prezime</FormInlineLabel>
              <FormInput
                value={this.state.nameAndSurname}
                onChange={this.handleNameAndSurnameChange}
                required
              />
            </FormInlineInput>
            <FormInlineInput>
              <FormInlineLabel>Organizacija (nije obavezno)</FormInlineLabel>
              <FormInput
                value={this.state.organisation}
                onChange={this.handleOrganisationChange}
              />
            </FormInlineInput>
            <FormInlineInput>
              <FormInlineLabel>E-mail adresa</FormInlineLabel>
              <FormInput
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                required
              />
            </FormInlineInput>
            <FormInlineInput>
              <FormInlineLabel>Broj telefona/Mobitela</FormInlineLabel>
              <FormInput
                type="text"
                pattern="[0-9]*"
                value={this.state.phoneNumber}
                onChange={this.handlePhoneNumberChange}
                required
              />
            </FormInlineInput>
          </FormContainerInfoGroup>
        </FormContainer>
      </MainContainer>
    );
  }
}

export default CitizensEditEventInfo;
