import { userActionTypes } from "../actionTypes/userActionTypes";
const initialState = {
  newTodoForm: false,
  todos: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.TOGGLE_NEW_TODO_FORM:
      return { ...state, newTodoForm: !state.newTodoForm };
    case userActionTypes.FETCH_TODOS_START:
      return { ...state };
    case userActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, todos: payload };
    case userActionTypes.ADD_TODO:
      return { ...state };
    case userActionTypes.UPDATE_TODO:
      return { ...state };
    case userActionTypes.DELETE_TODO_START:
      return { ...state };
    case userActionTypes.DELETE_TODO_SUCCESS:
      return { ...state };
    default:
      return state;
  }
};
