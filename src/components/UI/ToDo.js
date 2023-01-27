import React from "react";
import { Container, IconGroup, ToDoText } from "./ToDoStyles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDo = () => {
  return (
    <Container>
      <ToDoText>Task 1</ToDoText>
      <IconGroup>
        <EditIcon
          style={{
            color: "white",
            cursor: "pointer",
            marginRight: "10px",
            backgroundColor: "black",
            width: "30px",
            height: "30px",
            padding: "8px",
            borderRadius: "100%",
          }}
        />
        <DeleteIcon
          style={{
            color: "white",
            cursor: "pointer",
            marginRight: "10px",
            backgroundColor: "black",
            width: "30px",
            height: "30px",
            padding: "8px",
            borderRadius: "100%",
          }}
        />
      </IconGroup>
    </Container>
  );
};

export default ToDo;
