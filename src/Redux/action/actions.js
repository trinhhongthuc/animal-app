import axiosClient from '../../axios/axiosClient';
import typeAction from '../constants';
const loginPage = () => async (dispatch) => {
  try {
    const response = await axiosClient.post('/oauth2/token', {
      client_id: 'v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ',
      client_secret: '91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H',
      grant_type: 'client_credentials',
    });
    dispatch({ type: typeAction.LOGIN_SUCCESS, payload: response.data });
  } catch (e) {
    console.log(e);
  }
};

const getAnimal = (token, page) => async (dispatch) => {
  try {
    const response = await axiosClient.get(`/animals?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: typeAction.SET_ANIMAL_LIST, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

const logout = () => async (dispatch) => {
  try {
    dispatch({ type: typeAction.LOGOUT });
  } catch (err) {
    console.log(err);
  }
};

export { loginPage, getAnimal, logout };
