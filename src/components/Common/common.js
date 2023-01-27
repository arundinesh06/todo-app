import styled from "styled-components";
export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  margin-bottom: 10px;
  background-color: #fff !important;
  border-radius: 7px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
    background-color: #fff !important;
  }
  &:active {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
    background-color: #fff !important;
  }
`;
export const ErrorMessage = styled.span`
  width: 100%;
  color: red;
  font-size: 14px;
  margin-bottom: 15px;
`;
export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 20px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  margin-top: 20px;
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  &:hover {
    filter: brightness(1.03);
  }
  &:disabled {
    opacity: 0.35;
  }
`;
