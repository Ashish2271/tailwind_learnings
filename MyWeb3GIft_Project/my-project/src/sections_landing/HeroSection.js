import React, { useState, useEffect } from 'react';
import { Picture1, Picture2, Picture3, Picture4 } from "../assets/Images"
// import { WeddingModel } from "../assets/Images/3d_models"
// import {  Gift_Video, hexagonal, watercolor } from "../assets/Videos"
import "./Styles/Hero.css"
// import TextAnimation from "./TextAnimation";



const images = [Picture1, Picture2, Picture3, Picture4];


const HeroSection = () => {


  const overlayStyle = {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(0, 0, 85, 0.5)', // Blue filter with 50% opacity


  };




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
    <div className=" "  >

      {/* <div className="overflow-x-hidden "> */}
      {/* 
<video src={Christmas_banner} loop autoPlay muted  className="object-cover absolute h-screen w-screen -z-10 top-0 left-0 " ></video> */}


      <section className="  rounded-t-[50px] text-gray-700 max-h-[90vh]  dark:text-white demo relative top-0 ">



        {/* <video src={watercolor} loop autoPlay muted className="object-cover absolute h-screen w-screen -z-10 top-0 left-0 " ></video> */}

        <img src={images[currentImageIndex]} alt="" className="object-cover absolute min-h-[90vh] max-h-[90vh]  w-screen -z-10 top-0 left-0 " />

        {/* <div className="relative max-h-[90vh] w-screen">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Image ${index + 1}`}
          className={`object-cover absolute w-full h-full transition-opacity ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div> */}

        <div
          className="mx-auto   flex relative flex-col max-h-[90vh]  px-4 py-32 lg:flex lg:flex-col lg:h-screen lg:items-center"
          style={overlayStyle}>
          <div className="mx-auto max-sm:max-w-4xl  text-center  my-20  ">
            <h1 className="  md:scale-125 lg:scale-150 mb-20  text-5xl  font-extrabold  sm:text-5xl">

              <strong className="font-extrabold animate-character text-gray-100 sm:block hover:ease-in  ">
                <span className="  max-sm:text-5xl text-5xl">

<span className='text-gray-300'>Welcome to 
  

  <span className="" > my</span><span className="">web3</span><span className="">gift</span>
   </span>
                  



                </span>
              </strong>
            </h1>

            {/* <h1 class="text-6xl md:text-7xl font-bold mb-5 dark:text-gray-50 text-slate-50">MyWeb3Gift </h1> */}

            <p className=" animate-fade-right  font-serif font-extrabold sm:py-10 subheading  text-gray-300 sm:text-5xl/relaxed">
              Surprise your loved ones with a blockchain magic <br /> gift box!
            </p>

            {/* <TextAnimation  /> */}

            <div className="mt-8 animate-fade-right flex flex-wrap justify-center gap-4">


              <button data-tally-open="3jo994" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">

                <a
                  className="block w-full rounded  bg-yellow-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                  href="/get-started"
                >
                  GIVE A GIFT
                </a>
              </button>





              <button data-tally-open="3jo994" data-tally-layout="modal" data-tally-emoji-text="👋" data-tally-emoji-animation="wave">


                <a
                  className="block w-full rounded px-12 py-3 text-sm font-medium bg-slate-100 text-yellow-500 shadow hover:text-yellow-600 focus:outline-none focus:ring active:text-red-500 dark:bg-yellow-600 dark:text-white sm:w-auto"
                  href="/about"
                >
                  LEARN MORE
                </a>

              </button>



            </div>
          </div>

          {/* <div className="flex relative justify-evenly mt-[50px] flex-row   ">

            <div className="hover:animate-bounce max-sm:scale-75   lg:mx-14 ">  <img src={calendar1} width={150} height={10} alt="calendar " /> </div>
            <div className=" hover:animate-bounce max-sm:scale-75 lg:mx-14 ">   <img src={birthday} width={150} height={10} alt="Birthday " /> </div>
            <div className=" hover:animate-bounce max-sm:scale-75 lg:mx-14 ">   <img src={wedding} width={150} height={10} alt="Wedding " /> </div>
            <div className=" hover:animate-bounce max-sm:scale-75 lg:mx-14 ">   <img src={graduation} width={150} height={10} alt="Graduation " /> </div>
            <div className=" hover:animate-bounce max-sm:scale-75 lg:mx-14 ">   <img src={fukubukuro1} width={150} height={10} alt=" Fukubukuro" /> </div>
          
          </div> */}

          {/* <IconsDetails/> */}

        </div>



      </section>




    </div>
  )
}

export default HeroSection