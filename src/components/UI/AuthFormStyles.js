import styled from "styled-components";
import { motion } from "framer-motion";
export const BoxContainer = styled.div`
  width: 320px;
  min-height: 595px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: rgba(21, 23, 43, 0.8);
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  padding-bottom: 10px;
`;
export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em 5em;
`;
export const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  top: -290px;
  left: -70px;
  transform: rotate(60deg);
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const HeaderMainText = styled.h2`
  font-size: 26px;
  font-weight: 600;
  lne-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  transition: all 1s ease-in-out;
`;

export const HeaderSubText = styled.h3`
  font-size: 16px;
  font-weight: 500;
  lne-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;
  position: relative;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  text-align: center;
`;
export const BoldLink = styled.a`
  font-size: 12px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
`;
