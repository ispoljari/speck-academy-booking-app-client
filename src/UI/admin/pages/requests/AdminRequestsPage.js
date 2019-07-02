import React from 'react';
import { API_BASE_URL } from '../../../../config';
import { AdminHallRequest } from '../../';
import { DateTime } from 'luxon';
import Footer from '../../../common/footer/Footer';
class AdminRequestsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.fetchRequests = this.fetchRequests.bind(this);
  }
  fetchRequests() {
    fetch(API_BASE_URL + '/reservations/pending')
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
    this.fetchRequests();
  }
  render() {
    let items = this.state.data;
    return (
      <>
        <div style={{ minHeight: 'calc(100vh - 160px)' }}>
          {items.map(item => (
            <AdminHallRequest
              key={item.id}
              name={item.hall.name}
              imageUrl={item.hall.pictureUrl}
              adress={item.hall.address}
              eventName={item.reservationTitle}
              eventDescription={item.reservationDescription}
              reservationDate={DateTime.fromISO(item.reservationDate).toFormat(
                'd.MM.y.'
              )}
              reservationTime={
                item.reservationStartTime.substring(0, 5) +
                ' - ' +
                item.reservationEndTime.substring(0, 5)
              }
              nameSurname={item.citizenFullName}
              organizationName={item.citizenOrganization}
              email={item.citizenEmail}
              phone={item.citizenPhoneNumber}
              submitDate={DateTime.fromISO(item.createdAt).toFormat(
                'd.MM.y., HH:mm'
              )}
              id={item.id}
              updatePage={this.fetchRequests}
            />
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default AdminRequestsPage;
