import React from 'react'
import { Link } from 'react-router-dom';
import Nav01 from '../../Components/Nav01';
import { Footer } from '../../sections_landing';
// import { Day2NFTMint } from '../../assets/Images/Doors';
import { Day3NFTMarket } from '../../assets/Images/Doors';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";




const ADoor5 = () => {


    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);


    return (
        <div>

            <Nav01></Nav01>
            <div className="bg-sky-950 h-[90px] w-screen"></div>









            <div>













                <div className="min-h-screen min-w-full bg-gray-50 px-7 py-6">
                    {/* <div className="my-5 flex max-h-32 max-w-[180px] gap-3 items-center justify-center rounded-3xl  hover:border-2 hover:border-white   hover:bg-sky-600  bg-sky-500 font-bold text-gray-100">
                    <img src="https://cdn-icons-png.flaticon.com/512/3757/3757881.png" className="h-14 w-14" alt="" />
                    My Wallet
                </div> */}


                    <div className="flex flex-row  max-md:flex-wrap">

                        <div>
                            <h1 className="text-5xl font-bold my-10 text-black max-md:text-3xl  ">NFT-Marketplaces </h1>

                            <p className="text-2xl leading-10 my-10 text-black " >
                            An NFT marketplace is an online platform that facilitates the buying, selling, and trading of NFTs. As explainded yesterday, NFTs are unique digital tokens that represent ownership or proof of authenticity of a specific digital or physical asset, often associated with digital art, music, videos, virtual real estate, and other digital or tangible items.
                                <br />
                                <span className='py-4  my-3'>Key features of NFT marketplaces include:</span>
                            </p>
                        </div>


                        {/* <div>
                        <img className="rounded-full max-w-[400px] max-md:w-[300px] mx-auto " src="https://img.freepik.com/free-psd/3d-nft-icon-digital-wallet_629802-10.jpg?w=826&t=st=1701280204~exp=1701280804~hmac=4e890ce460324ab760e93f6c2855eb36812c2b1f32b0cebd181919a41e8f9223" alt="Wallets" />
                    </div> */}


                        <div className='flex justify-center  mx-auto'>
                            <img className=" max-w-[400px] max-sm:w-60  mx-auto " src="https://kenyanmagazine.co.ke/wp-content/uploads/2022/01/InShot_20220104_005317872-01-scaled.jpeg" alt="Wallets" />
                        </div>



                    </div>

                  <div className='flex flex-row justify-center'>
                       <img className="rounded-3xl" src={Day3NFTMarket} alt="" />
                    </div>

                    <span className='text-3xl font-bold '>Key features of NFT marketplaces include:</span>

                </div>
                <button className='text-blue-300 font-bold  text-2xl py-3 px-5 rounded-3xl'> <a href="https://www.alchemy.com/best/nft-marketplaces">List of NFT Marketplaces</a> </button>

                <>
                    <Accordion open={open === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="bg-blue-500 text-white py-4 px-5 cursor-pointer rounded-t-md text-xl"
                        >
                           Listing and Selling
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">

                        Creators or owners can list their digital assets on these platforms, specifying details such as title, description, and pricing. Interested buyers can then purchase these NFTs using cryptocurrency.

                            <br />

                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 2}>
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="bg-green-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2 text-xl"
                        >
                           Discoverability
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                        NFT marketplaces often provide search and discovery features to help users find specific types of digital assets, artists, or themes.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 3}>
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className="bg-purple-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2 text-xl"
                        >
                           Smart Contracts
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                        In the context of NFT marketplaces, smart contracts automate the process of transferring ownership when a purchase is made.
                            <br />


                        </AccordionBody>
                    </Accordion>


                    <Accordion open={open === 4}>
                        <AccordionHeader
                            onClick={() => handleOpen(4)}
                            className="bg-blue-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2  text-xl"
                        >
                      Blockchain Integration
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                        The use of blockchain ensures the security, transparency, and immutability of transactions. It also allows users to verify the authenticity and ownership history of each NFT.
                        </AccordionBody>
                    </Accordion>



                    <Accordion open={open === 5}>
                        <AccordionHeader
                            onClick={() => handleOpen(5)}
                            className="bg-blue-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2  text-xl"
                        >
                Wallet Integration
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                        Users need a cryptocurrency wallet to participate in NFT transactions. Many marketplaces integrate with popular wallets to facilitate seamless transactions.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 6}>
                        <AccordionHeader
                            onClick={() => handleOpen(6)}
                            className="bg-blue-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2  text-xl"
                        >
           Royalties
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                        NFT marketplaces often have systems in place to automatically distribute royalties to the original creators whenever their NFTs are resold in the secondary market. This provides ongoing compensation to artists and creators.
                        </AccordionBody>
                    </Accordion>



                    <Accordion open={open === 7}>
                        <AccordionHeader
                            onClick={() => handleOpen(7)}
                            className="bg-yellow-400 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2 text-xl"
                        >
                          How NFT Marketplaces Earn Money
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                            <h2 className='text-2xl font-semibold'>Transaction Fees</h2> NFT marketplaces typically charge fees on transactions that occur on their platform. These fees can be a percentage of the sale price or a flat fee per transaction. The fees contribute to the platform's revenue.
                            <br />
                           <h2 className='text-2xl font-semibold'>Listing Fees</h2>Some marketplaces charge creators a fee to list their NFTs on the platform. This can be a one-time fee or a recurring cost.
                            <br />
                           <h2 className='text-2xl font-semibold'> Premium Features</h2> Marketplaces may offer premium features, such as enhanced visibility for listings, analytics tools, or other services for a subscription fee.
                            <br />
                           <h2 className='text-2xl font-semibold'> Collaborations and Partnerships</h2>NFT marketplaces might collaborate with artists, brands, or other entities for exclusive drops or collections, earning money through partnerships and collaborations.
                            <br />
                          <h2 className='text-2xl font-semibold'> Secondary Market Activity</h2> As NFTs are often resold on the secondary market, the platform may earn additional transaction fees from these resale activities.
                            <br />
                           <h2 className='text-2xl font-semibold'> </h2>It's essential to note that the NFT space is dynamic, and business models may vary among different marketplaces. Additionally, emerging blockchains and technologies may bring further innovations to the NFT ecosystem.
                            <br />
                          {/* <h2 className='text-2xl font-semibold'>  Smart Contract Exploitation: </h2> Vulnerabilities in smart contracts can be exploited by malicious actors, leading to the loss of funds
                            <br /> */}
{/* 
                            <a href="https://metamask.io/download/"><button className='bg-green-400 text-white font-bold py-2  px-4 rounded-3xl  '>Metamask Download</button></a>
                            Web3 Wallet.


                            <div className='flex  justify-center py-10 '>


                                <iframe className='rounded-3xl' width="560" height="315" src="https://www.youtube.com/embed/YVgfHZMFFFQ?si=KhokHurHBUd4w57i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



                            </div> */}



                            {/* and another <a className='text-3xl text-green-600 ' href="https://andersbrownworth.com/blockchain/public-private-keys/">here </a>
                            How to get your wallet: Step-by-step guideline

                            Be aware: this wallet is not hosted by yourself, therefore it is perfect to start, but if you want to go big, you have to get a new wallet */}

                        </AccordionBody>
                    </Accordion>





                    <Accordion open={open === 8}>
                        <AccordionHeader
                            onClick={() => handleOpen(8)}
                            className="bg-sky-800 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2 text-xl"
                        >
                    Important Links
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                            <h2 className='text-2xl font-semibold'>OpenSea-</h2>
                           <h2 className='text-2xl font-semibold'>.</h2> When minting an NFT, you can embed terms in the smart contract, such as royalties for the creator on secondary sales. Make sure to understand and set these terms appropriately.
                           <a href="https://opensea.io"><button className='bg-green-400 text-white font-bold py-2  px-4 rounded-3xl  '>Opensea</button></a>
                            <br />
                           <h2 className='text-2xl font-semibold'> Rarible- </h2>Rarible is a decentralized NFT marketplace that allows users to create, buy, and sell NFTs. It operates on the Ethereum blockchain.
                      
                            <a href="https://rarible.com"><button className='bg-green-400 text-white font-bold py-2  px-4 rounded-3xl  '>Rarible</button></a>

                            <h2 className='text-2xl font-semibold'>SuperRare- </h2>SuperRare is a marketplace specifically for digital art NFTs. It focuses on curated, limited-edition pieces created by artists.
                         
                            <a href=" https://superrare.com"><button className='bg-green-400 text-white font-bold py-2  px-4 rounded-3xl  '>SuperRare</button></a>

                            <h2 className='text-2xl font-semibold'> Nifty Gateway- </h2>Nifty Gateway is an NFT marketplace known for collaborating with well-known artists and musicians to release exclusive digital collectibles. 
                         
                            <a href="https://www.niftygateway.com"><button className='bg-green-400 text-white font-bold py-2  px-4 rounded-3xl  '>Nifty Gateway</button></a>
{/* 
                            <a href="https://metamask.io/download/"><button className='bg-green-400 text-white font-bold py-2  px-4 rounded-3xl  '>Metamask Download</button></a>
                            Web3 Wallet.


                            <div className='flex  justify-center py-10 '>


                                <iframe className='rounded-3xl' width="560" height="315" src="https://www.youtube.com/embed/YVgfHZMFFFQ?si=KhokHurHBUd4w57i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



                            </div> */}



                            {/* and another <a className='text-3xl text-green-600 ' href="https://andersbrownworth.com/blockchain/public-private-keys/">here </a>
                            How to get your wallet: Step-by-step guideline

                            Be aware: this wallet is not hosted by yourself, therefore it is perfect to start, but if you want to go big, you have to get a new wallet */}

                        </AccordionBody>
                    </Accordion>




                </>




                <div className='flex flex-row justify-center'>
                    <Link to="/CryptoAdventCalendar" >
                        <button className=' bg-sky-800 text-3xl font-bold text-gray-200  py-4 px-7 rounded-3xl my-7 '>Let's Open New Doors</button>
                    </Link>
                </div>



                <Footer></Footer>
            </div>


        </div>
    )
}

export default ADoor5