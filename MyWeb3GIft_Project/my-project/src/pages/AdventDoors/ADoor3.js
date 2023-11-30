import React from 'react'
import { Link } from 'react-router-dom';
import Nav01 from '../../Components/Nav01';
import { Footer } from '../../sections_landing';
import { Day2NFTMint } from '../../assets/Images/Doors';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";




const ADoor3 = () => {


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
                            <h1 className="text-5xl font-bold my-10 text-black max-md:text-3xl  ">NFT-  Non Fungible-Token </h1>

                            <p className="text-2xl leading-10 my-10 text-black " >
                                Non-Fungible Tokens, or NFTs, are unique digital assets that utilize blockchain technology to represent ownership of a specific item, typically digital content such as art, music, videos, or virtual real estate. In contrast to cryptocurrencies like Bitcoin or Ether, NFTs, in their pure form, are indivisible and cannot be exchanged on a one-to-one basis. Each NFT possesses a distinct value (often close to zero) and information that sets it apart, rendering it one-of-a-kind and easily verifiable on the blockchain. NFTs have gained significant popularity in the realm of digital art and collectibles, offering creators and collectors a novel way to buy, sell, and trade unique digital assets with proof of ownership and authenticity recorded on the blockchain.
                                <br />
                                <span className='py-4  my-3'>Minting an NFT involves creating a unique digital asset and associating it with a blockchain, typically using a smart contract. Here's a basic overview of the process and some important considerations:</span>
                            </p>
                        </div>


                        {/* <div>
                        <img className="rounded-full max-w-[400px] max-md:w-[300px] mx-auto " src="https://img.freepik.com/free-psd/3d-nft-icon-digital-wallet_629802-10.jpg?w=826&t=st=1701280204~exp=1701280804~hmac=4e890ce460324ab760e93f6c2855eb36812c2b1f32b0cebd181919a41e8f9223" alt="Wallets" />
                    </div> */}


                        <div className='flex justify-center  mx-auto'>
                            <img className=" max-w-[400px] max-sm:w-60 rounded-full mx-auto " src="https://img.freepik.com/free-vector/flat-futuristic-nft-concept_23-2148936480.jpg?w=1380&t=st=1701294347~exp=1701294947~hmac=43e919c8b60e2136c43d983ad0b7525e18339f4c4e1580d4c73b967c08212fc0" alt="Wallets" />
                        </div>



                    </div>

                    <div className='flex flex-row justify-center'>
                        <img className="rounded-3xl" src={Day2NFTMint} alt="" />
                    </div>

                    <span className='text-3xl font-bold '>In Next Door You will mint NFT with your web3 wallet, now read more about NFT's</span>

                </div>


                <>
                    <Accordion open={open === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="bg-blue-500 text-white py-4 px-5 cursor-pointer rounded-t-md text-xl"
                        >
                            Choose a Blockchain
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">

                            Most NFTs are currently created on blockchain platforms like Ethereum, Binance Smart Chain, Solana, or others. Ethereum is the most popular for NFTs, but other blockchains may offer different features and lower transaction fees.

                            <br />

                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 2}>
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="bg-green-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2 text-xl"
                        >
                            Create Digital Art or Content
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                            This is the core of your NFT. It could be digital art, music, videos, virtual real estate, or any other digital asset.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 3}>
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className="bg-purple-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2 text-xl"
                        >
                            Metadata
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                            Prepare metadata for your NFT, including information about the digital asset, such as title, description, and any other relevant details. This metadata is usually stored off-chain and linked to the NFT via the blockchain.

                            <br />


                        </AccordionBody>
                    </Accordion>


                    <Accordion open={open === 4}>
                        <AccordionHeader
                            onClick={() => handleOpen(4)}
                            className="bg-blue-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2  text-xl"
                        >
                            Minting
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                            Use a platform or a smart contract to mint your NFT. Minting involves creating a unique token on the blockchain and associating it with your digital asset. During this process, you might set parameters like the number of editions (if it's a limited edition), royalties for the creator on future sales, etc.
                        </AccordionBody>
                    </Accordion>

                    <Accordion open={open === 5}>
                        <AccordionHeader
                            onClick={() => handleOpen(5)}
                            className="bg-yellow-400 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2 text-xl"
                        >
                            Wallets managed by someone else:
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                            <h2 className='text-2xl font-semibold'>Fake NFT Listings:</h2> Scammers may create counterfeit NFT listings
                            <br />
                           <h2 className='text-2xl font-semibold'> Phishing Scams:</h2> Phishing attacks can trick users into providing their private keys or other sensitive information.
                            <br />
                           <h2 className='text-2xl font-semibold'> Ponzi Schemes:</h2> Some scammers set up NFT investment schemes, promising high returns to early investors.
                            <br />
                           <h2 className='text-2xl font-semibold'> Stolen Artwork:</h2> Scammers might steal digital artwork and tokenize it as an NFT without the creator's consent.
                            <br />
                          <h2 className='text-2xl font-semibold'>  Front-Running Transactions:</h2> In the context of NFT drops or releases, scammers might use insider information to execute transactions before the public, taking advantage of price fluctuations and leaving others at a disadvantage.
                            <br />
                           <h2 className='text-2xl font-semibold'> Misleading Metadata:</h2> Scammers may manipulate metadata associated with NFTs, presenting false information
                            <br />
                          <h2 className='text-2xl font-semibold'>  Smart Contract Exploitation: </h2> Vulnerabilities in smart contracts can be exploited by malicious actors, leading to the loss of funds
                            <br />
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





                    <Accordion open={open === 6}>
                        <AccordionHeader
                            onClick={() => handleOpen(6)}
                            className="bg-sky-800 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2 text-xl"
                        >
                    Important Considerations
                        </AccordionHeader>
                        <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
                            <h2 className='text-2xl font-semibold'>Copyright and Intellectual Property</h2> The act of creating an NFT doesn't inherently transfer copyright or intellectual property rights. The creator or rights holder maintains these rights unless explicitly transferred or licensed.
                            <br />
                           <h2 className='text-2xl font-semibold'>Smart Contract Terms</h2> When minting an NFT, you can embed terms in the smart contract, such as royalties for the creator on secondary sales. Make sure to understand and set these terms appropriately.
                            <br />
                           <h2 className='text-2xl font-semibold'> Environmental Impact</h2>The energy consumption of blockchain networks, especially Ethereum, has raised concerns. Consider the environmental impact when choosing a blockchain for minting your NFT.
                            <br />
                          
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

export default ADoor3