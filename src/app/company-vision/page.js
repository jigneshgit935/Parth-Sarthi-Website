import OverView from '@/components/OverView';
import React from 'react';
import VisionImage from '@/../public/images/Vision.jpg';
const pages = () => {
  const image = VisionImage;

  return (
    <div>
      <OverView image={image} />
      <div className="flex items-center px-5 md:px-[70px] md:pb-[80px] py-10">
        <div className="w-full flex flex-col gap-4">
          <h3 className="text-2xl font-extrabold border-b-4 border-[#C4956A]">
            Vision
          </h3>
          <p className="text-[15px]  text-justify">
            Our aim is to provide premium housing and commercial developments to
            our clients at par with international standards so as to provide
            benchmark quality standards and lifestyles. However care must be
            taken to keep a price line within the affordability range of the
            Indian market so that people are able to afford an International
            lifestyle at a reasonable price.
          </p>
          <p className="text-[15px] text-justify">
            Today, the needs and expectations of clients have surpassed what it
            used to be some 5 years ago. They now want an environment where they
            are offered luxuries of a 5 star hotel like infinity pool,
            skybridge, glass bottom pools, cabanas outside their pools, splash
            pool in their apartment, mix of low rise and high rise community,
            double height entrance lobbies, open areas etc. it is the design
            innovation which is paramount to make them feel like a king. We had
            understood it way back and brought such projects in the country.
            That’s how Raheja is a name that caters to both the uber HNIs and
            projects for the common man.
          </p>
        </div>
      </div>
    </div>
  );
};

export default pages;
