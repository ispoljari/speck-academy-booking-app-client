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
  //InfoButton,
  InfoEraseButton,
  InfoEraseButtonText,
  Details
} from './AdminHallReservationStyle.js';

import DetailsIcon from '../../../../images/Details@3x.png';

import dataArray from './newData.js';

//TODO delete all console logs
//TODO CHANGE NAME OF existStartLength

const daysOfWeek = ['PON', 'UTO', 'SRI', 'ČET', 'PET', 'SUB', 'NED'];
//javascript maps days like this
const daysOfWeekNumerals = [1, 2, 3, 4, 5, 6, 0];

//const hoursOfDay = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]; //hour 22 is different

//todo rewrite this function with smaller functions inside
function calcPositionAndLEngth(date, startTime, endTime) {
  const offset = 69;
  let existStartLength = {
    start: 0,
    length: 0
  };
  //TODO delete console.log
  console.log(startTime + ' ' + endTime);
  existStartLength.start =
    new Date(date + ' ' + startTime) - new Date(date + ' 00:00:00');
  //TODO delete console.log
  console.log(
    'provjera' +
      new Date(date + ' ' + startTime) +
      ' ' +
      new Date(date + ' 00:00:00')
  );
  existStartLength.start = existStartLength.start / 1000 / 60 / 60;
  console.log(existStartLength.start);
  existStartLength.start = existStartLength.start - 8; //because we start at 8 o'clock
  existStartLength.start = existStartLength.start * 50; // hours to pixels
  existStartLength.start = existStartLength.start + offset; // adding offset
  console.log(existStartLength.start);

  existStartLength.length =
    new Date(date + ' ' + endTime) - new Date(date + ' ' + startTime);
  existStartLength.length = existStartLength.length / 1000 / 60 / 60;
  existStartLength.length = existStartLength.length * 50;
  console.log(existStartLength.length);

  return existStartLength;
}

class ScheduleComponenet extends React.Component {
  state = {
    dummyDataArray: dataArray,
    activeComponent: false,
    test: 55,
    currentReservationActive: {
      reservationTitle: '',
      reservationDate: '',
      reservationStartTime: '',
      reservationEndTime: '',
      reservationDescription: 'testić',
      infoVisibility: 'hidden'
    }
  };

  renderHoursOfDayCollection() {
    const hoursOfDay = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]; //hour 22 is different
    const lastHour = 22;
    return (
      <HoursDivRow>
        {hoursOfDay.map(hour => {
          return <HourDiv>{hour}</HourDiv>;
        })}
        <LastHourDiv>{lastHour}</LastHourDiv>
      </HoursDivRow>
    );
  }

  render() {
    return (
      <MainWrapper>
        <MainTitleWrapper>
          <MainTitle>Velika Sportska dvorana</MainTitle>
        </MainTitleWrapper>
        <TableAndInfoWrapper>
          <TableWrapper>
            {this.renderHoursOfDayCollection()}
            <Line />

            {daysOfWeekNumerals.map(day => {
              console.log('DAAAAAY:' + day);
              return (
                <OneDayDivRow>
                  <OneDayDivRowText>
                    {daysOfWeek[(day + 6) % 7]}
                  </OneDayDivRowText>

                  {this.state.dummyDataArray[0].hallReservaltions.map(
                    hallReservaltions => {
                      if (
                        new Date(
                          hallReservaltions.reservationDate + ' 00:00:00'
                        ).getDay() === day
                      ) {
                        //
                        // if (true) {
                        console.log('day: ' + day);
                        console.log(
                          'hallReservaltions.reservationDate' +
                            hallReservaltions.reservationDate
                        );
                        console.log(
                          'AAAAAAAAAAA' +
                            new Date(
                              hallReservaltions.reservationDate + ' 00:00:00'
                            ).getDay()
                        );
                        let obj = calcPositionAndLEngth(
                          hallReservaltions.reservationDate,
                          hallReservaltions.reservationStartTime,
                          hallReservaltions.reservationEndTime
                        );
                        console.log('obj: ' + obj);
                        console.log('TEEEEEEEEEEEST ' + this.state.test);
                        this.setState({
                          ...this.state,
                          dummyDataArray: {
                            ...this.state.hallReservaltions,
                            active: false
                          }

                          //dummyDataArray[0].hallReservaltions : {active : false}
                        });

                        return (
                          <ReservationDynamicDiv
                            length={obj.length}
                            start={obj.start}
                            active={this.state.activeComponent}
                            onClick={() => {
                              console.log(hallReservaltions);

                              this.setState({
                                currentReservationActive: hallReservaltions
                              });

                              this.setState({
                                ...this.state,
                                dummyDataArray: {
                                  ...this.state.hallReservaltions,
                                  active: true
                                }
                              });
                            }}
                          >
                            <PopUpInfo>
                              <PopUpInfoText>
                                {//this.state.dummyDataArray[0].event
                                //this.state.dummyDataArray[0].hallReservaltions[0]
                                //.
                                hallReservaltions.reservationTitle +
                                  ' ' +
                                  hallReservaltions.reservationDate +
                                  ' ' +
                                  hallReservaltions.reservationStartTime.slice(
                                    0,
                                    -3
                                  ) +
                                  ' ' +
                                  hallReservaltions.reservationEndTime.slice(
                                    0,
                                    -3
                                  )}
                              </PopUpInfoText>
                            </PopUpInfo>
                          </ReservationDynamicDiv>
                        );
                      }
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
                //this.state.dummyDataArray[0].hallReservaltions[0]
                //.reservationTitle
                //this.state.currentReservationActive.reservationTitle === undefined ? "WWWWWWWW" : this.state.currentReservationActive.reservationTitle
                this.state.currentReservationActive.reservationTitle
                //this.state.currentReservationActive
              }
            </InfoTitle>
            <InfoTime>
              {//this.state.dummyDataArray[0].startTime.toString().substring(4, 25)
              this.state.currentReservationActive.reservationDate +
                ' ' +
                this.state.currentReservationActive.reservationStartTime.slice(
                  0,
                  -3
                )}{' '}
              -
              {//this.state.dummyDataArray[0].endTime.toString().substring(4, 25)
              this.state.currentReservationActive.reservationEndTime.slice(
                0,
                -3
              )}
            </InfoTime>
            <Details
              img={DetailsIcon}
              onClick={() => {
                //console.log(this.state.currentReservationActive.reservationDescription);
                //this.state.currentReservationActive.infoVisibility = 'visible';
                this.setState({
                  currentReservationActive: {
                    reservationTitle: this.state.currentReservationActive
                      .reservationTitle,
                    reservationDate: this.state.currentReservationActive
                      .reservationDate,
                    reservationStartTime: this.state.currentReservationActive
                      .reservationStartTime,
                    reservationEndTime: this.state.currentReservationActive
                      .reservationEndTime,
                    reservationDescription: this.state.currentReservationActive
                      .reservationDescription,
                    infoVisibility: 'visible'
                  }
                });

                console.log(
                  'currentReservationActive' +
                    this.state.currentReservationActive
                );
              }}
            >
              <PopUpInfo
                style={{
                  visibility: this.state.currentReservationActive.infoVisibility
                }}
              >
                <PopUpInfoText>
                  {this.state.currentReservationActive.reservationDescription}
                </PopUpInfoText>
              </PopUpInfo>
            </Details>

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
