import React from 'react';

import Icon from '../../../../images/info-icon@3x.png';
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
