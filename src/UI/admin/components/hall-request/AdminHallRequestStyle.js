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
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  display: flex;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  width: 268px;
  display: flex;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  width: 504px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  width: 260px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
`;

const ImageHall = styled.img`
  width: 228px;
  height: 136px;
  border-radius: 2px;
  border: solid 1px #229c7f;
  margin-top: 16px;
  margin-left: 16px;
  object-fit: cover;
`;
const HeaderHall = styled.h1`
  width: 278px;
  font-family: Lora;
  font-size: 20px;
  color: #000000;
  margin-top: 16px;
`;

const AdressHall = styled.p`
  width: 117px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  color: #000000;
  margin-top: 25px;
  margin-left: 24px;
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
`;

const EventName = styled.h3`
  width: 508px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  color: #000000;
  margin-top: 12px;
`;

const EventDescription = styled.p`
  width: 504px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 8px;
  text-align: justify;
`;

const LeftContainer = styled.div`
  width: 244px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 24px;
`;

const RightContainer = styled.div`
  width: 260px;
  box-sizing: border-box;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const DateBanner = styled.div`
  width: 244px;
  border-radius: 2px;
  background-color: #229c7f;
  padding: 2px 8px;
  box-sizing: border-box;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin-left:16px:
`;

const DateLabel = styled.p`
  width: 40px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 12px;
  text-align: right;
  line-height: 1.05;
  margin-left: 4px;
`;

const DateSet = styled.p`
  width: 145px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 12px;
  margin-left: 16px;
  text-align: left;
`;

const TimeLabel = styled.p`
  width: 45px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 8px;
  text-align: right;
  line-height: 1.05;
`;

const TimeSet = styled.p`
  width: 145px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 8px;
  margin-left: 16px;
  text-align: left;
`;

const ContactLabel = styled.div`
  width: 252px;
  border-radius: 2px;
  background-color: #229c7f;
  padding: 2px 8px;
  box-sizing: border-box;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin-left: 16px;
`;

const NameSurnameLabel = styled.p`
  width: 82px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 12px;
  white-space: nowrap;
  text-align: right;
  line-height: 1.05;
`;

const NameSurnameSet = styled.p`
  width: 145px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 12px;
  margin-left: 16px;
  white-space: nowrap;
  text-align: left;
`;

const OrganisationLabel = styled.p`
  width: 83px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 8px;
  white-space: nowrap;
  text-align: right;
  line-height: 1.05;
`;

const OrganisationSet = styled.p`
  width: 145px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 8px;
  margin-left: 16px;
  white-space: nowrap;
  text-align: left;
`;

const EmailLabel = styled.p`
  width: 83px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 8px;
  white-space: nowrap;
  text-align: right;
  line-height: 1.05;
`;

const EmailSet = styled.p`
  width: 145px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 8px;
  white-space: nowrap;
  text-align: left;
  margin-left: 16px;
`;

const PhoneLabel = styled.p`
  width: 83px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  white-space: nowrap;
  text-align: right;
  line-height: 1.05;
`;

const PhoneSet = styled.p`
  width: 145px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 12px;
  margin-left: 16px;
  white-space: nowrap;
  text-align: left;
`;

const ButtonUp = styled.div`
  width: 260px;
`;

const ButtonDown = styled.div`
  width: 260px;
`;

const Submit = styled.p`
  width: 74px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  color: #000000;
  margin-top: 16px;
  margin-left: 170px;
  margin-right: 16px;
  text-align: right;
`;

const SubmitDate = styled.p`
  width: 114px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #229c7f;
  margin-top: 8px;
  margin-left: 129px;
  margin-right: 16px;
  text-align: right;
`;

const ButtonAccept = styled.button`
  width: 228px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4951;
  font-weight: 500;
  color: #ffffff;
  margin-top: 229px;
  margin-left: 16px;
  padding: 9px 12px 12px 7px;
  text-align: center;
`;

const ButtonDenied = styled.button`
  width: 228px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #0f4951;
  background-color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  color: #0f4951;
  margin-left: 16px;
  margin-top: 8px;
  padding: 9px 12px 12px 7px;
  text-align: center;
  margin-down: 16px;
`;

export {
  HallReqContainer,
  HallReqTitle,
  HallDiv,
  ImageContainer,
  TextContainer,
  ButtonContainer,
  ImageHall,
  HeaderHall,
  AdressHall,
  EventItem,
  EventName,
  EventDescription,
  LeftContainer,
  RightContainer,
  DateBanner,
  DateLabel,
  DateSet,
  TimeLabel,
  TimeSet,
  ContactLabel,
  NameSurnameLabel,
  NameSurnameSet,
  OrganisationLabel,
  OrganisationSet,
  EmailLabel,
  EmailSet,
  PhoneLabel,
  PhoneSet,
  ButtonUp,
  ButtonDown,
  Submit,
  SubmitDate,
  ButtonAccept,
  ButtonDenied
};
