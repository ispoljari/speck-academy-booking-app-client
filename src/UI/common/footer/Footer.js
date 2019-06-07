import React from 'react';

import {
  HeaderContainer,
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Linija
} from '../footer/FooterStyle';

const Footer = () => (
  <HeaderContainer>
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

export default Footer;
