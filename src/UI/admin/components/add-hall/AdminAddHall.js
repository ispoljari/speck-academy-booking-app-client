import React from 'react';
import styled from 'styled-components/macro';
import Plus from '../../../../images/PlusSign.svg';
import { Wrapper, Button } from '../available-hall/AdminAvailableHallStyle.js';

const WrapperAdd = styled(Wrapper)`
  border: solid 1px #93e9bb;
`;

const PlusSign = styled.img`
  margin-top: 92px;
  width: 104px;
  height: 104px;
`;

const ButtonAdd = styled(Button)`
  margin-top: 100px;
  width: 206px;
  border: solid 1px #93e9bb;
  background-color: #ffffff;
  color: #93e9bb;
  margin-bottom: 58px;
`;

const AdminAddHall = () => (
  <WrapperAdd>
    <PlusSign src={Plus} />
    <ButtonAdd>DODAJ NOVU DVORANU</ButtonAdd>
  </WrapperAdd>
);

export default AdminAddHall;
