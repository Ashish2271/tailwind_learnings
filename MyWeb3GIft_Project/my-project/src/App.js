import ReactGA from 'react-ga';
import Main from "./sections_landing/Main.js";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
// import Layout from "./pages/Layout.js";
import ErrorPage from "./pages/ErrorPage.js";
import FAQS from "./pages/FAQS.js";
// import Team from "./pages/Team.js";
import BlogPage from "./pages/BlogPage.js";
import ClaimGift from "./pages/ClaimGift.js";
import Gift from "./pages/Gift.js";
// import Nav01 from "./Components/Nav01.js";







import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import ClaimGift from "./pages/ClaimGift.js";
 
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
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
  return (
    <>
      <h1>Protected page</h1>
      <UserButton />
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
          <Route path="*" element={<ErrorPage />} />






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
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
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
