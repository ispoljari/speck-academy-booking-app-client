import React from 'react';
import { API_BASE_URL } from '../../../../config';
import {
  BigRectangle,
  Button,
  Opis,
  Rectangle,
  SlimText,
  Wrapper,
  Title,
  TopPart,
  ArenaPicture,
  MidPart,
  MidRightPart
} from './AdminEditHallStyle';

const InputUrl = props => {
  if (props.pictureUrl) {
    return <ArenaPicture src={props.pictureUrl} />;
  }
};
class EditHallComponent extends React.Component {
  constructor() {
    super();

    this.state = { name: '', address: '', description: '' };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      pictureUrl: ''
    };
    let id = this.props.id;
    if (id) {
      fetch(API_BASE_URL + '/halls/update/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())

        .catch(error => console.error('Error:', error))
        .finally(() => {
          this.props.handleClose();
        });
    } else {
      fetch(API_BASE_URL + '/halls/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        .finally(() => {
          this.props.handleClose();
        });
    }
  };
  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <TopPart>
            <Title>Uredi podatke o dvorani</Title>
          </TopPart>
          <MidPart>
            <InputUrl pictureUrl />
            <MidRightPart>
              <SlimText>NAZIV</SlimText>
              <Rectangle
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder={this.props.naziv}
              />
              <SlimText>LOKACIJA</SlimText>
              <Rectangle
                type="text"
                name="address"
                onChange={this.handleChange}
                placeholder={this.props.location}
              />
            </MidRightPart>
          </MidPart>
          <Opis>
            <SlimText>OPIS</SlimText>
            <BigRectangle
              type="text"
              name="description"
              onChange={this.handleChange}
              placeholder={this.props.description}
            />
          </Opis>
          <Button type="submit">SPREMI</Button>
        </form>
      </Wrapper>
    );
  }
}

export default EditHallComponent;
