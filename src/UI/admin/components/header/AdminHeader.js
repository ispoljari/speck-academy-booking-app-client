import React from 'react';
import { NavLink } from 'react-router-dom';
import KrizevciImg from '../../../../images/krizevci1b1.jpg';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleGray,
  HeaderTopContainer,
  RezDvoIAdminPregled,
  LogOutButton,
  NavButton,
  NavigationLinkText,
  Navbar,
  Image,
  HeaderTopRight
} from './AdminHeaderStyle';

const NavTab = props => (
  <NavButton>
    <NavigationLinkText>
      <NavLink
        to={props.link}
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          height: '100%',
          width: '168px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        activeStyle={{ color: '#0f4951', backgroundColor: '#ffffff' }}
      >
        {props.text}
      </NavLink>
    </NavigationLinkText>
  </NavButton>
);

const AdminHeader = ({ onClick }) => (
  <HeaderContainer>
    <HeaderTopContainer>
      <Image src={KrizevciImg} />
      <HeaderTopRight>
        <RezDvoIAdminPregled>
          <HeaderTitle>REZERVACIJA DVORANA</HeaderTitle>
          <HeaderTitleGray>Administratorski pregled</HeaderTitleGray>
        </RezDvoIAdminPregled>
        <LogOutButton onClick={onClick}>LOG OUT</LogOutButton>
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
