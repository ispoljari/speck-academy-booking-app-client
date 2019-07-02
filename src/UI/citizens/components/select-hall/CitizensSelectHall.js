import React from 'react';

import Icon from '../../../../images/info-icon@3x.png';
import {
  StyledLink,
  HallImageContainer,
  HallNameButton,
  HallNameTextCenter,
  HallImage,
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

const IndividualHall = ({ hall }) => (
  <HallImageContainer>
    <HallImage src={hall.pictureUrl} />
    <a href="#" rel="noopener noreferrer">
      <InfoIcon src={Icon} />
    </a>

    <HallNameButton id={hall.name}>
      <HallNameTextCenter>{hall.name}</HallNameTextCenter>
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
            <IndividualHall hall={hall} key={`${index}-${hall.name}`} />
          ))}
        </FirstRow>
      </MainContainer>
    </div>
  );
};

export default CitizensSelectHall;
