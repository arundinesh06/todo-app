import styled from "styled-components";
export const Container = styled.div`
  padding: 10px;
  background-color: green;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const IconGroup = styled.div`
  display: flex;
  position: absolute;
  top: -15px;
  right: 0;
  transition: all 0.3s linear;
`;
export const ToDoText = styled.div`
  color: #fff;
  font-size: 1.4rem;
`;
