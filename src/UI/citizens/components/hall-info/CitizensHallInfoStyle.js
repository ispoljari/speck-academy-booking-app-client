import styled from 'styled-components';

const HallInfoContainer = styled.div`
  width: 632px;
  height: 270px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 32px 32px 38px 32px;
`;

const HallInfoTitle = styled.h2`
  width: 568px;
  height: 40px;
  font-family: 'Lora', serif;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

const HallInfoPanel = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
`;

const HallImage = styled.img`
  width: 244px;
  height: 136px;
  border-radius: 2px;
  border: solid 1px #229c7f;
`;

const HallName = styled.p`
  width: 300px;
  height: 20px;
  border-radius: 2px;
  background-color: #229c7f;
  margin: 25px 32 px 17px 32px;
`;

const HallNameTitle = styled.h3`
  display: inline;
  position: center;
  width: 170px;
  height: 18px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  padding: 1px 50px 1px 8px;
`;

export {
  HallInfoContainer,
  HallInfoTitle,
  HallInfoPanel,
  HallImage,
  HallName,
  HallNameTitle
};
