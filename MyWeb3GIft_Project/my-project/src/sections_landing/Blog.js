import React from "react";
import { Link } from "react-router-dom";


const Blog = () => {
  return (
    <>
      <section className="pt-20 pb-10 w-full bg-gray-50 flex justify-center dark:bg-sky-950 dark:text-white lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2  text-lg font-semibold text-primary">
                  {/* Our Blogs */}
                </span>
                <h2 className="font-bold text-4xl sm:text-5xl mt-10 mb-2  text-dark  md:text-[50px]">
                Our Recent Blogs
                </h2>

                <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-sky-950 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-sky-950 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-sky-950"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-sky-950 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-sky-950 ml-1"></span>
                </div>
                <p className="text-base sm:text-2xl text-body-color">
                 
                </p>
              </div>
            </div>
          </div>


          <div className="flex flex-wrap -mx-4">
            <Link to="/Blog1" className="w-full md:w-1/2 lg:w-1/3">
              <BlogCard
                // date="Dec 22, 2023"
                CardTitle="Our gift boxes greatly reduce onboarding
                complexity and time"
                CardDescription="Read how we hold people’s hand during their
                first steps in the space..."
                image="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Link>
            <Link to="/Blog2" className="w-full md:w-1/2 lg:w-1/3">
              <BlogCard
                // date="Dec 22, 2023"
                CardTitle="Exploring the Gifting Experience and Our
                Products"
                CardDescription="Find out what your recipient can truly expect
                when receiving one of our calendars or gift
                boxes..."
                image="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Link>
            <Link to="/Blog3" className="w-full md:w-1/2 lg:w-1/3">
              <BlogCard
                // date="Dec 22, 2023"
                CardTitle="Our products are still in an experimental
                phase"
                CardDescription="Read how we plan to reward early users..."
                image="https://images.unsplash.com/photo-1580894723150-0ff6e9b907ea?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 ">
        <div className="mx-auto mb-10 max-w-[370px]   hover:scale-110 hover:bg-slate-50 hover:shadow-2xl hover:rounded-2xl  ">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="Easy Web3 Onboarding" className="w-full" loading="lazy"/>
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
            <p className="text-base  text-body-color">{CardDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};
