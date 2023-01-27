import React from "react";
import { Container, Logo, MenuItem } from "./HeaderStyles";
import { logout } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Container>
      <Logo>ToDo App</Logo>
      <MenuItem onClick={logoutHandler}>Logout</MenuItem>
    </Container>
  );
};

export default Header;
