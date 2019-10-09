export const LOGIN_SET = 'LOGIN_SET';
export const LOGIN_UNSET = 'LOGIN_UNSET'

export const loginSet = (username) => {
  window.localStorage.setItem('user', username);

  return {
    username,
    type: LOGIN_SET,
  }
};

export const loginUnser = () => {
  window.localStorage.removeItem('user');

  return {
    type: LOGIN_UNSET,
  };
}