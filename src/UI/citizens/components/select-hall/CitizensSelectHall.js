import React from 'react';

import { API_BASE_URL } from '../../../../config';

// example of component logic that shows how to fetch data from the API
// remove the code from this component and refactor it into a functional CitizensSelectHall component according to the design mockup

class CitizensSelectHall extends React.Component {
  state = {
    response: '',
    error: ''
  };

  componentDidMount() {
    this.fetchDataFromAPI();
  }

  fetchDataFromAPI = async () => {
    try {
      const apiRawData = await fetch(`${API_BASE_URL}/users`);
      if (!apiRawData.ok) {
        throw new Error('An error has occured!');
      }
      const apiJSONData = await apiRawData.text();
      this.processResponse(apiJSONData);
    } catch (error) {
      this.processError(error.message);
    }
  };

  processResponse = response => {
    this.setState({
      response,
      error: ''
    });
  };

  processError = error => {
    this.setState({
      response: '',
      error
    });
  };

  render() {
    const { response, error } = this.state;

    return (
      <div>
        <p>{response ? response : error}</p>
      </div>
    );
  }
}

export default CitizensSelectHall;
