import quis from "../../assets/icon/quis.svg"
import { useState } from "react";

const Quis_card = ({setOpenQuis}) => {
    const [isAnswer, setIsAnswer]=useState(false)
    if(isAnswer){
        setTimeout(() => {
            setOpenQuis(false);
          }, 2000);
    }
    return ( 
        <div className=" fixed z-[999] backdrop-blur-sm w-screen md:hidden h-screen flex justify-center items-center">
            <div className=" w-[320px] h-[70vh] min-h-[550px] bg-secondary-lightgreen  bg-cloud bg-cover flex flex-col items-center rounded-2xl p-6 gap-6">
            <div className=" w-[50%] h-12 mx-auto p-2 bg-secondary-lightgray text-primary-green font-bold flex justify-center items-center border-2 border-solid rounded-lg border-primary-black">
            MAIN YUK!
          </div>
          <p className=" text-center font-bold">Di antara reptil, dia yang paling ganas dan hidup di tempat yang gersang, siapakah dia?</p>

          <img src={quis} className="" alt="" />
          <button onClick={()=>setIsAnswer(!isAnswer)} className={`w-32 h-12 gap-2  rounded-full flex  items-center px-2 text-primary-green ${isAnswer ? " bg-red-600": "bg-secondary-lightgray"}`}>
            <div className=" w-8 h-8 rounded-full bg-secondary-lightgreen text-primary-green flex justify-center items-center font-bold">A</div>
            <p className=" font-bold">Buaya</p>
          </button>
          <button onClick={()=>setIsAnswer(!isAnswer)} className={`w-32 h-12 gap-2  rounded-full flex  items-center px-2 text-primary-green ${isAnswer ? " bg-green-500": "bg-secondary-lightgray"}`}>
            <div className=" w-8 h-8 rounded-full bg-secondary-lightgreen text-primary-green flex justify-center items-center font-bold">B</div>
            <p className=" font-bold">Komodo</p>
          </button>
          <button onClick={()=>setIsAnswer(!isAnswer)} className={`w-32 h-12 gap-2  rounded-full flex  items-center px-2 text-primary-green ${isAnswer ? " bg-red-600": "bg-secondary-lightgray"}`}>
            <div className=" w-8 h-8 rounded-full bg-secondary-lightgreen text-primary-green flex justify-center items-center font-bold">C</div>
            <p className=" font-bold">Ular</p>
          </button>
            </div>
        </div>
     );
}
 
export default Quis_card;