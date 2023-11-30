import ReactGA from 'react-ga';
import Main from "./sections_landing/Main.js";




import {getDatabase, ref, set} from "firebase/database"
import { app } from "./firebase.js"


import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
// import Layout from "./pages/Layout.js";
import ErrorPage from "./pages/ErrorPage.js";
import FAQS from "./pages/FAQS.js";
// import Team from "./pages/Team.js";
import BlogPage from "./pages/BlogPage.js";
import ClaimGift from "./pages/ClaimGift.js";

// import Nav01 from "./Components/Nav01.js";

import BlogPage1 from './pages/BlogPages/BlogPage1/BlogPage1.js';
import BlogPage2 from './pages/BlogPages/BlogPage2/BlogPage2.js';
import BlogPage3 from './pages/BlogPages/BlogPage3/BlogPage3.js';
import ScrollToTop from './pages/ScrollToTop/ScrollToTop.js';
import Imprint from './pages/Imprint.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import TransferedGifts from './pages/TransferedGifts.js';
import MyGifts from './pages/MyGifts.js';
import LoginForm from './pages/LoginForm.js';
import SignUpForm from './pages/SignUp.js';
import CalendarGiftForm from './pages/CalendarGiftForm.js';
import { ApprovalProvider } from './states/ApprovalContext.js'; // Adjust the path
// import CreateGiftCard from './pages/CreateGiftCard.js';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import RegistrationForm from './sections_landing/Registration.js';
import CreateGiftCard from './pages/CreateGiftCard.js';
// import ClaimGift from "./pages/ClaimGift.js";
import YourGifts from './pages/yourGifts.js';


import CryptoAdventCalendar from './pages/CryptoAdventCalendar.js';
import CryptoChallenge from './pages/CryptoChallenge.js';
import CryptoSurpriseGiftBox from './pages/CryptoSurpriseGiftBox.js';
import ReceiverGiftCard from './pages/ReceiverGiftCard.js';
import { FormDataProvider } from './states/FormDataContext.js';

// import { Gift } from './assets/Images/index.js';
import Giftbyid from './pages/Giftbyid.js';
import Gift from './pages/Gift.js';




import LockedDoor from './pages/AdventDoors/LockedDoor.js';
import ADoor1 from './pages/AdventDoors/ADoor1.js';
import ADoor2 from './pages/AdventDoors/ADoor2.js';
import ADoor3 from './pages/AdventDoors/ADoor3.js'; 
import ADoor4 from './pages/AdventDoors/ADoor4.js';
import ADoor5 from './pages/AdventDoors/ADoor5.js';
import ADoor6 from './pages/AdventDoors/ADoor6.js';




if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}




const db= getDatabase(app);
 
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
 
// function PublicPage() {
//   return (
//     <>
//       <h1>Public page</h1>
//       <a href="/protected">Go to protected page</a>
//     </>
//   );
// }
 
function ProtectedPage() {
  useEffect(() => {
    const auth = getAuth();
    // Access Firebase auth features with `auth.currentUser`
    const user = auth.currentUser;
    console.log("Current user:", user);
  }, []);
  return (
    <>
      <h1>Protected page</h1>
      <UserButton />
      <ClaimGift />
    </>
  );
}






function ClerkProviderWithRoutes() {
  const navigate = useNavigate();


  const TRACKING_ID = "G-G6P69YFVWZ"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);





 
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <Routes>

      <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FAQS" element={<FAQS />} />
          {/* <Route path="/Team" element={<Team />} /> */}
          <Route path="/Blog" element={<BlogPage />} />

          {/* <Route path="/Team" element={<Team />} /> */}
          <Route path="/Gift" element={<Gift />} />

          <Route path="/ClaimGift" element={<ClaimGift />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Imprint" element={<Imprint />} />

          <Route path="/Blog1" element={<BlogPage1/>} />
          <Route path="/Blog2" element={<BlogPage2/>} />
          <Route path="/Blog3" element={<BlogPage3/>} />

          <Route path="*" element={<ErrorPage />} />

          <Route path="/MyGifts" element={<MyGifts />} />

          <Route path="/LoginForm" element={<LoginForm />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/CalendarGiftForm" element={<CalendarGiftForm />} />

          <Route path="/TransferedGifts" element={<TransferedGifts/>} />
          <Route path="/CreateGiftCard" element={<CreateGiftCard />} />
          <Route path="/CryptoSurpriseGiftBox" element={<CryptoSurpriseGiftBox />} />
          <Route path="/CryptoChallenge" element={<CryptoChallenge />} />
          <Route path="/CryptoAdventCalendar" element={<CryptoAdventCalendar />} />

          <Route path="/ReceiverGiftCard" element={<ReceiverGiftCard/>} />
          <Route path="/giftid/:id" element={<Giftbyid/>} />
          <Route path="/yourgifts" element={<YourGifts/>} />





          <Route path="/LockedDoor" element={<LockedDoor/>} />
          <Route path="/ADoor1" element={<ADoor1/>} />
          <Route path="/ADoor2" element={<ADoor2/>} />
          <Route path="/ADoor3" element={<ADoor3/>} />
          <Route path="/ADoor4" element={<ADoor4/>} />
          <Route path="/ADoor5" element={<ADoor5/>} />
          <Route path="/ADoor6" element={<ADoor6/>} />





        {/* <Route path="/" element={<PublicPage />} /> */}
        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/protected"
          element={
          <>
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}




function App() {

const putData = () => {
set (ref(db, 'user/piyush'),
{
id: 1,
name: "Piyush Gupta",
age: 21,
});
};


 
  return (




    
     <BrowserRouter>
    <ScrollToTop />
    <FormDataProvider>
    <ApprovalProvider>
      <ClerkProviderWithRoutes />
    </ApprovalProvider>
    </FormDataProvider>
    {/* <button className='bg-blue-400 rounded-r-xl' onClick={putData}>Put data</button> */}
  </BrowserRouter>
  );
}
 
export default App;




// function App() {
//   return (






//     <ClerkProvider publishableKey={clerkPubKey}>




//       <Router>

//         {/* <Nav01/> */}
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/FAQS" element={<FAQS />} />
//           <Route path="/Team" element={<Team />} />
//           <Route path="/Blog" element={<BlogPage />} />

//           <Route path="/Team" element={<Team />} />
//           <Route path="/Gift" element={<Gift />} />


//           <Route path="*" element={<ErrorPage />} />




//         </Routes>


//       </Router>

//     </ClerkProvider>


//   );
// }

// export default App;
