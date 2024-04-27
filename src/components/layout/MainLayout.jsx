import React from "react";
import Navbar from "../partials/Navbar";


const MainLayout = ({ children }) => {
  return (
    <div className=" bg-primary-green w-screen min-h-screen max-w-screen-md md:mx-auto   ">
      <Navbar/>
      {children}
    </div>
  );
};

export default MainLayout;
