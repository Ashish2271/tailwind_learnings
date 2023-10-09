import Main from "./sections_landing/Main.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Layout from "./pages/Layout.js";
import ErrorPage from "./pages/ErrorPage.js";
import FAQS from "./pages/FAQS.js";
import Team from "./pages/Team.js";
// import Nav01 from "./Components/Nav01.js";


function App() {
  return (


    <Router>

{/* <Nav01/> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQS" element={<FAQS />} />
        <Route path="/Team" element={<Team/>} />


        <Route path="*" element={<ErrorPage/>} />




      </Routes>


    </Router>



  );
}

export default App;
