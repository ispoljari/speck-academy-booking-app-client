import React from 'react';

import {
  FooterContainer,
  Footer1,
  Footer2,
  Speck,
  VLine,
  StyledLink
} from './FooterStyle';

const Footer = () => (
  <FooterContainer>
    <Footer1>
      Aplikacija izrađena u sklopu
      <Footer2>Speck Akademije 2019</Footer2>
    </Footer1>
    <VLine />
    <Footer1>
      Copyright 2019 by
      <StyledLink href="https://www.speck.agency" target="_blank">
        <Speck>Speck d.o.o.</Speck>
      </StyledLink>
    </Footer1>
  </FooterContainer>
);

export default Footer;
