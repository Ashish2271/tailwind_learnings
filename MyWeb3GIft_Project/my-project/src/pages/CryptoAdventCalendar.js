import React from 'react'
import Nav01 from '../Components/Nav01'
import { Footer } from '../sections_landing'

import CalendarDoors from './CalendarDoors'

const CryptoAdventCalendar = () => {
  return (
    <div>
<Nav01></Nav01>
<div className="bg-sky-950 h-[90px] w-screen"></div>




<div className="relative mx-auto flex  bg-fixed flex-col items-center gap-9 rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/realistic-merry-christmas-background_23-2149116857.jpg?w=1380&t=st=1701248474~exp=1701249074~hmac=d7c323c0c690dc0fcd62f03fcbc8799afe15e15372fe10fb06e7a73844df1b3c')", }} >


<div className='backdrop-blur-sm w-full h-full bg-white/30  '>

<CalendarDoors/>

</div>

</div>











<Footer></Footer>

    </div>
  )
}

export default CryptoAdventCalendar