import React from 'react';

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  min-height: 100px;
  ${'' /* padding: 20px; */}
  ${'' /* additional */}
  margin-bottom: 3vh;
`;

export const Footer1 = styled.div`
  min-width: 299px;
  min-height: 18px;
  display: inline;
  opacity: 0.7;
  font-family: Poppins;
  font-size: 14px;
  color: #434343;
`;

export const Footer2 = styled(Footer1)`
  font-family: Poppins;
  font-weight: 700;
  margin-left: 4px;
`;

export const Speck = styled(Footer1)`
  color: #229c7f;
  margin-left: 4px;
`;

export const VLine = styled.div`
  display: inline;
  margin-right: 7px;
  margin-left: 7px;
  border-left: 2px solid rgba(67, 67, 67, 0.5);
  min-height: 18px;
`;

export const StyledLink = styled.a`
  ${'' /* text-align: center; */}
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Footer1>
      Stranica izrađena u sklopu
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
