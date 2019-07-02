import React from 'react';

import Icon from '../../../../images/info-icon@3x.png';
import {
  HallImageContainer,
  HallNameButton,
  HallNameTextCenter,
  HallImage,
  HeadlineText,
  SubheadlineText,
  FirstRow,
  MainContainer,
  InfoBtn,
  TextInfoIcon,
  Elipse,
  Number,
  LayoutWrapper
} from './SelectHallStyle.js';

const IndividualHall = ({ hall, handleHallSelect, onInfoClick }) => {
  const handleHallSelectClick = () => {
    handleHallSelect(hall);
  };

  const handleHallInfoClick = () => {
    onInfoClick(hall);
  };

  return (
    <HallImageContainer>
      <HallImage src={hall.pictureUrl} />
      <InfoBtn onClick={handleHallInfoClick} iconSrc={Icon} />
      <HallNameButton id={hall.name} onClick={handleHallSelectClick}>
        <HallNameTextCenter>{hall.name}</HallNameTextCenter>
      </HallNameButton>
    </HallImageContainer>
  );
};

const CitizensSelectHall = ({ allHalls, handleHallSelect, onInfoClick }) => {
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
            <IndividualHall
              hall={hall}
              key={`${index}-${hall.name}`}
              handleHallSelect={handleHallSelect}
              onInfoClick={onInfoClick}
            />
          ))}
        </FirstRow>
      </MainContainer>
    </div>
  );
};

export default CitizensSelectHall;
