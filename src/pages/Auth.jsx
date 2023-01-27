import React from "react";
import {
  AuthContainer,
  AuthContainerInner,
  IntroBlock,
  IntroTitle,
  IntroSubtitle,
} from "./AuthStyles";
import AuthForm from "../components/UI/AuthForm";
const Auth = () => {
  return (
    <>
      <AuthContainer>
        <AuthContainerInner>
          <IntroBlock>
            <IntroTitle>ToDo App</IntroTitle>
            <IntroSubtitle>Let's start creating your todos!</IntroSubtitle>
          </IntroBlock>
          <AuthForm />
        </AuthContainerInner>
      </AuthContainer>
    </>
  );
};

export default Auth;
