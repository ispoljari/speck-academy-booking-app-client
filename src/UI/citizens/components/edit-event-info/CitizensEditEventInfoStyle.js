import styled from 'styled-components';

const MainContainer = styled.div`
  margin: auto;
  width: 1024px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  padding-left: 130px;
  padding-right: 130px;
  padding-bottom: 32px;
`;

const MainHeader = styled.h1`
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
`;

const MainDescription = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  color: #000000;
`;

const FormHeader = styled.h5`
  text-transform: uppercase;
  font-family: Poppins;
  font-size: 16px;
  color: #434343;
`;

export { MainContainer, MainHeader, MainDescription, FormHeader };
