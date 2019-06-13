import React from 'react';

import { Body, Container, Picture, Error, Button } from './Error404Style';

const Error404 = () => (
  <Body>
    <Container>
      <Picture />
      <Error>Greška 404 - stranica nije pronađena</Error>
      <Button>POVRATAK</Button>
    </Container>
  </Body>
);

export default Error404;
