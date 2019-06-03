import React from 'react';

import {
  HeaderContainer,
  HeaderTitle,
  RezervacijaDvorana,
  RezervacijaDvoranaMalo,
  Okvir,
  Okvir2,
  Naslov,
  Naslov1,
  Text,
  Text1,
  Kontakt,
  Mobitel,
  Gumb,
  Mail,
  Adresa,
  Okvir3,
  HeaderImage,
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Linija
} from './CitizensHeaderStyle';
import headerImage from '../../../../images/headerimage.jpg';

const CitizensHeader = () => (
  <HeaderContainer>
    <Okvir>
      <Gumb>ADMIN LOGIN</Gumb>
    </Okvir>
    <HeaderImage src={headerImage} />
    <RezervacijaDvorana>
      Rezervacija Dvorana
      <br />
      <RezervacijaDvoranaMalo>u gradu Križevcima</RezervacijaDvoranaMalo>
    </RezervacijaDvorana>
    <Okvir2>
      <Naslov>Dobrodošli, građani</Naslov>
      <br />
      <Text>
        Na ovim stranicama grada Križevaca možete odabrati dvorane i njihove
        termine koji odgovaraju Vašim događanima i eventovima.
      </Text>
    </Okvir2>
    <Okvir3>
      <Naslov1>Kontaktirajte nas!</Naslov1>
      <br />
      <Text1>
        Ako imate pitanja ili ste naišli na nejasnoće,
        <br />
        kontaktirajte nas putem e-maila ili poziva.
      </Text1>
      <Mail>E-MAIL</Mail>
      <Adresa>info@grad-krizevci.hr</Adresa>
      <br />
      <Kontakt>MOBITEL</Kontakt>
      <Mobitel>099 / 12 34 5678</Mobitel>
    </Okvir3>

    <HeaderTitle />
    <Footer1>
      Stranica izrađena u sklopu
      <Footer2>Speck Akademije 2019</Footer2>
    </Footer1>

    <Footer3>
      Copyright 2019 by
      <Footer4>Speck d.o.o.</Footer4>
    </Footer3>
    <Linija />
  </HeaderContainer>
);

export default CitizensHeader;
