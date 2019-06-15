import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { API_BASE_URL } from '../../../../config';

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
    password: '',
    loggedIn: false
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

  handleSubmit = async e => {
    e.preventDefault();

    const apiResponse = await fetch(`${API_BASE_URL}/admins/login`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    console.log(apiResponse);
  };

  render() {
    const { userName, password, loggedIn } = this.state;

    if (loggedIn) {
      return <Redirect to="/admin-requests" />;
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>Admin Login</Title>
        <FlexContainer>
          <InputComponent
            label="Korisničko ime"
            inputID="login_userName"
            onChange={this.handleUserNameInput}
            value={userName}
          />
          <InputComponent
            label="Lozinka"
            inputID="login_password"
            onChange={this.handlePasswordInput}
            value={password}
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
