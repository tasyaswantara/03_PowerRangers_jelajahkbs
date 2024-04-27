import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MainLayout from "../components/layout/MainLayout";
import { Marker_peta } from "../components/utils/marker";
import InfoPopup from "../components/peta/InfoPopup";

//asset
import { ImLocation } from "react-icons/im";
import Monyet from "../assets/icon/Monyet_hijau.png";
import Logo2 from "../assets/react.svg";

const Peta = () => {
  const [currentLoc, setCurrentLoc] = useState("Pintu Masuk");
  const [isDone, setIsdone] = useState(true);
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);
  const [isOpen, setIsOpen] = useState(true);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {isOpen && (
        <InfoPopup />
    )}
      
      <MainLayout>
        <MapContainer
          className=" w-screen md:max-w-sm h-screen"
          center={[-7.295589735374133, 112.73733134664052]}
          
          zoomControl={false}
          zoom={40}
          scrollWheelZoom={true}
        >
          <div className={` w-full  flex justify-center items-center h-10 top-8 md:top-[5vh] z-[999] absolute mx-auto ${isOpen ? "hidden" :"block"}` }>
            <div className=" w-[50%] bg-primary-green flex justify-center items-center h-10 rounded-full  absolute mx-auto text-white font-bold text-lg">
              PETA LOKASI
            </div>
          </div>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            
          />
          {Marker_peta.map((data) => {
            return (
              <Marker
                position={[-7.295589735374133, 112.73733134664052]}
                icon={
                  !isDone
                    ? L.icon({
                        iconUrl: data.marker_default,
                        iconSize: [40, 50],
                      })
                    : L.icon({
                        iconUrl: data.marker_hijau,
                        iconSize: [40, 50],
                      })
                }
              >
                <Popup>
                  <img src={Monyet} alt="" />
                  Kebon
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
        <div className={` w-full absolute bottom-20 md:bottom-24 z-[999] flex justify-center items-center ${isOpen ? "hidden":"block"}`}>
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
