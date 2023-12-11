import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ManagementImage from '@/../public/images/Management.jpg';

const Management = () => {
  return (
    <>
      <div>
        <Image
          src={ManagementImage}
          alt="company-overview"
          className="w-full h-full lg:h-[500px] object-cover"
        />
      </div>
      <div className="bg-white py-5">
        <ul className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <li>
            <Link
              href="company-overview"
              className="text-sm md:text-[16px] border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
            >
              Vikram Singh
            </Link>
          </li>
          <li>
            <Link
              href="company-vision"
              className="text-sm md:text-[16px] border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
            >
              Vikram Singh
            </Link>
          </li>
          <li>
            <Link
              href="company-logo"
              className="text-sm md:text-[16px] border-b-0 hover:border-b-2 transition-all   border-b-[#C4956A]"
            >
              Form the desk
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Management;
