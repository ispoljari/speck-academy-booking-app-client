import React from 'react';
import { API_BASE_URL } from '../../../../config';
import { Modal } from '../../../common';
import AdminEditHall from '../edit-hall/AdminEditHall';
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

function AdminAvailableHall(props) {
  let id = props.id;
  const deleteHall = () => {
    fetch(API_BASE_URL + '/halls/delete/' + id, {
      method: 'DELETE'
    })
      .then(res => {
        props.updatePage();
      })
      .catch(err => {
        console.error(err);
      });
  };
  const editHall = () => {
    fetch(API_BASE_URL + '/halls/delete/' + id, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'DELETE'
    })
      .then(res => {
        props.updatePage();
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <Wrapper>
      <Modal>
        <AdminEditHall
          pictureUrl={props.hallImage}
          naziv={props.titleHall}
          location={props.locationText}
          description={props.descriptionText}
        />
      </Modal>
      <Header>
        <Title>{props.titleHall}</Title>
      </Header>

      <MainPart>
        <Image src={props.hallImage} />

        <TextPart>
          <LocationMain>
            <Location>LOKACIJA</Location>
            <LocationText>{props.locationText}</LocationText>
          </LocationMain>

          <DescriptionMain>
            <Description>OPIS</Description>
            <DescriptionText>{props.descriptionText}</DescriptionText>
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

export default AdminAvailableHall;
