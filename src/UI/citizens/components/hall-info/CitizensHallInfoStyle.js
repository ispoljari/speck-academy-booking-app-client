import styled from 'styled-components';

const HallInfoContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
`;

const HallInfoTitle = styled.div`
  font-size: 26px;
`;

const HallInfoPanel = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const HallImage = styled.img`
  border: 1px solid green;
  width: 50%;
  height: 100px;
`;

const HallDescription = styled.div`
  border: 1px solid blue;
  width: 50%;
  height: 100px;
`;

export {
  HallInfoContainer,
  HallInfoTitle,
  HallInfoPanel,
  HallImage,
  HallDescription
};
