// Import necessary Clerk and Firebase functions
// import { useUser } from "@clerk/clerk-react";
// import { useState } from "react";
import {  collectionGroup, getDocs, getFirestore, query, where } from "firebase/firestore"; 

// import { db } from "../firebase";

// Your component...
function RegistrationForm() {
  // const db = getFirestore()
  // const fetchUserData = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db, "users"));
  
  //     console.log("Number of documents:", querySnapshot.size);
  
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  //     });
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };
  
  // fetchUserData();
  //  const {user} = useUser()
  //  const senderUserId = user ? user.id : null
  // const fetchUserGifts = async (senderUserId) => {
  //   try {
  //     const db = getFirestore();
      
  //     // Reference to the user's gifts collection
  //     const userGiftsRef = collection(db, `users/${senderUserId}/gifts`);
  
  //     // Fetch documents from the gifts subcollection
  //     const querySnapshot = await getDocs(userGiftsRef);
  
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  //     });
  //   } catch (error) {
  //     console.error("Error fetching user gifts:", error);
  //   }
  // };
  
  // Example usage
  
  
  // Call the function to fetch user gifts
  // fetchUserGifts(senderUserId);
  // const fetchAllGifts = async () => {
  //   try {
  //     const db = getFirestore();
  
  //     // Reference to the "gifts" collection group
  //     const giftsCollectionGroupRef = collectionGroup(db, 'gifts');
  
  //     // Fetch documents from the "gifts" collection group
  //     const querySnapshot = await getDocs(giftsCollectionGroupRef);
  
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  //     });
  //   } catch (error) {
  //     console.error('Error fetching all gifts:', error);
  //   }
  // };
  
  // // Example usage
  // fetchAllGifts();
  
  const fetchGiftsByReceiverEmail = async (receiverEmail) => {
    try {
      const db = getFirestore();
  
      // Reference to the "gifts" collection group
      const giftsCollectionGroupRef = collectionGroup(db, 'gifts');
  
      // Query to filter gifts based on receiver's email
      const query1 = query (giftsCollectionGroupRef, where('receiverEmail', '==', receiverEmail));
  
      // Fetch documents that match the query
      const querySnapshot = await getDocs(query1);
  
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    } catch (error) {
      console.error('Error fetching gifts by receiver email:', error);
    }
  };
  
  // Example usage: Replace 'receiver@example.com' with the actual receiver's email
  const receiverEmail = 'ashispandey138c@gmail.com';
  fetchGiftsByReceiverEmail(receiverEmail);
  

  return (
    // <form onSubmit={handleFormSubmit}>
    //   <label>
    //     Name:
    //     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    //   </label>
    //   <br />
    //   <button type="submit">Save Details</button>
    // </form>
    <div>hello</div>
  );
}

export default RegistrationForm;
