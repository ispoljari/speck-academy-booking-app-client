import React from 'react';

import {
  Body,
  Container,
  TitleAdminLogin,
  ComponentBox,
  Component,
  ComponentName,
  ComponentInput,
  Message,
  SubmitButton,
  SubmitButtonText
} from './CitizensAdminLoginUnsuccessfullStyle';

const CitizensAdminLoginUnsuccessfull = () => (
  <Body>
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
      <Message>NETOČNO KORISNIČKO IME ILI LOZINKA</Message>
      <SubmitButton>
        <SubmitButtonText>PRIJAVI ME</SubmitButtonText>
      </SubmitButton>
    </Container>
  </Body>
);

export default CitizensAdminLoginUnsuccessfull;
