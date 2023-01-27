import styled from "styled-components";
export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: 991px) {
    height: auto;
    padding-bottom: 30px;
  }
`;
export const AuthContainerInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: 991px) {
    height: auto;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
export const IntroTitle = styled.h1`
  display: flex;
  margin-bottom: 0;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    display: block;
    margin-bottom: 0;
  }
`;
export const IntroSubtitle = styled.p`
  display: flex;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 0;
  }
`;
