import React from 'react';

import {
  Container,
  Krug,
  Broj,
  Datum,
  Oznacite,
  Podebljano,
  OdaberiteDatum,
  OdaberiteVrijeme,
  Pocetak,
  Kraj,
  Unos,
  Rectangle,
  UnosTexta,
  Vector
} from './StyleCitizensSelectDateTime';

const CitizensSelectDateTime = () => (
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
    <Broj>2</Broj>
    <Datum>Odaberite datum i vrijeme:</Datum>
    <Oznacite>
      Označite slobodan termin na kalendaru za Vaš odabir:{' '}
      <Podebljano>Konferencijska dvorana RCTP.</Podebljano>
    </Oznacite>
    <OdaberiteDatum>ODABERITE DATUM:</OdaberiteDatum>
    <OdaberiteVrijeme>ODABERITE VRIJEME:</OdaberiteVrijeme>
    <Pocetak>POČETAK</Pocetak>
    <Kraj>KRAJ</Kraj>
    <Unos>
      <Rectangle>
        <UnosTexta>DATUM...</UnosTexta>
        <Vector />
      </Rectangle>
      <Rectangle>
        <UnosTexta>VRIJEME...</UnosTexta>
        <Vector />
      </Rectangle>
      <Rectangle>
        <UnosTexta>VRIJEME...</UnosTexta>
        <Vector />
      </Rectangle>
    </Unos>
  </Container>
);

export default CitizensSelectDateTime;
