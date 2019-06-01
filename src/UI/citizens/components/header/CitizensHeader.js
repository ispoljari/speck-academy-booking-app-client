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
  Mail,
  Adresa,
  Okvir3,
  HeaderImage
} from './CitizensHeaderStyle';
import headerImage from '../../../../images/headerimage.jpg';

const CitizensHeader = () => (
  <HeaderContainer>
    <Okvir>
      <button type="button">ADMIN LOGIN</button>
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
        git kontaktirajte nas putem e-maila ili poziva.
      </Text1>
      <Mail>E-MAIL</Mail>
      <Adresa>info@grad-krizevci.hr</Adresa>
      <br />
      <Kontakt>MOBITEL</Kontakt>
      <Mobitel>099 / 12 34 5678</Mobitel>
    </Okvir3>

    <HeaderTitle />
  </HeaderContainer>
);

export default CitizensHeader;
