import Cookies from 'universal-cookie';
const cookies = new Cookies();

const findSessionCookie = id => !!cookies.get(id);

const deleteSessionCookie = id => {
  findSessionCookie(id) && cookies.delete(id);
};

const fetchDataFromAPI = (url, config) => {
  return fetch(url, config);
};

const errorMsg = 'There has been an error';

export { findSessionCookie, deleteSessionCookie, fetchDataFromAPI, errorMsg };
