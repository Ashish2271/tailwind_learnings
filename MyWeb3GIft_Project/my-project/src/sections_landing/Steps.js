import React from 'react'
import "./Styles/Steps.css"
import { Calender24 } from '../assets/Images/CardsImages'





const Steps = () => {



    return (


        <section className="container mx-auto flex flex-col max-sm:gap-20 my-10   ">

            <div className='font-bold text-center mx-auto py-20 text-6xl'>How it works?</div>

            <div className="feature__section sm:mr-24  reverse">
                <div className="feature__content ">
                    <h2 className=''>Gifter 🎁🌟</h2>
                    {/* <p>
            Display a variety of gift options with images or icons representing different occasions and interests. Users can click or hover over each to see more details.
        </p> */}

                    <p>
                    You can select a gift box, add an optional personal message, and then choose how to hand it over: via email with a link/barcode or in person with a printed card containing the link/barcode.
                    </p>

                   
                </div>

                <div className='bg-black  max-sm:hidden w-2 sm:h-[400px]'>   </div>

                <div className="feature__image">
                    <img src="https://images.pexels.com/photos/5970863/pexels-photo-5970863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" />
                </div>
            </div>

            <div className=' bg-black  w-20 max-sm:hidden h-20 mx-auto rounded-full  ' >
</div>




            <div className="feature__section sm:ml-[103px] ">
                <div className="feature__image">
                    <img src={Calender24} alt="product" />
                </div>


                <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>
                <div className="feature__content">
                    <h2>Recipient 📲⚡️</h2>
                    {/* <p>
            Show a text input field where users can type their personal message. Add a heartwarming icon next to it to indicate the personal touch.
        </p> */}

                    <p>
                    Recipients can use the link/barcode to access our redeem page where they'll discover your personal message and gain access to the gift box. They can then open and enjoy the individual gifts day by day.

                    </p>

                </div>
            </div>

            {/* 
<div className=' bg-black w-20 h-20 mx-auto max-sm:hidden rounded-full  '></div>
<div className="feature__section sm:mr-24 reverse">
    <div className="feature__content">
        <h2>Step 3 - Send the Gift 🚀</h2>
        <p>
            Provide two options: "Send via Email" and "Print for Personal Delivery." Use icons or buttons for these choices.
        </p>
    </div>

    <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>
    <div className="feature__image">
        <img src="https://source.unsplash.com/500x500/?Interface" alt="product" />
    </div>
</div>



<div className=' bg-black w-20 h-20 max-sm:hidden mx-auto rounded-full  '></div>
<div className="feature__section sm:ml-[103px] ">
    <div className="feature__image">
        <img src="https://source.unsplash.com/500x500/?interface" alt="product" />
    </div>


    <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>
    <div className="feature__content">
        <h2>Step 4 - Recipient's Experience ⚡️</h2>
        <p>
            Display a mobile phone or laptop screen with a barcode or link. Indicate that the recipient uses this to access their gift.
        </p>
    </div>
</div>



<div className=' bg-black w-20 h-20 max-sm:hidden mx-auto rounded-full  '></div>
<div className="feature__section sm:mr-24 reverse">
    <div className="feature__content">
        <h2> Step 5 - Unwrapping Animation 🌟</h2>
        <p>
            Showcase a digital gift box or calendar with a "Unwrap Gift" button. When clicked, a delightful animation reveals the gift.
        </p>
    </div>

    <div className='bg-black max-sm:hidden  w-2 sm:h-[400px]'>   </div>

    <div className="feature__image">
        <img src="https://source.unsplash.com/500x500/?gift" alt="product" />
    </div>
</div>


<div className=' bg-black w-20 h-20 max-sm:hidden mx-auto rounded-full  '></div>
<div className="feature__section sm:ml-[103px] ">
    <div className="feature__image">
        <img src="https://source.unsplash.com/500x500/?interface" alt="product" />
    </div>


    <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>
    <div className="feature__content">
        <h2>Step 6 - Personal Message⚡️</h2>
        <p>
            Show the recipient's screen with the personal message and the gift calendar or box.
        </p>
    </div>
</div>



<div className=' bg-black w-20 h-20 max-sm:hidden mx-auto rounded-full  '></div>
<div className="feature__section sm:mr-24 reverse">
    <div className="feature__content">
        <h2>Step 7 - Interactive Learning Journey🌟</h2>
        <p>
            Present an engaging graphic that represents an educational and interactive journey. Include icons for digital assets and perks.
        </p>
    </div>

    <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>

    <div className="feature__image">
        <img src="https://source.unsplash.com/500x500/?analytics-interface" alt="product" />
    </div>
</div>



<div className=' bg-black w-20 h-20 max-sm:hidden mx-auto rounded-full  '></div>
<div className="feature__section sm:ml-[103px]  ">
    <div className="feature__image">
        <img src="https://source.unsplash.com/500x500/?interface" alt="product" />
    </div>


    <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>
    <div className="feature__content">
        <h2>Step 8 - Lifelong Access⚡️</h2>
        <p>
            Conclude with an image of a book or open browser indicating access to the learning section for a lifetime.
        </p>
    </div>
</div> */}


        </section>




    )
}

export default Steps