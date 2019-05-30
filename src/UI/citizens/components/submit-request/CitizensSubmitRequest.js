import React from 'react';

import {
  HeaderContainer,
  HeaderTitle,
  divKrug,
  divBroj
} from './CitizensSubmitRequestStyle';

const CitizensSubmitRequest = () => (
  <HeaderContainer>
    <divKrug>
      <divBroj>4</divBroj>
    </divKrug>

    <HeaderTitle>Kraj</HeaderTitle>

    <bodyTitle>
      Nakon što ste ispunili sve podatke, pošaljite svoj zahtjev na razmatranje.
      Povratnu informaciju ćete dobiti u što kraćem roku.
      <br />
      <br />
      Za sva dodatnja pitanja, kontaktirajte nas:
      <br />
      <br />
      <divMail>E-MAIL</divMail>
      <divAdresa>info@grad-krizevci.hr</divAdresa>
      <br />
      <br />
      <divKontakt>MOBITEL</divKontakt>
      <divMobitel>099 / 12 34 5678</divMobitel>
    </bodyTitle>
  </HeaderContainer>
);

export default CitizensSubmitRequest;
