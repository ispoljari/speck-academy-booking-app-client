import React from 'react';

import {
  MainWrapper,
  MainTitleWrapper,
  MainTitle,
  TableAndInfoWrapper,
  TableWrapper,
  HoursDivRow,
  HourDiv,
  LastHourDiv,
  Line,
  OneDayDivRow,
  OneDayDivRowText,
  ReservationDynamicDiv,
  PopUpInfo,
  PopUpInfoText,
  //Table,
  //TableData,
  Info,
  InfoTitle,
  InfoTime,
  InfoButton,
  InfoEraseButton,
  InfoEraseButtonText
} from './style.js';

import dataArray from './newData.js';

let daysOfWeek = ['PON', 'UTO', 'SRI', 'ČET', 'PET', 'SUB', 'NED'];
let hoursOfDay = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]; //hour 22 is different

function myFunction() {
  /*  alert('isVisible:' + isVisible);
  isVisible = false;
  alert('isVisible:' + isVisible);
  return myFunction;*/
}
let isVisible = true;

//const PopUpInfo = visible

function calcPositionAndLEngth(date, startTime, endTime) {
  const offset = 69;
  let existStartLength = {
    exist: true,
    start: 0,
    length: 0
  };
  console.log(startTime + ' ' + endTime);
  existStartLength.start =
    new Date(date + ' ' + startTime) - new Date(date + ' 00:00:00');
  console.log(
    'provjera' +
      new Date(date + ' ' + startTime) +
      ' ' +
      new Date(date + ' 00:00:00')
  );
  existStartLength.start = existStartLength.start / 1000 / 60 / 60;
  console.log(existStartLength.start);
  existStartLength.start = existStartLength.start - 8;
  existStartLength.start = existStartLength.start * 50;
  existStartLength.start = existStartLength.start + offset;
  console.log(existStartLength.start);
  //existStartLength.start = existStartLength.start * 50;

  existStartLength.length =
    new Date(date + ' ' + endTime) - new Date(date + ' ' + startTime);
  existStartLength.length = existStartLength.length / 1000 / 60 / 60;
  existStartLength.length = existStartLength.length * 50;
  console.log(existStartLength.length);

  return existStartLength;
}

function refresfInfo() {}

//const ScheduleComponenet = props => (
class ScheduleComponenet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dummyDataArray: dataArray };
  }

  render() {
    return (
      <MainWrapper>
        <MainTitleWrapper>
          <MainTitle>Moj Veeeliki naslov</MainTitle>
        </MainTitleWrapper>
        <TableAndInfoWrapper>
          <TableWrapper>
            <HoursDivRow>
              {hoursOfDay.map(hour => {
                return <HourDiv>{hour}</HourDiv>;
              })}
              <LastHourDiv>22</LastHourDiv>
            </HoursDivRow>
            <Line />

            {daysOfWeek.map(day => {
              return (
                <OneDayDivRow>
                  <OneDayDivRowText onClick={refresfInfo}>
                    {day}
                  </OneDayDivRowText>

                  {this.state.dummyDataArray[0].hallReservaltions.map(
                    hallReservaltions => {
                      //calcPositionAndLEngth(hallReservaltions.reservationDate, hallReservaltions.reservationStartTime, hallReservaltions.reservationEndTime);
                      let obj = calcPositionAndLEngth(
                        hallReservaltions.reservationDate,
                        hallReservaltions.reservationStartTime,
                        hallReservaltions.reservationEndTime
                      );
                      console.log('obj: ' + obj);
                      return (
                        <ReservationDynamicDiv
                          length={obj.length}
                          start={obj.start}
                          exist={obj.exist}
                        >
                          <PopUpInfo position={this.state}>
                            <PopUpInfoText>
                              {//this.state.dummyDataArray[0].event
                              //this.state.dummyDataArray[0].hallReservaltions[0]
                              //.
                              hallReservaltions.reservationTitle +
                                ' ' +
                                hallReservaltions.reservationDate +
                                ' ' +
                                hallReservaltions.reservationStartTime +
                                ' ' +
                                hallReservaltions.reservationEndTime}
                            </PopUpInfoText>
                          </PopUpInfo>
                        </ReservationDynamicDiv>
                      );
                    }
                  )}
                </OneDayDivRow>
              );
            })}
          </TableWrapper>

          <Info>
            <InfoTitle>
              {
                //this.state.dummyDataArray[0].event
                this.state.dummyDataArray[0].hallReservaltions[0]
                  .reservationTitle
              }
            </InfoTitle>
            <InfoTime>
              {//this.state.dummyDataArray[0].startTime.toString().substring(4, 25)
              this.state.dummyDataArray[0].hallReservaltions[0]
                .reservationDate +
                ' ' +
                this.state.dummyDataArray[0].hallReservaltions[0]
                  .reservationStartTime}{' '}
              -
              {
                //this.state.dummyDataArray[0].endTime.toString().substring(4, 25)
                this.state.dummyDataArray[0].hallReservaltions[0]
                  .reservationEndTime
              }
            </InfoTime>
            <InfoButton />
            <InfoEraseButton>
              <InfoEraseButtonText>IZBRIŠI</InfoEraseButtonText>
            </InfoEraseButton>
          </Info>
        </TableAndInfoWrapper>
      </MainWrapper>
    );
  }
}

export default ScheduleComponenet;
