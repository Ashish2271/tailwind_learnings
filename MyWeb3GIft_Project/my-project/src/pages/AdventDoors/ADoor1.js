import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import Nav01 from '../../Components/Nav01';
import { Footer } from '../../sections_landing';


// import { ConnectWallet } from '@thirdweb-dev/react';


import { Day1Wallet } from '../../assets/Images/Doors';



const ADoor1 = () => {

    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div>
            <Nav01></Nav01>
            <div className="bg-sky-950 h-[90px] w-screen"></div>




            <div className="min-h-screen min-w-full bg-gray-50 px-7 py-6">
                {/* <div className="my-5 flex max-h-32 max-w-[180px] gap-3 items-center justify-center rounded-3xl  hover:border-2 hover:border-white   hover:bg-sky-600  bg-sky-500 font-bold text-gray-100">
                    <img src="https://cdn-icons-png.flaticon.com/512/3757/3757881.png" className="h-14 w-14" alt="" />
                    My Wallet
                </div> */}


                <div className="flex flex-row  max-md:flex-wrap">

                    <div>
                        <h1 className="text-5xl font-bold my-10 text-black max-md:text-3xl  ">Wallet</h1>

                        <p className="text-2xl leading-10 my-10 text-black " >
                            A wallet is the most essential thing to have to own digital assets. However, the wallet does not hold the digital asset, like a physical wallet holds a $10 bill; instead, it contains a set of private and public keys (essentially numbers). These keys are necessary to firstly derive an address for receiving funds (the wallet address) and secondly to send funds to another wallet address. This is accomplished by signing a transaction with the private key and making the public key available to others (e.g., miners, stakers, or network participants) to verify that the sender has the proper private key. It's important never to disclose the keys to anyone who should not have access to the digital assets.
                            <br />
                            <span className='py-4  my-3'>There are several options to store the private/public keys:</span>
                        </p>
                    </div>


                    {/* <div>
                        <img className="rounded-full max-w-[400px] max-md:w-[300px] mx-auto " src="https://img.freepik.com/free-psd/3d-nft-icon-digital-wallet_629802-10.jpg?w=826&t=st=1701280204~exp=1701280804~hmac=4e890ce460324ab760e93f6c2855eb36812c2b1f32b0cebd181919a41e8f9223" alt="Wallets" />
                    </div> */}


                    <div className='flex justify-center mx-auto'>
                        <img className=" max-w-[400px] max-sm:w-60  mx-auto " src="https://images.ctfassets.net/c5bd0wqjc7v0/75ARaPo255qDPQsl1AzpdZ/792316d6f328d3e4e42e9bd51aae09e5/HERO_IMAGE.svg" alt="Wallets" />
                    </div>



                </div>

                <div className='flex flex-row justify-center'>
                    <img className="rounded-3xl" src={Day1Wallet} alt="" />
                </div>

<span className='text-3xl font-bold '>In Next Door You will get your web3 wallet, now read more click on every type of wallet.</span>

            </div>


            <>
  <Accordion open={open === 1}>
    <AccordionHeader
      onClick={() => handleOpen(1)}
      className="bg-blue-500 text-white py-4 px-5 cursor-pointer rounded-t-md text-xl"
    >
Software Wallets:
    </AccordionHeader>
    <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">

    Desktop or mobile wallets are installed on a computer, laptop, smartphone, or tablet. 
Online Wallets: Web-based wallets that you can access through a browser. 
Both types are connected to the internet and can, therefore, be exploited, allowing for the theft of keys or phishing attacks.
    </AccordionBody>
  </Accordion>

  <Accordion open={open === 2}>
    <AccordionHeader
      onClick={() => handleOpen(2)}
      className="bg-green-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2 text-xl"
    >
    Hardware Wallets:
    </AccordionHeader>
    <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
    Physical devices that store cryptocurrency offline. They are considered more secure than software wallets because they are less susceptible to hacking.
    </AccordionBody>
  </Accordion>

  <Accordion open={open === 3}>
    <AccordionHeader
      onClick={() => handleOpen(3)}
      className="bg-purple-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2 text-xl"
    >
   Paper Wallets:
    </AccordionHeader>
    <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
    A physical document containing your cryptocurrency address and private key, often in the form of QR codes.
    </AccordionBody>
  </Accordion>


  <Accordion open={open === 4}>
    <AccordionHeader
      onClick={() => handleOpen(4)}
      className="bg-blue-500 text-white py-4 px-5 cursor-pointer rounded-t-md mt-2  text-xl"
    >
    Brain Wallets:
    </AccordionHeader>
    <AccordionBody className="bg-gray-100 py-4 px-5 rounded-b-md text-lg">
    A type of wallet where the private key is memorized or derived from a passphrase. While this method is theoretically secure, it can be risky if the passphrase is not complex enough.
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
    Most people are not comfortable being responsible for their own wallets because if the private key is lost, access to most digital assets becomes impossible. Therefore, they appoint others to take over this duty. This can be risky, as seen in the case of FTX, where customers' funds were used by the wallet holder.

<hr />
To start and gain experiance we recommand to use and software wallet one option can be found <a    className='text-3xl text-green-600 ' href="https://metamask.io/">Metamask here </a>  

<a href="https://metamask.io/download/"><button className='bg-green-400 text-white font-bold py-2  px-4 rounded-3xl  '>Metamask Download</button></a>
 Web3 Wallet.


<div className='flex  justify-center py-10 '>


<iframe className='rounded-3xl' width="560" height="315" src="https://www.youtube.com/embed/YVgfHZMFFFQ?si=KhokHurHBUd4w57i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



</div>


 and another <a className='text-3xl text-green-600 ' href="https://andersbrownworth.com/blockchain/public-private-keys/">here </a>
How to get your wallet: Step-by-step guideline

Be aware: this wallet is not hosted by yourself, therefore it is perfect to start, but if you want to go big, you have to get a new wallet

    </AccordionBody>
  </Accordion>

<div className='flex flex-row justify-center'>


<Link to="/CryptoAdventCalendar" >

<button className=' bg-sky-800 text-3xl font-bold text-gray-200  py-4 px-7 rounded-3xl my-7 '>Let's Open New Doors</button>

</Link>





</div>
<Footer></Footer>
</>


        </div>
    )
}

export default ADoor1