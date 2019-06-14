import React from 'react';

import {
  Container,
  Button,
  ButtonText,
  StyledLink,
  Title,
  Description,
  CheckImage2,
  SecContainer,
  ThContainer,
  ButtonContainer
} from './SuccsessUnsuccessStyle';

import okImage2 from '../../../../images/unsuccess@2x.png';
const Unsuccessfull = () => (
  <Container>
    <SecContainer>
      <CheckImage2 imgSrc={okImage2} />
    </SecContainer>
    <ThContainer>
      <Title>Greška</Title>
      <Description>Molimo da pokušate ponovo.</Description>
    </ThContainer>

    <ButtonContainer>
      <StyledLink to="">
        <Button>
          <ButtonText>U REDU</ButtonText>
        </Button>
      </StyledLink>
    </ButtonContainer>
  </Container>
);

export default Unsuccessfull;
