import React from "react";
import Navbar from "../partials/Navbar";


const MainLayout = ({ children }) => {
  return (
    <div className=" bg-primary-green w-screen min-h-screen  md:max-w-sm md:mx-auto overflow-x-hidden relative">
      <Navbar/>
      {children}
    </div>
  );
};

export default MainLayout;
