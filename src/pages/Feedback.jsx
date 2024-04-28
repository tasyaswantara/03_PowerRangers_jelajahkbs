import MainLayout from "../components/layout/MainLayout";
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const Feedback = () => {
    const  [ peringkat ,  setRating ]  =  useState ( 0 )

  // Tangkap Nilai Nilai 
  const  handleRating  =  ( rate  )  =>  { 
    setRating ( rate ) 
  }

  const  handleReset  =  ( )  =>  { 
    // Tetapkan nilai awal 
    setRating ( 0 ) 
  }
    
    return ( 
        <MainLayout>
            <div className="h-fit bg-secondary-lightgreen pt-20 pb-6 flex flex-col items-center">
                <h2 className="text-primary-green text-3xl font-bold text-center mb-6">Beri Kami Nilai !</h2>
           
                <div className="mb-4">
                    <Rating  InisialValue = { peringkat }  onClick={handleRating} size={40}  />
                </div>
                
                <p className="text-center mb-4">Ketuk bintang dan beri nilai pengalaman Anda</p>
                
                <p className="text-center text-2xl font-bold mb-4">Saran (Opsional)</p>
                
                <div className="w-full flex justify-center items-center mb-8">
                    <textarea name="" className="p-9 w-[80%] h-60 rounded-2xl" id="" cols="30" rows="10"></textarea>
                </div>
                
                <Link to="/" className="w-[70%] h-12 bg-secondary-yellow flex justify-center items-center text-primary-green font-bold rounded-full">Selesai</Link>
            </div>
        </MainLayout>
    );
}
 
export default Feedback;
