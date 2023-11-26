import Link from 'next/link';
import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { IoIosArrowDropright } from 'react-icons/io';

const AboutSection = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-[#C4956A]">Legacy Of Raheja</h1>
        <p className="mt-10 w-[100%] max-w-[1000px] leading-7">
          Raheja Developers is one of the largest Real Estate companies in India
          established in the year 1990 by Mr. Navin M. Raheja. The company has
          always maintained path breaking status and has pioneered various
          firsts in India. From trend setting luxury housing to providing homes
          for the poorest section of Indian society, from India’s tallest
          skyscrapers to 165 acres of plotted township, from changing the way
          people shop to changing the way people work, We have achieved it all.
        </p>
      </div>

      <div className="flex flex-row justify-center items-center gap-5 py-4 mt-10">
        <Link href={'/about'}>
          <button className="px-6 py-3">
            Read More <br />
            <span>
              <IoIosArrowDropright
                className="mx-auto text-black/60"
                size={28}
              />
            </span>
          </button>
        </Link>
        <Link href={'#'}>
          <button className="px-6 py-3">
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
