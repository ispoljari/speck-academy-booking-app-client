import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 1440px;
  padding: 20px;
`;

const HeaderTitle = styled.h1`
  width: 576px;
  height: 40px;
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

const HeaderButton = styled.div`
  width: 108px;
  height: 24px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #0f4850;
`;

const HeaderImage = styled.img`
width: 100%;
height: 336px;
top center / 200px 200px;
`;

const RezervacijaDvorana = styled.div`
  left: 208px;
  top: 145.6px
  position: absolute;
  width: 1024px;
  height: 89.6px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  font-family: Lora;
  font-size: 48px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  `;

const RezervacijaDvoranaMalo = styled.div`
  width: 1024px;
  height: 89.6px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  font-family: Lora;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
`;
const Okvir = styled.div`
  left: 1092px;
  top: 32px
  position: absolute;
  width: 132px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #0f4850;
  background-color: #ffffff;
  `;

const Gumb = styled.button`
  width: 108px;
  height: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #229c7f;
`;

const Naslov = styled.div`
  position: relative;
  width: 576px;
  height: 40px;
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

const Text = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

const Okvir2 = styled.div`
  left: 208px;
  top: 288px
  position: absolute;
  width: 634px;
  height: 208px;    
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  padding:10px;
  margin-left: 20px;
  margin-top:20px;
  `;

const Okvir3 = styled.div`
  left: 858px;
  top: 288px
  position: absolute;
  width: 374px;
  height: 208px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  padding:10px;
  margin-left: 20px;
  margin-top:20px;
  `;

const Kontakt = styled.div`
  left: 65px;
  top: 166px
  position: absolute;
  display: inline-block;
  width: 64px;
  height: 24px;
  font-family: Poppins-Regular;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
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
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
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
  font-family: Poppins-Regular;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #229c7f;
`;

const Adresa = styled.div`
left: 142px;
  top: 138px
  position: absolute;
  display: inline-block;
  width: 168px;
  height: 24px;
  font-family: Poppins-Regular;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  margin-left: 13px;
`;

export {
  HeaderContainer,
  Okvir3,
  Text,
  Okvir2,
  Naslov,
  Okvir,
  Gumb,
  Kontakt,
  Mobitel,
  Mail,
  Adresa,
  HeaderTitle,
  RezervacijaDvoranaMalo,
  RezervacijaDvorana,
  HeaderImage,
  HeaderButton
};
