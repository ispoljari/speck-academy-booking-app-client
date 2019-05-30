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
  Zauzeto,
  Slobodno,
  Zauzeto1,
  Legenda1,
  Legenda2,
  LegendaBoja,
  LegendaText
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
      <Time>8</Time>
      <Time>9</Time>
      <Time>10</Time>
      <Time>11</Time>
      <Time>12</Time>
      <Time>13</Time>
      <Time>14</Time>
      <Time>15</Time>
      <Time>16</Time>
      <Time>17</Time>
      <Time>18</Time>
      <Time>19</Time>
      <Time>20</Time>
      <Time>21</Time>
      <Time>22</Time>
      <Prazno />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
      <TimeDivide />
      <TimeDivide />
      <TimeDivide />
      <TimeDivideFull />
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
      <LegendaText>Slobodni termini</LegendaText>
    </Legenda2>
  </Container>
);

export default CitizensSelectDateTime;
