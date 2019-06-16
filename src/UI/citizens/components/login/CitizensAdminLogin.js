import React, { Component } from 'react';

import { API_BASE_URL } from '../../../../config';
import { findSessionCookie, fetchDataFromAPI } from '../../../../util';
import {
  Form,
  Title,
  FlexContainer,
  Label,
  Input,
  SubmitBtn,
  TextField
} from './CitizensAdminLoginStyle';

const errorMsg = 'There has been an error';

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
    error: null
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
    this.resetError();

    const loginEndpoint = `${API_BASE_URL}/admins/login`;
    const loginHttpConfig = {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password
      }),
      headers: { 'Content-Type': 'application/json' }
    };

    try {
      const apiResponse = await fetchDataFromAPI(
        loginEndpoint,
        loginHttpConfig
      );

      if (!apiResponse.ok) {
        throw new Error(errorMsg);
      }

      if (apiResponse.status === 200) {
        this.processResponse();
      } else {
        throw new Error(errorMsg);
      }
    } catch (error) {
      this.processError(error);
    }
  };

  processResponse = () => {
    const isSessionCookie = findSessionCookie();

    if (isSessionCookie) {
      this.props.confirmAdminLogin();
    } else {
      this.processError(errorMsg);
    }
  };

  processError = error => {
    this.setState({
      error
    });
  };

  resetError = () => {
    this.setState({
      error: null
    });
  };

  render() {
    const { userName, password, error } = this.state;

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
        {error ? (
          <TextField marginTop="10px" error>
            Netočno korisničko ime ili lozinka
          </TextField>
        ) : (
          ''
        )}
        <SubmitBtn type="submit">
          <TextField marginTop="0">Prijavi me</TextField>
        </SubmitBtn>
      </Form>
    );
  }
}

export default CitizensAdminLogin;
