import React from "react";
import "./Banner.css";
import books from "../../assets/books.png";

const Banner = () => {
  return (
    <div className="hero bg-[#1313130d] rounded-2xl min-h-screen mt-12 py-10 lg:px-14 xl:px-28">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={books} />
        <div className="flex flex-col items-center lg:items-start space-y-12">
          <h1 className="banner-title text-center lg:text-left text-2xl md:text-5xl xl:text-6xl font-bold leading-9 md:leading-[70px] xl:leading-snug">
            Books to freshen up your bookshelf
          </h1>
          <div>
            <button className="py-3 px-6 ]md:py-5 md:px-7 bg-[#23BE0A] text-white rounded-lg font-medium text-base md:text-xl">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
