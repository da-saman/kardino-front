const tokenKey = process.env.REACT_APP_STORAGE_TOKEN_NAME || 'auth';

function getToken() {
  return localStorage.getItem(tokenKey);
}

function setToken(token: string) {
  localStorage.setItem(tokenKey, token);
}

function removeToken() {
  localStorage.removeItem(tokenKey);
}

const tokenUtils = {
  getToken,
  setToken,
  removeToken,
};

export default tokenUtils;
