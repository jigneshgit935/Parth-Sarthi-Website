'use client';

import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import MoveImage from '../../public/images/company-overview-move.jpg';
import Image from 'next/image';

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="px-5 md:px-[70px] md:py-[80px] py-10 ">
        <div className="flex flex-col lg:flex-row justify-between py-5  relative">
          <div className="flex-1">
            <div>
              <h2 className="text-2xl font-bold">
                AWARD-WINNING <br /> COMPANY
              </h2>
              <p className="text-[15px] mt-4 font-bold text-[#C4956A]">
                OUR VALUE PROPOSITION IS ACCURACY AND CONVENIENCE
              </p>
            </div>
            <div className="hidden lg:block">
              <Image
                src={MoveImage}
                alt="move-image"
                className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  absolute object-fill"
              />
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="flex justify-center items-center flex-col gap-6 ">
                <div className="w-[300px]">
                  <div className="flex gap-3 items-center ">
                    <h1 className="text-[60px] font-bold">
                      {counterOn && (
                        <CountUp start={0} end={32} duration={2} delay={0} />
                      )}
                    </h1>
                    <h3 className="text-[18px] font-semibold  border-b-[6px] border-[#C4956A]">
                      Years
                    </h3>
                  </div>
                  <p className="text-[15px] font-medium">
                    We have been working in the industry since 1990.
                  </p>
                </div>
                <div className="w-[300px]">
                  <div className="flex gap-3 items-center ">
                    <h1 className="text-[60px] font-bold">
                      {counterOn && (
                        <CountUp start={0} end={30} duration={2} delay={0} />
                      )}
                    </h1>
                    <h3 className="text-[18px] font-semibold  border-b-[6px] border-[#C4956A]">
                      Million Sqft
                    </h3>
                  </div>
                  <p className="text-[15px] font-medium">
                    15700 units delivered and under construction
                  </p>
                </div>
                <div className="w-[300px]">
                  <div className="flex gap-3 items-center ">
                    <h1 className="text-[60px] font-bold">
                      {counterOn && (
                        <CountUp start={0} end={132} duration={2} delay={0} />
                      )}
                    </h1>
                    <h3 className="text-[18px] font-semibold border-b-[6px] border-[#C4956A]">
                      AWARDS
                    </h3>
                  </div>
                  <p className="text-[15px] font-medium">
                    Raheja has been awarded for constuction many times.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <button className="py-3 px-[55px] bg-[#C4956A]">Contact</button>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
