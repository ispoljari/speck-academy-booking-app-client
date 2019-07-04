import React from 'react';
import { NavLink } from 'react-router-dom';

import { Body, Container, Picture, Error, LinkContent } from './Error404Style';

const Error404 = () => (
  <Body>
    <Container>
      <Picture />
      <Error>Greška 404 - stranica nije pronađena</Error>
      <NavLink to="/">
        <LinkContent>Povratak</LinkContent>
      </NavLink>
    </Container>
  </Body>
);

export default Error404;
