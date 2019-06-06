import React from 'react';
import {
  Container,
  Krug,
  Broj,
  Title,
  SubTitle,
  Hlabel,
  Label,
  LabelContainer,
  UnosDatum,
  UnosVremena,
  UnosContainer,
  Vector,
  Timeline,
  Time,
  Prazno,
  TimeDivide,
  Zauzeto,
  Legenda,
  LegendaOpis,
  LegendaBoja,
  LegendaText,
  Field
} from './StyleCitizensSelectDateTime';

var novi = {
  id: 2,
  name: 'Dvorana Hrvatskog doma',
  address: 'Ul. Antuna Gustava Matoça 4',
  pictureUrl:
    'https://www.pou-krizevci.hr/wp-content/uploads/2011/05/velika_01.jpg',
  description: 'Hrvatski dom',
  createdAt: '2019-06-02T04:24:11.216Z',
  updatedAt: '2019-06-02T04:24:11.216Z',
  hallReservaltions: [
    {
      id: 4,
      hallFk: 2,
      reservationTitle: 'Re-volt',
      reservationDescription: 'igranje re-volta',
      reservationStatus: 'approved',
      reservationDate: '2019-06-20',
      reservationStartTime: '09:30:00',
      reservationEndTime: '11:30:00',
      citizenFullName: 'Tomislav Horvat',
      citizenOrganization: null,
      citizenEmail: 'tomislav.horvat@gmail.com',
      citizenPhoneNumber: '098...',
      createdAt: '2019-06-02T18:44:59.906601',
      updatedAt: '2019-06-02T20:01:40.4'
    },
    {
      id: 6,
      hallFk: 2,
      reservationTitle: 'Rezervcacija1',
      reservationDescription: 'neki opis bla bla bla bla bla',
      reservationStatus: 'pending',
      reservationDate: '2019-06-20',
      reservationStartTime: '17:00:00',
      reservationEndTime: '18:00:00',
      citizenFullName: 'Ivan Ivic',
      citizenOrganization: 'neka organizacija',
      citizenEmail: 'korisnik@email.com',
      citizenPhoneNumber: '097...',
      createdAt: '2019-06-05T19:04:31.744607',
      updatedAt: '2019-06-05T19:04:31.744607'
    },
    {
      id: 8,
      hallFk: 2,
      reservationTitle: 'Board games',
      reservationDescription: 'Zabava uz board gameove',
      reservationStatus: 'pending',
      reservationDate: '2019-06-20',
      reservationStartTime: '12:00:00',
      reservationEndTime: '13:00:00',
      citizenFullName: 'Jurica Šogorić',
      citizenOrganization: 'IT-S2',
      citizenEmail: 'jurica@email.com',
      citizenPhoneNumber: '097...',
      createdAt: '2019-06-05T19:06:37.980537',
      updatedAt: '2019-06-05T19:06:37.980537'
    }
  ]
};

var Odabrano = [
  {
    datum: new Date(2019, 2, 11),
    pocetak: new Date(2019, 2, 11, 19, 30),
    kraj: new Date(2019, 2, 11, 21, 45)
  }
];

function displaytimeline() {
  let divs = [];
  for (var i = 0; i < 57; i++) {
    if (i % 4 == 0) {
      divs.push(<TimeDivide left="0.5px solid rgba(0, 0, 0, 0.2)" />);
    } else {
      divs.push(<TimeDivide left="0.5px dashed rgba(0, 0, 0, 0.1)" />);
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

function crtajOdabrano(Odabrano) {
  let divs = [];
  var poc =
    25 +
    (Odabrano[0].pocetak.getHours() - 8) * 50 +
    (Odabrano[0].pocetak.getMinutes() / 15) * 12.5;
  var krj =
    25 +
    (Odabrano[0].kraj.getHours() - 8) * 50 +
    (Odabrano[0].kraj.getMinutes() / 15) * 12.5;
  var width = krj - poc;
  divs.push(<Zauzeto left={poc} duljina={width} background="#93e9bb" />);
  return divs;
}

function ispis(novi) {
  let divs = [];
  var a = novi.hallReservaltions.length;
  for (var i = 0; i < a; i++) {
    var kraj = novi.hallReservaltions[i].reservationEndTime.split(':');
    var poc = novi.hallReservaltions[i].reservationStartTime.split(':');
    var Pocetak = 25 + (poc[0] - 8) * 50 + (poc[1] / 15) * 12.5;
    var Kraj = 25 + (kraj[0] - 8) * 50 + (kraj[1] / 15) * 12.5;
    divs.push(
      <Zauzeto left={Pocetak} duljina={Kraj - Pocetak} background="#0f4850" />
    );
  }
  return divs;
}

const CitizensSelectDateTime = () => (
  <Container>
    <Krug>
      <Broj>2</Broj>
    </Krug>
    <Field>
      <Title>Odaberite datum i vrijeme:</Title>
      <SubTitle>
        Označite slobodan termin na kalendaru za Vaš odabir:{' '}
        <span>Konferencijska dvorana RCTP.</span>
      </SubTitle>
      <Hlabel>ODABERITE DATUM:</Hlabel>
      <Hlabel>ODABERITE VRIJEME:</Hlabel>
      <LabelContainer>
        <Label>POČETAK</Label>
        <Label>KRAJ</Label>
      </LabelContainer>
      <UnosContainer>
        <UnosDatum>
          <input type="date" required="required" placeholder="DATUM..." />
          <span />
          <Vector />
        </UnosDatum>
        <UnosVremena>
          <input type="time" required="required" placeholder="DATUM..." />
          <span />
          <Vector />
        </UnosVremena>
        <UnosVremena>
          <input type="time" required="required" placeholder="DATUM..." />
          <span />
          <Vector />
        </UnosVremena>
      </UnosContainer>
      <Timeline>
        {displaytime()}
        <Prazno />
        {displaytimeline()}
        {ispis(novi)}
        {crtajOdabrano(Odabrano)}
      </Timeline>
      <Legenda>
        <LegendaOpis>
          <LegendaBoja boja="#0f4850" />
          <LegendaText>Zauzeti termini</LegendaText>
        </LegendaOpis>
        <LegendaOpis>
          <LegendaBoja boja="#93e9bb" />
          <LegendaText>Odabrani termin</LegendaText>
        </LegendaOpis>
      </Legenda>
    </Field>
  </Container>
);

export default CitizensSelectDateTime;
