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
  TimeDivideFull,
  TimeDivideWrapper,
  Zauzeto,
  Slobodno,
  Zauzeto1,
  Legenda1,
  Legenda2,
  LegendaBoja,
  LegendaText
} from './style.js';

const a = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 222];

/*const TimeLine2 = (props) => {
  return (
    {a.map(i => {
      return
      <div>
        <Time>8</Time>
        <TimeDivideFull />
        <TimeDivide />
        <TimeDivide />
        <TimeDivide />
      </div>
      })}
      )

    };
*/

const TimeLine2 = () => {
  return (
    <div>
      {a.map(i => {
        return <Time>{i}</Time>;
      })}
    </div>
  );
};

const TimeLine3 = () => {
  return (
    <div>
      {a.map(i => {
        return (
          <TimeDivideWrapper>
            <TimeDivideFull />
            <TimeDivide />
            <TimeDivide />
            <TimeDivide />
          </TimeDivideWrapper>
        );
      })}
    </div>
  );
};

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
        <Input placeholder="DATUM..." type="date" />
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
      <TimeLine2 />
      <Prazno />
      <TimeLine3 />
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
//export TimeLine2, CitizensSelectDateTime;
