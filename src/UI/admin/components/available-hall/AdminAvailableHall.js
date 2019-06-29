import React from 'react';
import { API_BASE_URL } from '../../../../config';
import AdminEditHall from '../edit-hall/AdminEditHall';
import styled from 'styled-components';
import {
  Wrapper,
  Header,
  Title,
  Image,
  MainPart,
  TextPart,
  LocationMain,
  DescriptionMain,
  Description,
  DescriptionText,
  Location,
  LocationText,
  Footer,
  ButtonDelete,
  ButtonEdit
} from './AdminAvailableHallStyle.js';

const ModalContainer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

const ModalOuterBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalInnerBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 4px;
`;

const ModalContentWrapper = styled.div`
  position: relative;
  padding: 32px;
`;

const Button = styled.button`
  position: absolute;
  right: 32px;
  padding: 0;
  border: 0;
  font-size: 20px;
  cursor: pointer;
  color: #c9c9c9;
`;

const Modal = ({ visible, handleClose, children }) => (
  <ModalContainer visible={visible}>
    <ModalOuterBox>
      <ModalInnerBox>
        <ModalContentWrapper>
          <Button onClick={handleClose}>&#10005;</Button>
          {children}
        </ModalContentWrapper>
      </ModalInnerBox>
    </ModalOuterBox>
  </ModalContainer>
);
class AdminAvailableHall extends React.Component {
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
    let id = this.props.id;
    const deleteHall = () => {
      fetch(API_BASE_URL + '/halls/delete/' + id, {
        method: 'DELETE'
      })
        .then(res => {
          this.props.updatePage();
          return res.json();
        })
        .then(res => {
          console.log(res.message);
          if (
            res.message ===
            'update or delete on table "halls" violates foreign key constraint "reservations_hall_fk_fkey" on table "reservations"'
          ) {
            alert('Dvorane sa aktivnim rezervacijama se nemogu izbrisati');
          }
        })
        .catch(err => {
          console.error(err);
        });
    };
    const editHall = () => {
      this.setState({ visible: true });
    };

    return (
      <Wrapper>
        <Modal
          visible={this.state.visible}
          handleClose={this.closeModal.bind(this)}
        >
          <AdminEditHall
            pictureUrl={this.props.hallImage}
            naziv={this.props.titleHall}
            location={this.props.locationText}
            description={this.props.descriptionText}
            id={this.props.id}
            handleClose={this.closeModal.bind(this)}
          />
        </Modal>
        <Header>
          <Title>{this.props.titleHall}</Title>
        </Header>

        <MainPart>
          <Image src={this.props.hallImage} />

          <TextPart>
            <LocationMain>
              <Location>LOKACIJA</Location>
              <LocationText>{this.props.locationText}</LocationText>
            </LocationMain>

            <DescriptionMain>
              <Description>OPIS</Description>
              <DescriptionText>{this.props.descriptionText}</DescriptionText>
            </DescriptionMain>
          </TextPart>

          <Footer>
            <ButtonDelete onClick={deleteHall}>IZBRIŠI</ButtonDelete>
            <ButtonEdit onClick={editHall}>UREDI</ButtonEdit>
          </Footer>
        </MainPart>
      </Wrapper>
    );
  }
}

export { AdminAvailableHall, Modal };
