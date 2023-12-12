import React from 'react'
import { Link } from 'react-router-dom'

const Abouts = () => {
  return (
    <div className=' bg-abouts bg-center bg-cover bg-no-repeat h-[982px] w-full'>
        <div className=' h-full w-full flex items-center justify-center'> 
          <div className=' flex items-center h-full w-[80%]'>
            <div className=' flex flex-col text-black gap-10 xl:mb-56 w-[650px] '>
              <span className=' text-[28px] md:text-[70px] xl:text-[55px] font-gilroy-bold'>Digital guidance <br/>expertise</span>
              <p className=' text-[19px] lg:w-[861px] font-gilroy-medium md:text-[24px] xl:text-[22px]'>We are a leading IT consultancy with expertise in innovative solutions for modern challenges. Our client-centric approach enables us to design tailored solutions that keep businesses ahead in the ever-evolving digital landscape.</p>
              {/* <Link to='/contact' className='  h-full px-5 md:py-[10px] py-2 rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[16px] md:text-[20px] text-white bg-black w-max'>Read more</Link> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Abouts