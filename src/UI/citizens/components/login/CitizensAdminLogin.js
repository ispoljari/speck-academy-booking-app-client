import React from 'react';

import {
  Container,
  TitleAdminLogin,
  ComponentBox,
  Component,
  ComponentName,
  ComponentInput,
  SubmitButton,
  SubmitButtonText
} from './CitizensAdminLoginStyle';

const CitizensAdminLogin = () => (
  <Container>
    <TitleAdminLogin>Admin Login</TitleAdminLogin>
    <ComponentBox>
      <Component>
        <ComponentName>KORISNIČKO IME</ComponentName>
        <ComponentInput />
      </Component>
      <Component>
        <ComponentName>LOZINKA</ComponentName>
        <ComponentInput />
      </Component>
    </ComponentBox>
    <SubmitButton>
      <SubmitButtonText>PRIJAVI ME</SubmitButtonText>
    </SubmitButton>
  </Container>
);

export default CitizensAdminLogin;
