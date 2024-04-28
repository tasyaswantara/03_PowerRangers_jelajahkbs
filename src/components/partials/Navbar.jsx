import Logo from "../../assets/icon/Logo_Zoo.svg"
import Cross from "../../assets/icon/Cross.svg";
import PopupOut from "./PopupOut";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    {show && <PopupOut setShow={setShow}/>}
    <div className=" w-full h-[8vh] flex justify-between items-center gap-6 bg-secondary-yellow fixed z-[999] md:max-w-sm  px-[5vw]">
            <img src={Logo} className=" bg-logo w-20 h-10 bg-cover"/>
            {window.location.pathname !== "/congratulations" && window.location.pathname !== "/donasi" && window.location.pathname !== "/feedback" && 
             <img onClick={()=>{ setShow(!show)}} src={Cross} className=" w-8" alt="" />
            }
           
        </div>
        
        </>
    );
}
 
export default Navbar;