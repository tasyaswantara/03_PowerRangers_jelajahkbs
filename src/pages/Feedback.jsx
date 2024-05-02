import MainLayout from "../components/layout/MainLayout";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <MainLayout>
      <div className=" min-h-screen bg-secondary-lightgreen pt-20 pb-6 flex flex-col items-center">
        <h2 className="text-primary-green text-3xl font-bold text-center mb-6">
          Beri Kami Nilai !
        </h2>

        <div className="mb-6">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={
                  index <= (hover || rating)
                    ? " text-primary-green "
                    : " text-primary-white"
                }
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="text-4xl mx-1">&#9733;</span>
              </button>
            );
          })}
        </div>

        <p className="text-center mb-12">
          Ketuk bintang dan beri nilai pengalaman Anda
        </p>

        <p className="text-center text-2xl font-bold mb-4 text-primary-green">Saran (Opsional)</p>

        <div className="w-full flex justify-center items-center mb-12">
          <textarea
            name=""
            className="p-9 w-[80%] h-40 rounded-2xl border-2 border-solid border-primary-green"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <Link
          to="/"
          className="w-[80%] h-10 bg-secondary-yellow flex justify-center items-center text-primary-green font-bold rounded-full"
        >
          Selesai
        </Link>
      </div>
    </MainLayout>
  );
};

export default Feedback;
