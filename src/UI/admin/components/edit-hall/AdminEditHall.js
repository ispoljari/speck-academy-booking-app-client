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

class EditHallComponent extends React.Component {
  constructor(props) {
    super();

    this.state = {
      name: props.naziv || '',
      address: props.location || '',
      description: props.description || '',
      pictureUrl: props.pictureUrl || ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addFile = event => {
    const imgFile = event.target.files[0];
    const formData = new FormData();
    formData.append('image', imgFile);
    fetch('https://api.imgur.com/3/image', {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Client-ID 546c25a59c58ad7'
      }),
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('There has been an error');
        }
        return response.status === 200 && response.json();
      })
      .then(res => this.setState({ pictureUrl: res.data.link }))
      .catch(e => console.log(e));
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      pictureUrl: this.state.pictureUrl || this.props.pictureUrl
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
        .finally(() => {
          this.setState({
            name: '',
            address: '',
            description: '',
            pictureUrl: ''
          });
          this.formRef.reset();
          this.props.handleClose();
        });
    }
  };
  render() {
    return (
      <Wrapper>
        <form
          ref={ref => (this.formRef = ref)}
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
        >
          <TopPart>
            <Title>Uredi podatke o dvorani</Title>
          </TopPart>
          <MidPart>
            {this.props.pictureUrl ? (
              <ArenaPicture src={this.props.pictureUrl} />
            ) : (
              <div>
                <label htmlFor="image_uploads">
                  <SlimText style={{ marginBottom: '8px' }}>
                    IZABERITE SLIKU
                  </SlimText>
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="image_uploads"
                  accept="image/*"
                  onChange={this.addFile}
                  required
                />
              </div>
            )}
            <MidRightPart>
              <SlimText>NAZIV</SlimText>
              <Rectangle
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                required
              />
              <SlimText>LOKACIJA</SlimText>
              <Rectangle
                type="text"
                name="address"
                onChange={this.handleChange}
                value={this.state.address}
                required
              />
            </MidRightPart>
          </MidPart>
          <Opis>
            <SlimText>OPIS</SlimText>
            <BigRectangle
              type="text"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
              required
            />
          </Opis>
          <Button type="submit">SPREMI</Button>
        </form>
      </Wrapper>
    );
  }
}

export default EditHallComponent;
