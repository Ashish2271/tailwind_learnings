// import { useState, useEffect } from 'react';
// import { getDocs, collection, collectionGroup, query, where, getFirestore } from 'firebase/firestore';
// import { useParams } from 'react-router-dom';
// import ReceiverGiftCard from './ReceiverGiftCard';

// const GiftById = () => {
//   const params = useParams();
//   const [gift, setGift] = useState(null);
//   const db = getFirestore();

//   const fetchGiftById = async (giftId) => {
//     try {
//       // Reference to the "gifts" collection group
//       const giftsCollectionGroupRef = collectionGroup(db, 'gifts');

//       // Query to filter gifts based on giftId
//       const query1 = query(giftsCollectionGroupRef, where('giftid', '==', giftId));

//       // Fetch documents that match the query
//       const querySnapshot = await getDocs(query1);

//       if (!querySnapshot.empty) {
//         const doc = querySnapshot.docs[0];
//         setGift({
//           id: doc.id,
//           ...doc.data(),
//         });
//       } else {
//         console.log('No matching document found for giftId:', giftId);
//         // Handle the case where no document is found with the given giftId
//       }
//     } catch (error) {
//       console.error('Error fetching gift by ID:', error);
//     }
//   };

//   useEffect(() => {
//     if (!params.id) {
//       console.log('Gift ID is not defined.');
//       return;
//     }

//     fetchGiftById(params.id);
//   }, [params.id]);

//   return (
//     <div>
//       {gift ? <ReceiverGiftCard gift={gift} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default GiftById;





import { useState, useEffect } from 'react';
import { getDocs, collectionGroup, query, where, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import ReceiverGiftCard from './ReceiverGiftCard';
import { useUser } from '@clerk/clerk-react';
import LoadingSpinner from '../sections_landing/Loader';

const GiftById = () => {
  const params = useParams();
  const { user } = useUser();
  const [giftById, setGiftById] = useState(null);
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

      // Find the gift with the matching params.id
      const selectedGift = fetchedGifts.find((gift) => gift.id === params.id);

      setGiftById(selectedGift);
    } catch (error) {
      console.error('Error fetching gifts by receiver email:', error);
    }
  };

  useEffect(() => {
    if (!user || !user.primaryEmailAddress) {
      console.log('User or primaryEmailAddress is not defined.');
      return;
    }


    // 'ashispandey138c@gmail.com';
    const receiverEmail =  user.primaryEmailAddress.emailAddress;
    console.log('Receiver Email:', receiverEmail);

    fetchGiftsByReceiverEmail(receiverEmail);
  }, [user, params.id]);

  return (
    <div>
      {giftById ? <ReceiverGiftCard gift={giftById} /> : <p><LoadingSpinner/></p>}
    </div>
  );
};

export default GiftById;
