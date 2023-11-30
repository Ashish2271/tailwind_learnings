// // CalendarGiftForm.js

// import React, { useState } from 'react';
// import Nav01 from '../Components/Nav01';
// import { Footer } from '../sections_landing';
// // import { useAuth, useUser } from '@clerk/clerk-react';
// import { useApproval } from '../states/ApprovalContext';
// import { Link } from 'react-router-dom';



// const CalendarGiftForm = () => {



//     const { isApproved } = useApproval();
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       date: '',
//       receiverName: '',
//       receiverEmail: '',
//       greeting: '',
//       agree: false,
//     });
  
//     const handleInputChange = (e) => {
//       const { name, value, type, checked } = e.target;
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: type === 'checkbox' ? checked : value,
//       }));
//     };
  
//     if (isApproved === false) {
//       return 'loading';
//     }

//     return (

//         <>

//             <Nav01></Nav01>

//             <div className="bg-sky-950 h-[90px] w-screen"></div>





//             <div class="flex min-h-screen flex-row content-center my-11 items-center justify-items-center">
//                 <div class="mx-auto my-auto flex min-h-[90vh] overflow-hidden min-w-[95vw] flex-col items-center gap-9 rounded-3xl bg-yellow-100">
//                     <div class=" ">
//                         <img class="max-h-80 min-w-[95vw] overflow-hidden object-cover " src="https://img.freepik.com/free-photo/top-view-calendar-concept-bags-arrangement_23-2149758824.jpg?w=1380&t=st=1701160272~exp=1701160872~hmac=2485584478953fde0515ab1ba1066fe132e608ad41f1ec6a1787070e8e480480" width="" alt="" />
//                     </div>





//                     <div class="grid grid-cols-2 max-md:grid-cols-1 max-md:justify-items-center  gap-6">
//                         <div class="flex md:min-w-[500px] flex-col">
//                             <label class="mx-12 my-2 text-lg font-bold text-gray-500">Enter Your Name</label>
//                             {/* <input class="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2" placeholder="Arpit Singh" type="text" name="name" id="" /> */}
//                             <input
//           className="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2"
//           placeholder="Arpit Singh"
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//                             <label class="mx-12 my-2 text-lg font-bold text-gray-500">Enter Your Email Address</label>
//                             <input class="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2" placeholder="gifter@myweb3gift.com" type="email" name="email" id="" />
//                             <label class="mx-12 my-2 text-lg font-bold text-gray-500">Date of Sharing</label>
//                             <input class="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2 font-bold text-gray-400" type="date" name="name" id="" />
//                         </div>

//                         <div class="flex md:min-w-[500px] flex-col">
//                             <label class="mx-12 my-2 text-lg font-bold text-gray-500">Enter Gift Receiver Name</label>
//                             <input class="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2" placeholder="Manisha" type="text" name="name" id="" />

//                             <label class="mx-12 my-2 text-lg font-bold text-gray-500">Enter Gift Receiver Email Address</label>
//                             <input class="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2" placeholder="receiver@myweb3gift.com" type="email" name="email" id="" />
//                             <label class="mx-12 my-2 text-lg font-bold text-gray-500">Short Greeting</label>

//                             <textarea class="mx-11 min-h-[150px] max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2 text-gray-400 hover:text-gray-700" aria-placeholder="">
//                                 Dear Manisha,
//                                 I'm so lucky to get another year around the sun with you, Happy birthday to the love of my life, I'm so excited to celebrate my favorite person today.
//                             </textarea>
//                         </div>
//                     </div>

//                     <div class="items-center mx-4 text-center ">
//                         {/* <input class="font-extrabold focus:ring-2" type="checkbox" name="agree" id="agree" /> */}
//                         <input
//           className="font-extrabold focus:ring-2"
//           type="checkbox"
//           name="agree"
//           id="agree"
//           checked={formData.agree}
//           onChange={handleInputChange}
//         />
//                         <span class=" ">I agree that I know this person, please send this Calender to this email addreass</span>
//                     </div>



//                     <Link to={{ pathname: '/CreateGiftCard', state: formData }} > <button class="rounded-3xl items-center mx-auto bg-yellow-300 px-9  my-11 py-2 text-xl font-bold text-white hover:bg-yellow-400 focus:ring-2">Submit</button>
//                     </Link>



//                 </div>
//             </div>

//             <Footer></Footer>
//         </>


//     );
// };

// export default CalendarGiftForm;

// CalendarGiftForm.js

import React from 'react';
import Nav01 from '../Components/Nav01';
import { Footer } from '../sections_landing';
import { useApproval } from '../states/ApprovalContext';
import { Link } from 'react-router-dom';
import { useFormData } from '../states/FormDataContext';
import LoadingSpinner from '../sections_landing/Loader';

const CalendarGiftForm = () => {
  const { isApproved } = useApproval();
  const { formData, setFormData } = useFormData();


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (isApproved === false) {
    return <LoadingSpinner/>;
  }

  return (
    <>
      <Nav01 />

      <div className="bg-sky-950 h-[90px] w-screen"></div>

      <div class="flex min-h-screen flex-row content-center my-11 items-center justify-items-center">
        <div class="mx-auto my-auto flex min-h-[90vh] overflow-hidden min-w-[95vw] flex-col items-center gap-9 rounded-3xl bg-yellow-100">
          <div class=" ">
            <img
              class="max-h-80 min-w-[95vw] overflow-hidden object-cover "
              src="https://img.freepik.com/free-photo/top-view-calendar-concept-bags-arrangement_23-2149758824.jpg?w=1380&t=st=1701160272~exp=1701160872~hmac=2485584478953fde0515ab1ba1066fe132e608ad41f1ec6a1787070e8e480480"
              width=""
              alt=""
            />
          </div>

          <div class="grid grid-cols-2 max-md:grid-cols-1 max-md:justify-items-center  gap-6">
            <div class="flex md:min-w-[500px] flex-col">
              <label class="mx-12 my-2 text-lg font-bold text-gray-500">Enter Your Name</label>
              <input
                class="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2"
                placeholder="Arpit Singh"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />

              <label class="mx-12 my-2 text-lg font-bold text-gray-500">Enter Your Email Address</label>
              <input
                class="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2"
                placeholder="gifter@myweb3gift.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label class="mx-12 my-2 text-lg font-bold text-gray-500">Date of Sharing</label>
              <input
                class="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2 font-bold text-gray-400"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>

            <div class="flex md:min-w-[500px] flex-col">
              <label class="mx-12 my-2 text-lg font-bold text-gray-500">Enter Gift Receiver Name</label>
              <input
                class="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2"
                placeholder="Manisha"
                type="text"
                name="receiverName"
                value={formData.receiverName}
                onChange={handleInputChange}
              />

              <label class="mx-12 my-2 text-lg font-bold text-gray-500">Enter Gift Receiver Email Address</label>
              <input
                class="mx-11 max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2"
                placeholder="receiver@myweb3gift.com"
                type="email"
                name="receiverEmail"
                value={formData.receiverEmail}
                onChange={handleInputChange}
              />
              <label class="mx-12 my-2 text-lg font-bold text-gray-500">Short Greeting</label>

              <textarea
                class="mx-11 min-h-[150px] max-w-xs rounded-3xl border-2 border-solid border-gray-400 bg-slate-50 px-4 py-2 text-gray-400 hover:text-gray-700"
                aria-placeholder=""
                name="greeting"
                value={formData.greeting}
                onChange={handleInputChange}
              >
                Dear Manisha, I'm so lucky to get another year around the sun with you, Happy birthday to the love of my life, I'm so excited to celebrate my favorite person today.
              </textarea>
            </div>
          </div>

          <div class="items-center mx-4 text-center ">
            <input
              class="font-extrabold focus:ring-2"
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleInputChange}
            />
            <span class=" ">I agree that I know this person, please send this Calendar to this email address</span>
          </div>

          <Link to= "/CreateGiftCard">
            <button class="rounded-3xl items-center mx-auto bg-yellow-300 px-9  my-11 py-2 text-xl font-bold text-white hover:bg-yellow-400 focus:ring-2">Submit</button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CalendarGiftForm;
