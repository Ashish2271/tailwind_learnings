
import { birthday, fukubukuro1, graduation, wedding, calendar1, final_tittle } from "../assets/Images"

// import { Christmas_banner } from "../assets/Videos"

const HeroSection = () => {
  return (
    <div >

  {/* <div className="overflow-x-hidden "> */}
{/* 
<video src={Christmas_banner} loop autoPlay muted  className="object-cover absolute h-screen w-screen -z-10 top-0 left-0 " ></video> */}

<section className="bg-gray-50 demo relative top-0 ">


<div
  className="mx-auto flex relative flex-col max-w-screen-xl px-4 py-32 lg:flex lg:flex-col lg:h-screen lg:items-center"
>
  <div className="mx-auto max-w-xl text-center  ">
    <h1 className=" md:scale-125 lg:scale-150  text-3xl font-extrabold  text-red-700 sm:text-5xl">
      {/* Welcome to */}
      <strong className="font-extrabold text-red-700 sm:block hover:ease-in  ">
       <span className="  text-9xl">  <img src={final_tittle} alt="" /> </span>
      </strong>
    </h1>

    <p className="mt-4 animate-fade-right sm:text-xl/relaxed">
      Get our gift calendar for your friends and family.
      Stand out from the mass with a new kind of gift.
    
    </p>

    <div className="mt-8 animate-fade-right flex flex-wrap justify-center gap-4">
      <a
        className="block w-full rounded  bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
        href="/get-started"
      >
        GIVE A GIFT
      </a>
    
      <a
        className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
        href="/about"
      >
        LEARN MORE
      </a>






    </div>
  </div>

  <div className="flex relative justify-evenly mt-[200px] flex-row   ">

    <div className="hover:animate-bounce max-sm:scale-75   lg:mx-14 ">  <img src={calendar1} width={100} height={10} alt="calendar " /> </div>
    <div className=" hover:animate-bounce max-sm:scale-75 lg:mx-14 ">   <img src={birthday} width={100} height={10} alt="Birthday " /> </div>
    <div className=" hover:animate-bounce max-sm:scale-75 lg:mx-14 ">   <img src={wedding} width={100} height={10} alt="Wedding " /> </div>
    <div className=" hover:animate-bounce max-sm:scale-75 lg:mx-14 ">   <img src={graduation} width={100} height={10} alt="Graduation " /> </div>
    <div className=" hover:animate-bounce max-sm:scale-75 lg:mx-14 ">   <img src={fukubukuro1} width={100} height={10} alt=" Fukubukuro" /> </div>

  </div>

</div>



</section>


   

    </div>
  )
}

export default HeroSection