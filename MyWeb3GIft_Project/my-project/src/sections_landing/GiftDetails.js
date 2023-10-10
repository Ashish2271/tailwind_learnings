import React from 'react';
import { MenUsingMobile } from '../assets/Images/WhoItFor';

const GiftDetails = () => {
  return (
    <div className="flex flex-col sm:my-10 sm:mx-16 md:flex-row justify-center items-center p-6  rounded-3xl ">
    {/* Left Section */}
    <div className="md:w-1/2 md:py-5 md:mx-20  mb-4 md:mb-0">
      {/* Insert Unsplash Images */}
    
      <div className="da relative flex max-sm:rounded-3xl  flex-col justify-center overflow-hidden ">
          <div className="absolute flex flex-row inset-0 bg-center dark:bg-black"></div>
          <div className="group relative m-0 flex h-96 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img src={MenUsingMobile} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
            </div>
            {/* <div className="absolute bottom-0  z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Friends and Family</h1>
              <h1 className="text-sm font-light text-gray-200 shadow-xl"> Perfect for those eager to dive into crypto and blockchain, dedicating just 5 minutes a day.</h1>
            </div> */}
          </div>
        </div>



    </div>
    {/* Right Section */}
    <div className="md:w-1/2 sm:mx-5 ">
      {/* Gift Details */}
      <div className="text-center max-sm:text-left md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          What do the receivers get?
        </h2>
        <p className=" text-lg mb-6">
          MyWeb3Gift provides an accessible and engaging entry point into the world of cryptocurrencies and blockchain technology.
        </p>
        {/* <p className=" text-lg mb-6">
          Our gifts offer a unique gifting experience that combines education and surprises.
        </p>
        <p className=" text-lg mb-6">
          You will delight your recipients with NFT art, gaming characters, and exclusive perks as they progress through the learning journey.
        </p>
        <p className=" text-lg mb-6">
          They’ll get hands-on experience with blockchain technology, do their first transactions, and NFT mints in a guided way without putting up their funds.
        </p> */}
        <p className=" text-lg mb-6">
          They’ll experience the magic of blockchain in an entertaining 25-day journey.
        </p>
      </div>
      {/* Gift Contents */}
      <div className="mt-6">
        <div className="flex flex-wrap justify-between">
          {/* Perks */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">2 Perks from Partners</p>
            </div>
          </div>
          {/* Learnings */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className=" text-lg font-semibold">25 Learnings</p>
            </div>
          </div>
          {/* Art NFTs */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">5 Art of KI generated NFTs</p>
            </div>
          </div>
          {/* Gaming NFTs */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">3 Gaming NFTs</p>
            </div>
          </div>
          {/* Wallet */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">1 Wallet</p>
            </div>
          </div>
          {/* Learning Access */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">Lifelong Access to an extensive learning section</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default GiftDetails;
