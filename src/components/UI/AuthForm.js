import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/signupFormSchema";
import {
  BoxContainer,
  TopContainer,
  BackDrop,
  HeaderContainer,
  HeaderMainText,
  HeaderSubText,
  FormContainer,
  MutedLink,
} from "./AuthFormStyles";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";
import { Input, ErrorMessage, SubmitButton } from "../Common/common";
import {
  signup,
  signin,
  toggleLoginState,
} from "../../redux/actions/authActions";
const AuthForm = () => {
  const dispatch = useDispatch();
  const backdropVariants = {
    expanded: {
      width: "233%",
      height: "1050px",
      borderRadius: "20%",
      transform: "rotate(60deg)",
    },
    collapsed: {
      width: "160%",
      height: "550px",
      borderRadius: "50%",
      transform: "rotate(60deg)",
    },
  };
  const { isLoading } = useSelector((state) => state.auth);
  // const [isLogin, setIsLogin] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const { isExpanded } = useSelector((state) => state.auth);
  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop
          initial={false}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={backdropVariants}
          transition="spring"
        />
        <HeaderContainer>
          <HeaderMainText>
            {isLogin ? "Welcome back!" : "Hi there!"}
          </HeaderMainText>
          <HeaderSubText>
            {isLogin ? "Signin to your account" : "Create your free account"}
          </HeaderSubText>
        </HeaderContainer>
      </TopContainer>
      {isLogin ? <SigninForm /> : <SignupForm />}
      {/* <FormContainer onSubmit={handleSubmit}>
        {!isLogin ? (
          <>
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
          </>
        ) : (
          ""
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
        {!isLogin ? (
          <>
            <Input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : ""
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
            )}
          </>
        ) : (
          ""
        )}
        <MutedLink
          onClick={() => {
            setIsExpanded(true);
            setTimeout(() => {
              // setIsLogin((prev) => !prev);
              dispatch(toggleLoginState());
            }, 800);
            setTimeout(() => {
              setIsExpanded(false);
            }, 700);
          }}
        >
          {isLogin
            ? "Don't have an account? Signup"
            : "Already have an account? Signin"}
        </MutedLink>
        <SubmitButton disabled={isSubmitting} type="submit">
          {isLogin ? "Signin" : "Signup"}
        </SubmitButton>
      </FormContainer> */}
    </BoxContainer>
  );
};

export default AuthForm;
