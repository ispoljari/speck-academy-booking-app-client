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
  ReservationDynamicDiv,
  PopUpInfo,
  //Table,
  //TableData,
  Info,
  InfoTitle,
  InfoTime,
  InfoButton,
  InfoEraseButton,
  InfoEraseButtonText
} from './style.js';

//const a = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 222];

const ScheduleComponenet = () => (
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
        <OneDayDivRow>
          PON
          <ReservationDynamicDiv> </ReservationDynamicDiv>
          <ReservationDynamicDiv> </ReservationDynamicDiv>
        </OneDayDivRow>
        <OneDayDivRow>
          UTO
          <ReservationDynamicDiv>
            <PopUpInfo />
          </ReservationDynamicDiv>
          <ReservationDynamicDiv> </ReservationDynamicDiv>
          <ReservationDynamicDiv> </ReservationDynamicDiv>
        </OneDayDivRow>
        <OneDayDivRow>
          SRI
          <ReservationDynamicDiv> </ReservationDynamicDiv>
        </OneDayDivRow>
        <OneDayDivRow>ČET</OneDayDivRow>
        <OneDayDivRow>PET</OneDayDivRow>
        <OneDayDivRow>SUB</OneDayDivRow>
        <OneDayDivRow>NED</OneDayDivRow>
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
          Bad to the minton, Bad to the minton, Bad to the minton
        </InfoTitle>
        <InfoTime>23.11.2018., 12:15 - 15:45</InfoTime>
        <InfoButton />
        <InfoEraseButton>
          <InfoEraseButtonText>IZBRIŠI</InfoEraseButtonText>
        </InfoEraseButton>
      </Info>
    </TableAndInfoWrapper>
  </MainWrapper>
);

export default ScheduleComponenet;
