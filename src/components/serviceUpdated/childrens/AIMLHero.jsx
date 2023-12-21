import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'

const Hero = () => {
  return (
    
    <div className=' h-screen xl:h-[908px] bg-serv1 bg-cover bg-center w-full relative '>
        <Navbar />
        <div className='w-full h-full flex items-center justify-center'>
            <div className=' text-white w-[85%] flex justify-start h-full  items-center'>
                <div className=' '>
                    <div className=' '></div>
                    <p className=' text-[16px]  md:text-[24px] font-gilroy-semi-bold'>""</p>
                    <Link to='/contact' className='btn-primary'>Get in touch</Link>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Hero