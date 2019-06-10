import styled from 'styled-components';
import img from '../../../../src/images/Križevci-panorama-edit@3x.png';

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  margin: auto;
  width: 1024px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
`;

const Picture = styled.div`
  background-image: url(${img});
  background-size: cover;
  margin: auto;
  margin-top: 130px;
  width: 393.4px;
  height: 144px;
`;

const Error = styled.p`
  margin: auto;
  margin-top: 39px;
  margin-bottom: 5.8px;
  width: 300px;
  font-family: Poppins;
  font-size: 16px;
  color: #808080;
`;

const Button = styled.button`
  margin-top: 16px;
  margin-left: 462px;
  margin-bottom: 43.2px;
  width: 99.1px;
  height: 32.8px;
  border-radius: 4px;
  background-color: #0f4951;
  font-family: Poppins;
  font-size: 14px;
  color: #ffffff;
`;

export { Body, Container, Picture, Error, Button };
