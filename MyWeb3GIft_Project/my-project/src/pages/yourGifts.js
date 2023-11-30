
// import React, { useEffect, useState } from 'react';
// import { getDocs, collection, query, where, getFirestore } from 'firebase/firestore';
// import { useUser } from '@clerk/clerk-react';

// const YourGifts = () => {
//   const { user } = useUser();
//   const [gifts, setGifts] = useState([]);
//   const db = getFirestore();

//   useEffect(() => {
//     console.log('user:', user);
//     if (!user || !user.primaryEmailAddress) {
//       console.log('User or primaryEmailAddress is not defined.');
//       return;
//     }
  
//     const userGiftsRef = collection(db, 'users');
//     const receiverEmail = user.primaryEmailAddress.emailAddress;
  
//     console.log('Receiver Email:', receiverEmail);
  
//     const q = query(userGiftsRef, where('receiverEmail', '==', "ashispandey138c@gmail.com"));
//     const fetchGifts = async () => {
//       try {
//         const querySnapshot = await getDocs(q);
    
//         console.log('Query Snapshot:', querySnapshot);
    
//         const fetchedGifts = [];
    
//         // Use map and Promise.all to handle asynchronous calls inside the loop
//         await Promise.all(
//           querySnapshot.docs.map(async (doc) => {
//             const giftRef = collection(doc.ref, 'gifts');
//             const giftQuerySnapshot = await getDocs(giftRef);
    
//             giftQuerySnapshot.forEach((giftDoc) => {
//               fetchedGifts.push({ id: giftDoc.id, ...giftDoc.data() });
//             });
//           })
//         );
    
//         console.log("Receiver's gifts: ", fetchedGifts);
//         setGifts(fetchedGifts);
//       } catch (error) {
//         console.error('Error fetching gifts: ', error);
//       }
//     };
    
  
//     fetchGifts();
//   }, [user, db]);
  
//   return (
//     <div>
//       <h2>Your Gifts</h2>
//       <ul>
//         {gifts.map((gift) => (
//           <li key={gift.id}>{/* Render your gift details here */}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default YourGifts;


import React, { useEffect, useState } from 'react';
import { getDocs,  query, where, getFirestore, collectionGroup } from 'firebase/firestore';
import { useUser } from '@clerk/clerk-react';

const YourGifts = () => {
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
    const receiverEmail = 'ashispandey138c@gmail.com';
    console.log('Receiver Email:', receiverEmail);
  
    fetchGiftsByReceiverEmail(receiverEmail);
  }, [user]);

  return (
    <div>
      <h2>Your Gifts</h2>
      <ul>
        {gifts.map((gift) => (
          <li key={gift.id}>
            {/* Render your gift details here */}
            <p>{`Sender: ${gift.senderName}, Receiver: ${gift.receiverName}, Greeting: ${gift.greeting}, Date: ${gift.date}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourGifts;



