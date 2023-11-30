import React from 'react'
import Nav01 from '../Components/Nav01'
import { Footer } from '../sections_landing'

import CalendarDoors from './CalendarDoors'


const CryptoSurpriseGiftBox = () => {
    return (
        <div>

            <Nav01></Nav01>
            <div className="bg-sky-950 h-[90px] w-screen"></div>



            <div className="relative mx-auto flex  bg-fixed flex-col items-center gap-9 rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/bitcoin-crypto-cartoon-thumbnail-man-happy-excited-pump_737213-181.jpg?w=1380')", }} >


                <div className='backdrop-blur-md w-full h-full bg-white/30  '>

                    <CalendarDoors />

                </div>

            </div>


            <Footer></Footer>

        </div>
    )
}

export default CryptoSurpriseGiftBox