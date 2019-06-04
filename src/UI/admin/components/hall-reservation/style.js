import styled from 'styled-components';

const MainWrapper = styled.div.attrs({
  'data-id': 'MainWrapper'
})`
  position: relative;
  width: 1024px;
  height: 280px;
  border-radius: 4px;
  border: solid 1px #229c7f;
  background-color: #ffffff;

  margin-left: 0px;
  margin-top: 0px;
`;

const MainTitleWrapper = styled.div.attrs({
  'data-id': 'MainTitleWrapper'
})`
  position: relative;
  width: 1024px;
  height: 40px;
  border-radius: 3px;
  background-color: #229c7f;
`;

const MainTitle = styled.h1.attrs({
  'data-id': 'MainTitle'
})`
  width: 1024px;
  height: 32px;
  font-family: Lora;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;

  text-align: center;
  position: relative;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const TableAndInfoWrapper = styled.div.attrs({
  'data-id': 'TableAndInfoWrapper'
})`
  position: relative;
  width: 1024px;
  height: 240px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const TableWrapper = styled.div.attrs({
  'data-id': 'TableWrapper'
})`
  position: relative;
  width: 776px;
  height: 208px;

  background-color: white;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 16px;
  margin-bottom: 0px;
  display: inline-block;
`;

const HoursDivRow = styled.div.attrs({
  'data-id': 'HoursDivRow'
})`
  width: 708px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.5);

  margin-left: 68px;
  margin-right: 0px;
  margin-top: 24px;
  margin-bottom: 0px;
  background-color: blue;
`;

//TODO position this div(s) with repeat
const HourDiv = styled.div.attrs({
  'data-id': 'HourDiv'
})`
  width: 50px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.5);

  display: inline-block;
  position: relative;

  border: 0.2px solid black;
  background-color: yellow;
`;

const Line = styled.div.attrs({
  'data-id': 'Line'
})`
  width: 776px;
  height: 0px;
  border: solid 1px rgba(0, 0, 0, 0.15);
`;

const OneDayDivRow = styled.div.attrs({
  'data-id': 'OneDayDivRow'
})`
  width: 747px;
  height: 16px;
  border-radius: 2px;
  background-color: #f0f0f0;

  margin-left: 29px;
  margin-right: 0px;
  margin-top: 5px;
  margin-bottom: 0px;
`;

const OneDayDivRowText = styled.p.attrs({
  'data-id': 'OneDayDivRowText'
})`
  width: 40px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin: auto;
  position: absolute;
`;

//TODO position this div(s) dynamicaly
//width and margin-left and opacitiy
//onclick -> change to -> border: solid 1px #0f4951;
//onHover -> add this -> box-shadow: 0 0 4px 0 #9da8a5;
const ReservationDynamicDiv = styled.div.attrs({
  'data-id': 'ReservationDynamicDiv'
})`
  width: 175px;
  height: 14px;
  border-radius: 2px;
  border: solid 1px #ffffff;
  background-color: #93e9bb;

  display: inline-block;
  margin-left: 64px;

  &:hover {
    box-shadow: 0 0 4px 0 #9da8a5;
  }
`;

const PopUpInfo = styled.div.attrs({
  'data-id': 'PopUpInfo'
})`
  width: 184px;
  height: 72px;
  border-radius: 2px;

  box-shadow: 0 2px 4px 0 rgba(154, 158, 156, 0.5);
  background-color: #ffffff;

  margin-top: 16px;
  position: absolute;
  border: solid 1px black;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};

  &:hover {
    ${props => alert('props.visible:' + props.visible)};
  }
`;

const PopUpInfoText = styled.h1.attrs({
  'data-id': 'PopUpInfoText'
})`
  width: 168px;
  height: 60px;
  opacity: 0.7;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #434343;

  position: relative;
`;

/*
const Table = styled.table.attrs({
  'data-id': 'Table'
})`
  position: relative;
  width: 776px;
  height: 208px;
  background-color: brown;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 16px;
  margin-bottom: 0px;
  display: inline-block;
`;
*/

/*
const TableData = styled.td.attrs({
  'data-id': 'TableData'
})`
  border: 1px solid black;
`;
*/

const Info = styled.div.attrs({
  'data-id': 'Info'
})`
  width: 200px;
  height: 208px;
  border-radius: 2px;
  background-color: #edf5f1;

  position: absolute;
  margin-left: 17px;
  margin-right: 7px;
  margin-top: 16px;
  margin-bottom: 0px;
  display: inline-block;
`;

const InfoTitle = styled.h1.attrs({
  'data-id': 'InfoTitle'
})`
  width: 184px;
  height: 64px;
  font-family: Lora;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #229c7f;

  position: relative;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
`;

const InfoTime = styled.h1.attrs({
  'data-id': 'InfoTime'
})`
  width: 184px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #000000;

  position: relative;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 16px;
  margin-bottom: 0px;
`;

const InfoButton = styled.button.attrs({
  'data-id': 'InfoButton'
})`
  width: 32px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #93e9bb;
  background-color: #ffffff;

  position: relative;
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 0px;
`;

const InfoEraseButton = styled.button.attrs({
  'data-id': 'InfoEraseButton'
})`
  width: 184px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #0f4951;
  background-color: #ffffff;

  position: relative;
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 0px;
`;

const InfoEraseButtonText = styled.p.attrs({
  'data-id': 'InfoEraseButtonText'
})`
  width: 136px;
  height: 24px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0f4951;

  position: relative;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 10px;
  margin-bottom: 6px;
`;

export {
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
};
