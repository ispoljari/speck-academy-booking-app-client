import Cookies from 'universal-cookie';

export const findSessionCookie = () => {
  const cookies = new Cookies();
  return !!cookies.get('sessionId');
};
