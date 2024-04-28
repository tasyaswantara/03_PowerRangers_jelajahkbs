import MainLayout from "../components/layout/MainLayout";
import Gambar from "../assets/image/Donasi1.svg"
import Edukasi from "../assets/image/edukasi.svg"
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Congrats = () => {
    return ( 
        <MainLayout>
            <div className=" py-6 flex  flex-col items-center gap-6 text-white px-4 text-center">
            <h2 className=" font-extrabold text-secondary-yellow text-4xl text-center">Hore! Selamat!</h2>
            <p>Kamu <b>telah mengunjungi</b>  semua satwa di kebun binatang ini</p>
            <img src={Gambar} className=" w-[80%] mx-auto" alt="" />

            <p>Kamu juga telah mengetahui berbagai informasi dari hewan-hewan yang dikunjungi.</p>
            <a  className=" w-[50%] h-9 flex justify-center items-center font-bold bg-secondary-lightgreen text-primary-green rounded-full"> Green Living</a>
            <p>Kamu dapat memperkuat kesadaran akan pentingnya perlindungan lingkungan dan konservasi satwa liar dengan menerapkan konsep:</p>

            <div className=" mx-auto w-[50%]"></div>

            <p>Nah, untuk menerapkan konsep green living dalam kehidupan sehari-hari, kamu bisa melakukan beberapa hal berikut</p>
            <img src={Edukasi} className=" w-full" alt="" />
            <Link
          to={"/donasi"}
          className="  gap-4 w-[90%] mx-auto h-12 bg-primary-white text-primary-black rounded-3xl flex justify-center items-center text-base  font-bold"
        >
          <div className="">Mulai Menjelajah</div>
          <GoArrowUpRight size={24}/>
          
        </Link>
            </div>
            
        </MainLayout>
     );
}
 
export default Congrats;