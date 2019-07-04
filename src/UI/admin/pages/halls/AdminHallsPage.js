import React from 'react';
import { API_BASE_URL } from '../../../../config';
import { AdminAvailableHall } from '../../components/available-hall/AdminAvailableHall';
import AdminAddHall from '../../components/add-hall/AdminAddHall';
import { AdminHallPageContainer } from '../../components/available-hall/AdminAvailableHallStyle';
class AdminHallsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.FetchRequests = this.FetchRequests.bind(this);
  }
  FetchRequests() {
    fetch(API_BASE_URL + '/halls', { credentials: 'include' })
      .then(response => {
        if (!response.ok) {
          throw new Error('There has been an error');
        }
        return response.status === 200 && response.json();
      })
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.FetchRequests();
  }
  render() {
    let items = this.state.data;
    return (
      <React.Fragment>
        <AdminHallPageContainer>
          {items.map(item => (
            <AdminAvailableHall
              key={item.id}
              titleHall={item.name}
              hallImage={item.pictureUrl}
              locationText={item.address}
              descriptionText={item.description}
              id={item.id}
              updatePage={this.FetchRequests}
            />
          ))}
          <AdminAddHall updatePage={this.FetchRequests} />
        </AdminHallPageContainer>
      </React.Fragment>
    );
  }
}

export default AdminHallsPage;
