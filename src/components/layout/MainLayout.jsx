import React from "react";
import Navbar from "../partials/Navbar";


const MainLayout = ({ children }) => {
  return (
    <div className=" bg-primary-green w-screen min-h-screen  md:max-w-screen-md md:mx-auto overflow-x-hidden    ">
      <Navbar/>
      {children}
    </div>
  );
};

export default MainLayout;
