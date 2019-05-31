import React from 'react';

import {
  MainContainer,
  MainHeader,
  MainDescription
} from './CitizensEditEventInfoStyle';

const CitizensEditEventInfo = () => (
  <MainContainer>
    <MainHeader>Podaci o događaju i Vama</MainHeader>
    <MainDescription>
      Recite nam ime svog događaja i pobliže ga objasnite. Nemojte zaboraviti
      ostaviti svoje kontakte podatke kako bismo Vas mogli kontaktirati u vezi
      dodatnih detalja i potvrđivanja rezervacije.
    </MainDescription>
  </MainContainer>
);

export default CitizensEditEventInfo;
