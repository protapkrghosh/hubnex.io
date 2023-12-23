import React from 'react';
import { cardsData } from '../../data/data';


const Aboutsection3 = () => {
  return (
    <>
      <div className='bg-ablack w-full min-h-screen 2xl:h-[884px]  flex justify-evenly items-center gap-1 flex-col pb-20'>
          <div className='text-white font-gilroy-bold text-[28px] flex justify-center items-center  md:text-[3rem] lg:text-[55px] text-center px-5 md:px-0 lg:pt-20 xl:pt-24 2xl: lg:w-[747px]'>
            <h1 className='text-twhite h-full w-full lg:leading-[55px] xl:leading-[45px]'>Your success is our top priority -always.</h1>
          </div>
          <div className='text-white flex justify-center items-center font-gilroy-regular leading-[28px] text-[18px] md:text-[1.3rem] xl:text-[21px] text-center lg:p-3 2xl:p-1 xl:max-w-[1200px] 2xl:-mt-14'>
            <p>At our IT consultancy firm, we prioritize certain values and approaches that have helped us build a reputation for excellence in the industry. First and foremost, we prioritize customer satisfaction, and we always go the extra mile to ensure our clients' needs are met.</p>
          </div>

          <div className='flex flex-wrap gap-3 xl:gap-10 md:gap-0 justify-center lg:-mt-4 2xl:-mt-20'>
  {cardsData.map((cards, index) => (
    <div key={index} className="about-us-crds-text-div">
      <div className='about-us-crds-imge-div'>
        <img src={cards.imge} alt="mission" className='w-[19.18px] h-[19.18px] rounded-full md:w-[31px] md:h-[31px]' />
      </div>
      <h1 className='about-us-crds-h1 font-poppins-semibold'>{cards.title}</h1>
      <p className='about-us-crds-p font-poppins-regular'>{cards.discriptions}</p>
    </div>
  ))}
</div>
      </div>
    </>
  )
}

export default Aboutsection3