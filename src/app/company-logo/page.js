import OverView from '@/components/OverView';
import React from 'react';
import companyLogo from '@/../public/images/Raheja-Logo.jpg';
import LogoLeft from '@/../public/images/logo-left.png';
import Image from 'next/image';

const page = () => {
  const image = companyLogo;

  return (
    <div>
      <OverView image={image} />
      <div className="flex items-center px-5 md:px-[70px] md:pb-[80px] py-10">
        <div>
          <Image
            src={LogoLeft}
            alt="logo-left "
            className="mt-10 px-3 w-full h-full object-fill  hidden lg:block"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-2xl font-extrabold border-b-4 border-[#C4956A]">
            About Logo
          </h3>
          <p className="text-[15px]  text-justify">
            The Raheja Logo signifies the Ultimate purpose and Single-most aim
            of re-inventing & re-orienting India in the same way as we have
            re-invented the Indian Flag in our logo.
          </p>
          <p className="text-[15px] text-justify">
            It represents the development of 3D space (shown by 3 lines of 3D
            symbol) with a common focus (shown by the blue dot) of empowering
            India (shown by colors of the Indian Flag). Everything that we do
            has to be in accordance with the larger benefit of our Society,
            Environment, and the People of India. We, at Raheja value Team
            Spirit and consider each employee a member of the Raheja Family. As
            extension to our Eternal Mission, the logo is shaped as a Square,
            signifying Stability through Teamwork.
          </p>
          <p className="text-[15px] text-justify">
            The Logo is like a Flag to everyone at Raheja and signifies our
            everlasting commitment to the nation in whatever we do.
          </p>
          <p className="text-[15px] text-justify">
            This is who we are and what you can depend upon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
