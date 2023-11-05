import React from 'react'
import { Link } from 'react-router-dom'
import { LinkedIn, ProfilePicValerio } from '../../../assets/Images/Blog/Blog1'


const Blog3 = () => {
    return (
        <div className=''>


            <div className='h-[30vh] ' >
                <img src="https://images.unsplash.com/photo-1580894723150-0ff6e9b907ea?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-[30vh]  object-cover w-screen  ' alt="Blockchain Transaction" />

            </div>

            <div className='mx-auto w-full leading-10 max-w-2xl'>



                <h1 className='text-4xl py-9 font-bold'>Our gift boxes and calendars are currently in an experimental phase. </h1>

                <h2 className='text-xl py-10 text-gray-500 font-semibold' >Early users will be rewarded.</h2>
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
                            As stated in our initial article, our products are designed to resemble a friend that guides users
                            through the onboarding process, sitting beside them and providing support during their first steps in
                            this space.
                        </p>





                        <p className='py-10 mx-auto'>
                            A friendly and enjoyable experience knows no bounds. Consequently, our users&#39; expectations might
                            be high. We face the challenge of constraining an experience that potentially has no limitations.
                            Please bear in mind that we are just starting out; this marks our inaugural gifting season. Naturally,
                            we aim to meet our users&#39; expectations even in our current phase. Undoubtedly, our products and
                            the associated experience will significantly improve over the next few years.
                        </p>

                        <p className='py-10 mx-auto'>
                            Therefore, we plan to reward early users, both gifters and recipients, in the future. While the exact
                            reward is yet to be determined, options such as a substantial discount or even complimentary
                            products appear favorable.
                        </p>

                        <div className='flex justify-center items-center' ><img className='rounded-2xl' width={1050} src="https://images.unsplash.com/photo-1670782559267-d4c1ef138060?auto=format&fit=crop&q=80&w=1400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="MyWeb3Gift Steps" /></div>



                        <p className='py-10 mx-auto'>
                            We are also developing a thoughtfully curated learning section that will offer lifelong access to both
                            gifters and recipients.

                            <br />
                            If you, as an early user, have suggestions on how you would like to be rewarded, please reach out to
                            us. We are eager to listen and engage with our users.

                        </p>










                    





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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog3









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
