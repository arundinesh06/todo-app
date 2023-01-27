import styled from "styled-components";
export const Container = styled.div`
  min-width: 200px;
  height: auto;
  min-height: 200px;
  background-color: orange;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;
export const Header = styled.div`
  background-color: black;
  padding: 15px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
`;
export const IconGroup = styled.div`
  display: flex;
`;
export const Title = styled.h2`
  color: #fff;
  font-size: 1.6rem;
  text-transform: uppercase;
  margin: 0;
`;

export const ToDoWrapper = styled.div`
  padding: 30px 20px;
`;
