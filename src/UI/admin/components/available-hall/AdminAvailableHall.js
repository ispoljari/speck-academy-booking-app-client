import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 374px;
  height: 400px;
  border-radius: 4px;
  border: solid 1px #229c7f;
  background-color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 374px;
  height: 40px;
  border-radius: 3px;
  background-color: #229c7f;
`;

const Title = styled.h1`
  width: 374px;
  height: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
`;

const Image = styled.img`
  width: 244px;
  height: 136px;
  margin-bottom: 14px;
  border-radius: 2px;
  border: solid 1px #229c7f;
`;

const MainPart = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 372px;
  height: 360px;
  padding: 16px 32px 16px 32px;
  background-color: #ffffff;
`;

const TextPart = styled.div`
  box-sizing: border-box;
  width: 310px;
  height: 206px;
`;

const LocationMain = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 310px;
  height: 18px;
  background-color: #ffffff;
`;

const DescriptionMain = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin-top: 22px;
  width: 310px;
  height: auto;
  background-color: #ffffff;
`;

const Description = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 60px;
  height: 18px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #229c7f;
  background-color: #ffffff;
`;

const DescriptionDescr = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  margin-left: 22px;
  width: 228px;
  height: 80px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  background-color: #ffffff;
`;

const Location = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60px;
  height: 18px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #229c7f;
  background-color: #ffffff;
`;

const LocationDescr = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-left: 22px;
  width: 187px;
  height: auto;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  background-color: #ffffff;
`;

const Footer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 310px;
  height: 40px;
  background-color: #ffffff;
`;

const ButtonDel = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  box-sizing: border-box;
  width: 96px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #0f4850;
  background-color: #ffffff;

   {
    /* stil za tekst unutar buttona */
  }
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #0f4850;
`;

const ButtonEdit = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  box-sizing: border-box;
  width: 96px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4850;

   {
    /* stil za tekst unutar buttona */
  }
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
const AdminAvailableHallComponent = () => (
  <Wrapper>
    <Header>
      <Title>Velika-Sportska-Dvorana</Title>
    </Header>

    <MainPart>
      <Image />

      <TextPart>
        <LocationMain>
          <Location>LOKACIJA</Location>
          <LocationDescr>Franje Tuđmana 20</LocationDescr>
        </LocationMain>

        <DescriptionMain>
          <Description>OPIS</Description>
          <DescriptionDescr>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            dictum, leo pulvinar aliquet sagittis, neque ligula sagittis augue,
            eget finibus lectus leo nec ipsum.{' '}
          </DescriptionDescr>
        </DescriptionMain>
      </TextPart>

      <Footer>
        <ButtonDel>IZBRIŠI</ButtonDel>
        <ButtonEdit>UREDI</ButtonEdit>
      </Footer>
    </MainPart>
  </Wrapper>
);

export default AdminAvailableHallComponent;
