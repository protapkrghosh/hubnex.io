import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
       <div className=' xl:h-[838px] h-screen bg-ind4 bg-cover bg-center w-full relative '>
        <Navbar />
        <div className=' h-screen w-full flex items-center justify-center'>
        <div className=' w-[80%] flex items-center'>
            <div className=' text-white flex-things lg:items-start gap-10 w-90 max-[820px]:text-center'>
                <div className='  text-[28px] md:text-[50px] lg:text-[60px] font-gilroy-bold leading-tight lg:w-[700px]'>Empowering Your Financial Future</div>
                <p className=' text-peragrap'>Banking, Financial Services, and Insurance Solutions for Every Stage of Life</p>
                <Link to='/contact' className='btn-primary'>Let's talk</Link>

              </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Hero