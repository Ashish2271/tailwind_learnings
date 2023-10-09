import React from 'react'
import "./Style/IconsDetails.css"
import {  ChristmasGift, SurpriseGift, ChallengeCalender, calendar } from '../assets/Images'




const IconsDetails = () => {


  return (
    <div className=' bg-gradient-to-r from-pink-100 via-blue-200 to-indigo-200  '>

<div className='text-center py-20 font-bold max-sm:text-3xl sm:text-4xl sm:mx-20' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga neque blanditiis sit.
</div>
<div className='text-center max-sm:text-xl text-2xl pb-7'>Who is sb sbdskjdks Sit dolorem laboriosam recusandae reiciendis?</div>

      <div class="containerIcon flex flex-1 flex-row flex-wrap min-h-[70vh] ">

        <div class="card my-14 special-card">
          <div class="image rounded-full">
            <img className=' ' href="#" src={calendar} />
          </div>
          <div class="content">
            <h3 className='font-bold sm:text-2xl text-gray-100 mb-5'>Christmas Calender</h3>
            <p>  <button className='hover:bg-red-700 bg-red-600 py-4 max-sm:text-1xl px-8 rounded-2xl shadow-sm hover:ring-4 text-gray-100 hover:text-gray-50 text-bold text-2xl'>Buy Now</button> </p>
          </div>
        </div>

        <div class="card my-14 special-card">
          <div class="image rounded-full">
            <img className='' href="#" src={ChristmasGift} />
          </div>
          <div class="content">
            <h3 className='font-bold sm:text-2xl text-gray-100 mb-5'>Christmas Gift</h3>
            <p>  <button className='hover:bg-red-700 bg-red-600 py-4 max-sm:text-1xl px-8 rounded-2xl shadow-sm hover:ring-4 text-gray-100 hover:text-gray-50 text-bold text-2xl'>Buy Now</button> </p>
          </div>
        </div>

        <div class="card my-14 special-card ml-10">
          <div class="image  rounded-full">
            <img className='bg-transparent  ' href="#" src={ChallengeCalender} />
          </div>
          <div class="content">
            <h3 className='font-bold sm:text-2xl text-gray-100 mb-5'>Challenge Calender</h3>
            <p>  <button className='hover:bg-red-700 bg-red-600 py-4 max-sm:text-1xl px-8 rounded-2xl shadow-sm hover:ring-4 text-gray-100 hover:text-gray-50 text-bold text-2xl'>Buy Now</button> </p>
          </div>
        </div>

        <div class="card my-14 special-card">
          <div class="image rounded-full">
            <img className='' href="#" src={SurpriseGift} />
          </div>
          <div class="content">
            <h3 className='font-bold sm:text-2xl text-gray-100 mb-5'>Surprise Gift</h3>
            <p>  <button className='hover:bg-red-700 bg-red-600 py-4 max-sm:text-1xl px-8 rounded-2xl shadow-sm hover:ring-4 text-gray-100 hover:text-gray-50 text-bold text-2xl'>Buy Now</button> </p>
          </div>
        </div>




      </div>


<p className='text-yel-600 text-5xl py-10 px-3 max-sm:text-xl sm:text-2xl  text-center'>All options have the same content, only the arrangement and layout different.</p>

    </div>
  )
}

export default IconsDetails