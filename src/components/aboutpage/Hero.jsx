import React from 'react'
import { Link } from 'react-router-dom'
import aboutLander from '../../assets/aboutLander.png'

const Hero = () => {
  return (
    <div className=' h-full w-full relative'>
      <img src={aboutLander} alt='aboutLanderPage' className=' absolute bottom-0 right-0 w-full object-cover h-[60%] lg:h-[1147px] lg:w-[1720px]' />
      <div className=' w-full md:w-[70%] h-full md:m-auto flex items-center'>
        {/* bug fix:   -top-24 md:-top-16  xl:-top-48 */}
        <div className='flex flex-col h-full justify-center lg:justify-start lg:mt-32 xl:mt-96 text-white gap-8 md:gap-8 absolute -top-44 md:-top-2  xl:-top-48 left-6 lg:left-12 xl:left-24'>
          <div className='text-[28px] font-gilroy-semi-bold md:text-[70px] xl:text-[60px] 2xl:text-[60px]'>
            <span>About Us</span>
          </div>
          <div className=' w-full text-[16px] md:w-[700px]  xl:text-[26px] md:text-[28px]'>
            <p className=' leading-tight font-gilroy-medium'>Passionate about exceptional IT services, delivering innovative solutions to meet unique needs.</p>
          </div>
          <div>
            {/* Bug Fix: Change sm device button background color */}
            <Link to='/contact' className='w-max border-white font-gilroy-semi-bold text-[16px] md:text-[20px] border-2 md:border-none bg-transparent bg-white text-black rounded-full py-2 lg:py-[10px] px-5'>Know more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero