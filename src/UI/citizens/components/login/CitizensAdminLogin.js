import React from 'react';

import {
  LoginContainer,
  TitleAdminLogin,
  FormComponentBox,
  FormComponent,
  FormComponentName,
  FormComponentInput,
  LoginSubmitButton,
  LoginSubmitButtonText
} from './CitizensAdminLoginStyle';

const CitizensAdminLogin = () => (
  <LoginContainer>
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
  </LoginContainer>
);

export default CitizensAdminLogin;
