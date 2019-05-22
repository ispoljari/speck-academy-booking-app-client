// test code

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    response: '',
    error: ''
  };

  componentDidMount() {
    this.fetchDataFromAPI();
  }

  fetchDataFromAPI = async () => {
    try {
      const apiRawData = await fetch('/api/users');
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
  }

  processError = error => {
    this.setState({
      response: '',
      error
    });
  }

  render() {
    const { response, error } = this.state;

    return (
      <div className="app-container">
        <header role="banner" className="app-container_header">
          <h1>
            Rezervacija Dvorana u Križevcima
          </h1>
        </header>
        <main role="main" className="app-container_main">
          <p>{response ? response : error}</p>
        </main>
        <footer role="contentinfo" className="app-container_footer">
          <p>
            Dev. by Speck Academy 2019.
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
