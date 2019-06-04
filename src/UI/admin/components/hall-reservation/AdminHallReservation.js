import React from 'react';

import {
  MainWrapper,
  MainTitleWrapper,
  MainTitle,
  TableAndInfoWrapper,
  TableWrapper,
  HoursDivRow,
  HourDiv,
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

let a = [1, 2, 3, 4, 5, 6];

function myFunction() {
  alert('isVisible:' + isVisible);
  isVisible = false;
  alert('isVisible:' + isVisible);
  return myFunction;
}
let isVisible = true;

//const PopUpInfo = visible

const ScheduleComponenet = props => (
  <MainWrapper>
    <MainTitleWrapper>
      <MainTitle>Moj Veeeliki naslov</MainTitle>
    </MainTitleWrapper>
    <TableAndInfoWrapper>
      <TableWrapper>
        <HoursDivRow>
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
          <HourDiv />
        </HoursDivRow>
        <Line />
        {
          <OneDayDivRow>
            <OneDayDivRowText>PON</OneDayDivRowText>
            {a.map(i => {
              return (
                <ReservationDynamicDiv>
                  {/*                     <PopUpInfo >
                        <PopUpInfoText>{
                        props.dummyDataArray[0].hallReservaltions[0].reservationDescription
                        }</PopUpInfoText>
                      </PopUpInfo>*/}
                  }}
                </ReservationDynamicDiv>
              );
            })}
          </OneDayDivRow>
        }
        <OneDayDivRow>
          <OneDayDivRowText>UTO</OneDayDivRowText>
          <ReservationDynamicDiv>
            <PopUpInfo>
              <PopUpInfoText>
                {
                  //props.dummyDataArray[0].event
                  props.dummyDataArray[0].hallReservaltions[0]
                    .reservationDescription
                }
              </PopUpInfoText>
            </PopUpInfo>
          </ReservationDynamicDiv>
          <ReservationDynamicDiv> </ReservationDynamicDiv>
          <ReservationDynamicDiv> </ReservationDynamicDiv>
        </OneDayDivRow>
        <OneDayDivRow>
          <OneDayDivRowText>SRI</OneDayDivRowText>
          <ReservationDynamicDiv> </ReservationDynamicDiv>
        </OneDayDivRow>
        <OneDayDivRow>
          <OneDayDivRowText>ČET</OneDayDivRowText>
        </OneDayDivRow>
        <OneDayDivRow>
          <OneDayDivRowText>PET</OneDayDivRowText>
          <ReservationDynamicDiv> </ReservationDynamicDiv>
          <ReservationDynamicDiv> </ReservationDynamicDiv>
          <ReservationDynamicDiv onMouseOver={myFunction}>
            <PopUpInfo visible={isVisible}>
              <PopUpInfoText>
                {props.dummyDataArray[0].hallReservaltions[0]
                  .reservationDescription +
                  'EEE' +
                  isVisible}
              </PopUpInfoText>
            </PopUpInfo>
          </ReservationDynamicDiv>
        </OneDayDivRow>
        <OneDayDivRow>
          <OneDayDivRowText>SUB</OneDayDivRowText>
        </OneDayDivRow>
        <OneDayDivRow>
          <OneDayDivRowText>NED</OneDayDivRowText>
        </OneDayDivRow>
      </TableWrapper>

      {/*<Table />*/}
      {/*
      <Table id="leaderboard_view" >
      
      <tbody>
        <tr>
          <th></th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
          <th>11</th>
          <th>12</th>
          <th>13</th>
          <th>14</th>
          <th>15</th>
          <th>16</th>
          <th>17</th>
          <th>18</th>
          <th>19</th>
          <th>20</th>
        </tr>
        <tr>
          <th>PON</th>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
        </tr>
        <tr>
          <th>UTO</th>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
        </tr>
        <tr>
          <th>SRI</th>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
        </tr>
        <tr>
          <th>ČET</th>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
        </tr>
        <tr>
          <th>PET</th>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
          <TableData></TableData><TableData></TableData><TableData></TableData><TableData></TableData>
        </tr>
      </tbody>
      </Table>*/}

      <Info>
        <InfoTitle>
          {
            //props.dummyDataArray[0].event
            props.dummyDataArray[0].hallReservaltions[0].reservationDescription
          }
        </InfoTitle>
        <InfoTime>
          {//props.dummyDataArray[0].startTime.toString().substring(4, 25)
          props.dummyDataArray[0].hallReservaltions[0].reservationDate +
            ' ' +
            props.dummyDataArray[0].hallReservaltions[0]
              .reservationStartTime}{' '}
          -
          {
            //props.dummyDataArray[0].endTime.toString().substring(4, 25)
            props.dummyDataArray[0].hallReservaltions[0].reservationEndTime
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

export default ScheduleComponenet;
