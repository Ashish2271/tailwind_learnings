import React from 'react';
import { Calender24 } from '../assets/Images/CardsImages';
import './Styles/Steps.css';

const Steps = () => {
  return (
    <section className="container mx-auto flex flex-col gap-10 md:gap-20 my-10 text-center">
      <div className="font-bold text-3xl sm:text-5xl py-10">How it works?</div>
      <div className="feature__section flex flex-col-reverse md:flex-row">
        <div className="feature__content md:mr-24 text-left">
          <h2>Gifter 🎁🌟</h2>
          <p>
            You can select a gift box, add an optional personal message, and then choose how to hand it over: via email with a link/barcode or in person with a printed card containing the link/barcode.
          </p>
        </div>
        <div className="feature__image">
          <img src="https://images.pexels.com/photos/5970863/pexels-photo-5970863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" />
        </div>
      </div>
      <div className="bg-black w-20 h-20 rounded-full mx-auto my-10 md:hidden"></div>
      <div className="feature__section md:ml-20">
        <div className="feature__image">
          <img src={Calender24} alt="product" />
        </div>
        <div className="feature__content text-left">
          <h2>Recipient 📲⚡️</h2>
          <p>
            Recipients can use the link/barcode to access our redeem page where they'll discover your personal message and gain access to the gift box. They can then open and enjoy the individual gifts day by day.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Steps;






//  {/* 
// <div className=' bg-black w-20 h-20 mx-auto max-sm:hidden rounded-full  '></div>
// <div className="feature__section sm:mr-24 reverse">
//     <div className="feature__content">
//         <h2>Step 3 - Send the Gift 🚀</h2>
//         <p>
//             Provide two options: "Send via Email" and "Print for Personal Delivery." Use icons or buttons for these choices.
//         </p>
//     </div>

//     <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>
//     <div className="feature__image">
//         <img src="https://source.unsplash.com/500x500/?Interface" alt="product" />
//     </div>
// </div>



// <div className=' bg-black w-20 h-20 max-sm:hidden mx-auto rounded-full  '></div>
// <div className="feature__section sm:ml-[103px] ">
//     <div className="feature__image">
//         <img src="https://source.unsplash.com/500x500/?interface" alt="product" />
//     </div>


//     <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>
//     <div className="feature__content">
//         <h2>Step 4 - Recipient's Experience ⚡️</h2>
//         <p>
//             Display a mobile phone or laptop screen with a barcode or link. Indicate that the recipient uses this to access their gift.
//         </p>
//     </div>
// </div>



// <div className=' bg-black w-20 h-20 max-sm:hidden mx-auto rounded-full  '></div>
// <div className="feature__section sm:mr-24 reverse">
//     <div className="feature__content">
//         <h2> Step 5 - Unwrapping Animation 🌟</h2>
//         <p>
//             Showcase a digital gift box or calendar with a "Unwrap Gift" button. When clicked, a delightful animation reveals the gift.
//         </p>
//     </div>

//     <div className='bg-black max-sm:hidden  w-2 sm:h-[400px]'>   </div>

//     <div className="feature__image">
//         <img src="https://source.unsplash.com/500x500/?gift" alt="product" />
//     </div>
// </div>


// <div className=' bg-black w-20 h-20 max-sm:hidden mx-auto rounded-full  '></div>
// <div className="feature__section sm:ml-[103px] ">
//     <div className="feature__image">
//         <img src="https://source.unsplash.com/500x500/?interface" alt="product" />
//     </div>


//     <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>
//     <div className="feature__content">
//         <h2>Step 6 - Personal Message⚡️</h2>
//         <p>
//             Show the recipient's screen with the personal message and the gift calendar or box.
//         </p>
//     </div>
// </div>



// <div className=' bg-black w-20 h-20 max-sm:hidden mx-auto rounded-full  '></div>
// <div className="feature__section sm:mr-24 reverse">
//     <div className="feature__content">
//         <h2>Step 7 - Interactive Learning Journey🌟</h2>
//         <p>
//             Present an engaging graphic that represents an educational and interactive journey. Include icons for digital assets and perks.
//         </p>
//     </div>

//     <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>

//     <div className="feature__image">
//         <img src="https://source.unsplash.com/500x500/?analytics-interface" alt="product" />
//     </div>
// </div>



// <div className=' bg-black w-20 h-20 max-sm:hidden mx-auto rounded-full  '></div>
// <div className="feature__section sm:ml-[103px]  ">
//     <div className="feature__image">
//         <img src="https://source.unsplash.com/500x500/?interface" alt="product" />
//     </div>


//     <div className='bg-black max-sm:hidden w-2 sm:h-[400px]'>   </div>
//     <div className="feature__content">
//         <h2>Step 8 - Lifelong Access⚡️</h2>
//         <p>
//             Conclude with an image of a book or open browser indicating access to the learning section for a lifetime.
//         </p>
//     </div>
// </div> */}

