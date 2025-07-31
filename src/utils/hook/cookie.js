import Cookies from 'js-cookie';

export const setTokenCookie = (token) => {
  Cookies.set('token', token, { expires: 1 / 24 });
};

export const getTokenCookie = () => Cookies.get('token');

export const setRefreshTokenCookie = (token) => {
  Cookies.set('refreshToken', token, { expires: 7 });
};

export const getRefreshTokenCookie = () => Cookies.get('refreshToken');

export const clearAuthCookies = () => {
  Cookies.remove('token');
  Cookies.remove('refreshToken');
};
