import React from 'react';

import {
  HeaderContainer,
  Header,
  HeaderTitle,
  HeaderTitleSmall,
  AdminLoginBtn,
  ContactInformation1,
  Title,
  Text,
  Text1,
  Mail,
  Adresa,
  ContactInformation,
  Container,
  ContactBox,
  Container1
} from './CitizensHeaderStyle';

import headerImage from '../../../../images/headerimage.jpg';

const CitizensHeader = ({ onClick }) => (
  <HeaderContainer>
    <Header imgSrc={headerImage}>
      {/* <HeaderImage src={headerImage} />*/}

      <Container>
        <AdminLoginBtn onClick={onClick}>LOGIN</AdminLoginBtn>

        <HeaderTitle>
          REZERVACIJA DVORANA
          <br />
          <HeaderTitleSmall>u gradu Križevcima</HeaderTitleSmall>
        </HeaderTitle>

        <Container1>
          <ContactInformation1>
            <Title>Dobrodošli, građani</Title>
            <br />
            <Text>
              Na ovim stranicama grada Križevaca možete odabrati dvorane i
              njihove termine koji odgovaraju Vašim događanima i eventovima.
            </Text>
          </ContactInformation1>
          <ContactInformation>
            <Title>Kontaktirajte nas!</Title>
            <br />
            <Text1>
              Ako imate pitanja ili ste naišli na nejasnoće,
              <br />
              kontaktirajte nas putem e-maila ili poziva.
            </Text1>
            <ContactBox>
              <Mail>E-MAIL</Mail>
              <Adresa>info@grad-krizevci.hr</Adresa>
              <br />
              <Mail>MOBITEL</Mail>
              <Adresa>099 / 12 34 5678</Adresa>
            </ContactBox>
          </ContactInformation>
        </Container1>
      </Container>
    </Header>
  </HeaderContainer>
);

export default CitizensHeader;
