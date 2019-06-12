import React from 'react';
import KrizevciImg from '../../../../images/krizevci1b1.jpg';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleGray,
  HeaderTopContainer,
  RezDvoIAdminPregled,
  LogOutButton,
  NavButton,
  NavLink,
  Navbar,
  Image,
  HeaderTopRight
} from './AdminHeaderStyle';

const NavTab = props => (
  <NavButton>
    <NavLink href={props.link}>{props.text}</NavLink>
  </NavButton>
);

const AdminHeader = () => (
  <HeaderContainer>
    <HeaderTopContainer>
      <Image src={KrizevciImg} />
      <HeaderTopRight>
        <RezDvoIAdminPregled>
          <HeaderTitle>REZERVACIJA DVORANA</HeaderTitle>
          <HeaderTitleGray>Administratorski pregled</HeaderTitleGray>
        </RezDvoIAdminPregled>
        <LogOutButton>LOG OUT</LogOutButton>
      </HeaderTopRight>
    </HeaderTopContainer>
    <Navbar>
      <NavTab link="/admin-requests" text="Zahtjevi na čekanju" />
      <NavTab link="/admin-reservations" text="Rezervacije" />
      <NavTab link="/admin-halls" text="Dvorane" />
    </Navbar>
  </HeaderContainer>
);

export default AdminHeader;
