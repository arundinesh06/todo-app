import React from "react";
import ToDo from "./ToDo";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Header,
  IconGroup,
  Title,
  ToDoWrapper,
} from "./ToDoListStyles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTodo, fetchTodos } from "../../redux/actions/userActions";
const ToDoList = ({ todo }) => {
  const userId = useSelector((state) => state.auth.user._id);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTodo({ userId: userId, todoId: todo._id }));
    dispatch(fetchTodos(userId));
  };
  return (
    <>
      <Container>
        <Header>
          <Title>{todo.title}</Title>
          <IconGroup>
            <EditIcon
              style={{ color: "white", cursor: "pointer", marginRight: "10px" }}
            />
            <DeleteIcon
              style={{ color: "white", cursor: "pointer" }}
              onClick={deleteHandler}
            />
          </IconGroup>
        </Header>
        <ToDoWrapper>
          {todo.todos.map((item) => {
            return <ToDo />;
          })}
        </ToDoWrapper>
      </Container>
    </>
  );
};

export default ToDoList;
