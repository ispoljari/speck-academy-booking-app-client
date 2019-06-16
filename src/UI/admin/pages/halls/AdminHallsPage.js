import React from 'react';

import { AdminHeader } from '../../';
import { Footer, Modal } from '../../../common';
import AdminAvailableHall from '../../components/available-hall/AdminAvailableHall';
import AdminAddHall from '../../components/add-hall/AdminAddHall';
import { AdminHallPageContainer } from '../../components/available-hall/AdminAvailableHallStyle';
class <AdminAvailableHall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.FetchRequests = this.FetchRequests.bind(this);
  }
  FetchRequests() {
    fetch(API_BASE_URL + '/api/halls')
      .then(response => response.json())
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
        <div style={{ minHeight: 'calc(100vh - 160px)' }}>
          <AdminHeader />
          {items.map(item => (
            <AdminAvailableHall
              key={item.id}
              titleHall={item.hall.name}
              hallImagel={item.hall.pictureUrl}
              locationText={item.hall.address}
              descriptionText={item.hall.description}
              id={item.id}
              updatePage={this.FetchRequests}
            />
          ))}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AdminHallsPage;