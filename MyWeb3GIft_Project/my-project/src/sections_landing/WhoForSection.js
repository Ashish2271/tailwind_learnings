import React from 'react';
import { GirlSmiling, LearningGirl, Friends, Entertainment } from '../assets/Images/WhoItFor';




const WhoForSection = () => {
  return (

    <div>

    <div className="bg-gray-100 rounded-3xl sm:px-20 max-sm:px-5 sm:mx-5 py-10">
      <h2 className=" font-bold sm:mx-20 sm:text-4xl text-center mb-6">Who's It For?</h2>
      <div className='flex flex-wrap min-h-[50vh] justify-center flex-row gap-7 '>

        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-100">
          <div className="absolute flex flex-row inset-0 bg-center dark:bg-black"></div>
          <div className="group relative m-0 flex h-64 w-80 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img src={GirlSmiling} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
            </div>
            <div className="absolute bottom-0 hover:bg-emerald-600 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif text-2xl font-bold text-white shadow-xl">You</h1>
              <h1 className="text-sm font-light text-gray-200 shadow-xl">Unlock the fascinating world of Crypto and Blockchain, even if you're a beginner.</h1>
            </div>
          </div>
        </div>

        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-100">
          <div className="absolute flex flex-row inset-0 bg-center dark:bg-black"></div>
          <div className="group relative m-0 flex h-64 w-80 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img src={Friends} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
            </div>
            <div className="absolute bottom-0 hover:bg-pink-600 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Friends and Family</h1>
              <h1 className="text-sm font-light text-gray-200 shadow-xl"> Perfect for those eager to dive into crypto and blockchain, dedicating just 5 minutes a day.</h1>
            </div>
          </div>
        </div>


        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-100">
          <div className="absolute flex flex-row inset-0 bg-center dark:bg-black"></div>
          <div className="group relative m-0 flex h-64 w-80 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img src={LearningGirl} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
            </div>
            <div className="absolute bottom-0 z-20 m-0 hover:bg-yellow-500 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Recipients</h1>
              <h1 className="text-sm font-light text-gray-200 shadow-xl">They'll learn, explore, and engage in crypto, regardless of their prior knowledge.</h1>
            </div>
          </div>
        </div>

        <div className="da relative flex  flex-col justify-center overflow-hidden bg-gray-100">
          <div className="absolute flex flex-row inset-0 bg-center dark:bg-black"></div>
          <div className="group relative m-0 flex h-64 w-80 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img src={Entertainment} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
            </div>
            <div className="absolute hover:bg-cyan-500 bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif text-2xl font-bold text-white shadow-xl">After 25 Days</h1>
              <h1 className="text-sm font-light text-gray-200 shadow-xl  ">They'll possess more blockchain knowledge than 95% of the population.</h1>
            </div>
          </div>
        </div>


      </div>

    </div>








    </div>

  );
};

export default WhoForSection;