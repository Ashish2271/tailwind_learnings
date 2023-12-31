import React, { useState } from 'react';
import { useApproval } from '../states/ApprovalContext';
import { useNavigate } from 'react-router-dom';

const Modal = ({ onAccept, componentIdentifier }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isApproved } = useApproval();
  const navigate = useNavigate()
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    if (onAccept) { // Change onClick to onAccept
      onAccept(componentIdentifier); // Pass the component identifier as an argument
    }
  };
  console.log('wow',isApproved)
  const handleBuyButtonClick = () => {
    if (isApproved === undefined) {
      // Open the modal
      openModal();
    } else if (isApproved === false) {
      // Redirect to /claimgifts
      navigate('/claimgifts');
    } else {
      // Redirect to /gifts
      navigate('/gifts');
    }
  };

  return (
    <div>
      <button
       onClick={handleBuyButtonClick}
        className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Buy
      </button>

      {isModalOpen && (
        <div className="fixed backdrop-blur-xl bg-white/30 top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <div className="w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  🎉 Early Adopter Special Offer! 🎁
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover-bg-gray-600 dark:hover-text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-6 space-y-6">
                  <h2 className="font-bold text-black">Why Grab It Now?</h2>
                <p className="text-base leading-relaxed text-gray-500 dark-text-gray-400">
                  ✨ Be ahead of the crowd: Secure your unique gift calendar today and be the first to receive it. <br />
                  🎁 Perfect presents: Surprise your friends and family with an educational and entertaining gift.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark-text-gray-400">
                Please note that you will receive your Crypto Christmas Calendar by the end of November.
                </p>
              </div>

              <div className="p-6 space-y-6">
                <h1 className="font-bold">Hurry, Limited Time Offer!</h1>
                <p className="text-base leading-relaxed text-gray-500 dark-text-gray-400">
                  Don't miss this opportunity to dive into the world of crypto while spreading joy to your loved ones.
                </p>
              </div>

              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark-border-gray-600">
                <button
                  onClick={handleClick}
                  type="button"
                  className="text-white bg-yellow-500 hover-bg-yellow-600 focus-ring-4 focus-outline-none focus-ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-yellow-600 dark-hover-bg-yellow-500 dark-focus-ring-yellow-600"
                >
                  I accept 🙂
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
