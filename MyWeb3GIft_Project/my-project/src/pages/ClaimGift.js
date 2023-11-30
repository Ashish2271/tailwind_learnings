// import React, { useEffect, useState } from 'react';

// import Nav01 from '../Components/Nav01'
// // import { GiftBitcoinLogo } from '../assets/Images/MyWeb3Gift-red2'
// // import { Thumbnail } from '../assets/Images'
// import { Footer } from '../sections_landing'
// import { Link } from 'react-router-dom'
// import { useAuth } from "@clerk/clerk-react";
// import { useUser } from "@clerk/clerk-react";
// import { SignIn,} from "@clerk/clerk-react";
// import { useApproval } from '../states/ApprovalContext';





// const ClaimGift = () => {
  
//   const { isLoaded  } = useAuth();
//   const {  isSignedIn, user } = useUser();
//   const { isApproved} = useApproval();



  
  

 
//   // if (!isLoaded || !isSignedIn) {
//   //   return  null ;
//   // }





//   // if (!isLoaded || !userId) {
//   //   return null;
//   // }


//   // const { isLoaded, isSignedIn } = useAuth();

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   if (!isSignedIn) {
//     return (
// <div className="flex h-screen items-center justify-center">
//   {/* <p className=''>Please sign in to access this page.</p> */}
//   <SignIn />
// </div>

    
//     );
//   }


//   // const [user, setUser] = useState(

//   //   {
//   //     name: "",
//   //     email: "",

//   //   }
//   // )

//   // let name, value;
//   // const getUserData = (event) => {

//   //   name = event.target.name;
//   //   value = event.target.value;
//   //   setUser({ ...user, [name]: value });
//   // };

//   // const postData = async (e) => {

//   //   e.preventDefault();

//   //   const { name, email } = user;

//   //   if (name && email) {

//   //     const res = await fetch("https://myweb3gift-bd98e-default-rtdb.firebaseio.com/claimgift_tester.json",

//   //       {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json"
//   //         },

//   //         body: JSON.stringify({
//   //           name,
//   //           email,

//   //         })
//   //       }
//   //     );
//   //     if (res) {
//   //       setUser(
//   //         {
//   //           name: "",
//   //           email: "",

//   //         });

//   //       alert("We will contact you, Thankyou 🙂");
//   //     }

//   //   } else {
//   //     alert("Please fill all details");
//   //   }
//   // };






//   return (
//     <div className='  '>

//       <Nav01></Nav01>


//       <div className="bg-sky-950 h-[90px] w-screen"></div>



//       {/* <section className="  bg-cover bg-center max-h-screen relative ">
//         <img src={Thumbnail} className=' object-fit w-full h-screen  ' alt="My web3 gift Thumbnail " loading="lazy" />
//         <div className="flex absolute inset-0   flex-col backdrop-blur-xl bg-white/30 items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
//           <a href="./" className="flex items-center mb-6 text-3xl font-semibold text-gray-100 ">
//           </a>
//           <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
//                 Claim gift calendar
//               </h1>
//               <form className="space-y-4 md:space-y-6" method="POST">
//                 <div>
//                   <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
//                   <input type="text" name="name" value={user.name} onChange={getUserData} id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Jacob" required="" />
//                 </div>
//                 <div>
//                   <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
//                   <input type="email" name="email" value={user.email} onChange={getUserData} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
//                 </div>
//                 <button type="submit" onClick={postData} className="w-full text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">SUBMIT</button>

//               </form>
//             </div>
//           </div>
//         </div>
//       </section> */}








// {isApproved ? (
//         // Show this if the user is approved
//         <div className='h-screen flex flex-col justify-center items-center bg-gray-100'>
//           <div className='font-bold'>Hello, {user.firstName}</div>
//           <div className='flex flex-col items-center space-y-4'>
//             <Link to="/MyGifts">
//               <button className='bg-yellow-400 shadow-2xl text-yellow-600 text-white font-bold text-2xl px-7 py-3 hover:bg-yellow-500 rounded-xl'>
//                 MY GIFTS
//               </button>
//             </Link>
//             <Link to="/TransferedGifts">
//               <button className='bg-yellow-400 shadow-2xl text-yellow-600 text-white font-bold text-2xl px-7 py-3 hover:bg-yellow-500 rounded-xl'>
//                 SENT GIFTS
//               </button>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         // Show this if the user is still on the waitlist
//         <div className='h-screen flex flex-col justify-center items-center bg-gray-100'>
//           <div className='font-bold'>
//             You are still on the waitlist. Please stay tuned, and we will complete this process as soon as possible.
//           </div>
//           <div>
//             Thank you for your patience.
//           </div>
//         </div>
//       )}


// {/* <div className='h-screen flex flex-col justify-center items-center bg-gray-100'>

// <div className='font-bold '>Hello, {user.firstName}  </div>

// <div className='flex flex-col items-center space-y-4'>

//   <Link to="/MyGifts">  <button className='bg-yellow-400 shadow-2xl text-yellow-600 text-white  font-bold text-2xl px-7 py-3 hover:bg-yellow-500 rounded-xl'>
//   MY GIFTS
//   </button></Link>



//   <Link to="/TransferedGifts">   <button className='bg-yellow-400 shadow-2xl text-yellow-600 text-white font-bold text-2xl px-7 py-3 hover:bg-yellow-500 rounded-xl'>
//    SENT GIFTS
//   </button>  </Link>



// </div>

// </div> */}





//       {/* <div className='text-gray-100 text-center   max-sm:text-xl py-4 sm:text-3xl text-3xl mx-4  my-10'>

//         This beta test is exclusively for limited users, giving them access to crypto calendars and other rewards. Become a tester now.

//       </div> */}

//       <Footer></Footer>



//     </div>



//   )
// }

// export default ClaimGift


import React, { useEffect } from 'react';
import Nav01 from '../Components/Nav01';
import { EmailModal, Footer } from '../sections_landing';
import { Link } from 'react-router-dom';
import { useAuth } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { SignIn } from "@clerk/clerk-react";
import { useApproval } from '../states/ApprovalContext';
import LoadingSpinner from '../sections_landing/Loader';

const ClaimGift = () => {
  

  const { isLoaded  } = useAuth();
  const {  isSignedIn, user } = useUser();
  const { isApproved, setApproval } = useApproval();
  console.log('hello',user)



  useEffect(() => {
    const fetchUserData = async () => {
      if (isSignedIn) {
        try {

          const response = await fetch(`https://myweb3gift-bd98e-default-rtdb.firebaseio.com/users/${user.id}.json`);
          console.log(response)
          // const response = await fetch(`https://myweb3gift-bd98e-default-rtdb.firebaseio.com/submitemails/-NkJIn1tg7RhVEh-7-IF.json`);
          
          console.log(response)
          if (response.ok) {
            const data = await response.json();
            console.log('Fetch URL:', `https://myweb3gift-bd98e-default-rtdb.firebaseio.com/submitemails/${user.id}.json`);
          console.log('data',data)
         console.log(user.id)
    
         if (data && typeof data.approve !== 'undefined') {
          setApproval(data.approve);
        }
            console.log(isApproved)
          } else {
            console.error('Error fetching data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
  
    fetchUserData();
  }, [isSignedIn, user]);
  
  console.log("Outside useEffect:", isApproved);

  if (!isLoaded) {
    return <div><LoadingSpinner/></div>;
  }


  if (!isSignedIn) {
    return (
      <div className="flex h-screen items-center justify-center">
        <SignIn />
      </div>
    );
  }

  return (
    <div className=''>
      <Nav01></Nav01>
      <div className="bg-sky-950 h-[90px] w-screen"></div>

      {isApproved === undefined ? (
        // Render the form if isApproved is undefined
        <section className="bg-cover bg-center max-h-screen relative">
          {/* Your form JSX goes here */}
          <EmailModal label=" GET BENEFITS" className="block w-full   sm:w-auto rounded px-6 py-2 text-sm  bg-slate-100 text-yellow-500 shadow hover:bg-yellow-600 focus:outline-none focus:ring active:text-red-500 dark:bg-yellow-500 dark:text-white" />
        </section>
      ) : (
        // Render content based on isApproved value
        isApproved ? (
          // Show this if the user is approved
          <div className='h-screen flex flex-col justify-center items-center bg-gray-100'>
            <div className='font-bold'>Hello, {user.firstName}</div>
            <div className='flex flex-col items-center space-y-4'>
              <Link to="/MyGifts">
                <button className='bg-yellow-400 shadow-2xl text-yellow-600 text-white font-bold text-2xl px-7 py-3 hover:bg-yellow-500 rounded-xl'>
                  MY GIFTS
                </button>
              </Link>
              <Link to="/TransferedGifts">
                <button className='bg-yellow-400 shadow-2xl text-yellow-600 text-white font-bold text-2xl px-7 py-3 hover:bg-yellow-500 rounded-xl'>
                  SENT GIFTS
                </button>
              </Link>
            </div>
          </div>
        ) : (
          // Show this if the user is still on the waitlist
          <div className='h-screen flex flex-col justify-center items-center bg-gray-100'>
            <div className='font-bold'>
              You are still on the waitlist. Please stay tuned, and we will complete this process as soon as possible.
            </div>
            <div>
              Thank you for your patience.
            </div>
          </div>
        )
      )}

      <Footer></Footer>
    </div>
  );
};

export default ClaimGift;
