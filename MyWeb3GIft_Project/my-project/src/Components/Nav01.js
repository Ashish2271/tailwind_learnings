// import { MyWeb3GiftLogo } from "../assets/Images/MyWeb3Gift-red2/index.js"
import { GiftBitcoinLogo } from "../assets/Images/MyWeb3Gift-red2";
import LoginButton from "./LoginButton";
import { Link } from 'react-router-dom';

import Menu1 from "./Menu1";

import React, { useState } from "react";

import "./Style/Nav01.css"
// import { UserButton } from "@clerk/clerk-react";

const Nav01 = () => {

    // const [searchInput, setSearchInput] = useState(true);
    const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
    const [showMenu, setShowMenu] = useState(false);


    // if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark');
    // } else {
    //     document.documentElement.classList.remove('dark')
    // }


    const [Navbar, setNavbar] = useState(false)

    const ChangeBackground = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 30) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', ChangeBackground);

    return (
        <div className=" z-50 fixed top-0 w-screen font-bold  ">
            <div>
                <div className="  ">



                    {/* For md screen size */}
                    {/* <div id="md-searchbar" className={`${mdOptionsToggle ? "hidden" : "flex"} bg-transparent lg:hidden py-5 px-6 items-center justify-between`}>
                        <div className="flex items-center space-x-3 text-gray-100 ">
                            <div>
                                <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <input id="search" type="text" placeholder="Search for products" className="text-sm leading-none   text-gray-600 rounded-r-full focus:outline-none" />
                        </div>
                        <div className="space-x-6">




                            <button aria-label="view favourites" className="text-gray-800  focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.8921 3.07357C13.5516 2.73291 13.1473 2.46267 12.7023 2.2783C12.2574 2.09392 11.7804 1.99902 11.2988 1.99902C10.8171 1.99902 10.3402 2.09392 9.89521 2.2783C9.45023 2.46267 9.04595 2.73291 8.70544 3.07357L7.99878 3.78024L7.29211 3.07357C6.60432 2.38578 5.67147 1.99938 4.69878 1.99938C3.72609 1.99938 2.79324 2.38578 2.10544 3.07357C1.41765 3.76137 1.03125 4.69422 1.03125 5.66691C1.03125 6.6396 1.41765 7.57245 2.10544 8.26024L2.81211 8.96691L7.99878 14.1536L13.1854 8.96691L13.8921 8.26024C14.2328 7.91974 14.503 7.51545 14.6874 7.07048C14.8718 6.6255 14.9667 6.14857 14.9667 5.66691C14.9667 5.18525 14.8718 4.70831 14.6874 4.26334C14.503 3.81836 14.2328 3.41408 13.8921 3.07357V3.07357Z"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            <button aria-label="go to cart" className="text-gray-800  focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <svg className="fill-stroke" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1 4.2002H17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            <button aria-label="go to cart" className="text-gray-800  focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <svg className="fill-stroke" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1 4.2002H17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>





                            <button aria-label="Scan Qr Code" className="text-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-800   hover:ease-in-out hover:duration-700 hover:delay-300  hover:scale-150 backdrop-filter  ">
                                <svg className="fill-stroke" width={20} height={20} fill="none" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M384 64H134.144c-51.2 0-89.6 41.472-89.6 89.6v227.328c0 51.2 41.472 89.6 89.6 89.6H384c51.2 0 89.6-41.472 89.6-89.6V153.6c0-48.128-38.4-89.6-89.6-89.6z m45.056 316.928c0 25.6-19.456 44.544-45.056 44.544H134.144c-25.6 0-45.056-19.456-45.056-44.544V153.6c0-25.6 19.456-45.056 45.056-45.056H384c25.6 0 45.056 18.944 45.056 45.056v227.328z" fill="#5FFFBA" /><path d="M192 192h134.656v134.656H192V192z" fill="#FFA28D" /><path d="M377.856 544.256H134.656c-48.128 0-86.528 38.4-86.528 89.6v220.672c0 48.128 38.4 89.6 86.528 89.6h243.2c48.128 0 86.528-38.4 86.528-89.6v-220.672c3.072-51.2-38.912-89.6-86.528-89.6z m44.544 307.2c0 25.6-19.456 45.056-45.056 45.056H134.656c-25.6 0-45.056-19.456-45.056-45.056v-220.672c0-25.6 18.944-45.056 45.056-45.056h243.2c25.6 0 45.056 19.456 45.056 45.056v220.672z" fill="#5FFFBA" /><path d="M192 668.672h131.072v131.072H192v-131.072z" fill="#FFD561" /><path d="M633.344 470.528h249.344c51.2 0 89.6-41.472 89.6-89.6V153.6c0-51.2-41.472-89.6-89.6-89.6h-249.344c-51.2 0-89.6 41.472-89.6 89.6v227.328c0.512 51.2 41.984 89.6 89.6 89.6zM588.8 153.6c0-25.6 19.456-45.056 44.544-45.056h249.344c25.6 0 45.056 19.456 45.056 45.056v227.328c0 25.6-19.456 44.544-45.056 44.544h-249.344c-25.6 0-44.544-19.456-44.544-44.544V153.6z" fill="#5FFFBA" /><path d="M700.928 192h134.144v134.656h-134.656l0.512-134.656z" fill="#FFD561" /><path d="M572.928 716.8h137.728c12.8 0 22.528-9.728 22.528-22.528v-137.728c0-12.8-9.728-22.528-22.528-22.528h-137.728c-12.8 0-22.528 9.728-22.528 22.528v137.728c0 12.8 9.728 22.528 22.528 22.528zM886.272 563.2v38.4c0 12.8 12.8 25.6 25.6 25.6h38.4c12.8 0 25.6-12.8 25.6-25.6V563.2c0-12.8-12.8-25.6-25.6-25.6h-38.4c-12.8 0-25.6 9.728-25.6 25.6zM582.656 944.128h48.128c12.8 0 22.528-9.728 22.528-22.528v-48.128c0-12.8-9.728-22.528-22.528-22.528h-48.128c-12.8 0-22.528 9.728-22.528 22.528v48.128c0 12.8 9.216 22.528 22.528 22.528zM944.128 704H844.8c-15.872 0-28.672 12.8-28.672 28.672v45.056H768c-19.456 0-32.256 12.8-32.256 32.256v99.328c0 15.872 12.8 28.672 28.672 28.672l179.2 3.072c15.872 0 28.672-12.8 28.672-28.672v-179.2c0.512-16.384-12.288-29.184-28.16-29.184z" fill="#5FFFBA" /></svg>
                            </button>
                        </div>
                    </div> */}




                    {/* For md screen size */}
                    {/* For large screens */}
                    <div className={`${Navbar ? "navbar active" : "navbar"} py-2  sm:px-2 sm:pr-8  `} >
                        <div className="   max-sm:mx-2 flex items-center justify-between">
                            <h1 className=" cursor-pointer text-4xl flex Logo_heading mx-4  text-gray-100 " aria-label="MyWeb3Gift ">

                                <Link to="/"><img src={GiftBitcoinLogo} className=" w-16  rounded-full   hover:ease-in-out hover:duration-700 hover:delay-300  hover:scale-110     " alt="Logo" /></Link>
                                <Link to="/">  <p className="py-4 px-2"><span className="text-yellow-500  ">My</span><span className="text-yellow-500">Web3</span><span className="text-yellow-500">Gift</span></p>  </Link>


                            </h1>


                            {/* <ul className="max-md:hidden w-8/12 md:flex items-center justify-center space-x-8">
                                    <li>
                                        <a href="javascript:void(0)" className=" text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" className=" text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" className=" text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" className=" text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Team
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" className=" text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            FAQ's
                                        </a>
                                    </li>
                                </ul> */}



                            <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                                {/* <div className="hidden lg:flex items-center   hover:ease-in-out hover:duration-700 hover:delay-300  hover:scale-150 backdrop-filter  ">
                                    <button onClick={() => setSearchInput(!searchInput)} aria-label="search items" className="text-gray-800   focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2.99961 20.9999L7.34961 16.6499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <input id="searchInput" type="text" placeholder="search" className={` ${searchInput ? "hidden" : ""} text-sm   text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`} />
                                </div> */}
                                <div className="max-sm:hidden lg:flex items-center space-x-2 xl:space-x-2   backdrop-filter  ">
                                    {/* <button aria-label="view favourites" className="text-gray-800   focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button> */}

                                    <Link to="/ClaimGift">         <button aria-label="view favourites" className="   focus:outline-none  ">
                                        <span className=" inline-flex w-28 justify-center  gap-x-1.5 rounded-md px-3 mx-4 py-2 text-sm font-semibold text-white  ring-inset ring-gray-300 hover:bg-yellow-500 ">  CLAIM GIFT </span>
                                        {/* <svg className="fill-stroke" width={20} height={20} fill="none" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M384 64H134.144c-51.2 0-89.6 41.472-89.6 89.6v227.328c0 51.2 41.472 89.6 89.6 89.6H384c51.2 0 89.6-41.472 89.6-89.6V153.6c0-48.128-38.4-89.6-89.6-89.6z m45.056 316.928c0 25.6-19.456 44.544-45.056 44.544H134.144c-25.6 0-45.056-19.456-45.056-44.544V153.6c0-25.6 19.456-45.056 45.056-45.056H384c25.6 0 45.056 18.944 45.056 45.056v227.328z" fill="#5FFFBA" /><path d="M192 192h134.656v134.656H192V192z" fill="#FFA28D" /><path d="M377.856 544.256H134.656c-48.128 0-86.528 38.4-86.528 89.6v220.672c0 48.128 38.4 89.6 86.528 89.6h243.2c48.128 0 86.528-38.4 86.528-89.6v-220.672c3.072-51.2-38.912-89.6-86.528-89.6z m44.544 307.2c0 25.6-19.456 45.056-45.056 45.056H134.656c-25.6 0-45.056-19.456-45.056-45.056v-220.672c0-25.6 18.944-45.056 45.056-45.056h243.2c25.6 0 45.056 19.456 45.056 45.056v220.672z" fill="#5FFFBA" /><path d="M192 668.672h131.072v131.072H192v-131.072z" fill="#FFD561" /><path d="M633.344 470.528h249.344c51.2 0 89.6-41.472 89.6-89.6V153.6c0-51.2-41.472-89.6-89.6-89.6h-249.344c-51.2 0-89.6 41.472-89.6 89.6v227.328c0.512 51.2 41.984 89.6 89.6 89.6zM588.8 153.6c0-25.6 19.456-45.056 44.544-45.056h249.344c25.6 0 45.056 19.456 45.056 45.056v227.328c0 25.6-19.456 44.544-45.056 44.544h-249.344c-25.6 0-44.544-19.456-44.544-44.544V153.6z" fill="#5FFFBA" /><path d="M700.928 192h134.144v134.656h-134.656l0.512-134.656z" fill="#FFD561" /><path d="M572.928 716.8h137.728c12.8 0 22.528-9.728 22.528-22.528v-137.728c0-12.8-9.728-22.528-22.528-22.528h-137.728c-12.8 0-22.528 9.728-22.528 22.528v137.728c0 12.8 9.728 22.528 22.528 22.528zM886.272 563.2v38.4c0 12.8 12.8 25.6 25.6 25.6h38.4c12.8 0 25.6-12.8 25.6-25.6V563.2c0-12.8-12.8-25.6-25.6-25.6h-38.4c-12.8 0-25.6 9.728-25.6 25.6zM582.656 944.128h48.128c12.8 0 22.528-9.728 22.528-22.528v-48.128c0-12.8-9.728-22.528-22.528-22.528h-48.128c-12.8 0-22.528 9.728-22.528 22.528v48.128c0 12.8 9.216 22.528 22.528 22.528zM944.128 704H844.8c-15.872 0-28.672 12.8-28.672 28.672v45.056H768c-19.456 0-32.256 12.8-32.256 32.256v99.328c0 15.872 12.8 28.672 28.672 28.672l179.2 3.072c15.872 0 28.672-12.8 28.672-28.672v-179.2c0.512-16.384-12.288-29.184-28.16-29.184z" fill="#5FFFBA" /></svg> */}
                                    </button></Link>

                                  

                                    {/* <button aria-label="go to cart" className="text-gray-800   focus:outline-none focus:ring-2 focus:ring-gray-800">
                                            <svg className="fill-stroke" width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1 5.7998H25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button> */}


                                </div>

                                <div className="max-sm:hidden">
                                    <Menu1 />
                                </div>

                                <div className="max-sm:hidden rounded-xl ring-2 ring-gray-100 ring-inset ml-4 ">
                                    <LoginButton />
                                </div>

                                <div className="flex md:hidden">
                                    <button aria-label="show options" onClick={() => setMdOptionsToggle(!mdOptionsToggle)} className="text-gray-100   hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-gray-100   md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* For small screen */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute  z-10 inset-0 md:hidden bg-blue-950 text-white flex-col h-screen w-full`}>
                        <div className="flex items-center justify-between border-b border-gray-200  pb-4 p-4">
                            {/* <div className="flex items-center space-x-3">
                                <div>
                                    <svg className="fill-stroke text-gray-800 " width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.9984 18.9999L14.6484 14.6499" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search for products" className="text-sm  text-gray-600 rounded-3xl placeholder-gray-600  focus:outline-none" />
                            </div> */}


                            <div className=" flex items-center justify-between hover:underline text-base  text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                <LoginButton />

                            </div>



                            <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                <svg className="fill-stroke text-gray-100 " width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>



                        <div className="mt-6 p-4">
                            <ul className="flex flex-col space-y-6">

                                {/* <li>
                                    <div  className="  flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                       <LoginButton/>
                                    </div>
                                </li> */}

                                <li>
                                    <Link to="/" className=" flex items-center justify-between hover:underline text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        Home




                                        <div>
                                            <svg className="fill-stroke text-gray-100 " width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/about" className=" flex items-center justify-between hover:underline text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        About
                                        <div>
                                            <svg className="fill-stroke text-gray-100 " width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className=" flex items-center justify-between hover:underline text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        Contact
                                        <div>
                                            <svg className="fill-stroke text-gray-100 " width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog" className=" flex items-center justify-between hover:underline text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        Blog
                                        <div>
                                            <svg className="fill-stroke text-gray-100 " width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faqs" className=" flex items-center justify-between hover:underline text-base text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        FAQ's
                                        <div>
                                            <svg className="fill-stroke text-gray-100 " width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>




                        <div className="h-full flex items-end">


                            {/* Change line for Background color ****************************************************************************************************** */}

                            <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 ">




                                {/* <li>
                                        <a href="javascript:void(0)" className=" text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            <div>
                                                <svg className="fill-stroke" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M1 5H21" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-base">Cart</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" className=" text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            <div>
                                                <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="text-base">Wishlist</p>
                                        </a>

                                    </li> */}





                                <li>
                                    <Link to="/ClaimGift" className=" text-gray-900 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        <div>
                                            <svg className="fill-stroke" width={20} height={20} fill="none" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M384 64H134.144c-51.2 0-89.6 41.472-89.6 89.6v227.328c0 51.2 41.472 89.6 89.6 89.6H384c51.2 0 89.6-41.472 89.6-89.6V153.6c0-48.128-38.4-89.6-89.6-89.6z m45.056 316.928c0 25.6-19.456 44.544-45.056 44.544H134.144c-25.6 0-45.056-19.456-45.056-44.544V153.6c0-25.6 19.456-45.056 45.056-45.056H384c25.6 0 45.056 18.944 45.056 45.056v227.328z" fill="#5FFFBA" /><path d="M192 192h134.656v134.656H192V192z" fill="#FFA28D" /><path d="M377.856 544.256H134.656c-48.128 0-86.528 38.4-86.528 89.6v220.672c0 48.128 38.4 89.6 86.528 89.6h243.2c48.128 0 86.528-38.4 86.528-89.6v-220.672c3.072-51.2-38.912-89.6-86.528-89.6z m44.544 307.2c0 25.6-19.456 45.056-45.056 45.056H134.656c-25.6 0-45.056-19.456-45.056-45.056v-220.672c0-25.6 18.944-45.056 45.056-45.056h243.2c25.6 0 45.056 19.456 45.056 45.056v220.672z" fill="#5FFFBA" /><path d="M192 668.672h131.072v131.072H192v-131.072z" fill="#FFD561" /><path d="M633.344 470.528h249.344c51.2 0 89.6-41.472 89.6-89.6V153.6c0-51.2-41.472-89.6-89.6-89.6h-249.344c-51.2 0-89.6 41.472-89.6 89.6v227.328c0.512 51.2 41.984 89.6 89.6 89.6zM588.8 153.6c0-25.6 19.456-45.056 44.544-45.056h249.344c25.6 0 45.056 19.456 45.056 45.056v227.328c0 25.6-19.456 44.544-45.056 44.544h-249.344c-25.6 0-44.544-19.456-44.544-44.544V153.6z" fill="#5FFFBA" /><path d="M700.928 192h134.144v134.656h-134.656l0.512-134.656z" fill="#FFD561" /><path d="M572.928 716.8h137.728c12.8 0 22.528-9.728 22.528-22.528v-137.728c0-12.8-9.728-22.528-22.528-22.528h-137.728c-12.8 0-22.528 9.728-22.528 22.528v137.728c0 12.8 9.728 22.528 22.528 22.528zM886.272 563.2v38.4c0 12.8 12.8 25.6 25.6 25.6h38.4c12.8 0 25.6-12.8 25.6-25.6V563.2c0-12.8-12.8-25.6-25.6-25.6h-38.4c-12.8 0-25.6 9.728-25.6 25.6zM582.656 944.128h48.128c12.8 0 22.528-9.728 22.528-22.528v-48.128c0-12.8-9.728-22.528-22.528-22.528h-48.128c-12.8 0-22.528 9.728-22.528 22.528v48.128c0 12.8 9.216 22.528 22.528 22.528zM944.128 704H844.8c-15.872 0-28.672 12.8-28.672 28.672v45.056H768c-19.456 0-32.256 12.8-32.256 32.256v99.328c0 15.872 12.8 28.672 28.672 28.672l179.2 3.072c15.872 0 28.672-12.8 28.672-28.672v-179.2c0.512-16.384-12.288-29.184-28.16-29.184z" fill="#5FFFBA" /></svg>
                                        </div>
                                        <p className="text-base">Gift For Receiver</p>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Nav01