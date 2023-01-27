import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormContainer, MutedLink } from "./AuthFormStyles";
import { Input, ErrorMessage, SubmitButton } from "../Common/common";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/signinFormSchema";
import { useNavigate } from "react-router-dom";
import {
  signin,
  toggleLoginState,
  toggleExpandedState,
} from "../../redux/actions/authActions";
const SigninForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  // const [isLogin, setIsLogin] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  const { userId } = useSelector((state) => state.auth);
  console.log(userId);
  const onSubmit = (values, actions) => {
    dispatch(signin(formData));
    actions.resetForm();
  };
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
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  const formData = {
    email: values.email,
    password: values.password,
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && (
        <ErrorMessage>{errors.email}</ErrorMessage>
      )}
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <ErrorMessage>{errors.password}</ErrorMessage>
      )}

      <MutedLink
        onClick={() => {
          dispatch(toggleExpandedState());
          setTimeout(() => {
            // setIsLogin((prev) => !prev);
            dispatch(toggleLoginState());
          }, 800);
          setTimeout(() => {
            dispatch(toggleExpandedState());
          }, 700);
        }}
      >
        Don't have an account? Signup
      </MutedLink>
      <SubmitButton disabled={isSubmitting} type="submit">
        Signin
      </SubmitButton>
    </FormContainer>
  );
};

export default SigninForm;
