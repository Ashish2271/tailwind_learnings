import React from 'react';
import Nav01 from '../../Components/Nav01';
import { Footer } from '../../sections_landing';
import { Link } from 'react-router-dom';

const ADoor4 = () => {
  return (
    <div>
      <Nav01></Nav01>
      <div className="bg-sky-950 h-[90px] w-screen"></div>


      <iframe
        title="CatAttackNFT"
        src="https://catattacknft-main.vercel.app/"
        frameBorder="0"
        style={{ width: '100%', height: '100vh' }}
      ></iframe>




      <div className='flex flex-row justify-center'>
        <Link to="/CryptoAdventCalendar" >
          <button className=' bg-sky-800 text-3xl font-bold text-gray-200  py-4 px-7 rounded-3xl my-7 '>Let's Open New Doors</button>
        </Link>
      </div>





      <Footer></Footer>
    </div>
  );
};

export default ADoor4;
