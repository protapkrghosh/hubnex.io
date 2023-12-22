import React from 'react'

const Ourself = () => {
  return (
    <div className=" h-auto md:py-0 py-24 lg:h-[930px] w-full bg-earth bg-contain bg-no-repeat bg-black bg-bottom">
        <div className=' h-full w-full flex justify-center '>
            <div className=' w-[80%] flex justify-between'>
                <div className=' w-full flex flex-col lg:gap-20 xl:gap-22 text-white '>
                    {/* bug fix: lg:gap-10 xl:gap-12 */}
                   <div className=' w-90 flex flex-col lg:gap-10 xl:gap-12 text-center md:mt-40 mb-12 md:mb-0'>
                    <span className=' text-[32px] md:text-[65px] xl:text-[60px] font-gilroy-semi-bold mb-4 md:mb-0'>Who We Are</span>
                    <p className='text-center font-gilroy-medium text-[15px] md:text-[22px]'>Our values shape the culture of our organization and define who we are. These are at the core of how we work and what we do. We are:</p>
                   </div>
                    {/* bug fix: add gap-3 md:gap-10 */}
                   <div className=' w-full flex flex-col gap-3 md:gap-10 lg:flex-row  lg:justify-evenly items-center  '>
                   <div className='about-us-who-we-are-div'>
                            <span className=' about-us-who-we-are-span '>Your Next-Gen Technology Partner</span>
                            <p className='about-us-who-we-are-p'>We provide industry expertise and solution IPs to help customers achieve successful business outcomes.</p>
                        </div>
                        <hr className=' about-us-who-we-are-hr'/>
                        <div className='about-us-who-we-are-div'>
                            <span className=' about-us-who-we-are-span '>Team-Oriented</span>
                            <p className='about-us-who-we-are-p'>We work together to drive change by setting the bar for future technologies and our way of working and build long-term partnerships. </p>
                        </div>
                        <hr className=' about-us-who-we-are-hr'/>
                        <div className='about-us-who-we-are-div'>
                            <span className=' about-us-who-we-are-span '>Client-Focused</span>
                            <p className='about-us-who-we-are-p'>We are, above all else, customer-centric. We are in it for the long run and have an unwavering passion for client success. </p>
                        </div>
                   </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Ourself