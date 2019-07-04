import styled from 'styled-components';

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

const HallName = styled.div`
  padding: 5px 8px;
  border-radius: 2px;
  background-color: #229c7f;
`;

const HallNameTitle = styled.p`
  display: inline;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`;

const HallInfo = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 17px;
`;

const HallInfoName = styled.div`
  display: flex;
  flex-direction: column;
  width: 65px;
`;

const HallInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
`;

const HallLocation = styled.h3`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #229c7f;
  padding-left: 7px;
`;

const HallDesc = styled.h3`
  width: 28px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #229c7f;
  padding-top: 12px;
  padding-left: 37px;
`;

const HallAddress = styled.p`
  width: 212px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
`;

const HallDetail = styled.p`
  width: 212px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  padding-top: 12px;
`;

export {
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
