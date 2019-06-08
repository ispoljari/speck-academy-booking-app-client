import React from 'react';
import {
  HeadContainer,
  Circle,
  Number,
  Title,
  SubTitle,
  Hlabel,
  Label,
  LabelContainer,
  DateInput,
  TimeInput,
  InputsContainer,
  Vector,
  Timeline,
  Time,
  TimeDivide,
  DrawFromDB,
  Legend,
  LegendDesc,
  LegendColor,
  LegendText,
  Field
} from './StyleCitizensSelectDateTime';

var reservation = {
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
      reservationStartTime: '13:00:00',
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

var selected = [
  {
    datum: new Date(2019, 2, 11),
    pocetak: new Date(2019, 2, 11, 19, 30),
    kraj: new Date(2019, 2, 11, 21, 45)
  }
];

function displayTimeline() {
  let divs = [];
  divs.push(<TimeDivide />);
  divs.push(<TimeDivide />);
  for (var i = 0; i < 57; i++) {
    if (i % 4 == 0) {
      divs.push(<TimeDivide left="0.5px solid rgba(0, 0, 0, 0.2)" />);
    } else {
      divs.push(<TimeDivide left="0.5px dashed rgba(0, 0, 0, 0.1)" />);
    }
  }
  return divs;
}

function displayTime() {
  let divs = [];
  for (var i = 8; i < 23; i++) {
    divs.push(<Time>{i}</Time>);
  }
  return divs;
}

function drawSelected(selected) {
  let divs = [];
  var begin =
    25 +
    (selected[0].pocetak.getHours() - 8) * 50 +
    (selected[0].pocetak.getMinutes() / 15) * 12.5;
  var end =
    25 +
    (selected[0].kraj.getHours() - 8) * 50 +
    (selected[0].kraj.getMinutes() / 15) * 12.5;
  var width = end - begin;
  divs.push(
    <DrawFromDB left={begin + 'px'} wdh={width + 'px'} background="#93e9bb" />
  );
  return divs;
}

function drawFromDataBase(reservation) {
  let divs = [];
  var a = reservation.hallReservaltions.length;
  for (var i = 0; i < a; i++) {
    var end = reservation.hallReservaltions[i].reservationEndTime.split(':');
    var begin = reservation.hallReservaltions[i].reservationStartTime.split(
      ':'
    );
    var beginLeft = 25 + (begin[0] - 8) * 50 + (begin[1] / 15) * 12.5;
    var width = 25 + (end[0] - 8) * 50 + (end[1] / 15) * 12.5;
    divs.push(
      <DrawFromDB
        left={beginLeft + 'px'}
        wdh={width - beginLeft + 'px'}
        background="#0f4850"
      />
    );
  }
  return divs;
}

const CitizensSelectDateTime = () => (
  <HeadContainer>
    <Circle>
      <Number>2</Number>
    </Circle>
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
      <InputsContainer>
        <DateInput>
          <input type="date" required="required" placeholder="DATUM..." />
          <span />
          <Vector />
        </DateInput>
        <TimeInput>
          <input type="time" required="required" placeholder="DATUM..." />
          <span />
          <Vector />
        </TimeInput>
        <TimeInput>
          <input
            type="time"
            required="required"
            placeholder="DATUM..."
            min="08:00"
            max="22:00"
            required
            step="900"
          />
          <span />
          <Vector />
        </TimeInput>
      </InputsContainer>
      <Timeline>
        {displayTime()}
        {displayTimeline()}
        {drawFromDataBase(reservation)}
        {drawSelected(selected)}
      </Timeline>
      <Legend>
        <LegendDesc>
          <LegendColor col="#0f4850" />
          <LegendText>Zauzeti termini</LegendText>
        </LegendDesc>
        <LegendDesc>
          <LegendColor col="#93e9bb" />
          <LegendText>Odabrani termin</LegendText>
        </LegendDesc>
      </Legend>
    </Field>
  </HeadContainer>
);

export default CitizensSelectDateTime;
