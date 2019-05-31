import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 374px;
  height: 400px;
  border-radius: 4px;
  border: solid 1px #229c7f;
  background-color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 374px;
  height: 40px;
  border-radius: 3px;
  background-color: #229c7f;
`;

const Title = styled.h1`
  width: 374px;
  height: 24px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #ffffff;
`;

const Image = styled.img`
  width: 244px;
  height: 136px;
  margin-top: 16px;
  margin-bottom: 14px;
  border-radius: 2px;
  border: solid 1px #229c7f;
`;

const Footer = styled.div`
  align-self: stretch;
  width: 372px;
  height: 100px;
  background-color: white;
`;

const AdminAvailableHallComponent = () => (
  <Wrapper>
    <Header>
      <Title>Velika-Sportska-Dvorana</Title>
    </Header>
    <Image />
    <Footer />
  </Wrapper>
);

export default AdminAvailableHallComponent;
