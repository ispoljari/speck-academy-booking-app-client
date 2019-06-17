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
  Info,
  InfoTitle,
  InfoTime,
  InfoEraseButton,
  InfoEraseButtonText,
  Details
} from './AdminHallReservationStyle.js';

import DetailsIcon from '../../../../images/Details@3x.png';

import dataArray from './newData.js';

import { API_BASE_URL } from '../../../../config';

//TODO delete all console logs
//TODO CHANGE NAME OF existStartLength

const daysOfWeek = ['PON', 'UTO', 'SRI', 'ČET', 'PET', 'SUB', 'NED'];
//javascript maps days like this
const daysOfWeekNumerals = [1, 2, 3, 4, 5, 6, 0];

//todo rewrite this function with smaller functions inside
function calcPositionAndLEngth(date, startTime, endTime) {
  const offset = 69 - 50 / 2;
  let existStartLength = {
    start: 0,
    length: 0
  };
  //TODO delete console.log
  existStartLength.start =
    new Date(date + ' ' + startTime) - new Date(date + ' 00:00:00');
  //TODO delete console.log
  existStartLength.start = existStartLength.start / 1000 / 60 / 60;
  existStartLength.start = existStartLength.start - 8; //because we start at 8 o'clock
  existStartLength.start = existStartLength.start * 50; // hours to pixels
  existStartLength.start = existStartLength.start + offset; // adding offset

  existStartLength.length =
    new Date(date + ' ' + endTime) - new Date(date + ' ' + startTime);
  existStartLength.length = existStartLength.length / 1000 / 60 / 60;
  existStartLength.length = existStartLength.length * 50;

  return existStartLength;
}

let data = dataArray[0];

function getData() {
  var url = new URL(API_BASE_URL + '/halls/reservations');
  var params = { startDate: '2017-05-25', endDate: '2020-10-25' }; // or:
  url.search = new URLSearchParams(params);
  fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: 'GET'
  })
    .then(res =>
      res.json()
    ) /*.then(res =>
      //console.log(JSON.stringify(res))
      //console.log(JSON.stringify(res[0]))
      //console.log(res[0])
     )*/
    .catch(err => {
      console.error(err);
    });
}

/*function deleteData() {
  console.log(this.state.currentReservationActive);
  const deleteHall = () => {
    //fetch(API_BASE_URL + '/reservations/delete/' + this.state.currentReservationActive.id, {
    fetch(API_BASE_URL + '/reservations/delete/' + '1', {
        method: 'DELETE'
    })
      .then(res => {
        //props.updatePage();
        //      alert('GOOOOOOOOOOOOOOOOOOOOOD');
        console.log('QQQQQQQQQQQQQQQQQQQQ: ' + res.status);
      })
      .catch(err => {
        //        alert('BAAAAAAAAAAAAAAAAAAAAAAAAAD');
        console.error(err);
      });
  };
  deleteHall();
}*/

class ScheduleComponenet extends React.Component {
  state = {
    //dummyDataArray: dataArray,
    //dummyDataArray: data,
    dummyDataArray: this.props.data,
    activeComponent: false,
    test: 55,
    currentReservationActive: {
      id: 0,
      activated: false,
      reservationTitle: '',
      reservationDate: '',
      reservationStartTime: '',
      dash: '',
      reservationEndTime: '',
      reservationDescription: 'testić',
      infoVisibility: 'hidden'
    }
  };
  /*
  componentDidMount() {
    var url = new URL(API_BASE_URL + '/halls/reservations');
    var params = { startDate: '2017-05-25', endDate: '2020-10-25' };
    url.search = new URLSearchParams(params);
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => this.setState({ dummyDataArray: data }));
  }
*/

  deleteData() {
    console.log(this.state.currentReservationActive.id);
    /*const deleteHall = () => {
      fetch(API_BASE_URL + '/reservations/delete/' + this.state.currentReservationActive.id, {
        method: 'DELETE'
      })
        .then(res => {
          //props.updatePage();
          //      alert('GOOOOOOOOOOOOOOOOOOOOOD');
          console.log('QQQQQQQQQQQQQQQQQQQQ: ' + res.status);
        })
        .catch(err => {
          //        alert('BAAAAAAAAAAAAAAAAAAAAAAAAAD');
          console.error(err);
        });
    };*/
    //deleteHall();
  }

  /*
  getData() {
    var url = new URL(API_BASE_URL + '/halls/reservations');
    var params = { startDate: '2017-05-25', endDate: '2020-10-25' };
    url.search = new URLSearchParams(params);
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        console.log(JSON.stringify(res));
        console.log('NEW RES: ' + res);
        this.setState({
          dummyDataArray: res[0]
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
*/

  renderHoursOfDayCollection() {
    const hoursOfDay = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]; //hour 22 is different
    const lastHour = 22;
    //    let x = this.getData();
    //    console.log('XXXXXXXXXXX' + x);
    /*    this.setState({
      dummyDataArray: 
        this.getData()
      
    });*/
    /*
    var url = new URL(API_BASE_URL + '/halls/reservations');
    var params = { startDate: '2017-05-25', endDate: '2020-10-25' };
    url.search = new URLSearchParams(params);
    fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        console.log(JSON.stringify(res));
        console.log('NEW RES: ' + res);
        this.setState({
          dummyDataArray: res[0]
        });
      })
      .catch(err => {
        console.error(err);
      });
      */
    console.log('STATE:    ' + this.state);

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
          {/* <MainTitle>{this.state.dummyDataArray[0].name}</MainTitle> */}
          <MainTitle>{this.state.dummyDataArray.name}</MainTitle>
        </MainTitleWrapper>
        <TableAndInfoWrapper>
          <TableWrapper>
            {this.renderHoursOfDayCollection()}
            <Line />

            {daysOfWeekNumerals.map(day => {
              return (
                <OneDayDivRow>
                  <OneDayDivRowText>
                    {daysOfWeek[(day + 6) % 7]}
                  </OneDayDivRowText>
                  {console.log(
                    'before: ' + this.state.currentReservationActive.activated
                  )}
                  {/* {this.state.dummyDataArray[0].hallReservaltions.map( */}
                  {this.state.dummyDataArray.hallReservaltions.map(
                    hallReservaltion => {
                      hallReservaltion.active = false;
                      if (
                        new Date(
                          hallReservaltion.reservationDate + ' 00:00:00'
                        ).getDay() === day
                      ) {
                        let obj = calcPositionAndLEngth(
                          hallReservaltion.reservationDate,
                          hallReservaltion.reservationStartTime,
                          hallReservaltion.reservationEndTime
                        );

                        return (
                          <ReservationDynamicDiv
                            style={{
                              border: hallReservaltion.active
                                ? 'solid 1px #0f4951'
                                : 'solid 1px #ffffff'
                            }}
                            length={obj.length}
                            start={obj.start}
                            active={hallReservaltion.active}
                            onClick={() => {
                              hallReservaltion.activated = true;
                              this.setState({
                                currentReservationActive: hallReservaltion
                              });
                              console.log(
                                'after33: ' +
                                  this.state.currentReservationActive
                              );
                              console.log(this.state);
                            }}
                          >
                            <PopUpInfo length={obj.length}>
                              <PopUpInfoText>
                                {hallReservaltion.reservationTitle +
                                  ' ' +
                                  hallReservaltion.reservationDate +
                                  ' ' +
                                  hallReservaltion.reservationStartTime.slice(
                                    0,
                                    -3
                                  ) +
                                  ' ' +
                                  hallReservaltion.reservationEndTime.slice(
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
              {this.state.currentReservationActive.reservationTitle}
            </InfoTitle>
            <InfoTime>
              {this.state.currentReservationActive.reservationDate +
                ' ' +
                this.state.currentReservationActive.reservationStartTime.slice(
                  0,
                  -3
                )}{' '}
              {this.state.currentReservationActive.dash}
              {this.state.currentReservationActive.reservationEndTime.slice(
                0,
                -3
              )}
            </InfoTime>
            <Details
              img={DetailsIcon}
              onClick={() => {
                console.log(this.state.currentReservationActive.activated);
                if (this.state.currentReservationActive.activated == true) {
                  this.setState({
                    ...this.state,
                    currentReservationActive: {
                      ...this.state.currentReservationActive,
                      infoVisibility: 'visible',
                      dash: '-'
                    }
                  });
                }
              }}
            >
              <PopUpInfo
                length={32}
                style={{
                  visibility: this.state.currentReservationActive
                    .infoVisibility,
                  width: 400,
                  marginTop: 36,
                  marginLeft: 32 / 2 - 400 / 2
                }}
              >
                <PopUpInfoText
                  style={{
                    width: 384
                  }}
                >
                  {this.state.currentReservationActive.reservationDescription}
                </PopUpInfoText>
              </PopUpInfo>
            </Details>

            <InfoEraseButton
              onClick={() => {
                fetch(
                  API_BASE_URL +
                    '/reservations/delete/' +
                    this.state.currentReservationActive.id,
                  {
                    method: 'DELETE'
                  }
                )
                  .then(res => {
                    //props.updatePage();
                    //      alert('GOOOOOOOOOOOOOOOOOOOOOD');
                    console.log(
                      'QQQQQQQQQQQQQQQQQQQQ: ' +
                        res.status +
                        'RESID: ' +
                        this.state.currentReservationActive.id
                    );
                  })
                  .catch(err => {
                    //        alert('BAAAAAAAAAAAAAAAAAAAAAAAAAD');
                    console.error(err);
                  });
              }}
            >
              <InfoEraseButtonText>IZBRIŠI</InfoEraseButtonText>
            </InfoEraseButton>
          </Info>
        </TableAndInfoWrapper>
      </MainWrapper>
    );
  }
}

export default ScheduleComponenet;
