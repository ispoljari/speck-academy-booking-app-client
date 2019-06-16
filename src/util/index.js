import Cookies from 'universal-cookie';

const findSessionCookie = () => {
  const cookies = new Cookies();
  return !!cookies.get('sessionId');
};

const fetchDataFromAPI = (url, config) => {
  return fetch(url, config);
};

export { findSessionCookie, fetchDataFromAPI };
