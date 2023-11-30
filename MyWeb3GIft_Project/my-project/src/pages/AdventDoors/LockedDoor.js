import React from 'react'
import Nav01 from '../../Components/Nav01'
import { Footer } from '../../sections_landing'

const LockedDoor = () => {
  return (
    <div>
        <Nav01></Nav01>
        <div className="bg-sky-950 h-[90px] w-screen"></div>


<div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md p-8 bg-white rounded-md shadow-md">
        <img src="https://img.freepik.com/free-vector/locker_53876-25496.jpg?w=826&t=st=1701274506~exp=1701275106~hmac=dfb5c79156aa12510fc8c43494dfecd9745a98b4e230adfd667e3f09841cec80" className="w-full mb-8 rounded-md" alt="Locked door"/>

        <h1 className="text-3xl text-center font-bold mb-4">This door is locked</h1>
        <p className="text-gray-700 mb-6">
            Please complete the previous doors to gain access.
        </p>

        <div className="flex justify-center">
            <button className="px-6 py-3 font-bold bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:shadow-outline-yellow active:bg-yellow-800">
            UNLOCK DOOR
            </button>
        </div>
    </div>
</div>


<Footer></Footer>
    </div>
  )
}

export default LockedDoor