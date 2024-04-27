import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MainLayout from "../components/layout/MainLayout";

//asset
import { ImLocation } from "react-icons/im";
import Monyet from "../assets/icon/Monyet_hijau.png";
import Logo2 from "../assets/react.svg";

const Peta = () => {
  const [currentLoc, setCurrentLoc] = useState("Pintu Masuk");
  const [isDone, setIsdone] = useState(false);
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
    iconUrl: Monyet,
    iconSize: [40, 50],
  });

  const Icon = L.icon({
    iconUrl: Monyet,
    iconSize: [40, 50],
  });
  return (
    <>
      <MainLayout>
        <div className=" w-full  flex justify-center items-center h-10  mt-24 z-[999] absolute mx-auto ">
          <div className=" w-[50%] bg-primary-green flex justify-center items-center h-10 rounded-full  absolute mx-auto text-white font-bold text-lg">
            PETA LOKASI
          </div>
        </div>

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

          <Marker
            position={[-7.295589735374133, 112.73733134664052]}
            icon={!isDone ? DefaultIcon : Icon}
          >
            <Popup>
              <img src={Monyet}  alt="" />
              Kebon
            </Popup>
          </Marker>
        </MapContainer>
        <div className=" w-full absolute bottom-10 z-[999] flex justify-center items-center">
          <div className=" bg-white rounded-3xl w-[80%] mx-auto h-24  px-6 py-4">
            <p className=" font-bold">Lokasi Anda Saat ini</p>
            <div className=" flex w-full items-center mt-2 gap-2">
              <ImLocation className=" text-red-600" size={20} />
              {currentLoc}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Peta;
