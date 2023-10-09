import React from 'react';
import { ReceiverGift } from '../assets/Images';

const GiftDetails = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-6 bg-gray-100 rounded-lg shadow-lg">
    {/* Left Section */}
    <div className="md:w-1/2 mb-4 md:mb-0">
      {/* Insert Unsplash Images */}
      <img
        src={ReceiverGift}
        alt="Gift Box"
        className="w-full rounded-3xl h-auto "
      />
    </div>
    {/* Right Section */}
    <div className="md:w-1/2 md:ml-4">
      {/* Gift Details */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          What do the receivers get?
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          MyWeb3Gift provides an accessible and engaging entry point into the world of cryptocurrencies and blockchain technology.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          Our gifts offer a unique gifting experience that combines education and surprises.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          You will delight your recipients with NFT art, gaming characters, and exclusive perks as they progress through the learning journey.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          They’ll get hands-on experience with blockchain technology, do their first transactions, and NFT mints in a guided way without putting up their funds.
        </p>
        <p className="text-gray-600 text-lg mb-6">
          They’ll experience the magic of blockchain in an entertaining 25-day journey.
        </p>
      </div>
      {/* Gift Contents */}
      <div className="mt-6">
        <div className="flex flex-wrap justify-between">
          {/* Perks */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">2 Perks from Partners</p>
            </div>
          </div>
          {/* Learnings */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">25 Learnings</p>
            </div>
          </div>
          {/* Art NFTs */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">5 Art of KI generated NFTs</p>
            </div>
          </div>
          {/* Gaming NFTs */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">3 Gaming NFTs</p>
            </div>
          </div>
          {/* Wallet */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">1 Wallet</p>
            </div>
          </div>
          {/* Learning Access */}
          <div className="w-full md:w-1/2 mb-4">
            <div className="flex items-center">
              <span className="text-3xl mr-2">&#9733;</span>
              <p className="text-gray-800 text-lg font-semibold">Lifelong Access to an extensive learning section</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default GiftDetails;
