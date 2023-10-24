import React from 'react';
import { GirlSmiling, Friends, Entertainment } from '../assets/Images/WhoItFor';
import './Styles/WhoForSection.css';

const WhoForSection = () => {
  return (
    <div>



<div className="rounded-3xl sm:px-5 py-10">
        <h2 className="font-bold text-4xl sm:text-5xl py-12 text-center my-5">Who to give it to?</h2>
        <div className="flex flex-wrap justify-center gap-32 max-sm:gap-10">
        <div className="logo pp max-w-sm rounded-3xl  bg-blue-300 w-80 h-24 overflow-hidden shadow-lg flex justify-center items-center">
  <div className="px-6 py-4">
    <div className="font-bold text-center text-white text-xl mb-2">Friends and family</div>
  </div>
</div>

<div className="logo pp max-w-sm rounded-3xl bg-blue-300 w-80 h-24 overflow-hidden shadow-lg flex justify-center items-center">
  <div className="px-6 py-4">
    <div className="font-bold text-center text-white text-xl mb-2">Unique-gift-enthusiasts</div>
  </div>
</div>
<div className="logo pp max-w-sm rounded-3xl bg-blue-300 w-80 h-24 overflow-hidden shadow-lg flex justify-center items-center">
  <div className="px-6 py-4">
    <div className="font-bold text-center text-white  text-xl mb-2">Yourself</div>
  </div>
</div>
        </div>
      </div>



      <div className="rounded-3xl sm:px-5 py-10">
        <h2 className="font-bold text-4xl sm:text-5xl py-12 text-center my-5">Why buy our gift boxes?</h2>
        <div className="flex flex-wrap justify-center gap-5 max-sm:gap-10">
          <div className="logo pp max-w-sm rounded-3xl overflow-hidden shadow-lg">
            <img className="w-full" src={GirlSmiling} alt="Girl Smiling" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">You</div>
              <p className="text-gray-700 text-base">
                Unlock the fascinating world of Crypto and Blockchain, even if you're a beginner.
              </p>
            </div>
          </div>

          <div className="logo pp max-w-sm rounded-3xl overflow-hidden shadow-lg">
            <img className="w-full" src={Entertainment} alt="Entertainment" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Unique Gift Enthusiasts</div>
              <p className="text-gray-700 text-base">
                One-of-a-kind gift that combines education and entertainment in a magical way.
              </p>
            </div>
          </div>

          <div className="logo pp max-w-sm rounded-3xl overflow-hidden shadow-lg">
            <img className="w-full" src={Friends} alt="Friends" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Friends and Family</div>
              <p className="text-gray-700 text-base">
                Perfect for those eager to dive into crypto and blockchain, dedicating just 5 minutes a day.
              </p>
            </div>
          </div>
      

          
        </div>
      </div>
    </div>
  );
};

export default WhoForSection;


















// <div className="bg-gray-100  rounded-3xl sm:px-20 max-sm:px-5 sm:mx-5 py-10">
// <h2 className=" font-bold sm:mx-20 sm:text-6xl max-sm:text-4xl text-center ">Who's It For?</h2>
// <div className='flex my-10 flex-wrap min-h-[40vh] justify-center flex-row gap-7 '>

//   <div className="da group relative   flex  flex-col justify-center overflow-hidden ">
   
//     <div className="group relative m-0 flex h-64 w-80 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
//       <div className="z-10 h-full w-full overflow-hidden rounded-xl border  border-gray-200 opacity-90 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
//         <img src={GirlSmiling} className="animate-fade-in  block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
//       </div>

//     </div>

//     <div className="absolute bottom-0 z-20 m-0 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
//       <h1 className="font-serif text-2xl font-bold ">You</h1>
//       <h1 className="text-sm font-light  ">Unlock the fascinating world of Crypto and Blockchain, even if you're a beginner.</h1>
//     </div>
//   </div>

//   <div className="da relative   flex   flex-col justify-center overflow-hidden ">
//     <div className="absolute flex flex-row inset-0 bg-center dark:bg-black"></div>
//     <div className="group relative m-0 flex h-64 w-80 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
//       <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
//         <img src={Friends} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
//       </div>
      
//     </div>


//     <div className="absolute bottom-0  z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
//         <h1 className="font-serif text-2xl font-bold ">Friends and Family</h1>
//         <h1 className="text-sm font-light "> Perfect for those eager to dive into crypto and blockchain, dedicating just 5 minutes a day.</h1>
//       </div>
//   </div>


//   <div className="da relative    flex  flex-col justify-center overflow-hidden ">
//     <div className="absolute flex flex-row inset-0 bg-center dark:bg-black"></div>
//     <div className="group relative m-0 flex h-64 w-80 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
//       <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
//         <img src={LearningGirl} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
//       </div>

//     </div>

//     <div className="absolute bottom-0 z-20 m-0  pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
//       <h1 className="font-serif text-2xl font-bold ">Knowledge-Hungry</h1>
//       <h1 className="text-sm font-light ">Those who aim to know more about blockchain and crypto within just 25 days.</h1>
//     </div>
//   </div>

//   <div className="da relative  flex  flex-col justify-center overflow-hidden bg-gray-100">
//     <div className="absolute flex flex-row inset-0 bg-center dark:bg-black"></div>
//     <div className="group relative m-0 flex h-64 w-80 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
//       <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
//         <img src={Entertainment} className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
//       </div>

//     </div>

//     <div className="absolute  bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
//       <h1 className="font-serif text-2xl font-bold ">Unique Gift Enthusiasts</h1>
//       <h1 className="text-sm font-light  ">One-of-a-kind gift that combines education and entertainment in a magical way.</h1>
//     </div>
//   </div>


// </div>

// </div>




