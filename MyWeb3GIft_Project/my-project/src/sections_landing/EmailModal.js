import React from 'react'
import { useState } from 'react'
import { ChristmasCalendar } from '../assets/icons';



const EmailModal = ({label, className}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const OpenModal = () => {
        setIsModalOpen(true);
        // console.log("Modal open");
    }


    const closeModal = () => {
        setIsModalOpen(false);
        // console.log("Modal not open");
    }

    const [isThanksModalOpen, setIsThanksModalOpen] = useState(false)

    // const OpenThanksModal = () => {
    //     setIsThanksModalOpen(true);
    //     console.log("Thanks Modal open");
    // }


    const closeThanksModal = () => {
        setIsThanksModalOpen(false);
        // console.log("Thanks Modal not open");
    }



    // Get USER dATA 

    const [user, setUser] = useState(

        {
            name: "",
            email: ""

        }
    )

    let name, value;
    const getUserData = (event) => {

        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {

        e.preventDefault();

        const { name, email } = user;

        if (name && email) {

            const res = await fetch("https://myweb3gift-bd98e-default-rtdb.firebaseio.com/submitemails.json",

                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name,
                        email,
                        approve: false  // Adding the 'approve' field with the default value of false

                    })
                }
            );
            if (res) {
                setUser(
                    {
                        name: "",
                        email: "",

                    });
                setIsModalOpen(false);
                setIsThanksModalOpen(true);
                // alert("We will contact you, Thankyou 🙂");
            }
        } else {

            alert("Please Write your proper email");
        }
    };





    const defaultClasses = '';



    return (
        <div className='flex flex-row '>

            <button className={`${defaultClasses} ${className}`} onClick={OpenModal} >  {label}   </button>

            {isModalOpen && (
                <div className='fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden backdrop-blur-xl bg-white/30 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] min-h-full flex justify-center items-center'>

                    <div id="authentication-modal" tabIndex="-1" aria-hidden="true" >
                        <div className="relative w-full max-w-md max-h-full">

                            <div className="relative bg-white max-h-2xl min-w-screen rounded-lg shadow dark:bg-gray-700">
                                <button type="button" onClick={closeModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>

                                <img src={ChristmasCalendar} alt="Crypto Calendar" className='h-40' />


                                <div className="px-6 py-6   lg:px-8">
                                    <h3 className="mb-4 max-sm:text-5xl sm:text-4xl font-medium text-gray-900 dark:text-white">Get Early Bird Benefits 🎁 </h3>
                                    <form className="space-y-6" method="POST">
                                        <div className='h-8'></div>
                                        <div >
                                           

<div className='flex flex-1'>
<label htmlFor="name" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Name</label>
</div>

                                            <input type="name" name="name" id="name" placeholder="Jacob milton" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={user.name}
                                                onChange={getUserData} required />
                                        </div>
                                        <div className=''></div>
                                        <div>
                                          
<div className='flex flex-1'>
<label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your email</label>
</div>

                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@xyz.com" value={user.email}
                                                onChange={getUserData} required />
                                        </div>


                                        <div className=''></div>

                                        <button type="submit"
                                            onClick={postData} className="w-full  text-white bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-400 dark:focus:ring-yellow-600">Submit</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}








            {isThanksModalOpen && (
                <div className='fixed top-0 left-0  right-0 z-50 w-full p-4 overflow-x-hidden backdrop-blur-xl bg-white/30 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] min-h-full flex justify-center items-center'>

                    <div id="authentication-modal" tabIndex="-1" aria-hidden="true" >
                        <div className="relative w-full max-w-md max-h-full">

                            <div className="relative bg-white max-h-2xl min-w-screen rounded-3xl shadow dark:bg-gray-700">
                                <button type="button" onClick={closeThanksModal} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className=' flex flex-col justify-center align-items-center '>
                                    <img src={ChristmasCalendar} alt="Crypto Calendar" className='h-1/2' />
                                    <div className="px-6 py-6 lg:px-8">
                                        <h3 className="mb-4 max-sm:text-5xl sm:text-4xl text-center font-medium text-gray-900 dark:text-white">  Thankyou 🙂   </h3>
                                    </div>
                                    <button type="submit"
                                            onClick={closeThanksModal} className="w-full  text-white bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-2xl px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-400 dark:focus:ring-yellow-600">CLOSE</button>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            )}








        </div>
    )
}

export default EmailModal




// import React from 'react'

// const OpenModalEmailForm = () => {
//   return (
// <>



// </>
//   )
// }

