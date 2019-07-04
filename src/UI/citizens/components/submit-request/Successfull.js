import React from 'react';

import {
  Container,
  Button,
  ButtonText,
  StyledLink,
  Title,
  Description,
  CheckImage,
  SecContainer,
  ThContainer,
  ButtonContainer
} from './SuccsessUnsuccessStyle';
import okImage from '../../../../images/success@2x.png';
const Successfull = ({ onClick }) => (
  <Container>
    <SecContainer>
      <CheckImage imgSrc={okImage} />
    </SecContainer>
    <ThContainer>
      <Title>Potvrda</Title>
      <Description>Vaš zahtijev za rezervaciju je poslan.</Description>
    </ThContainer>

    <ButtonContainer>
      <StyledLink to="">
        <Button onClick={onClick}>
          <ButtonText>U REDU</ButtonText>
        </Button>
      </StyledLink>
    </ButtonContainer>
  </Container>
);

export default Successfull;
