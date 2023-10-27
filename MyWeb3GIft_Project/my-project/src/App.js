import Main from "./sections_landing/Main.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
// import Layout from "./pages/Layout.js";
import ErrorPage from "./pages/ErrorPage.js";
import FAQS from "./pages/FAQS.js";
import Team from "./pages/Team.js";
import BlogPage from "./pages/BlogPage.js";
import Gift from "./pages/Gift.js";
// import Nav01 from "./Components/Nav01.js";

import {
  ClerkProvider,
  // SignedIn,
  // SignedOut,
  // RedirectToSignIn,
  // SignIn,
  // SignUp,
  // UserButton,
} from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;


function App() {
  return (






    <ClerkProvider publishableKey={clerkPubKey}>




      <Router>

        {/* <Nav01/> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FAQS" element={<FAQS />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Blog" element={<BlogPage />} />

          <Route path="/Team" element={<Team />} />
          <Route path="/Gift" element={<Gift />} />


          <Route path="*" element={<ErrorPage />} />




        </Routes>


      </Router>

    </ClerkProvider>


  );
}

export default App;
