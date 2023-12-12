import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'

const Hero = () => {
  return (
    
    <div className=' h-screen xl:h-[908px] bg-serv3 bg-cover bg-center w-full relative '>
        <Navbar />
        <div className='w-full h-full flex items-center justify-center'>
            <div className=' text-white w-[85%] flex justify-start h-full  items-center'>
                <div className=' w-90 flex flex-col gap-8 xl:gap-14 lg:mb-[180px] xl:mb-48'>
                    <span className=' text-[28px] md:text-[50px] lg:text-[70px] xl:text-[60px] 2xl:text-[60px] font-gilroy-bold leading-tight lg:w-[720px]'>Ensuring High-Quality Software Delivery</span>
                    <p className=' text-[16px] md:text-[24px] font-gilroy-semi-bold'>"Maximizing Your Software Potential with Advanced Testing Solutions"</p>
                    <Link to='/contact' className='h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[12px] md:text-[20px] bg-white text-black py-2 w-max md:py-[10px] px-5'>Get in touch</Link>

                </div>  
            </div>
        </div>
    </div>
  )
}

export default Hero