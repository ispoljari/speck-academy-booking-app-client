import React, { Component } from 'react';

import {
  MainContainer,
  TitleAdminLogin,
  FlexContainer,
  InputWrapper,
  Label,
  Input,
  Submit,
  TextField
} from './CitizensAdminLoginStyle';

const InputComponent = ({ label, onChange, value }) => (
  <InputWrapper>
    <Label>{label}</Label>
    <Input
      type="text"
      required
      pattern="[a-zA-Z0-9\s]+"
      onChange={onChange}
      value={value}
    />
  </InputWrapper>
);

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
      <MainContainer>
        <TitleAdminLogin>Admin Login</TitleAdminLogin>
        <FlexContainer>
          <InputComponent
            label="Korisničko ime"
            onChange={this.handleUserNameInput}
            value={this.state.userName}
          />
          <InputComponent
            label="Lozinka"
            onChange={this.handlePasswordInput}
            value={this.state.password}
          />
        </FlexContainer>
        <Submit>
          <TextField>Prijavi me</TextField>
        </Submit>
      </MainContainer>
    );
  }
}

export default CitizensAdminLogin;
