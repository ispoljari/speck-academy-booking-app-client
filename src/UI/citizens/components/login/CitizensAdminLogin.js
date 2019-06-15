import React, { Component } from 'react';

import {
  Form,
  Title,
  FlexContainer,
  Label,
  Input,
  SubmitBtn,
  TextField
} from './CitizensAdminLoginStyle';

const InputComponent = ({ label, inputID, onChange, value }) => (
  <div>
    <Label htmlFor={inputID}>{label}</Label>
    <Input
      id={inputID}
      type="text"
      required
      pattern="[a-zA-Z0-9\s]+"
      onChange={onChange}
      value={value}
    />
  </div>
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

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>Admin Login</Title>
        <FlexContainer>
          <InputComponent
            label="Korisničko ime"
            inputID="login_userName"
            onChange={this.handleUserNameInput}
            value={this.state.userName}
          />
          <InputComponent
            label="Lozinka"
            inputID="login_password"
            onChange={this.handlePasswordInput}
            value={this.state.password}
          />
        </FlexContainer>
        <SubmitBtn type="submit">
          <TextField>Prijavi me</TextField>
        </SubmitBtn>
      </Form>
    );
  }
}

export default CitizensAdminLogin;
