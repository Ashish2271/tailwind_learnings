import React from 'react'
import { useState } from "react";


const EmailForm = () => {




    const [user, setUser] = useState(

        {
      
          email: "",
        
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
    
        const {  email} = user;
    
        if (email) {
    
          const res = await fetch("https://myweb3gift-bd98e-default-rtdb.firebaseio.com/emails.json",
    
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
    
            body: JSON.stringify({
            
              email,
            
    
            })
          }
        );
        if (res) {
          setUser(
            {
          
              email: "",
          
            });
    
          alert("We will contact you, Thankyou 🙂");
        }
    
        } else {
    
    
          alert("Please Write your proper email");
    
    
        }
    
    
    
    
    
      };



    return (


<div className='bg-sky-950  dark:bg-gray-800'>

<div className="bg-sky-950 w-full mx-auto  max-w-screen-xl dark:bg-gray-800">
            <div className="relative px-4 bg-sky-950 rounded-3xl py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
                <h2 className="text-2xl text-white font-semibold font-display  dark:text-white sm:text-3xl">
                    We&#x27;ve got more coming...
                </h2>
                {/* <p className="mt-2 max-w-xl text-base text-gray-400">
                    Want to hear from us when we add new components? Sign up for our newsletter and we&#x27;ll email you every time we release a new batch of components.
                </p> */}
          
                    <div className="mt-6 sm:flex justify-start">
                        <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                            <div className=" relative ">
                                <input type="email" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="Email" 
                                  name="email"
                                  value={user.email}
                                   onChange={getUserData}
                                   autoComplete="email"
                                />
                            </div>
                            <button className="flex-shrink-0 px-4   py-2 text-base font-semibold text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit"
                                onClick={postData}
                            >

                              
                                  SUBSCRIBE
                            </button>
                        </form>
                    </div>
                
                {/* <div className="absolute inset-y-0 right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
                    <picture>
                    
                        <source srcSet="/images/object/5.webp" type="image/webp" />
                        <source srcSet="/images/object/5.png" />
                        <img className="object-cover w-1/2 mx-auto    maw-w-44" src="/images/object/5.png" alt="shopping item" />
                    </picture>
                </div> */}
            </div>
        </div>


</div>
      


    )
}

export default EmailForm