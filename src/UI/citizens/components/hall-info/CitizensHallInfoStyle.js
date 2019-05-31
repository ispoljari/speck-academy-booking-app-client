import styled from 'styled-components';

const HallInfoContainer = styled.div`
  width: 632px;
  height: 270px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 32px;
`;

const HallInfoTitle = styled.h2`
  width: 568px;
  height: 40px;
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

const HallInfoPanel = styled.div`
  display: inline-block;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const HallImage = styled.img`
  width: 244px;
  height: 136px;
  border-radius: 2px;
  border: solid 1px #229c7f;
`;

const HallDescription = styled.div`
  width: 218px;
  height: 80px;
  opacity: 0.5;
  margin: 24px;
`;

export {
  HallInfoContainer,
  HallInfoTitle,
  HallInfoPanel,
  HallImage,
  HallDescription
};
