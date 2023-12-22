import React from 'react';
import { imgesData } from '../../data/data';

const Partners = () => {
  return (
    <div className='h-56 bg-black w-full flex-cols gap-10 md:gap-12 pt-28' id="backgorund">
      {/* Bug Fix: Added top section spacing */}
      <span className='text-[60px] text-white font-gilroy-semi-bold mt-10'>Our Partners</span>
      <div className='flex flex-wrap justify-around md:justify-evenly items-center w-full px-5 md:px-0  xl:-mt-5'>

        {imgesData.map((image) => (
          <img key={image.id} src={image.image} className='w-[158px] h-[70px]' alt={`partner-${image.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
