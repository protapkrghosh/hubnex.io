import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'

const Hero = () => {
  return (
    
    <div className=' h-screen xl:h-[908px] bg-serv1 bg-cover bg-center w-full relative '>
        <Navbar />
        <div className='w-full h-full flex items-center justify-center'>
            <div className=' text-white w-[85%] flex justify-start h-full  items-center'>
                <div className=' w-90 flex flex-col gap-8 xl:gap-14 lg:mb-[180px] xl:mb-40'>
                    <div className=' text-[24px] md:text-[60px] lg:text-[70px] xl:text-[60px] 2xl:text-[60px] font-gilroy-bold mt-20 leading-tight lg:w-[700px]'>Smarter Business Decisions with AI/ML</div>
                    <p className=' text-[16px]  md:text-[24px] font-gilroy-semi-bold'>"Empowering Smarter Business Decisions with this"</p>
                    <Link to='/contact' className=' h-full rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[12px] md:text-[20px] bg-white text-black py-2 w-max md:py-[10px] px-5'>Get in touch</Link>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Hero