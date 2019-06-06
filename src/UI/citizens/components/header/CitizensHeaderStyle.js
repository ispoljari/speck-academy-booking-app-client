import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 1440px;
  padding: 20px;
`;

const Header = styled.div`
  width: 1440px;
  height: 336px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${props => props.imgSrc});
`;

const RezervacijaDvorana = styled.div`
  padding-top: 146px;
  width: 100%;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  font-family: Lora;
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
`;

const RezervacijaDvoranaMalo = styled.div`
  width: 1024px;
  height: 89.6px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  font-family: Lora;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
`;
const Okvir = styled.button`
  right: 8px;
  top: 32px
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Poppins;
  font-weight: 500;
  color: #0f4850;
  width: 132px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #0f4850;
  background-color: #ffffff;
  `;

const Naslov = styled.div`
  padding: 32px;
  width: 576px;
  height: 40px;
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
`;

const Naslov1 = styled.div`
  padding: 32px;
  width: 576px;
  height: 40px;
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
`;

const Text = styled.div`
  padding: 32px;
  padding-top: 16px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  color: #000000;
`;

const Text1 = styled.div`
  padding: 16px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  color: #000000;
`;

const Okvir2 = styled.div`
  top: 288px
  position: absolute;
  width: 634px;
  height: 208px;    
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  `;

const Okvir3 = styled.div`
  right: 0px;
  top: 288px
  position: absolute;
  width: 374px;
  height: 208px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  `;

const Kontakt = styled.div`
  left: 65px;
  top: 166px
  position: absolute;
  display: inline-block;
  width: 64px;
  height: 24px;
  text-align: right;
  font-family: Poppins-Regular;
  font-size: 16px;
  color: #229c7f;
  `;

const Mobitel = styled.div`
  left: 142px;
  top: 168px
  position: absolute;
  display: inline-block;
  width: 168px;
  height: 24px;
  font-family: Poppins-Regular;
  font-size: 14px;
  font-weight: normal;
  color: #000000;
  margin-left: 13px;
  `;

const Mail = styled.div`
  left: 65px;
  top: 136px
  position: absolute;
  display: inline-block;
  width: 64px;
  height: 24px;
  text-align: right;
  font-family: Poppins-Regular;
  font-size: 16px;
  font-weight: normal;
  color: #229c7f;
  `;

const Adresa = styled.div`
  left: 142px;
  top: 136px
  position: absolute;
  display: inline-block;
  width: 168px;
  height: 24px;
  font-family: Poppins-Regular;
  font-size: 14px;
  font-weight: normal;
  color: #000000;
  margin-left: 13px;
  `;

const Container = styled.div`
  left: 208px;
  position: absolute;
  width: 1024px;
  height: 496px;
`;

export {
  HeaderContainer,
  Header,
  Okvir3,
  Text,
  Text1,
  Okvir2,
  Naslov,
  Naslov1,
  Okvir,
  Kontakt,
  Mobitel,
  Mail,
  Adresa,
  RezervacijaDvoranaMalo,
  RezervacijaDvorana,
  Container
};
