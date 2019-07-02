import React from 'react';

import { API_BASE_URL } from '../../../../config';
import hallImage01 from '../../../../images/01.png';
import hallImage02 from '../../../../images/velika_01.png';
import hallImage03 from '../../../../images/gradska-knjiznica.png';
import hallImage04 from '../../../../images/turisticki-dom.png';
import hallImage05 from '../../../../images/konf-dvorana-1.png';
import Icon from '../../../../images/info-icon@3x.png';

//styles

import {
  StyledLink,
  HallImageContainer,
  HallNameButton,
  HallNameTextCenter,
  HeadlineText,
  SubheadlineText,
  FirstRow,
  MainContainer,
  InfoIcon,
  TextInfoIcon,
  Elipse,
  Number,
  LayoutWrapper
} from './SelectHallStyle.js';

const IndividualHall = ({ imgSrc, hallTitle }) => (
  <HallImageContainer>
    <img src={imgSrc} />
    <a href="#" rel="noopener noreferrer">
      <InfoIcon src={Icon} />
    </a>

    <HallNameButton id={hallTitle}>
      <HallNameTextCenter>{hallTitle}</HallNameTextCenter>
    </HallNameButton>
  </HallImageContainer>
);

function CitizensSelectHall() {
  return (
    <div>
      <MainContainer>
        <Elipse>
          <Number>1</Number>
        </Elipse>
        <LayoutWrapper>
          <HeadlineText>Odaberite dvoranu</HeadlineText>
          <SubheadlineText>
            Pronađite dvoranu koja vam odgovara. Za dodatne informacije kliknite
            na <TextInfoIcon src={Icon} /> ikonu.
          </SubheadlineText>
        </LayoutWrapper>
        <FirstRow>
          <HallImageContainer>
            <img src={hallImage01} />
            <a href="#" rel="noopener noreferrer">
              <InfoIcon src={Icon} />
            </a>

            <HallNameButton id="Velika sportska dvorana">
              {/* <StyledLink href="" target="_blank" rel="noopener noreferrer"> */}
              <HallNameTextCenter>Velika sportska dvorana</HallNameTextCenter>
              {/* </StyledLink> */}
            </HallNameButton>
          </HallImageContainer>

          <HallImageContainer>
            <img src={hallImage02} />
            <a href="#" rel="noopener noreferrer">
              <InfoIcon src={Icon} />
            </a>
            <HallNameButton>
              {/* <StyledLink href="" target="_blank" rel="noopener noreferrer"> */}
              <HallNameTextCenter>Dvorana Hrvatskog doma</HallNameTextCenter>
              {/* </StyledLink> */}
            </HallNameButton>
          </HallImageContainer>

          <HallImageContainer>
            <img src={hallImage03} />
            <a href="#" rel="noopener noreferrer">
              <InfoIcon src={Icon} />
            </a>
            <HallNameButton>
              {/* <StyledLink href="" target="_blank" rel="noopener noreferrer"> */}
              <HallNameTextCenter>Dvorana gradske knjižnice</HallNameTextCenter>
              {/* </StyledLink> */}
            </HallNameButton>
          </HallImageContainer>

          <HallImageContainer>
            <img src={hallImage04} />
            <a href="#" rel="noopener noreferrer">
              <InfoIcon src={Icon} />
            </a>
            <HallNameButton>
              {/* <StyledLink href="" target="_blank" rel="noopener noreferrer"> */}
              <HallNameTextCenter>
                Dvorana TIC (Turistički dom)
              </HallNameTextCenter>
              {/* </StyledLink> */}
            </HallNameButton>
          </HallImageContainer>

          <HallImageContainer>
            <img src={hallImage05} />
            <a href="#" rel="noopener noreferrer">
              <InfoIcon src={Icon} />
            </a>
            <HallNameButton>
              {/* <StyledLink href="" target="_blank" rel="noopener noreferrer"> */}
              <HallNameTextCenter>
                Konferencijska dvorana RCTP
              </HallNameTextCenter>
              {/* </StyledLink> */}
            </HallNameButton>
          </HallImageContainer>
        </FirstRow>
      </MainContainer>
    </div>
  );
}

export default CitizensSelectHall;
