import Out from "../../assets/icon/out.svg";
import { Link } from "react-router-dom";
const PopupOut = ({setShow}) => {
  return (
    <div className=" mt-[88vh] fixed z-[999]  w-screen md:hidden h-screen flex justify-center items-center">
      <div className=" w-[80%] h-[340px] bg-secondary-lightgray bg-cloud bg-cover flex flex-col items-center rounded-2xl p-6 gap-4">
        <img src={Out} alt="" />
        <h2 className=" text-center font-bold text-primary-green text-[22px]">
          Apakah Anda yakin untuk keluar dari Jelajah KBS?
        </h2>
        <Link to="/congratulations" className=" w-full h-12 bg-primary-white rounded-full flex justify-center items-center text-primary-green border-2 border-solid border-primary-green font-bold">
         
          Yakin
        </Link>
        <div onClick={()=>setShow(false)} className=" w-full h-12 bg-primary-green rounded-full flex justify-center items-center text-primary-white border-2 border-solid border-primary-green font-bold">
        
          Tidak
        </div>
      </div>
    </div>
  );
};

export default PopupOut;
