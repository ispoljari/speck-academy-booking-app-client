import React from 'react';
import styled from 'styled-components/macro';
import arena from '../../../../util/images/arena.webp';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 632px;
  height: 470px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  padding: 32px;
`;

const Title = styled.div`
  font-family: Lora;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;
const TopPart = styled.div`
  display: flex;
  flex-direction: row;
`;
const ArenaPicture = styled.img`
  width: 244px;
  height: 136px;
  border-radius: 2px;
  border: solid 1px #229c7f;
  margin-bottom: 8px;
`;
const MidPart = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 24px;
`;
const MidRightPart = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`;
const SlimText = styled.div`
  width: 204px;
  height: 24px;
  font-family: Poppins;
  font-size: 16px;
`;
const Rectangle = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  margin: 4px 0 12px;
`;
const Opis = styled.div`
  width: 100%;
`;
const BigRectangle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 104px;
  border-radius: 2px;
  border: solid 1px rgba(0, 0, 0, 0.15);
  padding: 8px 16px;
`;
const Button = styled.button`
  width: 356px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4850;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  margin-left: 114px;
  margin-top: 24px;
`;

const EditHallComponent = props => (
  <Wrapper>
    <TopPart>
      <Title>Uredi podatke o dvorani</Title>
    </TopPart>
    <MidPart>
      <ArenaPicture src={arena} />
      <MidRightPart>
        <SlimText>NAZIV</SlimText>
        <Rectangle>{props.naziv}</Rectangle>
        <SlimText>LOKACIJA</SlimText>
        <Rectangle>{props.lokacija}</Rectangle>
      </MidRightPart>
    </MidPart>
    <Opis>
      <SlimText>OPIS</SlimText>
      <BigRectangle>{props.opis}</BigRectangle>
    </Opis>
    <Button>SPREMI</Button>
  </Wrapper>
);

export default EditHallComponent;
