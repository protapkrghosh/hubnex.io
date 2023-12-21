import React from 'react'
import { Link } from 'react-router-dom'
import aboutLander from '../../assets/aboutLander.png'

const Hero = () => {
  return (
    <div className=' h-full w-full relative'>
      <img src={aboutLander} alt='aboutLanderPage' className=' absolute bottom-0 right-0 w-full object-cover h-[60%] lg:h-[1147px] lg:w-[1720px]' />
      <div className=' w-full md:w-[70%] h-full md:m-auto flex items-center'>
        {/* bug fix:   -top-24 md:-top-16  xl:-top-48 */}
        <div className='flex flex-col h-full justify-center lg:justify-start lg:mt-32 xl:mt-96 text-white gap-8 md:gap-14 absolute -top-24 md:-top-16  xl:-top-48 left-10 md:left-28'>
          <div className='text-[28px] font-gilroy-semi-bold md:text-[70px] xl:text-[60px] 2xl:text-[60px]'>
            <span>About Us</span>
          </div>
          <div className=' w-full text-[16px] md:w-[700px]  xl:text-[26px] md:text-[28px]'>
            <p className=' leading-tight font-gilroy-medium'>Passionate about exceptional IT services, delivering innovative solutions to meet unique needs.</p>
          </div>
          <div>

            <Link to='/contact' className='btn-primary'>Know more</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero