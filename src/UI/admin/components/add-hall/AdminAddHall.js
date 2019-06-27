import React from 'react';
import styled from 'styled-components/macro';
import Plus from '../../../../images/PlusSign.svg';
import { Wrapper, Button } from '../available-hall/AdminAvailableHallStyle.js';
import { Modal } from '../available-hall/AdminAvailableHall';
import AdminEditHall from '../edit-hall/AdminEditHall';

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

class AdminAddHall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  closeModal() {
    this.setState({ visible: false });
    this.props.updatePage();
  }
  render() {
    const editHall = () => {
      this.setState({ visible: true });
    };
    return (
      <WrapperAdd>
        <Modal
          visible={this.state.visible}
          handleClose={this.closeModal.bind(this)}
        >
          <AdminEditHall handleClose={this.closeModal.bind(this)} />
        </Modal>
        <PlusSign src={Plus} />
        <ButtonAdd onClick={editHall}>DODAJ NOVU DVORANU</ButtonAdd>
      </WrapperAdd>
    );
  }
}
export default AdminAddHall;
