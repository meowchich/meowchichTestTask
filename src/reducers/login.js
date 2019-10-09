import Actinos from '../actions';

const initialState = {
  username: 'Guest',
  logged: false,
}

function login (
  state = initialState,
  action,
) {
  switch (action.type) {
    case Actinos.Login.LOGIN_SET:
      return {
        ...state,
        username: action.username,
        logged: true,
      };
    case Actinos.Login.LOGIN_UNSET: {
      return {
        ...state,
        username: 'Guest',
        logged: false,
      }
    }
    default:
      return state;
  }
}

export default login;
