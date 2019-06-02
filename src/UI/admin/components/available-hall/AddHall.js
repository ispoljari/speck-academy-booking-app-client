import React from 'react';
import styled from 'styled-components/macro';
import Plus from '../../../../images/PlusSign.svg';

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

const PlusSign = styled.img`
  margin-top: 92px;
  width: 104px;
  height: 104px;
`;

const ButtonAdd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  margin-top: 100px;
  width: 206px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #93e9bb;
  background-color: #ffffff;

   {
    /* stil za tekst unutar buttona */
  }
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #93e9bb;
`;

const AddHallComponent = () => (
  <Wrapper>
    <PlusSign src={Plus} />
    <ButtonAdd>DODAJ NOVU DVORANU</ButtonAdd>
  </Wrapper>
);

export default AddHallComponent;
