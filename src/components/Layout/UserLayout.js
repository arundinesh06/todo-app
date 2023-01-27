import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default UserLayout;
