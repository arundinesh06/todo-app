import { userActionTypes } from "../actionTypes/userActionTypes";
import userAPI from "../../apis/userAPI";

export const toggleNewTodoForm = (data) => async (dispatch, getState) => {
  dispatch({
    type: userActionTypes.TOGGLE_NEW_TODO_FORM,
  });
};

export const fetchTodos = (id) => async (dispatch, getState) => {
  dispatch({
    type: userActionTypes.FETCH_TODOS_START,
  });
  const response = await userAPI.get(`${id}/todos`);
  if (response) {
    dispatch({
      type: userActionTypes.FETCH_TODOS_SUCCESS,
      payload: response.data,
    });
  }
};

export const addTodo = (data) => async (dispatch, getState) => {
  const { userId, ...other } = data;
  console.log(userId, other);
  dispatch({
    type: userActionTypes.ADD_TODO_START,
  });
  const response = await userAPI.post(`${userId}/new-todo`, other);
  if (response) {
    dispatch({
      type: userActionTypes.ADD_TODO_SUCCESS,
      payload: response.data,
    });
  }
};

export const deleteTodo = (data) => async (dispatch, getState) => {
  const { userId, todoId } = data;
  dispatch({
    type: userActionTypes.DELETE_TODO_START,
  });
  const response = await userAPI.delete(`${userId}/todos/${todoId}`);
  if (response) {
    dispatch({
      type: userActionTypes.DELETE_TODO_SUCCESS,
      payload: response.data,
    });
  }
};
