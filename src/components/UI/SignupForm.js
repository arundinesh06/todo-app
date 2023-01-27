import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormContainer, MutedLink } from "./AuthFormStyles";
import { Input, ErrorMessage, SubmitButton } from "../Common/common";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/signupFormSchema";
import Loader from "./Loader";
import {
  signup,
  toggleLoginState,
  toggleExpandedState,
} from "../../redux/actions/authActions";
const SignupForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  // const [isLogin, setIsLogin] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const onSubmit = (values, actions) => {
    dispatch(signup(formData));
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
    name: values.name,
    email: values.email,
    password: values.password,
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.name && touched.name ? "input-error" : ""}
      />
      {errors.name && touched.name && (
        <ErrorMessage>{errors.name}</ErrorMessage>
      )}

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
      <Input
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
      )}

      <MutedLink
        onClick={() => {
          dispatch(toggleExpandedState());
          setTimeout(() => {
            dispatch(toggleLoginState());
          }, 800);
          setTimeout(() => {
            dispatch(toggleExpandedState());
          }, 700);
        }}
      >
        Already have an account? Signin
      </MutedLink>
      <SubmitButton disabled={isSubmitting} type="submit">
        Signup
      </SubmitButton>
      {isLoading ? <Loader /> : ""}
    </FormContainer>
  );
};

export default SignupForm;
