import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'

const Hero = () => {

  return (

    <div className=' h-full w-full'>
      <div className=' flex h-full w-[80%] md:w-[75%] flex-col lg:gap-2 lg:mt-36 xl:mt-56 md:justify-center lg:justify-start items-start m-auto text-white'>
        <div className=' text-[28px] flex flex-col lg:gap-10 2xl:text-[60px] xl:text-[55px] md:text-[50px] md:leading-tight lg:leading-10 mt-48 md:mt-0 font-gilroy-bold'>
          {/* Note: text and button capitalize */}
          <h1>Scale your business</h1>
          <h1>lead the market.</h1>
        </div>
        <div className=' flex flex-col gap-5 sm:gap-2'>
          <p className=' py-5 text-[16px] lg:text-[22px] font-gilroy-medium md:font-gilroy-regular'>let our team, help you reach your dream</p>
         
          <Link to='/contact' className='btn-primary'>Get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero