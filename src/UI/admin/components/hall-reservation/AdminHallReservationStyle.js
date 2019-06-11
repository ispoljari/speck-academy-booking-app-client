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

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainTitle = styled.h2.attrs({
  'data-id': 'MainTitle'
})`
  width: 1024px;
  font-family: Lora;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  position: relative;

  align-self: center;
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
  width: 817px;
  height: 208px;

  background-color: white;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: inline-block;
`;

const HoursDivRow = styled.div.attrs({
  'data-id': 'HoursDivRow'
})`
  width: 733px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.5);

  margin-left: 68px;
  margin-right: 0px;
  margin-top: 24px;
  margin-bottom: 0px;
  //background-color: blue;
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
  color: rgba(0, 0, 0, 0.5);

  display: inline-block;
  position: relative;

  text-align: center;
  //border: 0.2px solid black;
  //background-color: yellow;
`;

const LastHourDiv = styled.div.attrs({
  'data-id': 'LastHourDiv'
})`
  width: 16px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.5);

  display: inline-block;
  position: relative;

  //border: 0px solid black;
  //background-color: yellow;
  margin-left: 17px;
`;

const Line = styled.div.attrs({
  'data-id': 'Line'
})`
  width: 776px;
  height: 0px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  margin-left: 24px;
  margin-bottom: 4px;
`;

const OneDayDivRow = styled.div.attrs({
  'data-id': 'OneDayDivRow'
})`
  width: 776px;
  height: 16px;
  border-radius: 2px;
  background-color: #f0f0f0;

  margin-left: 24px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 8px;

  display: flex;
  flex-direction: row;
`;

const OneDayDivRowText = styled.p.attrs({
  'data-id': 'OneDayDivRowText'
})`
  opacity: 0.5;
  font-family: Poppins;
  font-size: 14px;
  color: #000000;

  margin: auto;
  margin-left: 5px;
  position: absolute;

  align-self: center;
`;

//TODO position this div(s) dynamicaly
//width and margin-left and opacitiy
//onclick -> change to -> border: solid 1px #0f4951;
//onHover -> add this -> box-shadow: 0 0 4px 0 #9da8a5;
const ReservationDynamicDiv = styled.div.attrs({
  'data-id': 'ReservationDynamicDiv'
})`
  position: absolute;
  width: ${props => {
    console.log('props.length: ' + Math.random() + ' ' + props.length);
    return props.length + 'px';
  }};
  margin-left: ${props => {
    console.log('props.start: ' + Math.random() + ' ' + props.start);
    return props.start + 'px';
  }};

  
  //width: 12.5px;
  height: 14px;
  border-radius: 2px;

  // border: solid 1px #ffffff;
  //border: solid 1px #0f4951;
  border: ${props =>
    props.active ? 'solid 1px #0f4951' : 'solid 1px #ffffff'};
  }};

  background-color: #93e9bb;
  display: inline-block;
  //margin-left: 64px;

  &:hover {
    box-shadow: 0 0 4px 0 #9da8a5;
  }
  &:hover div {
    visibility: visible;
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
  //visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  visibility: hidden;
  z-index: 10;
`;

const PopUpInfoText = styled.h1.attrs({
  'data-id': 'PopUpInfoText'
})`
  width: 168px;
  height: 60px;
  opacity: 0.7;
  font-family: Poppins;
  font-size: 14px;
  color: #434343;

  position: relative;

  font-weight: 400;
  padding: 5px;
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
  margin-left: 0px;
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
  font-weight: 700;
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
  font-weight: 400;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;

  position: relative;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 16px;
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
  color: #0f4951;

  position: relative;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 10px;
  margin-bottom: 6px;
`;

const Details = styled.div.attrs({
  'data-id': 'Details'
})`
  background-image: url(${props => props.img});
  background-size: cover;

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

export {
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
};
