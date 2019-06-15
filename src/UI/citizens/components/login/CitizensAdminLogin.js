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
  state = {
    userName: '',
    password: ''
  };

  handleUserNameInput = e => {
    const userName = e.target.value;
    this.setState({
      userName
    });
  };

  handlePasswordInput = e => {
    const password = e.target.value;
    this.setState({
      password
    });
  };

  render() {
    return (
      <Container>
        <TitleAdminLogin>Admin Login</TitleAdminLogin>
        <ComponentBox>
          <InputWrapper>
            <Label>KORISNIČKO IME</Label>
            <Input
              onChange={this.handleUserNameInput}
              value={this.state.userName}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>LOZINKA</Label>
            <Input
              onChange={this.handlePasswordInput}
              value={this.state.password}
            />
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
