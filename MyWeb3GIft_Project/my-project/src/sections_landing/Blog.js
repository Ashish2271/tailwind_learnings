import React from "react";


const Blog = () => {
  return (
    <>
      <section className="pt-20 pb-10 w-full bg-gray-50 flex justify-center dark:bg-gray-800 dark:text-white lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2  text-lg font-semibold text-primary">
                  {/* Our Blogs */}
                </span>
                <h2 className="mb-4   font-bold text-dark  md:text-[50px]">
                Our Recent Blogs
                </h2>
                <p className="text-base sm:text-2xl text-body-color">
                 
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Navigating the Crypto Maze: A Beginner's Guide"
              CardDescription="Discover the fundamentals of blockchain and cryptocurrencies in this comprehensive guide, perfect for crypto newcomers."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="The Art of Gifting Crypto: A Unique Experience"
              CardDescription="Explore the world of crypto gifts and learn how to surprise your loved ones with personalized digital assets."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Behind the Scenes: Crafting MyWeb3Gift's Crypto Calendars"
              CardDescription="Take a peek into the creative process and technology that powers our engaging Crypto Christmas Calendars."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
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
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                {date}
              </span>
            )}
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
