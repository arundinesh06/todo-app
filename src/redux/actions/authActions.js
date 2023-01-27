import { authActionTypes } from "../actionTypes/authActionTypes";
import authAPI from "../../apis/authAPI";

export const toggleLoginState = (data) => async (dispatch, getState) => {
  dispatch({
    type: authActionTypes.TOGGLE_LOGIN_STATE,
  });
};

export const toggleExpandedState = (data) => async (dispatch, getState) => {
  dispatch({
    type: authActionTypes.TOGGLE_EXPANDED_STATE,
  });
};

export const signup = (data) => async (dispatch, getState) => {
  dispatch({
    type: authActionTypes.AUTH_START,
  });
  const response = await authAPI.post("", data);
  if (response) {
    dispatch({
      type: authActionTypes.SIGNUP_SUCCESS,
      payload: response.data,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
  } else {
    dispatch({
      type: authActionTypes.SIGNUP_FAILED,
    });
  }
};

export const signin = (data) => async (dispatch, getState) => {
  dispatch({
    type: authActionTypes.AUTH_START,
  });
  // const response = await authAPI.post(`accounts:signInWithPassword`, data);
  const response = await authAPI.post(`login`, data);
  if (response) {
    dispatch({
      type: authActionTypes.LOGIN_SUCCESS,
      payload: response.data,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
  } else {
    dispatch({
      type: authActionTypes.LOGIN_FAILED,
    });
  }
};

export const logout = (data) => async (dispatch, getState) => {
  dispatch({
    type: authActionTypes.LOGOUT_SUCCESS,
  });
  localStorage.removeItem("user");
};
