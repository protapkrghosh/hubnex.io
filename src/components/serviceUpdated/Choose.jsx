import React from 'react'
import line from '../../assets/line.png'

const Choose = () => {
  return (
    <div className=" h-auto lg:py-0 py-24 xl:h-screen overflow-hidden w-full bg-black bg-cover">
        <div className=' h-full w-full flex justify-center items-center '>
            <div className='w-[80%] flex justify-center'>
                <div className=' w-full flex flex-col justify-center gap-28 text-white '>

                   <div className=' w-full flex flex-col gap-20 text-center  '>
                    <span className=' text-[26px] md:text-[50px] font-gilroy-bold tracking-wider'>why choose us?</span>
                    <p className='text-center font-gilroy-regular text-[15px] md:text-[20px]'>Hubnex Lab employs industry best practices to help businesses globally scale, transform, and gain competitive advantage through innovative software solutions.</p>
                   </div>

                   <div className=' w-full flex flex-col gap-8 xl:gap-0 xl:flex-row justify-between items-center  '>

                        <div className=' w-[303px] h-[199px] text-center flex flex-col items-center  gap-3 '>
                            <span className=' text-[16.22px] md:text-[24px] font-gilroy-semi-bold'>Your Next-Gen Technology Partner</span>
                            <p className=' text-[14.42] md:text-[18px] xl:w-full xl:h-[125px] font-gilroy-regular'>Adherence to agile and CI/CD principles throughout the product development lifecycle gain competitive advantage through innovative software solutions.</p>    
                        </div>
                        <hr className=' w-[50%] md:w-0 md:h-[50%] border-gray-700 border-[1px]'/>
                       
                        <div className='w-[303px] h-[199px] text-center  flex flex-col items-center gap-10 '>
                            <span className=' text-[16.22px] md:text-[24px] font-gilroy-semi-bold '>Team-Oriented</span>
                            <p className='text-[14.42] md:text-[18px] xl:w-full xl:h-[125px] font-gilroy-regular'>Efficient & transparent development, communication, and reporting Our domain knowledge, expertise, and proven methodologies enable us to create.</p>
                        </div>
                        <hr className=' w-[50%] md:w-0 md:h-[50%] border-gray-700 border-[1px]'/>

                        <div className='w-[303px] h-[199px] text-center flex flex-col items-center gap-14  '>
                            <span className=' text-[16.22px] md:text-[24px] font-gilroy-semi-bold'>Client-Focused</span>
                            <p className=' text-[14.42] md:text-[18px] xl:w-full xl:h-[125px] font-gilroy-regular'>Guaranteed maintenance and after-sales support smart digital experiences that add value to diverse businesses.</p>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Choose