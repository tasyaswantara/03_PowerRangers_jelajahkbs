import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import Logo_Zoo from "../assets/icon/Logo_Zoo.svg";
import MainLayout from "../components/layout/MainLayout";
import CloudLeft from "../assets/icon/cloud_left.png"
import CloudRight from "../assets/icon/cloud_right.png"
import CloudLeft2 from "../assets/icon/cloud_left2.png"
import Harimau  from "../assets/image/harimau.png"
import Jerapah from "../assets/image/jerapah.png"
import { useEffect } from "react";

//aos
import AOS from "aos";
import "aos/dist/aos.css";


const Index = () => {
    useEffect(() => {
        AOS.init({
          delay: 200,
          duration: 1000,
          easing: "ease-in-sine",
        });
       
      }, []);
    return ( 
       <MainLayout>
        <img src={CloudLeft} data-aos="fade-right" className=" w-[50%] mt-[5vh]" alt="" />
        <img src={CloudRight} data-aos="fade-left" className=" ml-auto w-[24%]" alt="" />
        <img src={CloudLeft2} data-aos="fade-right" className=" w-[20%] mt-[1vh]" alt="" />
        <h2 data-aos="fade-up" className=" mt-[12vh] mx-auto w-[70%] text-center text-primary-white text-xl font-bold">Selamat datang di dunia alami penuh fantasi.</h2>
        <section data-aos="fade-up" className=" relative mt-[10vh] w-full h-fit min-h-[1600px] bg-onboarding bg-cover">
        {/* <div className=" bg-secondary-lightgreen w-[210px] h-[210px] absolute top-[490px] rounded-full left-[110px] flex justify-center items-center text-primary-green text-3xl font-[880] ">Jelajahi KBS</div>
        <div className=" bg-secondary-lightgreen w-[180px] h-[180px] absolute top-[900px] rounded-full right-[224px] flex justify-center items-center text-primary-green  flex-col ">lebih dari <span className=" text-3xl font-extrabold">2179</span> ekor satwa</div>
        <div className=" bg-secondary-lightgreen w-[180px] h-[180px] absolute top-[1054px] rounded-full right-[10px] flex justify-center items-center text-primary-green  flex-col ">lebih dari <span className=" text-3xl font-extrabold">230</span> spesies</div> */}
        </section>
        {/* <section data-aos="fade-up" className="  flex flex-col items-center min-h-screen py-[5vh] gap-12">
            <div className="  flex flex-col gap-12 items-center w-[80%] h-fit ">
                
                 <img src={Harimau} className=" w-[210px] h-[210px]" alt="" />
                 <div className=" flex justify-center items-center text-xl font-extrabold text-primary-black w-[40%] h-[8%] rounded-full bg-secondary-yellow ">MISI</div>
                <p className=" text-center text-primary-white">Melindungi dan memperkenalkan keanekaragaman hayati kepada generasi masa depan. </p>
            </div>
            <div className="  flex flex-col gap-12 items-center w-[80%] h-fit ">
                
                <img src={Jerapah} className=" w-[210px] h-[210px]" alt="" />
                <div className=" flex justify-center items-center text-xl font-extrabold text-primary-black w-[40%] h-[8%] rounded-full bg-secondary-yellow ">PERAN</div>
               <p className=" text-center text-primary-white">Memegang peranan penting dalam tiga aspek utama: edukasi, konservasi, dan rekreasi.</p>
           </div>
        </section>
        <Link
          to={"/home"}
          className="  gap-4 w-[90%] mx-auto h-12 bg-secondary-yellow rounded-3xl flex justify-center items-center text-base  font-bold"
        >
          <div className="">Mulai Menjelajah</div>
          <GoArrowUpRight size={24}/>
          
        </Link>
        <div className=" h-[5vh]"></div> */}
       </MainLayout>
     );
}
 
export default Index;