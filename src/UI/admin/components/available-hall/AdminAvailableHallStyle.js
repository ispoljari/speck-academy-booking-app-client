import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 374px;
  min-height: 400px;
  border-radius: 4px;
  border: solid 1px #229c7f;
  background-color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  height: 100%;
  border-radius: 3px 3px 0px 0px;
  background-color: #229c7f;
`;

const Title = styled.h1`
  margin: 0px;
  align-items: center;
  height: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  align-self: center;
`;

const Image = styled.img`
  width: 244px;
  min-height: 136px;
  margin-bottom: 14px;
  border-radius: 2px;
  border: solid 1px #229c7f;
`;

const MainPart = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 360px;
  padding: 16px 32px 16px 32px;
`;

const TextPart = styled.div`
  width: 310px;
`;

const LocationMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 310px;
  height: 18px;
  background-color: #ffffff;
`;

const DescriptionMain = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 22px;
  width: 310px;
  height: auto;
  background-color: #ffffff;
`;

const Headline = styled.p`
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60px;
  height: 18px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #229c7f;
  background-color: #ffffff;
`;

const Description = styled(Headline)`
  justify-content: flex-end;
`;

const Location = styled(Headline)``;

const Text = styled.p`
  margin: 0px;
  display: flex;
  margin-left: 22px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  color: #000000;
  background-color: #ffffff;
`;

const DescriptionText = styled(Text)`
  align-items: flex-start;
  width: 228px;
  height: 80px;
`;

const LocationText = styled(Text)`
  align-items: center;
  width: 187px;
  height: auto;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 310px;
  height: 40px;
  background-color: #ffffff;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 40px;
  border-radius: 4px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`;

const ButtonDelete = styled(Button)`
  border: solid 1px #0f4850;
  background-color: #ffffff;
  color: #0f4850;
`;

const ButtonEdit = styled(Button)`
  background-color: #0f4850;
  border-width: 0px;
  color: #ffffff;
`;

const AdminHallPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 764px) / 2);
`;

export {
  Wrapper,
  Header,
  Title,
  Image,
  MainPart,
  TextPart,
  LocationMain,
  DescriptionMain,
  Description,
  DescriptionText,
  Location,
  LocationText,
  Footer,
  Button,
  ButtonDelete,
  ButtonEdit,
  AdminHallPageContainer
};
