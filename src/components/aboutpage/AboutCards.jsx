import React from 'react';
import { cardsData } from '../../data/data';


const Aboutsection3 = () => {
  return (
    <>
      <div className='aboutUsTopFirstDiv'>
          <div className='aboutUsTopSecondDiv'>
            <h1 className='aboutUsTopH1'>Your success is our top priority -always.</h1>
          </div>
          
            <p className='aboutUsTopP'>At our IT consultancy firm, we prioritize certain values and approaches that have helped us build a reputation for excellence in the industry. First and foremost, we prioritize customer satisfaction, and we always go the extra mile to ensure our clients' needs are met.</p>
         

          <div className='flex flex-wrap gap-3 xl:gap-10 md:gap-0 justify-center'>
  {cardsData.map((cards, index) => (
    <div key={index} className="about-us-cards-text-div">
      <div className='about-us-cards-image-div'>
        <img src={cards.imge} alt="mission" className='w-[19.18px] h-[19.18px] rounded-full md:w-[31px] md:h-[31px]' />
      </div>
      <h1 className='about-us-cards-h1  font-poppins-semibold'>{cards.title}</h1>
      <p className='about-us-cards-p font-poppins-regular'>{cards.discriptions}</p>
    </div>
  ))}
</div>
      </div>
    </>
  )
}

export default Aboutsection3