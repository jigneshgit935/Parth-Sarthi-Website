import Management from '@/components/Management';
import Image from 'next/image';
import React from 'react';
import VikramImage from '@/../public/images/vikram-choudary.jpg';

const page = () => {
  return (
    <>
      <Management />
      <div className="flex flex-col lg:flex-row justify-between items-center px-5 md:px-[70px] md:pb-[80px] py-10">
        <div className=" w-[100%] max-w-[800px] flex  flex-col gap-4">
          <h3 className="text-2xl font-extrabold border-b-4 border-[#C4956A]">
            AR. NAYAN RAHEJA
          </h3>
          <p className="text-[15px]  text-justify">
            Ar. Nayan Raheja is a passionate entrepreneur and has been a growth
            driver for bringing Raheja Developers into a New Era.
          </p>
          <p className="text-[15px] text-justify">
            An architect from School of Planning and Architecture, New Delhi, he
            has grown up in the environment of real estate, architecture, and
            technology and dreamt of becoming an architect since childhood.
            Apart from designing, and constructing great buildings, he is also a
            conservationist, poet, director, musician and an avid photographer.
          </p>

          <p className="text-[15px] text-justify">
            A member of the Indian Institutes of architects, his life was dotted
            with passion- for education, for photography and for making a change
            in the society. He has been at the forefront of leading the company
            into the new era contributing significantly to new systems,
            processes and better product delivery and keeping pace with the
            newer construction technologies.
          </p>

          <p className="text-[15px] text-justify">
            He is personally a keen wildlife photographer travelling to wildlife
            parks across the world.
          </p>

          <p className="text-[15px] text-justify">
            Under his aegis the company has seen tremendous change in last few
            years due to change of business strategy from mid level housing to
            luxury housing. Nayan Raheja was front runner in getting the world’s
            largest construction companies i.e. Arabtec and ECC to India under
            joint venture as a part of back-ward integration of the company. He
            was also instrumental in appointing Thornton Tomasetti U.S.A., the
            structural engineers of Kingdom Tower (1Km high, tallest under
            construction building in the world), The Petronas Towers, Malaysia &
            Taipei 101, Taiwan. Overall, the results are visible and company is
            adding turnover and brand value and has a great future ahead.
          </p>
        </div>
        <div>
          <Image
            src={VikramImage}
            alt="vikram-choudary"
            className="mt-[60px] w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="px-5 md:px-[70px] pb-10">
        <div className="flex  flex-col gap-4">
          <p className="text-[15px] text-justify">
            Presently involved with developing Delhis Tallest Mix Use
            Development with Luxury Hotel Residences and the luxurious Delhi
            Mall, he is actively involved in leasing it to Top Brands Worldwide.
          </p>

          <p className="text-[15px] text-justify">
            His hard work and dedication has been recognized by several reputed
            platforms and he has been the recipient of various awards like "40
            under 40 promising business leaders in India", “Young Achiever’s
            Award”, “Top 10 Most Promising Industrialists”, “Architect of the
            Year”, “Young Entrepreneur Award” etc.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
