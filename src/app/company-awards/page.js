import OverView from '@/components/OverView';
import React from 'react';
import companyLogo from '@/../public/images/Honors-awards.jpg';

const page = () => {
  const image = companyLogo;

  return (
    <div>
      <OverView image={image} />
    </div>
  );
};

export default page;
