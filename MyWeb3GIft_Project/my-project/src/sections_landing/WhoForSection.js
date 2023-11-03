import React from 'react';

import './Styles/WhoForSection.css';
import { FiveMinute,Education, Unlock } from '../assets/Images/Compressed';
import { Employee, FriendsandFamily, Unique, Yourself } from '../assets/icons';
const WhoForSection = () => {
  return (
    <div>



<div className="rounded-3xl sm:px-5 py-10">
        <h2 className="font-bold text-4xl sm:text-4xl py-12  text-center ">Who to give it to?</h2>
   


        <div className="flex flex-wrap justify-center gap-6 max-sm:gap-10">
        <div className="logo pp max-w-sm rounded-3xl h-40  text-black w-80 overflow-hidden shadow-2xl flex justify-center items-center">
  <div className="px-6 py-8 grid grid-cols-1 justify-items-center">
    <img className='text-center' src={FriendsandFamily} alt="Web3 Gift for Friends and Family" width={70} />
    <div className="font-bold text-center text-black my-4 text-xl mb-2">FRIENDS AND FAMILY</div>
  </div>
</div>

<div className="logo pp max-w-sm rounded-3xl  w-80 h-40 overflow-hidden shadow-2xl flex justify-center items-center">
  <div className="px-6 py-8 grid grid-cols-1 justify-items-center">
  <img className='text-center' src={Unique} alt="Web3 Gift for Everyone" width={70} />
    <div className="font-bold text-center text-black my-4 text-xl mb-2">  UNIQUE-GIFT-ENTHUSIASTS </div>
  </div>
</div>
<div className="logo pp max-w-sm rounded-3xl  w-80 h-40 overflow-hidden shadow-2xl flex justify-center items-center">
  <div className="px-6 py-8 grid grid-cols-1 justify-items-center">
  <img className='text-center' src={Yourself} alt="Web3 Gift for You" width={70} />
    <div className="font-bold text-center text-black my-4 text-xl mb-2">YOURSELF</div>
  </div>
</div>

<div className="logo pp max-w-sm rounded-3xl   w-80 h-40 overflow-hidden shadow-2xl flex justify-center items-center">
  <div className="px-4 py-8 grid grid-cols-1 justify-items-center">
  <img className='text-center' src={Employee} alt="Gift for Employee" width={70} />
    <div className="font-bold text-center text-black my-4  text-xl mb-2">EMPLOYEES AND CLIENTS</div>
  </div>
</div>


        </div>
      </div>

<div className=' text-yel-600 text-5xl py-4 px-3 max-sm:text-xl sm:text-3xl   text-center  mx-auto'>


Contact us if you want to customize our products according to your corporate design.
</div>


      <div className="rounded-3xl sm:px-5 py-10">
        <h2 className="font-bold text-4xl sm:text-5xl py-4 text-center my-5">Why buy our gift boxes?</h2>

        <div className="text-center mb-10">
                    <span className="inline-block w-3.5 h-1 rounded-full bg-sky-950 ml-1"></span>
                    <span className="inline-block w-24 h-1 rounded-full bg-sky-950 ml-1"> </span>
                    <span className="inline-block w-72 h-1 rounded-full bg-sky-950"></span>
                    <span className="inline-block w-24 h-1 rounded-full bg-sky-950 ml-1"></span>
                    <span className="inline-block w-3.5 h-1 rounded-full bg-sky-950 ml-1"></span>
                </div>

        <div className="flex flex-wrap justify-center gap-14 max-sm:gap-10">
          <div className="logo pp max-w-sm rounded-3xl overflow-hidden shadow-2xl">
            <img className="w-full" src={Unlock} alt="Girl Smiling" loading="lazy"/>
            <div className="px-6 py-4">
              {/* <div className="font-bold text-xl mb-2">You</div> */}
              <p className="text-gray-700  text-2xl">
                Unlock the fascinating world of Crypto and Blockchain in easy and joyful way.
                 {/* even for complete beginner. */}
              </p>
            </div>
          </div>

          <div className="logo pp max-w-sm rounded-3xl overflow-hidden shadow-2xl">
            <img className="w-full" src={Education} alt="Entertainment" loading="lazy"/>
            <div className="px-6 py-4">
              {/* <div className="font-bold text-xl mb-2">Unique Gift Enthusiasts</div> */}
              <p className="text-gray-700 text-2xl">
                One-of-a-kind gift combining education and entertainment in a magical way.
              </p>
            </div>
          </div>

          <div className="logo pp max-w-sm rounded-3xl overflow-hidden shadow-2xl">
            <img className="w-full" src={FiveMinute} alt="Friends" loading="lazy"/>
            <div className="px-6 py-4">
              {/* <div className="font-bold text-xl mb-2">Friends and Family</div> */}
              <p className="text-gray-700 text-2xl ">
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




