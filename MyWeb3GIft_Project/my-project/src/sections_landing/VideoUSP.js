import React from 'react'
import Christmas_banner from "../assets/Videos/index.js"
// import { ChristmasGift } from '../assets/Images'

const VideoUSP = () => {
    return (
        <div>








            {/* <div id='video_usp' className=''>

<div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">

                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl" alt=""/>
                    <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt=""/>
               
                </div>
            </div>
            <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>



</div> */}



            {/* <div id='content_usp' className=' flex flex-row flex-wrap space-x-9 justify-center my-48 '>

<div className="cards_usp  bg-blue-500 w-40 h-20 "></div>
<div className="cards_usp  bg-blue-500 w-40 h-20 "></div>
<div className="cards_usp  bg-blue-500 w-40 h-20 "></div>
<div className="cards_usp  bg-blue-500 w-40 h-20 "></div>
<div className="cards_usp  bg-blue-500 w-40 h-20 "></div>
<div className="cards_usp  bg-blue-500 w-40 h-20 "></div>
<div className="cards_usp  bg-blue-500 w-40 h-20 "></div>

</div> */}




            <div className='min-h-[60vh] flex flex-col justify-center items-center sm:flex-row max-sm:flex-wrap'>

                <div className='sm:w-1/2 max-sm:w-full p-4 max-sm:text-center sm:px-20 '>
                    <h1 className=' font-bold sm:text-5xl pb-20'>Lorem ipsum dolor sit, amet consectetur illo veritatis laboriosam.</h1>
                    <h2 className='text-lg font-semibold sm:text-2xl pb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                    <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold sm:text-2xl py-4 px-10 rounded mt-4'>Get It Now</button>
                </div>

                <div className='sm:w-1/2 max-sm:w-full mr-30 sm:mx-32  p-4 text-center'>
                    <video className='w-full rounded-3xl' src={Christmas_banner} preload="auto" autoPlay controls></video>
                </div>

            </div>




        </div>
    )
}

export default VideoUSP