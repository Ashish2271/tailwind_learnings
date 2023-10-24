import React from 'react';
import { MenUsingMobile } from '../assets/Images/WhoItFor';


const GiftDetails = () => {
  return (
    <div className="flex flex-col sm:my-10 md:flex-row justify-center items-center p-6 bg-blue-600 rounded-3xl">
      {/* Left Section */}
      <div className="md:w-1/2 max-w-screen-xl hidden max-[280px]:hidden mx-auto mb-4 md:mb-0">
        <div className="da relative flex max-sm:rounded-3xl flex-col justify-center overflow-hidden">
          <div className="absolute flex flex-row inset-0 bg-center dark:bg-black"></div>
          <div className="group relative m-0 flex h-96 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden max-sm:w-80 mx-auto rounded-3xl max-sm:h-80 border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img src={MenUsingMobile} className="animate-fade-in block max-sm:w-80 mx-auto rounded-3xl max-sm:h-80 h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 sm:mx-5">
        {/* Gift Details */}
        <div className="text-center max-sm:text-left text-white md:text-left">
          <h2 className="font-bold text-2xl md:text-4xl max-sm:text-center max-sm:text-2xl mb-2">
            What do the receivers get?
          </h2>
          <p className="text-lg text-center max-sm:my-8 mb-6">
            They’ll experience the magic of blockchain in an entertaining 25-day journey.
          </p>
        </div>
        {/* Gift Contents */}
        <div className="mt-6 text-white">
          <div className="flex flex-wrap text-white justify-between">
            {/* Perks */}
            <div className="w-full text-white md:w-1/2 mb-4">
              <div className="flex items-center">
                <span className="text-3xl mr-2">&#9733;</span>
                <p className="text-white text-lg font-semibold">2 Perks from Partners</p>
              </div>
            </div>
            {/* Learnings */}
            <div className="w-full md:w-1/2 mb-4">
              <div className="flex items-center">
                <span className="text-3xl mr-2">&#9733;</span>
                <p className="text-lg font-semibold">25 Learnings</p>
              </div>
            </div>
            {/* Art NFTs */}
            <div className="w-full md:w-1/2 mb-4">
              <div className="flex items-center">
                <span className="text-3xl mr-2">&#9733;</span>
                <p className="text-white text-lg font-semibold">5 Art of KI generated NFTs</p>
              </div>
            </div>
            {/* Gaming NFTs */}
            <div className="w-full md:w-1/2 mb-4">
              <div className="flex items-center">
                <span className="text-3xl mr-2">&#9733;</span>
                <p className="text-white text-lg font-semibold">3 Gaming NFTs</p>
              </div>
            </div>
            {/* Wallet */}
            <div className="w-full md:w-1/2 mb-4">
              <div className="flex items-center">
                <span className="text-3xl mr-2">&#9733;</span>
                <p className="text-white text-lg font-semibold">1 Wallet</p>
              </div>
            </div>
            {/* Learning Access */}
            <div className="w-full md:w-1/2 mb-4">
              <div className="flex items-center">
                <span className="text-3xl mr-2">&#9733;</span>
                <p className="text-white text-lg font-semibold">Lifelong Access to an extensive learning section</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftDetails;
