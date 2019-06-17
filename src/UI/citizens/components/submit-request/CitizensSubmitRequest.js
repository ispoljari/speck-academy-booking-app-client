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
  StyledLink,
  SpacingDiv
} from './CitizensSubmitRequestStyle';

const CitizensSubmitRequest = props => (
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
        <Button onClick={props.onSubmitRequest}>
          <ButtonText>Pošaljite zahtjev</ButtonText>
        </Button>
      </SectorDown>
    </LayoutContainer>
  </Container>
);

export default CitizensSubmitRequest;

//Old code start
// const CitizensSubmitRequest = () => (
//   <Container>
//     <Circle>
//       <Number>4</Number>
//     </Circle>
//     <LayoutContainer>
//       <Title>Kraj</Title>
//       <Description>
//         <MainText>
//           Nakon što ste ispunili sve podatke, pošaljite svoj zahtjev na
//           razmatranje. Povratnu informaciju ćete dobiti u što kraćem roku.
//           <br />
//           <br />
//           <br />
//           Za sva dodatnja pitanja, kontaktirajte nas:
//         </MainText>
//       </Description>

//       <SectorDown>
//         <Contact>
//           <ContactLeft>
//             <SpacingDiv>
//               <p>E-MAIL</p>
//             </SpacingDiv>
//             <p>MOBITEL</p>
//           </ContactLeft>
//           <ContactRight>
//             <SpacingDiv>
//               <StyledLink href="mailto:info@grad-krizevci.hr">
//                 <p>info@grad-krizevci.hr</p>
//               </StyledLink>
//             </SpacingDiv>
//             <StyledLink href="tel:09912345678">
//               <p>099 / 12 34 5678</p>
//             </StyledLink>
//           </ContactRight>
//         </Contact>
//         <StyledLink href="">
//           <Button>
//             <ButtonText>Pošaljite zahtjev</ButtonText>
//           </Button>
//         </StyledLink>
//       </SectorDown>
//     </LayoutContainer>
//   </Container>
// );
//Old code end
