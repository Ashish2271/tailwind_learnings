import React from 'react'
import Nav01 from '../Components/Nav01'
import { Footer } from '../sections_landing'
import CalendarDoors from './CalendarDoors'

const CryptoChallenge = () => {
  return (
    <div>

<Nav01></Nav01>
<div className="bg-sky-950 h-[90px] w-screen"></div>


<div className="relative mx-auto flex  bg-fixed flex-col items-center gap-9 rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/flat-cryptocurrency-dogecoin-illustration-with-man-cartoon-people_513217-75.jpg?w=826&t=st=1701250371~exp=1701250971~hmac=f782e0e9b880619d4198b8433f63f60105344d5117751bf20588f38c8e642969')", }} >


<div className='backdrop-blur-md w-full h-full bg-white/30  '>

<CalendarDoors/>

</div>

</div>

<Footer></Footer>
    </div>
  )
}

export default CryptoChallenge