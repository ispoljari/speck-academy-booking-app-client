import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 1024px;
  height: 263px;
  margin-left: 208px;
  margin-top: 32px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
`;

const Krug = styled.div`
  margin: 16px;
  width: 152px;
  height: 152px;
  opacity: 0.2;
  border: solid 16px rgba(130, 212, 167, 0.4);
  border-radius: 50%;
`;

const Broj = styled.div`
  position: absolute;
  top: 32px;
  left: 16px;
  width: 76px;
  height: 145px;
  opacity: 0.4;
  font-family: Poppins-Regular;
  font-size: 96px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #82d4a7;
  margin-left: 38px;
  text-align: center;
`;

const Title = styled.h1`
  position: absolute;
  top: 16px;
  left: 130px;
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

const Mail = styled.div`
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

const Kontakt = styled.div`
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
const Opis = styled.div`
  left: 130px;
  top: 88px;
  position: absolute;
  width: 764px;
  height: 88px;
  font-family: Poppins-Regular;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  display: block;
`;

const Nesto = styled.div`
  margin-left: 130px;
  display: inline;
`;

const Button2 = styled.button`
  position: absolute;
  top: 182px;
  right: 32px;
  width: 374px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4850;
  font-family: Poppins-Medium;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  display: inline;
  border: 1px solid #008cba;
`;

export {
  Container,
  Title,
  Krug,
  Broj,
  Mail,
  Adresa,
  Mobitel,
  Kontakt,
  Opis,
  Nesto,
  Button2
};
