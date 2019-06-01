import styled from 'styled-components';

const HallReqContainer = styled.header`
  margin: 0 auto;
  width: 500px;
  border: 1px solid black;
  padding: 10px;
`;

const HallReqTitle = styled.h2`
  color: blue;
`;

const HallDiv = styled.div`
  margin: auto;
  width: 1024px;
  height: 352px;
  border: 1px solid black;
  display: flex;
`;

const ImageDiv = styled.div`
  height: 352px;
  width: 248px;
  border: 1px solid black;
  display: flex;
`;

const TextDiv = styled.div`
  height: 352px;
  width: 504px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
`;

const ButtonDiv = styled.div`
  height: 352px;
  width: 266px;
  border: 1px solid black;
`;

const ImageHall = styled.div`
  width: 228px;
  height: 136px;
  border-radius: 2px;
  border: solid 1px #229c7f;
  margin-top: 16px;
  margin-left: 16px;
  object-fit: cover;
`;
const HeaderHall = styled.div`
  width: 278px;
  height: 32px;
  font-family: Lora;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-top: 16px;
`;

const AdressHall = styled.div`
  width: 117px;
  height: 20px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-top: 25px;
`;

const EventItem = styled.div`
  width: 504px;
  height: 20px;
  border-radius: 2px;
  background-color: #229c7f;
  margin-top: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 16px;
  padding: 2px 8px;
  box-sizing: border-box;
`;

const EventName = styled.div`
  width: 508px;
  height: 24px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-top: 12px;
`;

const EventDesc = styled.div`
  width: 504px;
  height: 64px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #000000;
  margin-top: 8px;
`;

export {
  HallReqContainer,
  HallReqTitle,
  HallDiv,
  ImageDiv,
  TextDiv,
  ButtonDiv,
  ImageHall,
  HeaderHall,
  AdressHall,
  EventItem,
  EventName,
  EventDesc
};
