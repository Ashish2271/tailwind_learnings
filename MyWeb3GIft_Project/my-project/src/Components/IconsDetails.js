import React, { useEffect } from 'react';
import "./Style/IconsDetails.css"
import { AllOcassions, Chellenge } from '../assets/Images/Compressed';
// import Modal from './Modal';






  import { EmailModal } from '../sections_landing';


  const IconsDetails = () => {



    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });

      const hiddenElements = document.querySelectorAll('.hidden');

      hiddenElements.forEach((el) => observer.observe(el));
    }, []);



    // const handleAccept = (componentIdentifier) => {
    //   switch (componentIdentifier) {
    //     case 'Facebook':
    //       console.log("1");
    //       window.location.href = "https://buy.stripe.com/eVa9BQ0ete5c4nefZ0";
    //       break;
    //     case 'Instagram':
    //       console.log("2");
    //       window.location.href = "https://buy.stripe.com/8wM15k6CR2mu06YbIM";
    //       break;
    //     case 'Discord':
    //       console.log("3");
    //       window.location.href = "https://buy.stripe.com/aEUaFUaT72mu2f69AF";
    //       break;
    //     default:
    //       break;
    //   }
    // };




    return (
      <div className=' bg-gradient-to-r mx-auto w-full max-w-screen-xl '>

        <div className='text-center py-10 hiden  text-black font-bold max-sm:text-2xl sm:text-4xl sm:mx-20' >Get Your Holiday Gifts Now, <br /> Shine With A New Kind Of Gift
        </div>
        <div className='text-center hiden text-yel-600 max-sm:text-xl py-4 sm:text-3xl text-3xl mx-4  '>Choose the digital gift box <br className='sm:hidden' /> according to the occasion</div>
        <div className="containerIcon  flex flex-1 flex-row flex-wrap min-h-[50vh] ">
          <div className="relative hiden logo m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <div className="mt-4 px-5 pb-5">
              <a href="#/">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">Christmas</h5>
              </a>
            </div>

            <a href="#/">
              <img className="h-60 rounded-t-lg object-cover" src="https://images.unsplash.com/photo-1606482512676-255bf02be7cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" alt="product" loading="lazy" />

            </a>
            {/* <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span> */}
            <div className="mt-4 px-5 pb-5">
              <a href="#/">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">Crypto Advent Calendar</h5>
              </a>

              <div className="flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">Free</span>
                  <span className="text-sm text-slate-900 line-through">$25</span>
                </p>

                {/* <Modal
                componentIdentifier="Facebook"
                onAccept={handleAccept} /> */}

<EmailModal label="Send" className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"  props={"CryptoAdventCalendar"}/>



              </div>
            </div>
          </div>




          <div className="relative hiden logo m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">

            <div className="mt-4 px-5 pb-5">
              <a href="#/">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">All Occasions</h5>
              </a>
            </div>

            <a href="#/">
              <img className="h-60 rounded-t-lg object-cover" src={AllOcassions} alt="All Occasions Calender" loading="lazy" />
            </a>
            {/* <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span> */}
            <div className="mt-4 px-5 pb-5">
              <a href="#/">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">Crypto Surprise Gift Box</h5>
              </a>

              <div className="flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">Free</span>
                  <span className="text-sm text-slate-900 line-through">$25</span>
                </p>

                {/* <Modal
                componentIdentifier="Instagram"
                onAccept={handleAccept} /> */}

          
<EmailModal label="Buy" className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" props={"CryptoSurpriseGiftBox"} />

              </div>
            </div>
          </div>



          <div className="relative hiden logo m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">

            <div className="mt-4 px-5 pb-5">
              <a href="#/">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">Random</h5>
              </a>
            </div>

            <a href="#/">
              <img className="h-60 rounded-t-lg object-cover" src={Chellenge} alt="Challenge Calender" loading="lazy" />
            </a>
            {/* <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span> */}
            <div className="mt-4 px-5 pb-5">
              <a href="#/">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">24-Day Crypto
                  Challenge </h5>
              </a>
              {/* <div className="mt-2.5 mb-5 flex items-center">
              <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
              <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div> */}
              <div className="flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">Free</span>
                  <span className="text-sm text-slate-900 line-through">$25</span>
                </p>

                {/* <Modal
                componentIdentifier="Discord"
                onAccept={handleAccept}
              /> */}

<EmailModal label="Buy" className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" props={"CryptoChallenge"} />
              

              </div>
            </div>
          </div>

        </div>
        <p className='text-yel-600 text-5xl  hiden  px-3 max-sm:text-xl sm:text-3xl   text-center'>Limited time offer for early users grab this deal for free now <br />  </p>

        <p className='text-yel-600 text-5xl hiden py-4 px-3 max-sm:text-xl sm:text-3xl   text-center'>All options have the same content, only the arrangement and layout differs. <br />

          <div className='flex flex-row justify-center'>
            <EmailModal label="STAY UPDATED" className='bg-yellow-400 hiden shadow-2xl text-yel-600 text-white font max-sm:text-xl sm:text-2xl  bold px-7 my-4 hover:bg-yellow-500  rounded-xl text-2xl py-3' props= {4}/>

          </div>
        </p>


      </div>
    )
  }

  export default IconsDetails



