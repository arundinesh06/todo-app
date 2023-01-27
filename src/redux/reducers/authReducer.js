import { authActionTypes } from "../actionTypes/authActionTypes";
const initialState = {
  isExpanded: false,
  isLogin: false,
  isLoading: false,
  user: null,
  token: null,
  userId: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActionTypes.TOGGLE_LOGIN_STATE:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    case authActionTypes.TOGGLE_EXPANDED_STATE:
      return {
        ...state,
        isExpanded: !state.isExpanded,
      };
    case authActionTypes.AUTH_START:
      return { ...state, isLoading: true };
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isLogin: false,
      };
    case authActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isLogin: true,
      };
    case authActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isLogin: false,
        userId: null,
      };
    default:
      return state;
  }
};
