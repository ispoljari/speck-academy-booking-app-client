import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 1024px;
  height: 263px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  position: relative;
`;

const divKrug = styled.div`
  width: 152px;
  height: 152px;
  opacity: 0.2;
  border: solid 16px rgba(130, 212, 167, 0.4);
`;

const divBroj = styled.div`
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

export { HeaderContainer, HeaderTitle, divKrug, divBroj };
