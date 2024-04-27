import Mask from "../../assets/image/Mask.svg";
import { useState, useEffect } from "react";
import Peta from "../../assets/image/peta.png";
// import { databyid, getAllData } from "../../api/services/handler";
const InfoPopup = ({ id, data }) => {
  const selectedData = data.find((item) => item.id === parseInt(id));

  return (
    <>
      <section className="  fixed z-[999] backdrop-blur-sm w-screen md:max-w-sm h-screen overflow-y-auto">
        <div className=" bg-white w-screen md:max-w-sm h-2/3 rounded-t-full relative flex flex-col item-center mt-[300px] ">
          <img src={selectedData.gambar} className=" w-[99%] -mt-32" alt="" />
          <h1 className=" mt-4 text-5xl font-bold text-center">
            {selectedData.namaspesies}
          </h1>
          <p className=" text-center mt-2">
            <i>{selectedData.bahasa_latin}</i>
          </p>
        </div>
        <div className=" bg-secondary-lightgreen w-full h-[30vh] pt-4 relative">
          <div className=" w-[50%] h-12 mx-auto bg-secondary-lightgray text-primary-green font-bold flex justify-center items-center border-2 border-solid rounded-lg border-primary-black">
            STATUS POPULASI
          </div>
          <div className=" w-[80%] mx-auto font-bold h-14 border-t-2 border-b-2 border-solid border-primary-black mt-[20%] flex justify-between items-center px-4">
            <p className=" w-16  text-center">RENTAN</p>
            <p className=" w-24 text-center ">TERANCAM KRITIS</p>
            <div className="w-[120px] h-[120px] rounded-full bg-[#FA4B00] flex justify-center items-center absolute left-[140px] text-white font-bold">
              TERANCAM
            </div>
          </div>
        </div>

        <div className=" bg-secondary-yellow w-full h-[50vh] pt-6">
          <div className=" w-[50%] h-12 mx-auto bg-secondary-lightgray text-primary-green font-bold flex justify-center items-center border-2 border-solid rounded-lg border-primary-black">
            ASAL HABITATI
          </div>
          <img src={Peta} className="w-[90%] h-[60%] mt-10 mx-auto" alt="" />
        </div>

        <div className=" bg-primary-green w-full h-[40vh] pt-6">
          <div className=" w-[50%] h-12 mx-auto bg-secondary-lightgray text-primary-green font-bold flex justify-center items-center border-2 border-solid rounded-lg border-primary-black">
            TAHUKAH KAMU?
          </div>
          <img
            src={selectedData.gambar_kecil}
            className=" w-[50%] mx-auto mt-6"
            alt=""
          />
          <p className=" text-center font-bold text-white">
            {selectedData.funfact}
          </p>
        </div>
        <div className=" bg-secondary-lightgreen w-full h-[50vh] pt-6">
          <div className=" text-center w-[60%] h-16 mx-auto bg-secondary-lightgray text-primary-green font-bold flex justify-center items-center border-2 border-solid rounded-lg border-primary-black">
            PROGRAM REINTRODUKSI DAN REHABILITASI
          </div>
          <p className=" text-center font-bold w-[80%] mx-auto mt-4">
            {selectedData.program}
          </p>
          <div className=" text-center w-[60%] h-16 mx-auto bg-secondary-lightgray mt-6 text-primary-green font-bold flex justify-center items-center border-2 border-solid rounded-lg border-primary-black">
            PROGRAM REINTRODUKSI DAN REHABILITASI
          </div>
          <p className=" text-center font-bold w-[80%] mx-auto mt-4">
            {selectedData.program}
          </p>
        </div>
      </section>
    </>
  );
};

export default InfoPopup;
