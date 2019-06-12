import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: relative;
  width: 1440px;
  //padding: 32px;
  margin-bottom: 0px;
  color: #fff;
`;

const Header = styled.div`
  position: absolute;
  width: 1440px;
  height: 336px;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.imgSrc});
  z-index: 1;
`;

const HeaderTitle = styled.div`
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

const HeaderTitleSmall = styled(HeaderTitle)`
  margin-top: 0px;
  font-size: 20px;
  z-index: 2;
`;

const Admin = styled.button`
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
`;

const Title = styled.div`
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

const Text = styled.div`
  margin: 32px;
  margin-top: 16px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: normal;
  color: #000;
  z-index: 2;
`;

const Text1 = styled.div`
  margin: 16px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  color: #000;
  z-index: 2;
`;

const ContactInformation1 = styled.div`
  width: 634px;
  height: 208px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  z-index: 2;
`;

const ContactInformation = styled(ContactInformation1)`
  width: 374px;
`;

const Mail = styled.div`
  display: inline-block;
  margin-right: 13px;
  // width: 64px;
  // height: 24px;
  text-align: right;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  color: #229c7f;
`;

const Adresa = styled.a`
  display: inline;
  width: 168px;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  color: #000;
  margin-left: 13px;
`;

const Container = styled.div`
  margin-left: 208px;
  //   padding-top: 32px;
  //   width: 1024px;
  //   height: 496px;
  //  ;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const ContactBox = styled.div`
  width: 232px;
  height: 54px;
  margin: 65px;
  margin-top: 10px;
  margin-bottom: 16px;
`;

const Container1 = styled.div`
  width: 1024px;
  margin-top: 53px;
  display: inline-flex;
  justify-content: space-between;
`;

export {
  HeaderContainer,
  Header,
  ContactInformation,
  Text,
  Text1,
  ContactInformation1,
  Title,
  Admin,
  Mail,
  Adresa,
  HeaderTitleSmall,
  HeaderTitle,
  Container,
  ContactBox,
  Container1
};
