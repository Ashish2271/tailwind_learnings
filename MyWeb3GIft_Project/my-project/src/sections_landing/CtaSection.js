
import { GiftBox } from "../assets/Images"
import "./Styles/CTA.css"


const CtaSection = () => {
    return (
        <section className="   max-sm:justify-center max-sm:flex flex dark:bg-gray-800 dark:text-white w-full justify-center py-10 bg-gray-50 dark:shadow-gray-800   ">
            <div className=" lg:mx-40 max-sm:my-3   container my-60  flex flex-row max-sm:flex-col max-md:flex-col  ">




            <div className="  ">
                    {/* <div className=" w-72 h-80 relative bg-red-600 w-100px h-100px "></div> */}
                    <div className=" giftbox max-sm:w-74 flex max-md:justify-center  " > <img src={GiftBox} width={350} alt="Cta" className=" lg:w-[900px]" />  </div>
                </div>

                <div className="flex-col my-44" >
                    <span className="font-bold text-5xl max-sm:text-4xl my-8  ml-10 " >Don't Miss Out!</span>
                    <p className="ml-10 my-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum omnis numquam.
                    </p>


                    <button className="ml-10 mt-12  hover:bg-red-800 hover:scale-110  bg-red-600 py-3 px-7  text-white rounded-md ">Give Me MyWeb3Gift</button>
                </div>




            </div>
        </section>


    )
}

export default CtaSection