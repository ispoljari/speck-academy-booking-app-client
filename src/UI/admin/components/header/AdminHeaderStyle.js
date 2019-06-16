import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  margin-bottom: 32px;
  background-color: #ffffff;
`;

const HeaderTopRight = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 72px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
`;
const RezDvoIAdminPregled = styled.div``;
const HeaderTitle = styled.h1`
  font-family: Lora;
  font-size: 24px;
  font-weight: bold;
  color: #434343;
  margin: 0;
  padding: 8px 16px 4px;
`;
const HeaderTitleGray = styled.h2`
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #434343;
  padding-left: 16px;
  opacity: 0.5;
`;
const LogOutButton = styled.button`
  width: 114px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #0f4951;
  background-color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  color: #0f4951;
  margin-top: 16px;
`;
const Navbar = styled.div`
  width: 100%;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #229c7f;
  height: 40px;
  padding: 0 calc((100vw - 1032px) / 2);
  display: flex;
  flex-direction: row;
`;

const NavButton = styled.div`
  width: 168px;
  height: 100%;
  display: flex;
`;
const NavigationLinkText = styled.p`
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 168px;
  align-items: center;
  height: 100%;
  color: white;
  font-family: Lora;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;

const Image = styled.img`
  width: 136px;
  height: 64px;
  position: relative;
  bottom: -8px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
  border-top: 2px solid ##229c7f;
  border-right: 2px solid ##229c7f;
  border-left: 2px solid ##229c7f;
`;

const HeaderTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 calc((100vw - 1032px) / 2);
`;

export {
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
};
