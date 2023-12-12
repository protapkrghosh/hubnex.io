import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
       <div className=' xl:h-[838px] h-screen bg-ind1 bg-cover bg-center w-full relative '>
        <Navbar />
        <div className=' h-screen w-full flex items-center justify-center'>
        <div className=' w-[80%] flex items-center'>
            <div className=' text-white flex flex-col justify-center items-center lg:items-start gap-10 w-90 max-[820px]:text-center'>
                <div className='  text-[28px] md:text-[50px] lg:text-[60px] font-gilroy-bold leading-tight lg:w-[700px]'>Revolutionizing the way we connect</div>
                <p className=' text-[16px] md:text-[24px] font-gilroy-semi-bold lg:w-[600px]'>Digitalizing Communication Empowering Businesses to Thrive in the Future</p>
                <Link to='/contact' className=' h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[12px] md:text-[20px] bg-white text-black py-2 w-max md:py-[10px] px-5'>Let's talk</Link>

              </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Hero