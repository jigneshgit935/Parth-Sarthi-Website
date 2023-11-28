import React from 'react';

const Card = () => {
  const data = [{ id: 1 }, { id: '2' }, { id: '3' }];

  return (
    <div className="py-5 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5   text-center">
        {data.map((item, i) => (
          <>
            <div
              key={i}
              className="w-[100%] max-w-[360px] h-[630px] border-2 mx-auto relative shadow-2xl"
            >
              <div className="w-[100%] max-w-[360px] h-[315px] bg-black"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[230px] w-[200px] md:h-[90px] h-[80px] bg-gray-200 flex items-center justify-center "></div>
              <div className=" mt-16 py-2 capitalize">
                <h3 className="text-[18px]">Ready to move in</h3>
              </div>
              <p className="text-[16px] mt-5">Plots</p>
              <p className="text-[16px] mt-5">Raheja Atharva</p>
              <p className="text-[16px] mt-5">Sector-109, Gurugram</p>
              <div className="">
                <button className="border py-2 px-5 mt-5">View More</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Card;
