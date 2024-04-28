import MainLayout from "../components/layout/MainLayout";
import Donasi2 from "../assets/image/Donasi2.svg"
import { Link } from "react-router-dom";
const Donasi = () => {
    return ( 
        <MainLayout>
            <div className=" py-4 flex  flex-col items-center gap-8 text-white px-4 text-center justify-center h-screen">
            <h2 className=" font-extrabold text-secondary-yellow text-4xl text-center">Yuk berikan aksi nyatamu!</h2>
            <p> Kamu telah mengetahui status populasi dari satwa-satwa di sini. Maukah kamu menolong satwa yang terancam punah?</p>
            <img src={Donasi2} className=" w-[80%] mx-auto" alt="" />
            <p>Tunjukkan aksi nyatamu dengan donasi untuk memberikan dukungan bagi para satwa!</p>

            <Link to="/feedback"  className=" w-[80%] h-12 flex justify-center items-center font-bold bg-secondary-lightgreen text-primary-green rounded-full"> Donasi Sekarang</Link>
            </div>
        </MainLayout>
     );
}
 
export default Donasi;