import React from 'react';

import {
  HeaderContainer,
  Header,
  HeaderTitle,
  HeaderTitleSmall,
  AdminButton,
  ContactInformation1,
  Title,
  Text,
  Text1,
  ContactInformation,
  Container,
  Container1,
  StyledLink,
  ContactLeft,
  ContactRight,
  Contact,
  SpacingDiv
} from './CitizensHeaderStyle';

import headerImage from '../../../../images/header-image@2x.png';

const CitizensHeader = () => (
  <HeaderContainer>
    <Header imgSrc={headerImage}> </Header>
    <Container>
      <StyledLink href="" target="_blank" rel="noopener noreferrer">
        <AdminButton>ADMIN LOGIN</AdminButton>
      </StyledLink>

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
            Na ovim stranicama grada Križevaca možete odabrati dvorane i njihove
            termine koji odgovaraju Vašim događanima i eventima.
          </Text>
        </ContactInformation1>
        <ContactInformation>
          <Title>Kontaktirajte nas!</Title>
          <br />
          <Text1>
            Ako imate pitanja ili ste naišli na nejasnoće, kontaktirajte nas
            putem e-maila ili poziva.
          </Text1>
          <Contact>
            <ContactLeft>
              <SpacingDiv>
                <p>E-MAIL</p>
              </SpacingDiv>
              <p>MOBITEL</p>
            </ContactLeft>
            <ContactRight>
              <SpacingDiv>
                <StyledLink href="mailto:info@grad-krizevci.hr">
                  <p>info@grad-krizevci.hr</p>
                </StyledLink>
              </SpacingDiv>
              <StyledLink href="tel:09912345678">
                <p>099 / 12 34 5678</p>
              </StyledLink>
            </ContactRight>
          </Contact>
        </ContactInformation>
      </Container1>
    </Container>
  </HeaderContainer>
);

export default CitizensHeader;
