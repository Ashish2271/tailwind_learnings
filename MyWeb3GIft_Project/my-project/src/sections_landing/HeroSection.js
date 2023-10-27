import React, { useState, useEffect } from 'react';
import { Picture1, Picture2, Picture3, Picture4 } from "../assets/Images";
import "./Styles/Hero.css";

const images = [Picture1, Picture2, Picture3, Picture4];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <section className="text-gray-700 dark:text-white relative">
        <img src={images[currentImageIndex]} alt="" className="object-cover w-full h-[90vh] -z-10" />
        <div className="absolute top-0 left-0 w-full h-[90vh] bg-blue-900/50 ">
          <div className="mx-auto flex flex-col justify-center h-full px-4 py-16 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl  mb-6">
              <strong className=" text-3xl sm:text-5xl md:text-6xl  mb-6 text-gray-100">
                <span className="text-2xl  sm:text-4xl">Welcome to <span className='text-2xl  sm:text-3xl'>MyWeb3Gift</span>.com</span>
              </strong>
            </h1>
            <h2 className=" py-4 text-gray-100 text-3xl">
              Surprise your loved ones with a unique digital gift box to <br /> discover the magic of blockchain
            </h2>

{/* <h1 className="text-3xl sm:text-5xl md:text-6xl  mb-6">
              <strong className=" text-3xl sm:text-5xl md:text-6xl  mb-6 text-gray-100">
                <span className="text-2xl  sm:text-4xl">  Surprise your loved ones with a unique digital gift box to <br /> discover the magic of blockchain</span>
              </strong>
            </h1> */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                className="block w-full font-serif font-extrabold sm:w-auto rounded bg-yellow-500 px-6 py-2 text-sm  text-white shadow hover:bg-yellow-600 focus:outline-none focus:ring active:bg-red-500"
                href="/gift"
              >
                GIVE A GIFT
              </a>
         

              <button data-tally-open="3jo994" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">  
              <a
                className="block w-full font-serif font-extrabold sm:w-auto rounded px-6 py-2 text-sm  bg-slate-100 text-yellow-500 shadow hover:text-yellow-600 focus:outline-none focus:ring active:text-red-500 dark:bg-yellow-600 dark:text-white"
                href="/about"
              >
                LEARN MORE
              </a>

              
              </button>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
