import React from 'react';
import { API_BASE_URL } from '../../../../config';
import { AdminHeader, AdminHallRequest } from '../../';

class AdminRequestsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(API_BASE_URL + '/reservations/pending')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(error => console.log(error));
  }
  render() {
    let items = this.state.data;
    return (
      <React.Fragment>
        <AdminHeader />
        {items.map(item => (
          <AdminHallRequest
            key={item.id}
            name={item.hall.name}
            imageUrl={item.hall.pictureUrl}
            adress={item.hall.address}
            eventName={item.reservationTitle}
            eventDescription={item.reservationDescription}
            reservationDate={item.reservationDate}
            reservationTime={
              item.reservationStartTime.substring(0, 5) +
              ' - ' +
              item.reservationEndTime.substring(0, 5)
            }
            nameSurname={item.citizenFullName}
            organizationName={item.citizenOrganization}
            email={item.citizenEmail}
            phone={item.citizenPhoneNumber}
            submitDate={item.createdAt}
          />
        ))}
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default AdminRequestsPage;
