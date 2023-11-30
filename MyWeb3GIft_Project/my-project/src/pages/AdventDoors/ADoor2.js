import React from 'react'
import { Link } from 'react-router-dom';
import Nav01 from '../../Components/Nav01';
import { Footer } from '../../sections_landing';






const ADoor2 = () => {


    const handleWalletSubmission = () => {
        const walletInput = document.getElementById('walletInput').value;
        // Add validation logic for a Web3 wallet here

        // Save to local storage
        localStorage.setItem('web3Wallet', walletInput);
        console.log('Web3 Wallet:', walletInput);

        alert("Congratulation you create your own web3 wallet")
    };


    return (

        <>

            <Nav01></Nav01>
            <div className="bg-sky-950 h-[90px] w-screen"></div>


            <div className="container mx-auto p-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Get Your Web3 Wallet</h1>
                    <p className="mb-4">
                        This video will show you how you can get your Coinbase wallet on your smartphone. Please watch and download.
                    </p>
                    <div className=" mb-4">
                        <iframe
                            className="w-full md:min-h-screen rounded-3xl h-full"
                            src="https://www.youtube.com/embed/3ccsmANhly8?si=jLuIlnaNtuYDGCzF"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <a href="https://play.google.com/store/apps/details?id=org.toshi&hl=en&gl=US&pli=1" className="block mb-4">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue">
                            For Android Devices
                        </button>
                    </a>
                    <a href="https://apps.apple.com/us/app/coinbase-wallet-nfts-crypto/id1278383455" className="block">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue">
                            For iOS
                        </button>
                    </a>
                </div>

                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Browser Wallet Coinbase</h1>
                    <p className="mb-4">
                        If you want to install a Web3 wallet on your PC, here is the link for the Coinbase wallet extension.
                    </p>
                    <span className="block mb-4">Also, you will find a step-by-step guide.</span>
                    <div className=" mb-4">
                        <iframe
                            className="w-full md:min-h-screen rounded-3xl h-full"
                            src="https://www.youtube.com/embed/c88d6lIcs_I?si=T8me59HqmZ2Sj5VE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <a
                        href="https://chromewebstore.google.com/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad?hl=en&shortlink=youtube&c=wa_o_m_n_m_awa_wal_soc_you_generic-youtube-crosssell&pid=Youtube&source_caller=ui"
                        className="block"
                    >
                        <button className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue">
                            Coinbase Browser Wallet
                        </button>
                    </a>
                </div>

                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">Please Share Your Web3 Wallet</h1>
                    <input
                        type="text"
                        id="walletInput"
                        className="border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring focus:border-blue-500"
                    />
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                        onClick={handleWalletSubmission}
                    >
                        Submit
                    </button>
                </div>
            </div>




            <div className='flex flex-row justify-center'>
                <Link to="/CryptoAdventCalendar" >
                    <button className=' bg-sky-800 text-3xl font-bold text-gray-200  py-4 px-7 rounded-3xl my-7 '>Let's Open New Doors</button>
                </Link>
            </div>



            <Footer></Footer>

        </>
    )
}

export default ADoor2