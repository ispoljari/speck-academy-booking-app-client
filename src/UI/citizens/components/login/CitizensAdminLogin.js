import React from 'react';

import {
  LoginContainer,
  DataContainer,
  TitleAdminLogin,
  FormComponent,
  FormComponentName,
  FormComponentInput,
  LoginSubmitButton,
  LoginSubmitButtonText,
  FormComponent2,
  FormComponentName2,
  FormComponentInput2
} from './CitizensAdminLoginStyle';

const CitizensAdminLogin = () => (
  <LoginContainer>
    <DataContainer>
      <TitleAdminLogin>Admin Login</TitleAdminLogin>
      <FormComponent>
        <FormComponentName>KORISNIČKO IME</FormComponentName>
        <FormComponentInput />
      </FormComponent>
      <FormComponent2>
        <FormComponentName2>LOZINKA</FormComponentName2>
        <FormComponentInput2 />
      </FormComponent2>
      <LoginSubmitButton>
        <LoginSubmitButtonText>PRIJAVI ME</LoginSubmitButtonText>
      </LoginSubmitButton>
    </DataContainer>
  </LoginContainer>
);

export default CitizensAdminLogin;
