import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    
    <div className=' h-screen xl:h-[908px] bg-serviceLander bg-cover bg-center w-full relative '>
        <Navbar />
        <div className='w-full h-full flex items-center justify-center'>
            <div className=' text-white w-[85%] flex justify-start h-full  items-center'>
                <div className=' sm:w-[676px] flex flex-col gap-8 xl:gap-14 lg:mb-[180px] xl:mb-48'>
                    <span className=' text-[28px] sm:text-[70px] xl:text-[60px] 2xl:text-[60px]  font-gilroy-bold leading-tight'>Services to help you grow</span>
                    <p className=' text-[16px] sm:text-[24px] font-gilroy-medium md:font-gilroy-semi-bold'>"Expert IT Consulting Services to Boost Your Business Growth"</p>
                    <Link to='/contact' className=' h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[12px] md:text-[20px] bg-white text-black py-2 w-max md:py-[10px] px-5'>Get in touch</Link>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Hero