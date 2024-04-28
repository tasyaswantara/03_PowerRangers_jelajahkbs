import MainLayout from "../components/layout/MainLayout";
import { Link } from "react-router-dom";
const Feedback = () => {
    return ( 
        <MainLayout>
            <div className=" h-screen bg-secondary-lightgreen pt-24">
            <h2 className=" text-primary-green text-3xl font-bold text-center ">Beri Kami Nilai !</h2>
            <p className=" text-center">Ketuk bintang dan beri nilai pengalaman Anda</p>
            <p className=" text-center text-2xl font-bold">Saran (Opsional)</p>
            <div className=" mt-10 w-full flex justify-center items-center">
            <textarea name="" className="  p-9 w-[80%] mx-auto h-60 rounded-2xl" id="" cols="30" rows="10"></textarea>
            </div>
           <Link to="/" className=" mx-auto w-[80%] h-12 mt-12 bg-secondary-yellow flex justify-center items-center text-primary-green font-bold rounded-full">Selesai</Link>
            </div>
           
        </MainLayout>
     );
}
 
export default Feedback;