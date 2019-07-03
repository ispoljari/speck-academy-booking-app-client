import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment';
import 'moment/locale/hr';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
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

const CitizensSelectDateTime = props => {
  const {
    selectedHallName,
    reservationDate,
    reservationStartTime,
    reservationEndTime,
    selectedHallReservations,
    handleReservationDateChange,
    handleReservationTimeChange
  } = props;
  const filteredReservations = [];

  // Filter reservations by selected date
  if (reservationDate) {
    for (const reservation of selectedHallReservations) {
      const selectedDate = reservationDate.toDateString();
      const reservedDate = new Date(reservation.reservationDate).toDateString();

      if (selectedDate === reservedDate) {
        filteredReservations.push(reservation);
      }
    }
  }

  const drawSelected = () => {
    if (!reservationStartTime || !reservationEndTime) return null;
    console.log('Input time 1::  ', reservationStartTime);
    console.log('Input time 2::  ', reservationEndTime);
    const startTime = moment(reservationStartTime)
      .format('HH:mm')
      .split(':');
    const endTime = moment(reservationEndTime)
      .format('HH:mm')
      .split(':');

    const startHour = parseInt(startTime[0], 10);
    const startMinute = parseInt(startTime[1], 10);
    const endHour = parseInt(endTime[0], 10);
    const endMinute = parseInt(endTime[1], 10);

    const begin = 25 + (startHour - 8) * 50 + (startMinute / 15) * 12.5;
    const end = 25 + (endHour - 8) * 50 + (endMinute / 15) * 12.5;

    const width = end - begin;

    return (
      <DrawFromDB left={begin + 'px'} wdh={width + 'px'} background="#93e9bb" />
    );
  };

  const drawFromDB = () => {
    const divs = [];

    for (const reservation of filteredReservations) {
      const startTime = reservation.reservationStartTime.split(':');
      const endTime = reservation.reservationEndTime.split(':');

      const startHour = parseInt(startTime[0], 10);
      const startMinute = parseInt(startTime[1], 10);
      const endHour = parseInt(endTime[0], 10);
      const endMinute = parseInt(endTime[1], 10);

      const startOffset = 25 + (startHour - 8) * 50 + (startMinute / 15) * 12.5;
      const totalWidth = 25 + (endHour - 8) * 50 + (endMinute / 15) * 12.5;

      divs.push(
        <DrawFromDB
          left={startOffset + 'px'}
          wdh={totalWidth - startOffset + 'px'}
          background="#0f4850"
        />
      );
    }

    return divs;
  };

  return (
    <HeadContainer>
      <Circle>
        <Number>2</Number>
      </Circle>
      <Field>
        <Title>Odaberite datum i vrijeme:</Title>
        <SubTitle hallSelected={!!selectedHallName}>
          Označite slobodan termin na kalendaru za Vaš odabir:{' '}
          <span>{selectedHallName || 'NEMA ODABIRA'}</span>
        </SubTitle>
        <Hlabel>ODABERITE DATUM:</Hlabel>
        <Hlabel>ODABERITE VRIJEME:</Hlabel>
        <LabelContainer>
          <Label>POČETAK</Label>
          <Label>KRAJ</Label>
        </LabelContainer>
        <InputsContainer>
          <DateInput>
            <DayPickerInput
              formatDate={formatDate}
              parseDate={parseDate}
              format="l"
              placeholder={`ODABERITE DATUM...`}
              dayPickerProps={{
                locale: 'hr',
                localeUtils: MomentLocaleUtils
              }}
              onDayChange={handleReservationDateChange}
            />
          </DateInput>
          <TimeInput>
            <TimePicker
              showSecond={false}
              onChange={handleReservationTimeChange('reservationStartTime')}
              format={'HH:mm'}
              className="xxx"
            />
            <span />
            <Vector />
          </TimeInput>
          <TimeInput>
            <TimePicker
              showSecond={false}
              onChange={handleReservationTimeChange('reservationEndTime')}
              format={'HH:mm'}
              className="xxx"
            />
            <span />
            <Vector />
          </TimeInput>
        </InputsContainer>
        <Timeline>
          {displayTime()}
          {displayTimeline()}
          {drawFromDB()}
          {drawSelected()}
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
};

export default CitizensSelectDateTime;
