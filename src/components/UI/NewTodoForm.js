import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormContainer, MutedLink } from "./AuthFormStyles";
import { Input, ErrorMessage, SubmitButton } from "../Common/common";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/newTodoFormSchema";
import { useNavigate } from "react-router-dom";
import {
  addTodo,
  toggleNewTodoForm,
  fetchTodos,
} from "../../redux/actions/userActions";
import {
  signin,
  toggleLoginState,
  toggleExpandedState,
} from "../../redux/actions/authActions";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const NewTodoForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isLogin, setIsLogin] = useState(false);
  // const { isLogin } = useSelector((state) => state.auth);
  // const { token } = useSelector((state) => state.auth);
  const userId = useSelector((state) => state.auth.user._id);
  console.log(userId);
  const onSubmit = (values, actions) => {
    dispatch(addTodo(formData));
    dispatch(toggleNewTodoForm());
    dispatch(fetchTodos(userId));
    actions.resetForm();
  };
  const addTodoHandler = () => {};
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      title: "",
      todo: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const formData = {
    userId: userId,
    title: values.title,
    todo: [values.todo],
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.title && touched.title ? "input-error" : ""}
      />
      {errors.title && touched.title && (
        <ErrorMessage>{errors.title}</ErrorMessage>
      )}
      <Input
        type="text"
        placeholder="Todo"
        name="todo"
        value={values.todo}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.todo && touched.todo ? "input-error" : ""}
      />
      {errors.todo && touched.todo && (
        <ErrorMessage>{errors.todo}</ErrorMessage>
      )}
      {/* <SubmitButton type="submit">Add ToDo</SubmitButton> */}
      {/* <AddCircleIcon
        style={{
          color: "white",
          cursor: "pointer",
          marginRight: "10px",
          width: "0px",
          height: "80px",
          padding: "8px",
          borderRadius: "100%",
          margin: "auto",
        }}
      /> */}
      <SubmitButton disabled={isSubmitting} type="submit">
        Create Todo
      </SubmitButton>
    </FormContainer>
  );
};

export default NewTodoForm;
