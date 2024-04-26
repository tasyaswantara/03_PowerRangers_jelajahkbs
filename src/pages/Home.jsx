import { useState, useEffect } from "react";
import Logo from "../assets/icon/Logo.svg";
import Logo2 from "../assets/react.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Button from "../components/ui/Button";

const Home = () => {
const [isDone,setIsdone]=useState(false)
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };
  
  const DefaultIcon = L.icon({  
    iconUrl: Logo,
    iconSize: [40, 40],
  });

  const Icon = L.icon({  
    iconUrl: Logo2,
    iconSize: [40, 40],
  });
  return (
    <>
      <MapContainer
        className=" w-screen h-screen"
        center={[-7.295589735374133, 112.73733134664052]}
        zoom={40}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <Marker position={[-7.295589735374133, 112.73733134664052]} icon={!isDone? DefaultIcon:Icon}>
          <Popup>
            <img src={Logo} alt="" />
            Kebon
          </Popup>
        </Marker>
      
      </MapContainer>

      {/* <div  className=" rounded-3xl flex justify-center items-center bg-slate-400 w-1/2 h-[60vh] mx-auto mt-[20vh] transform transition-transform animate-bounce shadow-2xl shadow-slate-800">
    <h1 className=" text-6xl font-bold text-text-black w-3/4 text-center" >Hackfest Punya Power Rangers</h1>
    <Button variation={"secondary"} type={"submit"} >Anjay</Button>
    </div> */}
    </>
  );
};

export default Home;
