import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 1024px;
  height: 488px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  margin-left: 208px;
  margin-top: 32px;
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
  top: 20px;
  left: 16px;
  width: 76px;
  height: 145px;
  opacity: 0.4;
  font-family: Poppins;
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

const Datum = styled.div`
  position: absolute;
  top: 32px;
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

export { Container, Krug, Broj, Datum };
