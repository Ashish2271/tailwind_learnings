import React, { useState, useEffect } from 'react';
import EmailModal from './EmailModal';

const CountDownTimer = () => {
  // Define the target date and time
  const targetDate = new Date('2023-12-01T10:00:00').getTime();

  // Initialize state for the countdown values
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        // Countdown has reached the target time
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div>
      <section className="py-8 bg-sky-950 bg-gradient dark:bg-gray-800 md:py-16">
        <div className="box-content max-w-5xl px-5 mx-auto">
          <div className="flex flex-col items-center -mx-5 md:flex-row">
            <div className="w-full px-5 mb-5 text-center md:mb-0 md:text-left">
              <h6 className="text-xs font-semibold text-yellow-200 uppercase md:text-base dark:text-gray-100">
                Launch Date
              </h6>
              <h3 className="text-2xl font-bold text-white font-heading md:text-4xl">
                December 1
              </h3>
              <h3 className="text-lg font-bold leading-tight text-white font-heading md:text-xl">
                @ 10:00 AM
              </h3>
              <div className="w-full mt-4 md:w-44">
               

                <EmailModal label="EARLY BIRD"   className="py-2 px-4  bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-200 focus:ring-offset-indigo-200  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg " />


              </div>
            </div>
            <div className="w-full px-5 md:w-auto">
              <div className="flex justify-center text-center text-white">
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>{days}</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75">Day</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>{hours}</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75">Hour</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>{minutes}</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75">Min</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    <span>{seconds}</span>
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75">Second</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountDownTimer;
