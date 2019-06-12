import React from 'react';

import { FooterContainer, Footer1, Footer2, Speck, VLine } from './FooterStyle';

const Footer = () => (
  <FooterContainer>
    <Footer1>
      Stranica izrađena u sklopu
      <Footer2>Speck Akademije 2019</Footer2>
    </Footer1>
    <VLine />
    <Footer1>
      Copyright 2019 by
      <Speck>Speck d.o.o.</Speck>
    </Footer1>
  </FooterContainer>
);

export default Footer;
