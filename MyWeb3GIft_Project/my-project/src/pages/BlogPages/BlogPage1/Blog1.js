import React from 'react'
import { Link } from 'react-router-dom'
import { ReduceTime, stepsr, Time, LinkedIn, ProfilePicValerio } from '../../../assets/Images/Blog/Blog1'

const Blog1 = () => {
    return (
        <div className=''>


            <div className='h-[30vh] ' >
                <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-[30vh]  object-cover w-screen  ' alt="Blockchain Transaction" />

            </div>

            <div className='mx-auto w-full leading-10 max-w-2xl'>



                <h1 className='text-4xl py-9 font-bold'>Holding your hand during the first steps on the stairs.</h1>

                <h2 className='text-xl py-10 text-gray-500 font-semibold' >How long did it take for you to go from learning about blockchain to completing your first transaction?</h2>
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




                    <div>




                        <p className='py-10 mx-auto'>
                            It took me over two years to finally make a transaction on the blockchain. In the beginning, I spent a year trading Bitcoin and Ethereum with things that only displayed their value but were not actually traded on the blockchain. However, I befriended someone through my sons and every Thursday at the playground, he shared exciting and crazy stories about the blockchain world and the latest things he had tried. It was hard for me to believe, so I simply listened for a year.
                        </p>


                        <div className='flex justify-center items-center' ><img className='rounded-2xl' width={1050} src={stepsr} alt="MyWeb3Gift Steps" /></div>


                        <p className='py-10 mx-auto'>
                            After much consideration, I finally decided to try my hand at trading on the blockchain. However, I soon realized that it was more complicated than I initially thought. First, I had to determine which blockchain was the best one to use. Unfortunately, there were a lot of varying opinions on the matter, with both positive and negative experiences being shared about each one.
                        </p>

                        <p className='py-10 mx-auto'>
                            Eventually, with the help of a new friend, I was able to select a blockchain to use. The next step was to set up a wallet, which proved to be a challenge. There were many wallet options available, but I found stories online of people losing their money, which only added to my confusion. Thanks to my friend, I was able to choose a wallet that felt safe and secure.
                        </p>


                        <p className='py-10 mx-auto'>
                            He also guided me on how to fund my wallet. After researching centralized exchanges, I felt uneasy about using them to exchange cryptocurrency. I remember feeling anxious when I sent my first payment from the centralized exchange to the self-custody wallet I had just acquired.

                            <br />

                            Moving money from Ethereum Mainnet to another chain called Polygon, which is a side chain, was a bit scary. While the side chain was faster and cheaper than the Mainnet, I initially thought I had lost the funds. It took me a while to figure out that I needed to manually include the side chain in my wallet to see the funds. The user experience wasn't great.

                        </p>
                        <p className='py-10 mx-auto'>
                            Once the funds were visible, I was faced with the tough decision of finding the right and safe project to invest in. It's a challenge to navigate the blockchain space due to the many legitimate projects as well as scams.
                            <br />

                            Going through all that hassle, I realized that there must be an easier way to invest in blockchain projects. While things have changed since then, the blockchain space remains both a confusing place with high entry barriers and a magical place worth exploring.

                        </p>
                        <p className='py-10 font-semibold mx-auto'>
                            Unfortunately, not everyone is fortunate enough to have an experienced friend to guide them through the onboarding process and help them take their first steps in a new space. That's why our goal is to develop a tool that can provide a similar experience.
                        </p>

                        <div className='flex justify-center items-center'>
                            <img src={Time} className='rounded-xl' alt="Web3 Onboarding Time" />
                        </div>


                        <p className='py-10 font-semibold mx-auto'>
                            After much effort and numerous attempts, we have finally designed our gift boxes that include all the necessary information and tools to begin in a straightforward, enjoyable, and secure manner. Our hope is that after making their first purchase, your gift recipient will also become a loyal customer.
                        </p>

                        <div className='flex justify-center items-center'>
                            <img src={ReduceTime} className='rounded-xl shadow-2xl' alt="Web3 Platform" /></div>

                    </div>

                    <div className='w-full bg-gray-300 h-2 my-8'></div>

                    <div className='h-auto font-semibold my-20 '>

                        <p className='my-6'>Read More Blogs...</p>
                        <div className=' grid grid-cols-2 '>
                            <Link to="/Blog2" className="w-full ">
                                <BlogCard
                                    // date="Dec 22, 2023"
                                    CardTitle="Exploring the Gifting Experience and Our
                                    Products"
                                    CardDescription="Find out what your recipient can truly expect
                                    when receiving one of our calendars or gift
                                    boxes."
                                    image="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default Blog1




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
