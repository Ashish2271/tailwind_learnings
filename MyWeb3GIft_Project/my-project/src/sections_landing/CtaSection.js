
import {  GiftBox } from "../assets/Images"
import "./Styles/CTA.css"


const CtaSection = () => {
    return (
        <section className=" flex justify-center py-10 bg-gray-50 dark:shadow-gray-800 w-full ml-[14px] ">
            <div className="container ml-24 flex flex-row max-sm:flex-col max-md:flex-col  ">


                <div  className="flex-col my-12" >
                    <span className="font-bold text-5xl my-8  ml-10 " >Don't Miss Out!</span>
                    <p className="ml-10 my-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum omnis numquam.</p>
                    <button className="ml-10 mt-12  hover:bg-red-800 hover:scale-110  bg-red-600 py-3 px-7  text-white rounded-md ">Give me my web3 gift</button>
                </div>


                <div className="my-1 ml-24 ">
                    {/* <div className=" w-72 h-80 relative bg-red-600 w-100px h-100px "></div> */}
<div  className=" giftbox" > <img src={GiftBox}  width={350}   alt="Cta"  className=" "   />  </div>
                </div>


            </div>
        </section>


    )
}

export default CtaSection