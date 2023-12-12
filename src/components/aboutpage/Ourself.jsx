import React from 'react'

const Ourself = () => {
  return (
    <div className=" h-auto md:py-0 py-24 lg:h-[930px] w-full bg-earth bg-contain bg-no-repeat bg-black bg-bottom">
        <div className=' h-full w-full flex justify-center '>
            <div className=' w-[80%] flex justify-between '>
                <div className=' w-full flex flex-col gap-32 text-white '>

                   <div className=' w-90 flex flex-col gap-16 text-center md:mt-40 '>
                    <span className=' text-[28px] md:text-[65px] xl:text-[60px] font-gilroy-semi-bold '>Who We Are</span>
                    <p className='text-center font-gilroy-medium text-[15px] md:text-[22px]'>Our values shape the culture of our organization and define who we are. These are at the core of how we work and what we do. We are:</p>
                   </div>

                   <div className=' w-full flex flex-col gap-10 lg:flex-row  lg:justify-evenly items-center  '>
                        <div className=' md:w-[303px] lg:h-[163px] text-center  '>
                            <span className=' text-[16.22px] md:text-[22px] font-gilroy-semi-bold'>Your Next-Gen Technology Partner</span>
                            <p className='text-[14.42px] mt-5 md:text-[20px] font-gilroy-regular leading-6'>We provide industry expertise and solution IPs to help customers achieve successful business outcomes.</p>  
                        </div>
                        <hr className=' md:h-[60%] w-[50%] md:w-0 border-[1px] border-gray-500'/>
                          
                        <div className='md:w-[303px] lg:h-[163px] text-center '>
                            <span className=' text-[16.22px] md:text-[22px] font-gilroy-semi-bold'>Team-Oriented</span>
                            <p className='text-[14.42px] mt-5 md:text-[20px] font-gilroy-regular leading-6'>We work together to drive change by setting the bar for future technologies and our way of working and build long-term partnerships.</p>
                        </div>
                        <hr className=' md:h-[60%] w-[50%] md:w-0 border-[1px] border-gray-500'/>

                        <div className='md:w-[303px] lg:h-[163px] text-center max-[360px]:w-60'>
                            <span className=' text-[16.22px] md:text-[22px] font-gilroy-semi-bold'>Client-Focused</span>
                            <p className='text-[14.42px] mt-5 md:text-[20px] font-gilroy-regular leading-6'>We are, above all else, customer-centric. We are in it for the long run and have an unwavering passion for client success. </p>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Ourself