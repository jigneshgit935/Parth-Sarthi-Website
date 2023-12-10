import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const OverView = ({ image }) => {
  return (
    <>
      <div>
        <Image
          src={image}
          alt="company-overview"
          className="w-full h-[100%] lg:h-[500px] object-cover"
        />
      </div>
      <div className="bg-white py-5">
        <ul className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <li>
            <Link
              href="company-overview"
              className="text-sm md:text-[15px] border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
            >
              COMPANY OVERVIEW
            </Link>
          </li>
          <li>
            <Link
              href="company-vision"
              className="text-sm md:text-[15px] border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
            >
              VISION
            </Link>
          </li>
          <li>
            <Link
              href="company-logo"
              className="text-sm md:text-[15px] border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
            >
              ABOUT LOGO
            </Link>
          </li>
          <li>
            <Link
              href="company-awards"
              className="text-sm md:text-[15px] border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
            >
              HONORS & AWARDS
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OverView;
