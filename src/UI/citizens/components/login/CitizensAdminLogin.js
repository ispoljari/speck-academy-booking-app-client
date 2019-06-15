import React, { Component } from 'react';

import {
  Container,
  TitleAdminLogin,
  ComponentBox,
  InputWrapper,
  Label,
  Input,
  Submit,
  TextField
} from './CitizensAdminLoginStyle';

class CitizensAdminLogin extends Component {
  render() {
    return (
      <Container>
        <TitleAdminLogin>Admin Login</TitleAdminLogin>
        <ComponentBox>
          <InputWrapper>
            <Label>KORISNIČKO IME</Label>
            <Input />
          </InputWrapper>
          <InputWrapper>
            <Label>LOZINKA</Label>
            <Input />
          </InputWrapper>
        </ComponentBox>
        <Submit>
          <TextField>PRIJAVI ME</TextField>
        </Submit>
      </Container>
    );
  }
}

export default CitizensAdminLogin;
