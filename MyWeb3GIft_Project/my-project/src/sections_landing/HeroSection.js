
// import { birthday, fukubukuro1, graduation, wedding, calendar1 } from "../assets/Images"
// import { WeddingModel } from "../assets/Images/3d_models"
// import {  Gift_Video, hexagonal, watercolor } from "../assets/Videos"
import "./Styles/Hero.css"
// import TextAnimation from "./TextAnimation";




const HeroSection = () => {


  const overlayStyle = {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <div className="  "  >

    {/* <div className="overflow-x-hidden "> */}
      {/* 
<video src={Christmas_banner} loop autoPlay muted  className="object-cover absolute h-screen w-screen -z-10 top-0 left-0 " ></video> */}


      <section className=" rounded-t-[50px] text-gray-700  dark:text-white demo relative top-0 ">



        {/* <video src={watercolor} loop autoPlay muted className="object-cover absolute h-screen w-screen -z-10 top-0 left-0 " ></video> */}


        <div
          className="mx-auto max-w-screen max-h-screen flex relative flex-col  px-4 py-32 lg:flex lg:flex-col lg:h-screen lg:items-center"
          style={overlayStyle}>
          <div className="mx-auto max-w-xl text-center  my-20  ">
            <h1 className="  md:scale-125 lg:scale-150 mb-20  text-3xl  font-extrabold  sm:text-5xl">

              <strong className="font-extrabold animate-charcter text-gray-100 sm:block hover:ease-in  ">
                <span className="  max-sm:text-6xl text-8xl"> 


                <span className="text-yellow-500" >My</span><span className="text-gray-800">Web3</span><span className="text-red-600">Gift</span>
                
                 {/* <img src={final_tittle} alt="" /> */}
                
                 </span>
              </strong>
            </h1>

            {/* <h1 class="text-6xl md:text-7xl font-bold mb-5 dark:text-gray-50 text-slate-50">MyWeb3Gift </h1> */}

            <p className=" animate-fade-right max-sm:px-20  text-gray-500 sm:text-xl/relaxed">
              Get our gift calendar for your friends and family.
              Stand out from the mass with a new kind of gift.
            </p>

             {/* <TextAnimation  /> */}

            <div className="mt-8 animate-fade-right flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded  bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/get-started"
              >
                GIVE A GIFT
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium bg-slate-100 text-yellow-500 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 dark:bg-yellow-600 dark:text-white sm:w-auto"
                href="/about"
              >
                LEARN MORE
              </a>






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