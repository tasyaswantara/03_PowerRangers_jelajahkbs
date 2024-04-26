import React from "react";
import Navbar from "../partials/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className=" bg-white  px-4 lg:px-8 min-h-screen h-screen w-full ">
      {/* <Navbar /> */}
      {children}
    </div>
  );
};

export default MainLayout;
