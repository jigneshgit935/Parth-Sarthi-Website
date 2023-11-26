import Link from 'next/link';
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { IoIosArrowDropright } from 'react-icons/io';

const AboutSection = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center text-start md:text-center px-5">
        <h1 className="text-3xl md:text-5xl font-bold text-[#C4956A]">
          Legacy Of Parth Sarthi
        </h1>
        <p className="mt-4 md:mt-10 w-[100%] max-w-[1000px] leading-7 px-0 md:px-10 xl:px-0">
          Parth Sarthi Developers is one of the largest Real Estate companies in
          India established in the year 1990 by Mr. Navin M. Raheja. The company
          has always maintained path breaking status and has pioneered various
          firsts in India. From trend setting luxury housing to providing homes
          for the poorest section of Indian society, from India’s tallest
          skyscrapers to 165 acres of plotted township, from changing the way
          people shop to changing the way people work, We have achieved it all.
        </p>
      </div>

      <div className="flex flex-row justify-center items-center gap-5 py-4 mt-4 md:mt-10">
        <Link href={'/about'}>
          <button className="px-6 py-3 border border-black/5">
            Read More <br />
            <span>
              <IoIosArrowDropright
                className="mx-auto text-black/80"
                size={28}
              />
            </span>
          </button>
        </Link>
        <Link href={'#'}>
          <button className="px-6 py-3 border border-black/5">
            View More <br />
            <span>
              <FaYoutube className="mx-auto" size={28} color="red" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
