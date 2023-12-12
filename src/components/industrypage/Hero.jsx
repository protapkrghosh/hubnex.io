import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
       <div className=' xl:h-[838px] h-screen  bg-healthindus bg-cover bg-center w-full relative '>
        <Navbar />
        <div className=' h-screen w-full flex items-center justify-center'>
        <div className=' w-[80%] flex items-center'>
            <div className=' text-white flex flex-col justify-center items-center lg:items-start gap-10 sm:w-[676px] max-[820px]:text-center'>
                <span className=' xl:text-[60px] md:text-[50px] text-[28px] font-gilroy-bold'>empowering healthcare with AI</span>
                <p className=' text-[16px] md:text-[22px] font-gilroy-semi-bold '>We help you realize intelligent, connected, <br></br>and patient-centric healthcare.</p>
                <Link to='/contact' className=' h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[12px] md:text-[20px] bg-white text-black py-2 w-max md:py-[10px] px-5'>Let's talk</Link>
              </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Hero
