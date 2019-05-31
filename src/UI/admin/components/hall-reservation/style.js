import styled from 'styled-components';

const MainWrapper = styled.div.attrs({
  'data-id': 'MainWrapper'
})`
  position: relative;
  width: 1024px;
  height: 280px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  margin-left: 0px;
  margin-top: 0px;
  background-color: yellow;
`;

const MainTitle = styled.h1.attrs({
  'data-id': 'MainTitle'
})`
  position: relative;
  width: 1024px;
  height: 32px;
  background-color: grey;
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
  background-color: red;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Table = styled.table.attrs({
  'data-id': 'Table'
})`
  position: relative;
  width: 776px;
  height: 208px;
  background-color: black;
  margin-left: 24px;
  margin-right: 0px;
  margin-top: 16px;
  margin-bottom: 0px;
  display: inline-block;
`;

const Info = styled.div.attrs({
  'data-id': 'Info'
})`
  position: absolute;
  width: 200px;
  height: 208px;
  background-color: pink;
  margin-left: 17px;
  margin-right: 7px;
  margin-top: 16px;
  margin-bottom: 0px;
  display: inline-block;
`;

const InfoTitle = styled.h1.attrs({
  'data-id': 'InfoTitle'
})`
  position: relative;
  width: 184px;
  height: 64px;
  background-color: grey;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 8px;
`;

const InfoTime = styled.h1.attrs({
  'data-id': 'InfoTime'
})`
  position: relative;
  width: 184px;
  height: 16px;
  background-color: grey;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 16px;
  margin-bottom: 0px;
`;

const InfoButton = styled.button.attrs({
  'data-id': 'InfoButton'
})`
  position: relative;
  width: 32px;
  height: 32px;
  background-color: orange;
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 0px;
`;

const InfoEraseButton = styled.button.attrs({
  'data-id': 'InfoEraseButton'
})`
  position: relative;
  width: 184px;
  height: 40px;
  background-color: purple;
  margin-left: 8px;
  margin-top: 8px;
  margin-bottom: 0px;
`;

export {
  MainWrapper,
  MainTitle,
  TableAndInfoWrapper,
  Table,
  Info,
  InfoTitle,
  InfoTime,
  InfoButton,
  InfoEraseButton
};
