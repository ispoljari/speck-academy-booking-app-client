import React from 'react';

import {
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
  ButtonDelete,
  ButtonEdit
} from './AdminAvailableHallStyle.js';

const AdminAvailableHall = () => (
  <Wrapper>
    <Header>
      <Title>Velika-Sportska-Dvorana</Title>
    </Header>

    <MainPart>
      <Image />

      <TextPart>
        <LocationMain>
          <Location>LOKACIJA</Location>
          <LocationText>Franje Tuđmana 20</LocationText>
        </LocationMain>

        <DescriptionMain>
          <Description>OPIS</Description>
          <DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            dictum, leo pulvinar aliquet sagittis, neque ligula sagittis augue,
            eget finibus lectus leo nec ipsum.{' '}
          </DescriptionText>
        </DescriptionMain>
      </TextPart>

      <Footer>
        <ButtonDelete>IZBRIŠI</ButtonDelete>
        <ButtonEdit>UREDI</ButtonEdit>
      </Footer>
    </MainPart>
  </Wrapper>
);

export default AdminAvailableHall;
