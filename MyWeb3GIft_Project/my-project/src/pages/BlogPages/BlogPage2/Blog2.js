import React from 'react'
import { Link } from 'react-router-dom'
import { LinkedIn, ProfilePicValerio } from '../../../assets/Images/Blog/Blog1'
import { Door, PlanCalendar } from '../../../assets/Images/Blog/Blog2'


const Blog2 = () => {
    return (
        <div className=''>


            <div className='h-[30vh] ' >
                <img src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-[30vh]  object-cover w-screen  ' alt="Blockchain Transaction" />

            </div>

            <div className='mx-auto w-full leading-10 max-w-2xl'>



                <h1 className='text-4xl py-9 font-bold'>Exploring the Gifting Experience and Our Products</h1>

                <h2 className='text-xl py-10 text-gray-500 font-semibold' >Gifting and Gift Opening Experience</h2>
                <hr />

                <div className='my-4'>
                    <div class=" flex  justify-between ">

                        <div className='flex items-center space-x-4'>  <img class="w-10 h-10 rounded-full" src={ProfilePicValerio} alt="Valerio Jacobi" />
                            <div class="font-medium dark:text-white">
                                <div>Valerio Jacobi</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">myweb3gift@gmail.com</div>
                            </div></div>

                        <a href="https://www.linkedin.com/in/valerio-jacobi-6b4a0826/">

                            <div className='w-12'> <img src={LinkedIn} alt="Valerio Jacobi" /></div>
                        </a>

                    </div>
                </div>
                <hr />

                <div className='flex text-xl  justify-center items-center flex-col'>




                    <div className='mx-auto w-full leading-10 max-w-2xl'>




                        <p className='py-10 mx-auto'>
                            You might be wondering what your recipient can truly expect when receiving one of our calendars or
                            gift boxes. While we won&#39;t disclose all the details, we&#39;d like to provide you with a glimpse.
                        </p>





                        <p className='py-10 mx-auto'>
                            As stated on our website, you can deliver the access voucher, containing the barcode or link, via
                            email through our website or in person by printing the voucher in advance. If feasible, we
                            recommend printing the voucher, wrapping it like a present, and personally handing it over. This
                            approach offers the recipient both a physical and digital gift-opening experience. This way, they can
                            enjoy unwrapping the gift twice, enhancing their curiosity between the two experiences.
                        </p>

                        <p className='py-10 mx-auto'>
                            Following the digital gift-opening experience, presented as a digital animation, the recipient will
                            encounter a calendar akin to what is described here (please note: the real design won&#39;t be revealed
                            as our designs vary across products). This description is merely to help you visualize it more clearly.
                        </p>

                        <div className='flex justify-center items-center' ><img className='rounded-2xl' width={1050} src={PlanCalendar} alt="Web3Gift Gift Calendar" /></div>



                        <p className='py-10 mx-auto'>
                            The recipient can then click on the doors to open them, one by one, in a specific order. The doors are
                            arranged so that their content builds upon each other.

                            <br />

                            An exemplary door (not a real door):

                        </p>


                        <div className='flex justify-center items-center' ><img className='rounded-2xl' width={1050} src={Door} alt="MyWeb3Gift Steps" /></div>



                        <h1 className='font-bold mt-14  '>Learning</h1>
                        <p className='py-1 mx-auto'>
                            Each door contains a brief theoretical lesson about blockchain. Over 24 days, various topics will be
                            covered, including wallets, different chains, token types, stablecoins, earning opportunities, NFTs,
                            security, use cases, Layer 2s, interoperability, DAOs, reading Blockchain scanners like Etherscan, and
                            more.
                        </p>



                        <h1 className='font-bold mt-14  '>Transacting at no cost</h1>
                        <p className='py-1  mx-auto'>
                            However, we don’t want the recipients to just read; we want them to take action. Therefore, some
                            doors will present quick tasks. For instance, one of the initial doors will contain a link to generate a
                            self-custody wallet, while another door will offer a link to mint an NFT. Additional transactions will
                            follow, some even on the Testnet.
                        </p>



                        <p className='py-6  mx-auto'>
                            MyWeb3Gift will cover the transaction costs. Depending on the transaction, we’ll either send the
                            recipients some funds, or the smart contract will be set up to pay transaction costs from our
                            corporate wallet. To ensure a seamless user experience without slow transaction speeds we build on
                            Ethereum Layer 2 solutions.
                        </p>

                        {/* <div className='flex justify-center items-center'>
                            <img src="" className='rounded-xl' alt="Web3 Platform" /></div> */}






                        <p className='py-6 font-semibold mx-auto'>
                            In our opinion the practical doing is even more important than the theoretical one. This is where the
                            magic is passed on.
                        </p>


                        <h1 className='font-bold mt-14  '>Receiving benefits</h1>
                        <p className='pb-6  mx-auto'>
                            Alongside theoretical and practical knowledge, we aim for the recipient to receive (for free) their first
                            digital assets, goodies, and perks. To achieve this, we&#39;ve designed our own digital assets and initiated
                            collaborations with established projects and companies in the industry. Our partners include
                            educators, decentralized and centralized exchanges, crypto event organizers, NFT platforms or
                            artists, specific chains or projects, and providers of physical or &#39;phygital&#39; goods. Consequently,
                            benefits can range from art NFTs, gaming NFTs, discounted physical crypto-related products, to
                            discounted or free tickets, sign-up bonuses, and more.
                        </p>

                        <p className='py-4  mx-auto'>
                            The contents of our gift boxes are subject to change and may vary from user to user. The intention is
                            to make the experience enjoyable.
                        </p>


                        <h1 className='font-bold mt-14  '>Personal progress with 5 minutes a day</h1>

                        <p className='pb-4  mx-auto'>Each door&#39;s content is designed to be easily digestible within a 5-minute window each day. We
                            believe that spending more than 5 minutes a day might feel like work for many. However, we also
                            provide links for those who wish to delve deeper into a specific topic or day.</p>



                        <p className='py-4 mx-auto'>By the end of this journey, we believe users will possess more blockchain knowledge than 95% of the
                            population. For those who wish to stay engaged, we are developing a thoughtfully curated learning
                            section that will offer lifelong access to both gifters and recipients. This section aims to facilitate a
                            comprehensive review or exploration of a wide array of blockchain-related topics without the need
                            to search for sources. It will be consistently updated, offering our users to benefit unlimitedly.</p>


                        <p className='py-4 mx-auto'>Many discuss crypto, but only a relatively small group has conducted a real transaction. Our users will
                            be one step ahead. We believe that most individuals who transact on a blockchain tend to remain in
                            this space.</p>

                        <p className='py-4 font-semibold mx-auto'>But ultimately, the most significant aspect is that a part of the blockchain magic we experience is
                            passed on to the recipient.</p>




                    </div>

                    <div className='w-full bg-gray-300 h-2 my-8'></div>

                    <div className='h-auto font-semibold my-20 '>

                        <p className='my-6'>Read More Blogs...</p>
                        <div className=' grid grid-cols-2 '>
                            <Link to="/Blog1" className="w-full ">
                                <BlogCard
                                    // date="Dec 22, 2023"
                                    CardTitle="Our gift boxes greatly reduce onboarding
                            complexity and time"
                                    CardDescription="Read how we hold people’s hand during their
                            first steps in the space."
                                    image="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                            </Link>
                            <Link to="/Blog3" className="w-full ">
                                <BlogCard
                                    // date="Dec 22, 2023"
                                    CardTitle="Our products are still in an experimental
                            phase."
                                    CardDescription="Read how we plan to reward early users."
                                    image="https://images.unsplash.com/photo-1580894723150-0ff6e9b907ea?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog2









const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
    return (
        <>
            <div className="w-full px-4 ">
                <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded">
                        <img src={image} alt="Easy Web3 Onboarding" className="w-full" loading="lazy" />
                    </div>
                    <div>
                        {/* {date && (
                <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                  {date}
                </span>
              )} */}
                        <h3>
                            <a
                                href="/#"
                                className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                            >
                                {CardTitle}
                            </a>
                        </h3>
                        <p className="text-base text-body-color">{CardDescription}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
