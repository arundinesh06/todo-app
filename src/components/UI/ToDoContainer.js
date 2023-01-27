import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import { db } from "../../firebase.config";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "../../redux/actions/userActions";
import {
  query,
  collection,
  getDocs,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import {
  Container,
  InnerContainer,
  Title,
  NewToDoWrapper,
  NewTodoFormWrapper,
} from "./ToDoContainerStyles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NewTodoForm from "./NewTodoForm";
import { toggleNewTodoForm } from "../../redux/actions/userActions";
const ToDoContainer = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [userTodos, setUserTodos] = useState([]);
  const { newTodoForm } = useSelector((state) => state.user);
  const { todos } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchTodos(userId));
  }, [dispatch, newTodoForm]);
  console.log(todos);
  return (
    <Container>
      {newTodoForm ? (
        <NewTodoFormWrapper>
          <NewTodoForm />
        </NewTodoFormWrapper>
      ) : (
        <>
          <NewToDoWrapper>
            <Title>Add new</Title>
            <AddCircleIcon
              style={{
                color: "green",
                cursor: "pointer",
                marginRight: "10px",
                width: "80px",
                height: "80px",
                padding: "8px",
                borderRadius: "100%",
              }}
              onClick={() => {
                dispatch(toggleNewTodoForm());
              }}
            />
          </NewToDoWrapper>
          <InnerContainer>
            {todos.map((todo) => {
              return <ToDoList todo={todo} key={todo._id} />;
            })}
          </InnerContainer>
        </>
      )}
    </Container>
  );
};

export default ToDoContainer;
