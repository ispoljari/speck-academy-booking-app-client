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
    reservedDateTimeSlots,
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

  const setupDatePickerDisabledDays = isHallSelected =>
    isHallSelected
      ? { before: new Date() }
      : { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] };

  const setupDatePickerPlaceholder = isHallSelected =>
    isHallSelected ? 'ODABERITE DATUM...' : 'DVORANA NIJE ODABRANA';

  const detectReservedSlots = timeUnit => {
    const reservedHours = [];
    const reservedMinutes = [];

    const selEndHour = !!reservationEndTime && reservationEndTime.hours();
    const selStartHour = !!reservationStartTime && reservationStartTime.hours();
    const reservedDateTimeSlotsLength = reservedDateTimeSlots.length;

    if (reservedDateTimeSlotsLength > 0) {
      for (let i = 0; i < reservedDateTimeSlotsLength; i++) {
        const startHour = reservedDateTimeSlots[i].startTime.hour;
        const endHour = reservedDateTimeSlots[i].endTime.hour;
        const startMinute = reservedDateTimeSlots[i].startTime.minute;
        const endMinute = reservedDateTimeSlots[i].endTime.minute;

        const offset = startHour === 8 ? 0 : 1;
        for (let i = startHour + offset; i < endHour; i++) {
          reservedHours.push(i);
        }

        // if (startHour - selStartHour >= 1) {
        //   for (let i = endHour; i < 22; i++) {
        //     reservedHours.push(i);
        //   }
        // }

        if (selEndHour === startHour) {
          switch (startMinute) {
            case 0:
              reservedMinutes.push.apply(reservedMinutes, [15, 30, 45]);
              break;
            case 15:
              reservedMinutes.push.apply(reservedMinutes, [30, 45]);
              break;
            case 30:
              reservedMinutes.push.apply(reservedMinutes, [45]);
              break;
            default:
              break;
          }
        }

        // if (selStartHour === endHour) {
        //   switch (endMinute) {
        //     case 15:
        //       reservedMinutes.push.apply(reservedMinutes, [0]);
        //       break;
        //     case 30:
        //       reservedMinutes.push.apply(reservedMinutes, [0, 15]);
        //       break;
        //     case 45:
        //       reservedMinutes.push.apply(reservedMinutes, [0, 15, 30]);
        //       break;
        //     default:
        //       break;
        //   }
        // }
      }
    }

    if (timeUnit === 'hours') {
      return reservedHours;
    } else {
      return reservedMinutes;
    }
  };

  const disableTimePickerHours = timePosition => {
    const defaultBlockInterval = [0, 1, 2, 3, 4, 5, 6, 7, 22, 23];

    if (timePosition === 'end') {
      const startHour = reservationStartTime.hours();
      defaultBlockInterval.push(startHour);
    }

    const reservedHours = detectReservedSlots('hours');
    if (reservedHours.length > 0) {
      defaultBlockInterval.push.apply(defaultBlockInterval, reservedHours);
    }

    return defaultBlockInterval;
  };

  const disableTimePickerMinutes = timePosition => {
    const defaultBlockInterval = [];

    if (timePosition === 'end') {
      const startHour = reservationStartTime.hours();
      const startMinute = reservationStartTime.minutes();
      const endHour = !!reservationEndTime && reservationEndTime.hours();

      if (startMinute > 0 && endHour - startHour === 1) {
        switch (startMinute) {
          case 15:
            defaultBlockInterval.push(0);
            break;
          case 30:
            defaultBlockInterval.push.apply(defaultBlockInterval, [0, 15]);
            break;
          case 45:
            defaultBlockInterval.push.apply(defaultBlockInterval, [0, 15, 30]);
            break;
          default:
            break;
        }
      }
    }

    const reservedMinutes = detectReservedSlots('minutes');
    if (reservedMinutes.length > 0) {
      defaultBlockInterval.push.apply(defaultBlockInterval, reservedMinutes);
    }

    return defaultBlockInterval;
  };

  const generateTimePickerProps = timePosition => {
    const timeFieldIdentifier =
      timePosition === 'end' ? 'reservationEndTime' : 'reservationStartTime';

    const timePickerProps = {
      showSecond: false,
      onChange: handleReservationTimeChange(timeFieldIdentifier),
      format: 'HH:mm',
      className: 'xxx',
      disabled:
        !reservationDate || (timePosition === 'end' && !reservationStartTime),
      placeholder: 'VRIJEME...',
      minuteStep: 15,
      disabledHours: () => disableTimePickerHours(timePosition),
      disabledMinutes: () => disableTimePickerMinutes(timePosition)
    };

    return timePickerProps;
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
          <span>{selectedHallName || 'DVORANA NIJE ODABRANA'}</span>
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
              placeholder={setupDatePickerPlaceholder(!!selectedHallName)}
              dayPickerProps={{
                locale: 'hr',
                localeUtils: MomentLocaleUtils,
                disabledDays: setupDatePickerDisabledDays(!!selectedHallName)
              }}
              onDayChange={handleReservationDateChange}
            />
          </DateInput>
          <TimeInput>
            <TimePicker {...generateTimePickerProps('start')} />
            <span />
            <Vector />
          </TimeInput>
          <TimeInput>
            <TimePicker {...generateTimePickerProps('end')} />
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
