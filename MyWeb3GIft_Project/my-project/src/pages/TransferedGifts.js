// import React from 'react'
// import Nav01 from '../Components/Nav01'
// import { Footer } from '../sections_landing'
// import { Link } from 'react-router-dom'
// import { useUser } from '@clerk/clerk-react'
// import { collection, getDocs, getFirestore } from 'firebase/firestore'


// const TransferedGifts = () => {
//  const {user} = useUser()
//    const senderUserId = user ? user.id : null
//   const fetchUserGifts = async (senderUserId) => {
//     try {
//       const db = getFirestore();
      
//       // Reference to the user's gifts collection
//       const userGiftsRef = collection(db, `users/${senderUserId}/gifts`);
  
//       // Fetch documents from the gifts subcollection
//       const querySnapshot = await getDocs(userGiftsRef);
  
//       querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//       });
//     } catch (error) {
//       console.error("Error fetching user gifts:", error);
//     }
//   };
  
//   // Example usage
  
  
//   // Call the function to fetch user gifts
//   fetchUserGifts(senderUserId);



//   const value = 4; //show me number of gifts
// console.log()
//   // const ReceivedGift = () =>
//   // {
//   //   return value;
//   // }




//   return (
//     <>

//       <Nav01></Nav01>
//       <div className="bg-sky-950 h-[90px] w-screen"></div>



//       <div className='min-h-screen'>




//         <div className="relative mx-auto py-10 flex min-h-screen  bg-fixed flex-col items-center gap-9 rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/rose-gold-birthday-3d-ribbons-greeting-card-beige-background_53876-129030.jpg?w=1380&t=st=1701182770~exp=1701183370~hmac=217ddf3161c0f9dfb431d4f46cc89f38f8187548de87ef64302b2acb85056019')", }} >

//           <div className='absolute top-0 left-2 font-extrabold text-3xl text-gray-800 '>Sent Gift : {value}</div>



//           <div className="flex flex-row gap-28 my-20 
//  flex-wrap justify-center align-middle items-center justify-items-center  max-md:flex-col " >




//             < TransferedGiftsCard />


//             < TransferedGiftsCard />


//             < TransferedGiftsCard />


//             < TransferedGiftsCard />




//           </div>



//         </div>


//       </div>



//       <Footer></Footer>
//     </>
//   )
// }





// const TransferedGiftsCard = () => {
//   return (
//     <div>





//       <div className="border-1 min-h-[50px] max-w-[400px] overflow-hidden rounded-3xl border border-gray-300 py-4 shadow-2xl hover:scale-105">
//         <div className="flex flex-col items-center justify-center overflow-hidden">
//           <img src="https://img.freepik.com/free-photo/worldface-iranian-woman-white-background_53876-146400.jpg?w=826&t=st=1701252104~exp=1701252704~hmac=77218d0510273d50d3cae67b73d56bfa264670bd1b5ec4f1366d43be376798a2" className="h-20 w-20 rounded-full" alt="" />

//           <div className="py-3 text-2xl font-bold text-gray-500"><span>Name- Matka Kulfi</span></div>

//           <img src="https://img.freepik.com/free-photo/nice-christmas-packages-white-table_24972-2489.jpg?t=st=1701249186~exp=1701252786~hmac=614fa55877d32b74eaeea723d81eac7b5a01af730bae73598b03e576289bebf6&w=1380" className="h-[410px] w-[400px] py-7" alt="" />


//           <span className="font-bold text-3xl pb-9">Crypto Advent Calendar</span>



// <Link to="/CreateGiftCard  ">    
//           <button className="rounded-full bg-yellow-400 px-9 py-4 text-3xl font-bold text-white hover:bg-yellow-500">Open</button>  </Link>

//         </div>
//       </div>







//     </div>
//   )
// }




















// export default TransferedGifts


// import React, { useEffect, useState } from 'react';
// import Nav01 from '../Components/Nav01';
// import { Footer } from '../sections_landing';
// import { Link } from 'react-router-dom';
// import { useUser } from '@clerk/clerk-react';
// import { collection, getDocs, getFirestore } from 'firebase/firestore';

// const TransferedGifts = () => {
//   const { user } = useUser();
//   const senderUserId = user ? user.id : null;
//   const [gifts, setGifts] = useState([]);

//   const fetchUserGifts = async (senderUserId) => {
//     try {
//       const db = getFirestore();

//       // Reference to the user's gifts collection
//       const userGiftsRef = collection(db, `users/${senderUserId}/gifts`);

//       // Fetch documents from the gifts subcollection
//       const querySnapshot = await getDocs(userGiftsRef);

//       const giftList = [];
//       querySnapshot.forEach((doc) => {
//         giftList.push({ id: doc.id, ...doc.data() });
//       });

//       setGifts(giftList);
//     } catch (error) {
//       console.error('Error fetching user gifts:', error);
//     }
//   };

//   useEffect(() => {
//     // Call the function to fetch user gifts
//     fetchUserGifts(senderUserId);
//   }, [senderUserId]);

//   return (
//     <>
//       <Nav01 />
//       <div className="bg-sky-950 h-[90px] w-screen"></div>
//       <div className="min-h-screen">
//         <div
//           className="relative mx-auto py-10 flex min-h-screen bg-fixed flex-col items-center gap-9 rounded-3xl bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://img.freepik.com/free-photo/rose-gold-birthday-3d-ribbons-greeting-card-beige-background_53876-129030.jpg?w=1380&t=st=1701182770~exp=1701183370~hmac=217ddf3161c0f9dfb431d4f46cc89f38f8187548de87ef64302b2acb85056019')",
//           }}
//         >
//           <div className='absolute top-0 left-2 font-extrabold text-3xl text-gray-800 '>Sent Gift : {gifts.length}</div>
//           <div className="flex flex-row gap-28 my-20 flex-wrap justify-center align-middle items-center justify-items-center max-md:flex-col">
//             {gifts.map((gift) => (
//               <TransferedGiftsCard key={gift.id} gift={gift} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// const TransferedGiftsCard = ({ gift }) => {
//   const { date, greeting, receiverEmail, receiverName, senderEmail, senderName } = gift;

//   return (
//     <div>
//       <div className="border-1 min-h-[50px] max-w-[400px] overflow-hidden rounded-3xl border border-gray-300 py-4 shadow-2xl hover:scale-105">
//         <div className="flex flex-col items-center justify-center overflow-hidden">
//           {/* Display other gift information here */}
//           <div className="py-3 text-2xl font-bold text-gray-500">
//             <span>Sender: {senderName}</span>
//           </div>
//           <div className="py-3 text-2xl font-bold text-gray-500">
//             <span>Receiver: {receiverName}</span>
//           </div>
//           <div className="py-3 text-2xl font-bold text-gray-500">
//             <span>Date: {date}</span>
//           </div>
//           <div className="py-3 text-2xl font-bold text-gray-500">
//             <span>Greeting: {greeting}</span>
//           </div>
//           <Link to="/CreateGiftCard">
//             <button className="rounded-full bg-yellow-400 px-9 py-4 text-3xl font-bold text-white hover:bg-yellow-500">
//               Open
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TransferedGifts;


import React, { useEffect, useState } from 'react';
import Nav01 from '../Components/Nav01';
import { Footer } from '../sections_landing';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const TransferedGifts = () => {
  const { user } = useUser();
  const senderUserId = user ? user.id : null;
  const [gifts, setGifts] = useState([]);

  const fetchUserGifts = async (senderUserId) => {
    try {
      const db = getFirestore();

      // Reference to the user's gifts collection
      const userGiftsRef = collection(db, `users/${senderUserId}/gifts`);

      // Fetch documents from the gifts subcollection
      const querySnapshot = await getDocs(userGiftsRef);

      const giftList = [];
      querySnapshot.forEach((doc) => {
        giftList.push({ id: doc.id, ...doc.data() });
      });

      setGifts(giftList);
    } catch (error) {
      console.error('Error fetching user gifts:', error);
    }
  };

  useEffect(() => {
    // Call the function to fetch user gifts
    fetchUserGifts(senderUserId);
  }, [senderUserId]);

  return (
    <>
      <Nav01 />
      <div className="bg-sky-950 h-[90px] w-screen"></div>
      <div className="min-h-screen">
        <div
          className="relative mx-auto py-10 flex min-h-screen bg-fixed flex-col items-center gap-9 rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/rose-gold-birthday-3d-ribbons-greeting-card-beige-background_53876-129030.jpg?w=1380&t=st=1701182770~exp=1701183370~hmac=217ddf3161c0f9dfb431d4f46cc89f38f8187548de87ef64302b2acb85056019')",
          }}
        >
          <div className='absolute top-0 left-2 font-extrabold text-3xl text-gray-800 '>Sent Gift : {gifts.length}</div>
          <div className="flex flex-row gap-28 my-20 flex-wrap justify-center align-middle items-center justify-items-center max-md:flex-col">
            {gifts.map((gift) => (
              <TransferedGiftsCard key={gift.id} gift={gift} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const TransferedGiftsCard = ({ gift }) => {
  // Assuming that the 'gift' object has properties like 'date', 'greeting', 'receiverEmail', 'receiverName', 'senderEmail', and 'senderName'
  // const { date, greeting, receiverEmail, receiverName, senderEmail, senderName , image ,senderImage } = gift;
  const {  greeting,  receiverName,  image ,senderImage } = gift;
  return (
    <div>
      <div className="border-1 min-h-[50px] max-w-[400px] overflow-hidden rounded-3xl border border-gray-300 py-4 shadow-2xl hover:scale-105">
        <div className="flex flex-col items-center justify-center overflow-hidden">
        {senderImage && (
            <img src={senderImage} className="h-20 w-20 rounded-full" alt="" />
          )} 
         {/* <img src="https://img.freepik.com/free-photo/worldface-iranian-woman-white-background_53876-146400.jpg?w=826&t=st=1701252104~exp=1701252704~hmac=77218d0510273d50d3cae67b73d56bfa264670bd1b5ec4f1366d43be376798a2" className="h-20 w-20 rounded-full" alt="" /> */}
          <div className="py-3 text-2xl font-bold text-gray-500"><span>Name- {receiverName}</span></div>
          {image && (
            <img src={image} className="h-[410px] w-[400px] py-7" alt="" />
          )} 

{/* <img src="https://img.freepik.com/free-photo/nice-christmas-packages-white-table_24972-2489.jpg?t=st=1701249186~exp=1701252786~hmac=614fa55877d32b74eaeea723d81eac7b5a01af730bae73598b03e576289bebf6&w=1380" className="h-[410px] w-[400px] py-7" alt="" /> */}
          <span className="font-bold text-3xl pb-9">{greeting}</span>
          <Link to="/CreateGiftCard">
            <button className="rounded-full bg-yellow-400 px-9 py-4 text-3xl font-bold text-white hover:bg-yellow-500">Open</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransferedGifts;
