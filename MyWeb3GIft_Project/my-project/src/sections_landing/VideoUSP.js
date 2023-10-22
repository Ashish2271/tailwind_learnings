import React from 'react';
// import './VideoUSP.css'; 
// Import your CSS for additional styling

const VideoUSP = () => {
  return (
    <div>
      <div className='bg-blue-600'>
        <div className='min-h-[60vh] flex flex-col max-w-screen-xl mx-auto justify-center items-center sm:flex-row max-sm:flex-wrap'>

          <div className='sm:w-1/2 max-sm:w-full text-white sm:py-10 p-4 sm:px-10'>
            <h1 className='font-bold text-4xl sm:text-5xl pb-5 sm:pb-10'>Future of Gifting with MyWeb3Gift</h1>
            <h2 className='text-lg font-semibold sm:text-2xl pb-5'>Discover a World of Possibilities in Every Door</h2>
            <button
              data-tally-open="3jo994"
              data-tally-layout="modal"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className='bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-xl sm:text-2xl py-3 px-10 rounded mt-4'
            >
              Get Now
            </button>
          </div>

          <div className='sm:w-1/2 max-sm:w-full p-4'>
            <div className='video-container'>
              <video className='w-full h-full rounded-3xl' src="#" preload="auto" autoPlay controls></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoUSP;
