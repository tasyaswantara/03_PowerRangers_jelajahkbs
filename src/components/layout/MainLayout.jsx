import React from "react";
import Navbar from "../partials/Navbar";



const MainLayout = ({ children }) => {

  return (
    <>
    <div className=" w-full flex justify-center items-center h-[8vh]">
    <Navbar/>
    </div>
   
    <div className=" bg-primary-green w-screen min-h-screen md:max-w-full md:mx-auto  relative pt-0">
      
      {children}
    </div>
    </>
  );
};

export default MainLayout;
