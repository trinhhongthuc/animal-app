import typeAction from './../../constants/index';

const initState = {
  token: '',
  isLogin: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case typeAction.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.access_token,
        isLogin: true,
      };

    case typeAction.LOGOUT:
      return {
        ...state,
        token: '',
        isLogin: false,
      };

    default:
      return state;
  }
};

export default userReducer;
export { initState };
