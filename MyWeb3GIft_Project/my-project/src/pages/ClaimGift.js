import React from 'react'
import { useState } from "react";
import Nav01 from '../Components/Nav01'
// import { GiftBitcoinLogo } from '../assets/Images/MyWeb3Gift-red2'
import { Thumbnail } from '../assets/Images'
import { Footer } from '../sections_landing'


const ClaimGift = () => {




  const [user, setUser] = useState(

    {
      name: "",
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

    const { name, email } = user;

    if (name && email ) {

      const res = await fetch("https://myweb3gift-bd98e-default-rtdb.firebaseio.com/claimgift_tester.json",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name,
          email,
      
        })
      }
    );
    if (res) {
      setUser(
        {
          name: "",
          email: "",
       
        });

      alert("We will contact you, Thankyou 🙂");
    }

    } else {


      alert("Please fill all details");


    }





  };






  return (
    <div className=' bg-sky-950 '>

<Nav01></Nav01>

<section className="  bg-cover bg-center max-h-screen relative ">

<img src={Thumbnail} className=' object-fit w-full h-screen  ' alt="My web3 gift Thumbnail " loading="lazy"/>

  <div className="flex absolute inset-0   flex-col backdrop-blur-xl bg-white/30 items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <a href="./" className="flex items-center mb-6 text-3xl font-semibold text-gray-100 ">
          {/* <img className="w-8 h-8 mr-2" src={GiftBitcoinLogo} alt="logo"  loading="Web3 Gift Logo"/> */}
        {/* Claim Gift */}
      </a>
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Claim gift calendar
              </h1>
              <form className="space-y-4 md:space-y-6" method="POST">
              <div>
                      <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                      <input type="text" name="name"   value={user.name}    onChange={getUserData}  id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Jacob" required=""/>
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                      <input type="email" name="email"  value={user.email} onChange={getUserData}  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                  </div>
                  {/* <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div> */}
                  {/* <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="./" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div> */}


                  <button type="submit" onClick={postData} className="w-full text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">SUBMIT</button>
                 
                  {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="./" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p> */}
              </form>
          </div>

      </div>
      
 


  </div>
</section>

<div className='text-gray-100 text-center   max-sm:text-xl py-4 sm:text-3xl text-3xl mx-4  my-10'>
     
This beta test is exclusively for limited users, giving them access to crypto calendars and other rewards. Become a tester now.

      </div>

<Footer></Footer>

      

    </div>



  )
}

export default ClaimGift