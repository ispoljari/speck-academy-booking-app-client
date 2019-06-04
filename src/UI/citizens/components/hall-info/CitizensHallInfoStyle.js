import styled from 'styled-components';

const HallInfoContainer = styled.div`
  width: 632px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  margin: 0 auto;
  padding: 32px;
`;

const HallInfoTitle = styled.h2`
  width: 568px;
  font-family: 'Lora', serif;
  font-size: 32px;
  margin-bottom: 24px;
  font-weight: bold;
`;

const HallInfoPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HallImage = styled.img`
  width: 244px;
  height: 136px;
  border-radius: 2px;
`;

const HallDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const HallName = styled.p`
  width: 300px;
  border-radius: 2px;
  background-color: #229c7f;
`;

const HallNameTitle = styled.p`
  display: inline;
  position: center;
  width: 170px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  padding: 1px 50px 1px 8px;
`;

const HallInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 298px;
  padding: 17px 0 0 0;
`;

const HallInfoName = styled.div`
  display: flex;
  flex-direction: column;
  width: 65px;
  padding: 17px 24px 120px 0;
`;

const HallInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
  margin-left: 22px;
  padding: 17px 0 0 0;
`;

const HallLocation = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #229c7f;
  padding-left: 7px;
`;

const HallDesc = styled.p`
  width: 28px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  color: #229c7f;
  padding-top: 8px;
  padding-left: 37px;
`;

const HallAddress = styled.p`
  width: 218px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
`;

const HallDetail = styled.p`
  width: 218px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  padding-top: 8px;
`;

export {
  HallInfoContainer,
  HallInfoTitle,
  HallInfoPanel,
  HallImage,
  HallName,
  HallNameTitle,
  HallDescription,
  HallInfo,
  HallInfoName,
  HallInfoDescription,
  HallLocation,
  HallDesc,
  HallAddress,
  HallDetail
};
