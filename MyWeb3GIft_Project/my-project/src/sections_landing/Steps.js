import React from 'react';
import { Surprise, Gift } from '../assets/Images';

const Steps = () => {
  return (
    <div className=" py-10">
      <section className="container mx-auto text-center">
        <div className="font-bold text-4xl sm:text-5xl mt-10 mb-2">How it works?
        <div class="text-center mb-10">
                    <span class="inline-block w-1 h-1 rounded-full bg-sky-950 ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-sky-950 ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-sky-950"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-sky-950 ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-sky-950 ml-1"></span>
                </div>
        </div>
        
        <div className="flex flex-col justify-center md:flex-row  gap-10 md:space-x-12">
          {/* Gifter Side */}
          <div className="text-center mx-3 bottom-2 border-indigo-800 mb-6 md:mb-0">
            <h2 className="text-2xl my-6 font-bold">
              Gifter
              <img src={Gift} className="w-8 inline-block ml-2" alt="Gift Icon" loading="lazy"/>
            </h2>
            <ol className="text-left leading-10 list-inside list-disc">
              <li>Select a gift box</li>
              <li>Add an optional personal message</li>
              <li>Choose how to hand it over:</li>
              <ul className="pl-6">
                <li>a. via email with a link/barcode</li>
                <li>b. in person with a printed card containing the link/barcode</li>
              </ul>
            </ol>
          </div>
          {/* Recipient Side */}
          <div className="text-center mx-3 ">
            <h2 className="text-2xl my-6 font-bold">
              Recipient 📲
              <img src={Surprise} className="w-8 inline-block ml-2" alt="Surprise Icon" loading="lazy" />
            </h2>
            <ol className="text-left leading-10 list-inside list-disc">
              <li>Use the link/barcode to access our redeem page</li>
              <li>Discover the personal message from the gifter</li>
              <li>Open one gift content per day for 24 days</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps;
