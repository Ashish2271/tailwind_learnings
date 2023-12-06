// import React, { useEffect, useState } from 'react'
// import Nav01 from '../Components/Nav01'
// import { Footer } from '../sections_landing'
// import { Link } from 'react-router-dom'
// import { getDocs, collection, query, where, getFirestore, collectionGroup } from 'firebase/firestore';
// import { useUser } from '@clerk/clerk-react';

// const MyGifts = () => {

//   const { user } = useUser();
//   const [gifts, setGifts] = useState([]);
//   const db = getFirestore();

//   const fetchGiftsByReceiverEmail = async (receiverEmail) => {
//     try {
     
  
//       // Reference to the "gifts" collection group
//       const giftsCollectionGroupRef = collectionGroup(db, 'gifts');
  
//       // Query to filter gifts based on receiver's email
//       const query1 = query(giftsCollectionGroupRef, where('receiverEmail', '==', receiverEmail));
  
//       // Fetch documents that match the query
//       const querySnapshot = await getDocs(query1);
  
//       const fetchedGifts = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
  
//       console.log("Receiver's gifts: ", fetchedGifts);
//       setGifts(fetchedGifts);
//     } catch (error) {
//       console.error('Error fetching gifts by receiver email:', error);
//     }
//   };

//   useEffect(() => {
//     if (!user || !user.primaryEmailAddress) {
//       console.log('User or primaryEmailAddress is not defined.');
//       return;
//     }
  
//     // const receiverEmail = user.primaryEmailAddress.emailAddress;
//     const receiverEmail = 'ashispandey138c@gmail.com';
//     console.log('Receiver Email:', receiverEmail);
  
//     fetchGiftsByReceiverEmail(receiverEmail);
//   }, [user]);

//   const value = 4;

// // const ReceivedGift = () =>
// // {
// //   return value;
// // }



//   return (
//     <>
//       <Nav01></Nav01>

//       <div className="bg-sky-950 h-[90px] w-screen"></div>


//       <div className="relative mx-auto py-10 flex  bg-fixed flex-col items-center gap-9 rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/rose-gold-birthday-3d-ribbons-greeting-card-beige-background_53876-129030.jpg?w=1380&t=st=1701182770~exp=1701183370~hmac=217ddf3161c0f9dfb431d4f46cc89f38f8187548de87ef64302b2acb85056019')", }} >

//     <div className='absolute top-0 left-2 font-extrabold text-3xl text-gray-800 '>Received Gift : {value}</div>

// <OpenGiftCard/>

// <OpenGiftCard/>

// <OpenGiftCard/>



//       </div>




//       <Footer></Footer>

//     </>
//   )
// }








// const OpenGiftCard = () => {
//   return (
//     <div>



// <div class="my-12 mb-8 flex flex-col  items-center justify-between gap-14">
//           {/* <!-- Card 1 --> */}
//           <div class="flex flex-col items-center justify-items-center gap-4">
//             <div class=""><img src="https://placekitten.com/100/100" alt="Card 1" class="h-20 w-20 rounded-full object-cover" /></div>

//             <div class="rounded-3xl bg-yellow-400 px-16 py-2 text-gray-50 text-4xl font-semibold">
//               <span>Michiki</span>
//             </div>

//             <div class="h-[45vh] max-w-[900px] rounded-3xl bg-pink-300 px-4 py-14 sm:w-[80vw] sm:px-10 md:w-[60vw] md:px-20 lg:w-[60vw] lg:px-20 xl:w-[60vw] xl:px-20">
//               <div class="relative flex max-w-3xl   flex-grow  items-center gap-5 overflow-hidden rounded-3xl bg-sky-950 p-0 pl-16 text-white shadow-md">
//                 <div class="relative flex flex-grow flex-col">
//                   <h2 class="mb-2 text-xl font-semibold text-white">Crypto Advent Calendar</h2>
//                   <p class="mb-4 py-9 pb-20 text-white"></p>

//                   <Link to="/ReceiverGiftCard">
//                   <button class="absolute bottom-0 left-1 rounded-3xl bg-yellow-500 px-6 py-2 font-bold text-white">Open Gift</button>
//                   </Link>
               
//                 </div>
//                 <button class="absolute left-80 top-24 rounded-2xl bg-white px-4 py-1 font-bold text-yellow-500">Wrap</button>
//                 <img src="https://placekitten.com/100/100" alt="Card 1" class="h-60 w-96 object-cover" />
//               </div>

//               <div class="py-3 text-center font-semibold text-gray-600">
//                 <span class="text-center"> Click On Gift To Unwrap</span>
//               </div>
//             </div>
//           </div>

//           {/* <!-- Spacer --> */}
//           <div class="w-8"></div>
        
//         </div>



//     </div>
//   )
// }







// export default MyGifts



import React, { useEffect, useState } from 'react'
import Nav01 from '../Components/Nav01'
import { Footer } from '../sections_landing'
import { Link } from 'react-router-dom'
import { getDocs,  query, where, getFirestore, collectionGroup } from 'firebase/firestore';
import { useUser } from '@clerk/clerk-react';
// import ReceiverGiftCard from './ReceiverGiftCard';
// ... (other imports)

const MyGifts = () => {
 const { user } = useUser();
  const [gifts, setGifts] = useState([]);
  const db = getFirestore();

  const fetchGiftsByReceiverEmail = async (receiverEmail) => {
    try {
     
  
      // Reference to the "gifts" collection group
      const giftsCollectionGroupRef = collectionGroup(db, 'gifts');
  
      // Query to filter gifts based on receiver's email
      const query1 = query(giftsCollectionGroupRef, where('receiverEmail', '==', receiverEmail));
  
      // Fetch documents that match the query
      const querySnapshot = await getDocs(query1);
  
      const fetchedGifts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      console.log("Receiver's gifts: ", fetchedGifts);
      setGifts(fetchedGifts);
    } catch (error) {
      console.error('Error fetching gifts by receiver email:', error);
    }
  };

  useEffect(() => {
    if (!user || !user.primaryEmailAddress) {
      console.log('User or primaryEmailAddress is not defined.');
      return;
    }
  
    // const receiverEmail = user.primaryEmailAddress.emailAddress;
    const receiverEmail =  user.primaryEmailAddress.emailAddress;
    console.log('Receiver Email:', receiverEmail);
  
    fetchGiftsByReceiverEmail(receiverEmail);
  }, [user]);

  

// const ReceivedGift = () =>
// {
//   return value;
// }

  // ... (existing code)

  return (
    <>
      <Nav01></Nav01>
      <div className="bg-sky-950 h-[90px] w-screen"></div>
      <div className="relative mx-auto py-10 flex min-h-screen  bg-fixed flex-col items-center gap-9 rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/rose-gold-birthday-3d-ribbons-greeting-card-beige-background_53876-129030.jpg?w=1380&t=st=1701182770~exp=1701183370~hmac=217ddf3161c0f9dfb431d4f46cc89f38f8187548de87ef64302b2acb85056019')", }}>
        <div className='absolute top-0 left-2 font-extrabold text-3xl text-gray-800 '>Received Gift :{gifts.length} </div>
        {gifts.map((gift) => (
          <OpenGiftCard key={gift.id} gift={gift} />
        ))}
      </div>
      <Footer></Footer>
    </>
  )
}

const OpenGiftCard = ({ gift }) => {
  const { senderImage, greeting, image, senderName,giftDetails } = gift;

  return (
    <div class="my-12 mb-8 flex flex-col items-center justify-between gap-14">
      <div class="flex flex-col items-center justify-items-center gap-4">
        <div class=""><img src={senderImage} alt="Sender" class="h-20 w-20 rounded-full object-cover" /></div>
        <div class="rounded-3xl bg-yellow-400 px-16 py-2 text-gray-50 text-4xl font-semibold">
          <span>{senderName}</span>
        </div>
        <div class="h-[45vh] max-w-[900px] rounded-3xl bg-pink-300 px-4 py-14 sm:w-[80vw] sm:px-10 md:w-[60vw] md:px-20 lg:w-[60vw] lg:px-20 xl:w-[60vw] xl:px-20">
          <div class="relative flex max-w-3xl flex-grow items-center gap-5 overflow-hidden rounded-3xl bg-sky-950 p-0 pl-16 text-white shadow-md">
            <div class="relative flex flex-grow flex-col">
              {/* <h2 class="mb-2 text-xl font-semibold text-white">{giftDetails}</h2> */}
              <h2 className="mb-2 text-xl font-semibold text-white">
  {giftDetails.split(' ').join(' ')}
</h2>

              <p class="mb-4 py-9 pb-20 text-white">{greeting}</p>
              <Link to={`/giftid/${gift.id}`}>
                <button class="absolute bottom-0 left-1 rounded-3xl bg-yellow-500 px-6 py-2 font-bold text-white">Open Gift</button>
              </Link>
            </div>
            {/* <div><ReceiverGiftCard gift={gift} /></div> */}
            <button class="absolute left-80 top-24 rounded-2xl bg-white px-4 py-1 font-bold text-yellow-500">Wrap</button>
            <img src={image} alt="Gift" class="h-60 w-96 object-cover" />
          </div>
          <div class="py-3 text-center font-semibold text-gray-600">
            <span class="text-center"> Click On Gift To Unwrap</span>
          </div>
        </div>
      </div>
      <div class="w-8"></div>
    </div>
  );
}

export default MyGifts;
