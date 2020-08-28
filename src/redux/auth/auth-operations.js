import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
}

const register = (name, email, password) => async dispatch => {
  const userData = {
    name,
    email,
    password,
  }
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', userData);
    token.set(response.data.token)
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
}

const login = (email, password) => async dispatch => {
  const userData = {
    email,
    password,
  }
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', userData);
    token.set(response.data.token)
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error))
  }
}

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logoutSuccess())
  } catch (error) {
    dispatch(authActions.logoutError(error))
  }
}

const getCurrentUser = () => async (dispatch, getState) => {
  const { auth: { token: persistedToken } } = getState();

  if (!persistedToken) {
    return
  }

  token.set(persistedToken)
  dispatch(authActions.getCurrentUserRequest())

  try {
    const response = await axios.get('/users/current')

    dispatch(authActions.getCurrentUserSuccess(response.data))
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error))
  }
}


export default {
  register,
  login,
  token,
  logout,
  getCurrentUser
}