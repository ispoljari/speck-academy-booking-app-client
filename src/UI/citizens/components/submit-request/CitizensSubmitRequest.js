import React from 'react';

import {
  Container,
  Title,
  Krug,
  Broj,
  Mail,
  Adresa,
  Mobitel,
  Kontakt,
  Opis,
  Nesto,
  Button2
} from './CitizensSubmitRequestStyle';

const CitizensSubmitRequest = () => (
  <Container>
    <link
      rel="stylesheet"
      media="screen"
      href="https://fontlibrary.org/face/poppins"
      type="text/css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Lora"
    />

    <Krug />
    <Broj>4</Broj>

    <Title>Kraj</Title>

    <Opis>
      Nakon što ste ispunili sve podatke, pošaljite svoj zahtjev na razmatranje.
      Povratnu informaciju ćete dobiti u <p>što kraćem roku.</p>
      <br />
      Za sva dodatnja pitanja, kontaktirajte nas:
    </Opis>
    <Nesto>
      <Mail>E-MAIL</Mail>
      <Adresa>info@grad-krizevci.hr</Adresa>
      <br />
    </Nesto>
    <Nesto>
      <Kontakt>MOBITEL</Kontakt>
      <Mobitel>099 / 12 34 5678</Mobitel>
    </Nesto>

    <Button2>POŠALJITE ZAHTIJEV</Button2>
  </Container>
);

export default CitizensSubmitRequest;
