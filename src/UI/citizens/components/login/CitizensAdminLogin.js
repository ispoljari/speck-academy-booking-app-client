import React from 'react';

import {
  Container,
  TitleAdminLogin,
  FormComponentBox,
  FormComponent,
  FormComponentName,
  FormComponentInput,
  LoginSubmitButton,
  LoginSubmitButtonText
} from './CitizensAdminLoginStyle';

const CitizensAdminLogin = () => (
  <Container>
    <TitleAdminLogin>Admin Login</TitleAdminLogin>
    <FormComponentBox>
      <FormComponent>
        <FormComponentName>KORISNIČKO IME</FormComponentName>
        <FormComponentInput />
      </FormComponent>
      <FormComponent>
        <FormComponentName>LOZINKA</FormComponentName>
        <FormComponentInput />
      </FormComponent>
    </FormComponentBox>
    <LoginSubmitButton>
      <LoginSubmitButtonText>PRIJAVI ME</LoginSubmitButtonText>
    </LoginSubmitButton>
  </Container>
);

export default CitizensAdminLogin;
