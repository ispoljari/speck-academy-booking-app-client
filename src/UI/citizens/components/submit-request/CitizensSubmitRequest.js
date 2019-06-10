import React from 'react';

import {
  Container,
  Title,
  LayoutContainer,
  MainText,
  Description,
  ContactLeft,
  Contact,
  ContactRight,
  Button,
  ButtonText,
  Circle,
  Number,
  SectorDown,
  StyledLink
} from './CitizensSubmitRequestStyle';

const CitizensSubmitRequest = () => (
  <Container>
    <Circle>
      <Number>4</Number>
    </Circle>
    <LayoutContainer>
      <Title>Kraj</Title>
      <Description>
        <MainText>
          Nakon što ste ispunili sve podatke, pošaljite svoj zahtjev na
          razmatranje. Povratnu informaciju ćete dobiti u što kraćem roku.
          <br />
          <br />
          <br />
          Za sva dodatnja pitanja, kontaktirajte nas:
        </MainText>
      </Description>

      <SectorDown>
        <Contact>
          <ContactLeft>
            <p>E-mail</p>
            <p>Mobitel</p>
          </ContactLeft>
          <ContactRight>
            <a href="/">
              <p>info@grad-krizevci.hr</p>
            </a>
            <p>099/ 12 34 5678</p>
          </ContactRight>
        </Contact>
        <StyledLink to="">
          <Button>
            <ButtonText>Pošaljite zahtjev</ButtonText>
          </Button>
        </StyledLink>
      </SectorDown>
    </LayoutContainer>
  </Container>
);

export default CitizensSubmitRequest;
