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

const CitizensSelectHall = ({ allHalls }) => {
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
          {allHalls.map((hall, index) => (
            <IndividualHall hallData={hall} key={`index-${hall.name}`} />
          ))}
        </FirstRow>
      </MainContainer>
    </div>
  );
};

export default CitizensSelectHall;
