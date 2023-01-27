import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  background-color: #f4f4f4;
`;
export const NewTodoFormWrapper = styled.div`
  width: 400px;
  display: block;
  margin: auto;
  background-color: #333;
  border-radius: 8px;
  margin-top: 100px;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const NewToDoWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
export const Title = styled.h2`
  font-size: 2rem;
  color: #000;
  margin-right: 5px;
`;
export const InnerContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-content: center;
  @media (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
