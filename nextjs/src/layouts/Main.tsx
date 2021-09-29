import React from "react";
import Header from "../components/Header/Header";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Main;
