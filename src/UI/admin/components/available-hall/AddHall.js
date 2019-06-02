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

const AddHallComponent = () => <Wrapper />;

export default AddHallComponent;
