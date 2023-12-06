import { useUser } from '@clerk/clerk-react';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import ADoor1 from './AdventDoors/ADoor1'
// import ADoor2 from './AdventDoors/ADoor2'
// import ADoor3 from './AdventDoors/ADoor3'
// import ADoor4 from './AdventDoors/ADoor4'
// import ADoor5 from './AdventDoors/ADoor5'
// import ADoor6 from './AdventDoors/ADoor6'
// import LockedDoor from './AdventDoors/LockedDoor'


const CalendarDoors = () => {
  const [userProgress, setUserProgress] = useState({ currentDay: 1, completedDoors: [] });
  const { user } = useUser();
  const userId = user ? user.id : null;

  useEffect(() => {
    const fetchUserProgress = async () => {
      if (!userId) {
        // Handle the case when there is no user
        return;
      }

      const db = getFirestore();
      const userProgressRef = doc(db, `users/${userId}/progress/1`);

      try {
        const docSnap = await getDoc(userProgressRef);

        if (docSnap.exists()) {
          setUserProgress(docSnap.data());
        } else {
          // User document doesn't exist in the database, create one
          await setDoc(userProgressRef, { currentDay: 1, completedDoors: [] });
          setUserProgress({ currentDay: 1, completedDoors: [] });
        }
      } catch (error) {
        console.error('Error fetching/creating user document:', error);
      }
    };

    fetchUserProgress();
  }, [userId]);

  const isDoorAccessible = (doorNumber) => {
    return userProgress.currentDay >= doorNumber;
  };

  const updateCurrentDayAtSpecificTime = () => {
    // ... (same as in your code)
    const targetTime = new Date(); // Set your desired time here
        targetTime.setHours(12, 0, 0, 0); // Example: 12:00:00
    
        const currentTime = new Date();
    
        // Calculate the time difference in milliseconds
        const timeDifference = targetTime.getTime() - currentTime.getTime();
    
        // Check if the target time is already passed for today
        if (timeDifference < 0) {
          // If yes, set the target time for tomorrow
          targetTime.setDate(targetTime.getDate() + 1);
        }
    
        // Calculate the time difference again after adjusting for tomorrow
        const updatedTimeDifference = targetTime.getTime() - currentTime.getTime();
    
        // Set an interval to update currentDay every 24 hours
        setInterval(() => {
          // Increase currentDay by 1
          setUserProgress((prevUserProgress) => ({
            ...prevUserProgress,
            currentDay: prevUserProgress.currentDay + 1,
          }));
        }, updatedTimeDifference);
  };

  useEffect(() => {
    updateCurrentDayAtSpecificTime();
  }, []);

    return (
        <div   >



            <div className="align-content-center my-48 flex flex-row justify-center min-h-screen  ">
                <div className="grid h-40 grid-cols-6 max-sm:grid-cols-3 gap-0 rounded-3xl bg-white text-center">
                    <div className="col-span-2 row-span-2 h-80 w-80 px-6 max-lg:h-60 max-lg:w-60 max-lg:py-2   max-md:h-[168px] max-md:w-[168px] max-md:py-0  bg-slate-800 hover:bg-slate-900 font-semibold text-white  ">
                        <div className=" max-sm:text-xs max-sm:font-bold max-md:text-sm  text-center max-ms:font-bold max-md:py-3 max-md:font-normal max-sm:py-7 text-2xl">
                            KEEP OPENING THE DOORS DAY BY DAY. SOON, YOU WILL UNDERSTAND THE MAGIC OF BLOCKCHAIN.

                        </div>
                    </div>



                    <Link  to={isDoorAccessible(14) ? '/ADoor14' : '/LockedDoor'}><div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0   max-md:py-1 max-md:px-0   max-md:h-[84px] max-md:w-[84px] max-md:mx-0  max-md:my-0  bg-teal-900 hover:bg-teal-950 py-12 text-4xl text-white  font-bold">14</div></Link>



                    <Link  to={isDoorAccessible(23) ? '/ADoor23' : '/LockedDoor'}> <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0  max-md:py-1 max-md:px-0  max-md:h-[84px] max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">23</div></Link>




                    <Link to={isDoorAccessible(4) ? '/ADoor4' : '/LockedDoor'}>    <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0  max-md:py-1 max-md:px-0  max-md:h-[84px] max-md:w-[84px] max-md:mx-0 bg-rose-400 hover:bg-rose-500 py-12 text-4xl text-white  font-bold">4</div></Link>




                    <Link to={isDoorAccessible(1) ? '/ADoor1' : '/LockedDoor'}>    <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0  max-md:py-1 max-md:px-0  max-md:h-[84px] max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">1</div></Link>




                    <Link to={isDoorAccessible(19) ? '/ADoor19' : '/LockedDoor'}>
                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0  max-md:py-1 max-md:px-0  max-md:h-[84px] max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">19</div></Link>




                    <div className="col-span-2 h-40 w-80  max-lg:h-[120px] max-lg:w-[240px]   max-md:py-1 max-md:px-0  max-md:h-[84px] max-md:w-[168px] bg-slate-50  hover:bg-slate-200 hover:text-rose  py-5 text-center text-xl font-semibold text-rose-500">
                        <div className="text-2xl  max-lg:text-base ">
                            SOMEONE VERY SPECIAL, THOUGHTFUL, AND VISIONARY GAVE YOU THIS GIFT.
                        </div>
                    </div>



                    <Link to={isDoorAccessible(6) ? '/ADoor6' : '/LockedDoor'}> <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0  max-md:py-1 max-md:px-0  max-md:h-[84px] max-md:w-[84px] max-md:mx-0 bg-teal-900 hover:bg-teal-950 py-12 text-4xl text-white  font-bold">6</div></Link>




                    <Link to={isDoorAccessible(21) ? '/ADoor21' : '/LockedDoor'}>
                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0   max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">21</div></Link>




                    <Link to={isDoorAccessible(22) ? '/ADoor22' : '/LockedDoor'}>
                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-teal-900 hover:bg-teal-950 py-12 text-4xl text-white  font-bold">22</div>
                    </Link>




                    <Link to={isDoorAccessible(3) ? '/ADoor3' : '/LockedDoor'}>  <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">3</div></Link>




                    <Link to={isDoorAccessible(17) ? '/ADoor17' : '/LockedDoor'}>

                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">17</div></Link>




                    <Link to={isDoorAccessible(9) ? '/ADoor9' : '/LockedDoor'}>
                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-teal-900 hover:bg-teal-950 py-12 text-4xl text-white  font-bold">9</div>
                    </Link>




                    <Link to={isDoorAccessible(10) ? '/ADoor10' : '/LockedDoor'}>


                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-teal-900 hover:bg-teal-950 py-12 text-4xl text-white  font-bold">10</div>


                    </Link>




                    <Link to={isDoorAccessible(7) ? '/ADoor7' : '/LockedDoor'}>
                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">7</div>
                    </Link>





                    <div className="col-span-2 h-40 w-80  max-lg:h-[120px] max-lg:w-60 max-md:h-[84px] max-md:w-[168px] max-md:py-1 max-md:px-0  bg-slate-50  hover:bg-slate-300 hover:text-white  py-5 text-left text-xl font-semibold text-gray-500">
                        <div className="px-6 max-sm:text-xs max-md:text-xs max-md:py-1 max-lg:text-base">
                            JUST 5 MINUTES A DAY IS ALL YOU NEED TO MASTER BLOCKCHAIN.<br />
                            {/* <div className="py-4">#ARPITWEB3</div> */}
                        </div>
                    </div>


                    <Link to={isDoorAccessible(18) ? '/ADoor18' : '/LockedDoor'}>


                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-teal-900 hover:bg-teal-950 py-12 text-4xl text-white font-bold">18</div>

                    </Link>




                    <Link to={isDoorAccessible(12) ? '/ADoor12' : '/LockedDoor'}>
                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-rose-400 hover:bg-rose-500 py-12 text-4xl text-white  font-bold">12</div>
                    </Link>






                    <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-slate-800 hover:bg-slate-900 py-12 text-center text-xl  max-lg:text-base text-white  font-bold">WATCH OUR VIDEO</div>




                    <Link to={isDoorAccessible(13) ? '/ADoor13' : '/LockedDoor'}>



                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">13</div>

                    </Link>




                    <Link to={isDoorAccessible(5) ? '/ADoor5' : '/LockedDoor'}>



                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">5</div>

                    </Link>




                    <Link to={isDoorAccessible(15) ? '/ADoor15' : '/LockedDoor'}>

                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">15</div>

                    </Link>




                    <Link to={isDoorAccessible(8) ? '/ADoor8' : '/LockedDoor'}>



                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-rose-400 hover:bg-rose-500 py-12 text-4xl text-white  font-bold">8</div>


                    </Link>




                    <Link to={isDoorAccessible(2) ? '/ADoor2' : '/LockedDoor'}>




                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">2</div>



                    </Link>





                    <Link to={isDoorAccessible(20) ? '/ADoor20' : '/LockedDoor'}>

                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-rose-400 hover:bg-rose-500 py-12 text-4xl text-white  font-bold">20</div>





                    </Link>




                    <Link to={isDoorAccessible(11) ? '/ADoor11' : '/LockedDoor'}>


                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white  font-bold">11</div>
                    </Link>






                    <Link to={isDoorAccessible(24) ? '/ADoor24' : '/LockedDoor'}>
                        <div className="h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-rose-400 hover:bg-rose-500 py-12 text-4xl text-white  font-bold">24</div>


                    </Link>




                    {/* <Link to="/LockedDoor">

                        <div className="h-40 sm:hidden w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0  max-md:w-[84px] max-md:mx-0 bg-rose-400 hover:bg-rose-500 py-12 text-4xl text-white  font-bold"> We </div>

                    </Link> */}



                    <div className="col-span-2 h-40 w-80  max-lg:h-[120px] max-lg:w-60      max-md:h-[84px] max-md:w-[168px]   max-md:py-1 bg-slate-50 max-md:px-0  hover:bg-slate-300 hover:text-white  py-5 text-left  text-xl font-semibold text-gray-500">
                        <div className="px-6 max-sm:text-xs max-md:text-xs max-md:py-1 max-sm:py-2  max-lg:text-base">
                            THIS CALENDAR WAS MADE WITH LOVE AND AFFECTION FROM MYWEB3GIFT FOR YOU. <br />
                            {/* <div className="py-4  max-lg:py-0">#ARPITWEB3</div> */}
                        </div>
                    </div>






                    <Link to={isDoorAccessible(25) ? '/ADoor25' : '/LockedDoor'}>
                        <div className="h-40 w-40 max-sm:hidden max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:px-0 max-md:w-[84px] max-md:py-0  max-md:mx-0 bg-teal-900 hover:bg-teal-950 py-12 text-4xl text-white  font-bold">25</div>
                    </Link>





                    <Link to={isDoorAccessible(16) ? '/ADoor16' : '/LockedDoor'}>

                        <div className="h-40 w-40  max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0  max-lg:my-0 max-md:h-[84px] max-md:px-0 max-md:w-[84px] max-md:py-0  max-md:mx-0 bg-rose-400 hover:bg-rose-500 py-12 text-4xl text-white  font-bold">16</div>
                    </Link>






















                </div>
            </div>







        </div>
    )
}

export default CalendarDoors

// import React, { useState } from 'react';
// import {  useNavigate } from 'react-router-dom';

// const CalendarDoors = () => {
//   const [openedDoors, setOpenedDoors] = useState([]);
//   const navigate = useNavigate();

//   const handleDoorClick = (doorNumber) => {
//     // Check if the door is already opened
//     if (openedDoors.includes(doorNumber)) {
//       alert('You have already opened this door!');
//     } else {
//       // Open the door (add to the openedDoors array)
//       setOpenedDoors([...openedDoors, doorNumber]);

//       // Navigate to the corresponding door component
//       navigate(`/ADoor${doorNumber}`);
//     }
//   };

//   return (
//     <div>
//       <div className="align-content-center my-48 flex flex-row justify-center min-h-screen">
//         <div className="grid h-40 grid-cols-6 max-sm:grid-cols-3 gap-0 rounded-3xl bg-white text-center">
//           {/* Your existing components */}
//           {Array.from({ length: 24 }, (_, index) => {
//             const doorNumber = index + 1;
//             return (
//               <div
//                 key={doorNumber}
//                 className={`h-40 w-40 max-lg:h-[120px] max-lg:w-[120px] max-lg:mx-0 max-lg:my-0 max-md:h-[84px] max-md:py-1 max-md:px-0 max-md:w-[84px] max-md:mx-0 bg-green-200 hover:bg-green-300 py-12 text-4xl text-white font-bold`}
//                 onClick={() => handleDoorClick(doorNumber)}
//               >
//                 {doorNumber}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalendarDoors;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import 'firebase/firestore';
// import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
// import { useUser } from '@clerk/clerk-react';

// const CalendarDoors = () => {
//   const [userProgress, setUserProgress] = useState({ currentDay: 1, completedDoors: [] });
//   const { user } = useUser();
//   const userId = user ? user.id : null
  
//   useEffect(() => {
//     const fetchUserProgress = async () => {
//       if (!userId) {
//         // Handle the case when there is no user
//         return;
//       }

    
//       const db = getFirestore();
//       const userDocRef = doc(db, 'users', userId);

//       try {
//         const docSnap = await getDoc(userDocRef);

//         if (docSnap.exists()) {
//           setUserProgress(docSnap.data());
//         } else {
//           // User document doesn't exist in the database, create one
//           await setDoc(userDocRef, { currentDay: 1, completedDoors: [] });
//           setUserProgress({ currentDay: 1, completedDoors: [] });
//         }
//       } catch (error) {
//         console.error('Error fetching/creating user document:', error);
//       }
//     };

//     fetchUserProgress();
//   }, [userId]);
//   const isDoorAccessible = (doorNumber) => {
//     return userProgress.currentDay >= doorNumber;
    
    
//   };


//   return (
//     <div>
//       {/* Your existing code */}
//       <div className="grid h-40 grid-cols-6 max-sm:grid-cols-3 gap-0 rounded-3xl bg-white text-center">
//         {/* Map through your doors and render them */}
//         {[1, 2, 3/*... other door numbers ...*/].map((doorNumber)  => (
//           <Link
//             key={doorNumber}
//             to={isDoorAccessible(doorNumber) ? `/ADoor${doorNumber}` : '/LockedDoor'}
//           >
            
//             <div
//               className={`h-40 w-40 max-lg:h-[120px] max-lg:w-[120px]  ${
//                 isDoorAccessible(doorNumber) ? 'bg-green-200 hover:bg-green-300' : 'bg-teal-900 hover:bg-teal-950'
//               } py-12 text-4xl text-white font-bold`}
//             >
//               {doorNumber }
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarDoors;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import 'firebase/firestore';
// import { doc, getDoc, getFirestore, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { useUser } from '@clerk/clerk-react';

// const CalendarDoors = () => {
//   const [userProgress, setUserProgress] = useState({ currentDay: 1, completedDoors: [] });
//   const { user } = useUser();
//   const userId = user ? user.id : null;

//   useEffect(() => {
//     const fetchUserProgress = async () => {
//       if (!userId) {
//         // Handle the case when there is no user
//         return;
//       }

//       const db = getFirestore();
//       const userDocRef = doc(db, 'users', userId);

//       try {
//         const docSnap = await getDoc(userDocRef);

//         if (docSnap.exists()) {
//           setUserProgress(docSnap.data());
//         } else {
//           // User document doesn't exist in the database, create one
//           await setDoc(userDocRef, { currentDay: 1, completedDoors: [] });
//           setUserProgress({ currentDay: 1, completedDoors: [] });
//         }
//       } catch (error) {
//         console.error('Error fetching/creating user document:', error);
//       }
//     };

//     fetchUserProgress();
//   }, [userId]);

//   const isDoorAccessible = (doorNumber) => {
//     return userProgress.currentDay >= doorNumber;
//   };

//   const handleDoorCompletion = async () => {
//     if (!userId) {
//       // Handle the case when there is no user
//       return;
//     }

//     const db = getFirestore();
//     const userDocRef = doc(db, 'users', userId);

//     try {
//       // Update user's completed doors in Firestore
//       await updateDoc(userDocRef, {
//         completedDoors: arrayUnion(userProgress.currentDay), // Mark current day as completed
//       });

//       // Increase currentDay by 1
//       setUserProgress((prevUserProgress) => ({
//         ...prevUserProgress,
//         currentDay: prevUserProgress.currentDay + 1,
//       }));

//       console.log('Door marked as completed for user:', userId);
//     } catch (error) {
//       console.error('Error updating user document:', error);
//     }
//   };

//   // Function to check and update currentDay at a specific time
//   const updateCurrentDayAtSpecificTime = () => {
//     const targetTime = new Date(); // Set your desired time here
//     targetTime.setHours(12, 0, 0, 0); // Example: 12:00:00

//     const currentTime = new Date();

//     // Calculate the time difference in milliseconds
//     const timeDifference = targetTime.getTime() - currentTime.getTime();

//     // Check if the target time is already passed for today
//     if (timeDifference < 0) {
//       // If yes, set the target time for tomorrow
//       targetTime.setDate(targetTime.getDate() + 1);
//     }

//     // Calculate the time difference again after adjusting for tomorrow
//     const updatedTimeDifference = targetTime.getTime() - currentTime.getTime();

//     // Set an interval to update currentDay every 24 hours
//     setInterval(() => {
//       // Increase currentDay by 1
//       setUserProgress((prevUserProgress) => ({
//         ...prevUserProgress,
//         currentDay: prevUserProgress.currentDay + 1,
//       }));
//     }, updatedTimeDifference);
//   };

//   // Call the function to update currentDay at the specified time
//   useEffect(() => {
//     updateCurrentDayAtSpecificTime();
//   }, []);

//   return (
//     <div>
//       {/* Your existing code */}
//       <div className="grid h-40 grid-cols-6 max-sm:grid-cols-3 gap-0 rounded-3xl bg-white text-center">
//         {/* Map through your doors and render them */}
//         {[1, 2, 3/*... other door numbers ...*/].map((doorNumber)  => (
//           <Link
//             key={doorNumber}
//             to={isDoorAccessible(doorNumber) ? `/ADoor${doorNumber}` : '/LockedDoor'}
//           >
            
//             <div
//               className={`h-40 w-40 max-lg:h-[120px] max-lg:w-[120px]  ${
//                 isDoorAccessible(doorNumber) ? 'bg-green-200 hover:bg-green-300' : 'bg-teal-900 hover:bg-teal-950'
//               } py-12 text-4xl text-white font-bold`}
//             >
//               {doorNumber }
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarDoors;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import 'firebase/firestore';
// import { doc, getDoc, getFirestore, setDoc, updateDoc, arrayUnion, collection } from 'firebase/firestore';
// import { useUser } from '@clerk/clerk-react';

// const CalendarDoors = () => {
//   const [userProgress, setUserProgress] = useState({ currentDay: 1, completedDoors: [] });
//   const { user } = useUser();
//   const userId = user ? user.id : null;

//   useEffect(() => {
//     const fetchUserProgress = async () => {
//       if (!userId) {
//         // Handle the case when there is no user
//         return;
//       }

//       const db = getFirestore();
      
//       const userProgressRef = doc(db, `users/${userId}/progress/1`);

//       try {
//         const docSnap = await getDoc(userProgressRef);

//         if (docSnap.exists()) {
//           setUserProgress(docSnap.data());
//         } else {
//           // User document doesn't exist in the database, create one
//           await setDoc(userProgressRef, { currentDay: 1, completedDoors: [] });
//           setUserProgress({ currentDay: 1, completedDoors: [] });
//         }
//       } catch (error) {
//         console.error('Error fetching/creating user document:', error);
//       }
//     };

//     fetchUserProgress();
//   }, [userId]);

//   const isDoorAccessible = (doorNumber) => {
//     return userProgress.currentDay >= doorNumber;
//   };

//   // const handleDoorCompletion = async () => {
//   //   if (!userId) {
//   //     // Handle the case when there is no user
//   //     return;
//   //   }

//   //   const db = getFirestore();
//   //   const userDocRef = doc(db, 'users', userId);

//   //   try {
//   //     // Update user's completed doors in Firestore
//   //     await updateDoc(userDocRef, {
//   //       completedDoors: arrayUnion(userProgress.currentDay), // Mark current day as completed
//   //     });

//   //     // Increase currentDay by 1
//   //     setUserProgress((prevUserProgress) => ({
//   //       ...prevUserProgress,
//   //       currentDay: prevUserProgress.currentDay + 1,
//   //     }));

//   //     console.log('Door marked as completed for user:', userId);
//   //   } catch (error) {
//   //     console.error('Error updating user document:', error);
//   //   }
//   // };

//   // Function to check and update currentDay at a specific time
//   const updateCurrentDayAtSpecificTime = () => {
//     const targetTime = new Date(); // Set your desired time here
//     targetTime.setHours(12, 0, 0, 0); // Example: 12:00:00

//     const currentTime = new Date();

//     // Calculate the time difference in milliseconds
//     const timeDifference = targetTime.getTime() - currentTime.getTime();

//     // Check if the target time is already passed for today
//     if (timeDifference < 0) {
//       // If yes, set the target time for tomorrow
//       targetTime.setDate(targetTime.getDate() + 1);
//     }

//     // Calculate the time difference again after adjusting for tomorrow
//     const updatedTimeDifference = targetTime.getTime() - currentTime.getTime();

//     // Set an interval to update currentDay every 24 hours
//     setInterval(() => {
//       // Increase currentDay by 1
//       setUserProgress((prevUserProgress) => ({
//         ...prevUserProgress,
//         currentDay: prevUserProgress.currentDay + 1,
//       }));
//     }, updatedTimeDifference);
//   };

//   // Call the function to update currentDay at the specified time
//   useEffect(() => {
//     updateCurrentDayAtSpecificTime();
//   }, []);

//   return (
//     <div className="align-content-center my-48 flex flex-row justify-center min-h-screen  ">
//       <div className="grid h-40 grid-cols-6 max-sm:grid-cols-3 gap-0 rounded-3xl bg-white text-center">
//         {/* Map through your doors and render them */}
//         {[1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24/*... other door numbers ...*/].map((doorNumber) => (
//           <Link
//             key={doorNumber}
//             to={isDoorAccessible(doorNumber) ? `/ADoor${doorNumber}` : '/LockedDoor'}
//           >
//             <div
//               className={`h-40 w-40 max-lg:h-[120px] max-lg:w-[120px]  ${
//                 isDoorAccessible(doorNumber) ? 'bg-green-200 hover:bg-green-300' : 'bg-teal-900 hover:bg-teal-950'
//               } py-12 text-4xl text-white font-bold`}
//             >
//               {doorNumber}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarDoors;
