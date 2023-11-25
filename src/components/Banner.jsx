import React from 'react';

const Banner = () => {
  return (
    <section className=" w-full">
      <video autoPlay muted loop width={'100%'} className="">
        <source src="/Parth.mp4" type="video/mp4" />
      </video>

      <div className="w-full overflow-hidden bg-[#C4956A] py-2 text-white">
        <div className="animate-marquee text-xl">
          Farm Plots from 4000 sq. mtrs to 10000 sq. mtrs. Ideal for farmhouses,
          with CLU of over 10000 Sq. ft built up sanctionable area, just 15
          minutes from Airport and Rajiv Chowk through New Delhi-Jaipur Super
          Expressway
        </div>
      </div>
    </section>
  );
};

export default Banner;
