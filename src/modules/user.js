import {auth} from '../services/user';
import {history} from '../store';

const initialState = {
  name: '',
  lastName: '',
  login: '',
  isAuthorized: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_FETCH': {
      return initialState;
    }

    case 'AUTH_SUCCESS': {
      return {
        ...action.data,
        isAuthorized: true,
        error: null,
      };
    }

    case 'AUTH_ERROR': {
      return {
        ...initialState,
        error: true,
      }
    }

    default: {
      return state;
    }
  }
}

export function authUser(login, password) {
  return function(dispatch) {
    dispatch({type: 'AUTH_FETCH'});
    return auth(login, password)
      .then(user => {
        dispatch({
          type: 'AUTH_SUCCESS',
          data: user
        });
        history.push('/');
      })
      .catch(() => {
        dispatch({type: 'AUTH_ERROR'});
      })
  }
}