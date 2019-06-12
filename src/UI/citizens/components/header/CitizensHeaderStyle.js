import styled from 'styled-components';

export const StyledLink = styled.a`
  font-family: Poppins, sans serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.14;
  color: #000;
  z-index: 2;
  ${'' /* text-align: center; */}
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const SpacingDiv = styled.div`
  margin-bottom: 6px;
`;

//Contactbox start

export const ContactLeft = styled.div`
  margin-right: 13px;
  text-align: end;
  color: #229c7f;
  font-family: Poppins;
  font-size: 14px;
`;
export const ContactRight = styled.div`
  font-family: Poppins;
  font-size: 14px;
  color: #000000;
  text-align: left;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
//Contactbox end

export const HeaderContainer = styled.header`
  position: relative;
  width: 1440px;
  //padding: 32px;
  margin-bottom: 0px;
  color: #fff;
`;

export const Header = styled.div`
  position: absolute;
  width: 1440px;
  height: 336px;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.imgSrc});
  z-index: 1;
`;

export const HeaderTitle = styled.div`
  margin-top: 74px;
  width: 100%;
  height: 90px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  font-family: Lora, serif;
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  z-index: 2;
`;

export const HeaderTitleSmall = styled.div`
  margin-top: 0px;
  font-size: 20px;
  z-index: 2;
  ${'' /* additional */}
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
`;

export const AdminButton = styled.div`
  margin-top: 32px;
  margin-left: 884px;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  color: #0f4850;
  width: 132px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #0f4850;
  background-color: #fff;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    border-color: ##93e9bb;
  }
`;

export const Title = styled.div`
  margin: 32px;
  margin-bottom: 0px;
  width: 576px;
  height: 40px;
  font-family: Lora, serif;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
  z-index: 2;
`;

export const Text = styled.div`
  margin: 32px;
  margin-top: 16px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: #000;
  z-index: 2;
`;

export const Text1 = styled.div`
  margin: 16px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  color: #000;
  z-index: 2;
`;

export const ContactInformation1 = styled.div`
  width: 634px;
  height: 208px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  z-index: 2;
`;

export const ContactInformation = styled(ContactInformation1)`
  width: 374px;
`;

export const Container = styled.div`
  margin-left: 208px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ContactBox = styled.div`
  width: 232px;
  height: 54px;
  margin: 65px;
  margin-top: 10px;
  margin-bottom: 16px;
`;

export const Container1 = styled.div`
  width: 1024px;
  margin-top: 53px;
  display: inline-flex;
  justify-content: space-between;
`;
