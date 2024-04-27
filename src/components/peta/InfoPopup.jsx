import Mask from "../../assets/image/Mask.svg"
import { useState, useEffect} from "react";
import { databyid, getAllData } from "../../api/services/handler";
const InfoPopup = () => {
const [id,setid]=useState(1)
const [form, setForm] = useState({
    id: 1,
  });
const handleSubmit = async (e) => {
         
    try {
      const response = await databyid(form);
      console.log(response)

   
    } catch (error) {
      console.log(error);
    }
  };
useEffect(()=>{
    handleSubmit()
},[])
// ListMinat.find(item => item.minat_id === parseInt(value)).minat
    
    return ( 
        <section className=" flex justify-center items-end fixed z-[999] backdrop-blur-sm w-screen h-screen">
            <div className=" bg-white w-screen md:max-w-sm h-2/3 rounded-t-full relative flex flex-col item-center">

                <img src={Mask} className=" w-[99%]   absolute -top-32" alt="" />
                <h1 className=" mt-[50vh] text-5xl font-bold text-center">Siamang</h1>
                <p className=" text-center">siaaaaamaaaaaaaangggggg</p>
               
            </div>
        </section>
        
     );
}
 
export default InfoPopup;