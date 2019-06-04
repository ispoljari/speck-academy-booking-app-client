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
  Vector,
  Input,
  Timeline,
  Time,
  Prazno,
  TimeDivide,
  Zauzeto,
  Slobodno,
  Zauzeto1,
  Legenda1,
  Legenda2,
  LegendaBoja,
  LegendaText
} from './StyleCitizensSelectDateTime';

var poc = [
  { datum: new Date(2019, 2, 11, 9, 30) },
  { datum: new Date(2019, 2, 11, 17, 15) }
];
var kraj = [
  { datum: new Date(2019, 2, 11, 12, 45) },
  { datum: new Date(2019, 2, 11, 21) }
];

function displaytimeline() {
  let divs = [];
  for (var i = 0; i < 57; i++) {
    if (i % 4 == 0) {
      divs.push(
        <TimeDivide style={{ borderLeft: ' 0.5px solid rgba(0, 0, 0, 0.2)' }} />
      );
    } else {
      divs.push(
        <TimeDivide
          style={{ borderLeft: ' 0.5px dashed rgba(0, 0, 0, 0.1)' }}
        />
      );
    }
  }
  return divs;
}

function displaytime() {
  let divs = [];
  for (var i = 8; i < 23; i++) {
    divs.push(<Time>{i}</Time>);
  }
  return divs;
}

function crtajZauzeto(poc, kraj) {
  const a = poc.length;
  let divs = [];
  for (var i = 0; i < a; i++) {
    var pocetak =
      25 +
      (poc[i].datum.getHours() - 8) * 50 +
      (poc[i].datum.getMinutes() / 15) * 12.5;
    var krj =
      25 +
      (kraj[i].datum.getHours() - 8) * 50 +
      (kraj[i].datum.getMinutes() / 15) * 12.5;
    var width = krj - pocetak;
    var style = {
      left: pocetak,
      width: width,
      backgroundColor: '#0f4850'
    };
    divs.push(<Zauzeto style={style} />);
  }
  return divs;
}

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
        <Input placeholder="DATUM..." type="text" />
        <Vector />
      </Rectangle>
      <Rectangle>
        <Input placeholder="VRIJEME..." type="text" />
        <Vector />
      </Rectangle>
      <Rectangle>
        <Input placeholder="VRIJEME..." type="text" />
        <Vector />
      </Rectangle>
    </Unos>
    <Timeline>
      {displaytime()}
      <Prazno />
      {displaytimeline()}
      {crtajZauzeto(poc, kraj)}
      <Zauzeto />
      <Slobodno />
      <Zauzeto1 />
    </Timeline>
    <Legenda1>
      <LegendaBoja style={{ backgroundColor: '#0f4850' }} />
      <LegendaText>Zauzeti termini</LegendaText>
    </Legenda1>
    <Legenda2>
      <LegendaBoja style={{ backgroundColor: '#93e9bb' }} />
      <LegendaText>Odabrani termin</LegendaText>
    </Legenda2>
  </Container>
);

export default CitizensSelectDateTime;
