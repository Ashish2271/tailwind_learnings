import React, { useState } from 'react';
import { Video1 } from '../assets/Videos';
import { Myweb3gift} from '../assets/Images';
import EmailModal from './EmailModal';

const VideoUSP = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <div className='bg-sky-950'>
        <div className='min-h-[60vh] flex flex-col max-w-screen-xl mx-auto justify-center items-center sm:flex-row max-sm:flex-wrap'>

          <div className='sm:w-1/2 max-sm:w-full flex flex-col justify-start text-white sm:py-10 p-4 sm:px-10'>
            <h1 className='font-bold text-4xl sm:text-4xl pb-5 sm:pb-10'>Watch our video to get a taste of future of gifting</h1>
            <h2 className='text-lg  sm:text-2xl pb-5'>We combine the crypto space with the <br /> joy of gifting</h2>
       
<div>
<EmailModal label="STAY UPDATED" className='bg-yellow-400 hover:bg-yellow-500 text-white  text-xl sm:text-2xl py-3 px-10 rounded mt-4' />



</div>
          
          </div>

          <div className='sm:w-1/2 max-sm:w-full p-4'>
            <div className='video-container'>
              {/* <video className='w-full h-full rounded-3xl' src={Video1} preload="auto" autoPlay controls></video> */}
              


              <button
        onClick={openModal}
       
        type="button"
      >
       <img src={Myweb3gift} className='rounded-3xl  shadow-xl ' alt="Web3 Gift Video Intro Thumbnail" />
      </button>


      {isModalOpen && (
     <div class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden backdrop-blur-xl bg-white/30 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center">
     <div class="relative w-full max-w-7xl max-h-full">
       <div class="relative backdrop-blur-xl bg-blue/30 rounded-3xl shadow dark:bg-blue/30">
         <div class="flex flex-col items-start sm:p-4 rounded-t dark:border-gray-600">
           <button
             onClick={closeModal}
             class="text-gray-400 bg-transparent hover:bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover-bg-gray-600 dark:hover-text-white"
           >
             <svg
               class="w-3 h-3"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 14 14"
             >
               <path
                 stroke="currentColor"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
               />
             </svg>
             <span class="sr-only">Close modal</span>
           </button>
   
           <div class="w-full p-1 flex justify-center items-center">
             <div class="video-container">
               <video class="sm:w-[1250px]  max-sm:w-full h-full rounded-3xl" src={Video1} width={90} preload="auto" autoPlay controls></video>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   
    
      )}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoUSP;







// function Modal() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <button
//         onClick={openModal}
//         className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-950 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//       >
//         Toggle modal
//       </button>

//       {isModalOpen && (
//         <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
//           <div className="relative w-full max-w-2xl max-h-full">
//             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//               <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
               
//                 <button
//                   onClick={closeModal}
//                   className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                 >
//                   <svg
//                     className="w-3 h-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 14"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                     />
//                   </svg>
//                   <span className="sr-only">Close modal</span>
//                 </button>
//               </div>

//               <div className=' max-sm:w-full p-4'>
//                 <div className='video-container'>
//                   <video className='w-full h-full rounded-3xl' src={Video1} preload="auto" autoPlay controls></video>
//                 </div>
//               </div>



//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Modal;
