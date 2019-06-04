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
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  display: flex;
  box-sizing: border-box;
`;

const ImageDiv = styled.div`
  height: 352px;
  width: 268px;
  display: flex;
`;

const TextDiv = styled.div`
  height: 352px;
  width: 504px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
`;

const ButtonDiv = styled.div`
  height: 352px;
  width: 260px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
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
  text-align: justify;
  box-sizing: border-box;
`;

const LeftText = styled.div`
  width: 252px;
  height: 160px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 24px;
`;

const RightText = styled.div`
  width: 252px;
  height: 160px;
  box-sizing: border-box;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const DateInfo = styled.div`
  width: 244px;
  height: 20px;
  border-radius: 2px;
  background-color: #229c7f;
  padding: 2px 8px;
  box-sizing: border-box;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;

const Datum = styled.div`
  width: 40px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  box-sizing: border-box;
  margin-top: 12px;
  padding-left: 5px;
`;

const DatumInput = styled.div`
  width: 145px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #000000;
  margin-top: 12px;
  margin-left: 35px;
`;

const Time = styled.div`
  width: 45px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  box-sizing: border-box;
  margin-top: 8px;
`;

const TimeInput = styled.div`
  width: 145px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #000000;
  margin-top: 8px;
  margin-left: 30px;
`;

const ContactInfo = styled.div`
  width: 244px;
  height: 20px;
  border-radius: 2px;
  background-color: #229c7f;
  padding: 2px 8px;
  box-sizing: border-box;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  box-sizing: border-box;
  margin-left: 8px;
`;

const Namesurname = styled.div`
  width: 82px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  box-sizing: border-box;
  margin-top: 12px;
  white-space: nowrap;
  margin-left: 10px;
`;

const NamesurnameInput = styled.div`
  width: 135px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #000000;
  margin-top: 12px;
  margin-left: 19px;
  white-space: nowrap;
  text-align: left;
`;

const Organizacija = styled.div`
  width: 83px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-top: 8px;
  margin-left: 6px;
  white-space: nowrap;
`;

const OrganizacijaInput = styled.div`
  width: 135px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #000000;
  margin-top: 8px;
  margin-left: 21px;
  white-space: nowrap;
  text-align: left;
`;

const Email = styled.div`
  width: 83px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-top: 8px;
  margin-left: 10px;
  white-space: nowrap;
  text-align: right;
`;

const EmailInput = styled.div`
  width: 135px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #000000;
  margin-top: 8px;
  margin-left: 18px;
  white-space: nowrap;
  text-align: left;
`;

const Phone = styled.div`
  width: 83px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-top: 8px;
  margin-left: 10px;
  white-space: nowrap;
  text-align: right;
`;

const PhoneInput = styled.div`
  width: 135px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #000000;
  margin-top: 8px;
  margin-left: 18px;
  white-space: nowrap;
  text-align: left;
`;

const ButtonUp = styled.div`
  height: 176px;
  width: 260px;
  box-sizing: border-box;
`;

const ButtonDown = styled.div`
  height: 176px;
  width: 260px;
  box-sizing: border-box;
`;

const Podneseno = styled.div`
  width: 74px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-top: 16px;
  margin-left: 170px;
  margin-right: 16px;
`;

const PodnesenoDatum = styled.div`
  width: 114px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #229c7f;
  margin-top: 8px;
  margin-left: 149px;
  margin-right: 16px;
`;

const ButtonAcc = styled.div`
  width: 228px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4951;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  box-sizing: border-box;
  margin-top: 72px;
  margin-left: 16px;
  padding: 9px 12px 12px 7px;
  text-align: center;
`;

const ButtonDen = styled.div`
  width: 228px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #0f4951;
  background-color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0f4951;
  box-sizing: border-box;
  margin-left: 16px;
  margin-top: 8px;
  padding: 9px 12px 12px 7px;
  text-align: center;
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
  EventDesc,
  LeftText,
  RightText,
  DateInfo,
  Datum,
  DatumInput,
  Time,
  TimeInput,
  ContactInfo,
  Namesurname,
  NamesurnameInput,
  Organizacija,
  OrganizacijaInput,
  Email,
  EmailInput,
  Phone,
  PhoneInput,
  ButtonUp,
  ButtonDown,
  Podneseno,
  PodnesenoDatum,
  ButtonAcc,
  ButtonDen
};
