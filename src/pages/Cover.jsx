import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Cover = () => {
    const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
      easing: "ease-in-sine",
    });
    setTimeout(() => {
        navigate("/home");
      }, 2000);
  }, []);
  return (
    <main className=" bg-primary-green bg-awal bg-cover w-screen h-screen max-w-md md:mx-auto flex justify-center items-center  pb-[8vh]">
      
        <h1
          data-aos="fade-up"
          data-aos-duration="1500"
          className=" text-white text-5xl tracking-wide font-extrabold text-center  w-full text-dropShadow-4xl-1 drop-shadow-3xl"
        >         
          JELAJAH KBS
        </h1>

        
     
    </main>
  );
};

export default Cover;
