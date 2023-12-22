import React from 'react' 

const Abouts = () => {
  return (
    <div className=' bg-abouts bg-center bg-cover bg-no-repeat h-[982px] w-full '>
        <div className=' h-full w-full flex items-center justify-center'> 
          <div className=' flex items-center h-full w-full lg:-mt-60 ml-12 lg:ml-14 xl:ml-20'>
            {/*bug fix: add -mt-32 md:-mt-0 */}
            <div className=' flex flex-col text-black gap-7 -mt-96 lg:-mt-32 xl:-mt-0 lg:gap-1 xl:mb-56 w-[650px] '>
              <span className=' text-[28px] md:text-[70px] xl:text-[55px] font-gilroy-bold lg:leading-tight mb-5'>Digital guidance <br/>expertise</span>
              {/* bug fix: add w-[400px] lg:w-[861px] */}
              <p className=' text-[19px] w-[400px] lg:w-[861px] font-gilroy-medium md:text-[24px] xl:text-[22px]'>We are a leading IT consultancy with expertise in innovative solutions for modern challenges. Our client-centric approach enables us to design tailored solutions that keep businesses ahead in the ever-evolving digital landscape.</p>
              {/* <Link to='/contact' className='  h-full px-5 md:py-[10px] py-2 rounded-full flex justify-center items-center  font-gilroy-semi-bold text-[16px] md:text-[20px] text-white bg-black w-max'>Read more</Link> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Abouts