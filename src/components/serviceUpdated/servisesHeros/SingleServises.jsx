import React from 'react';
import './Servises.css'
const SingleServises = ({data}) => {

    const {imge,serial,title,discriptions} = data

    return (           
             <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className='  flex justify-between items-center bg-500'>
                    <img src={imge} alt="" className=' w-[70px] h-[70px] '/>
                    <span className=' text-[50px] md:text-[70px] text-gray-400 font-gilroy-bold'>{serial}</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5 '>
                    <p className='   font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>{title}</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white '> {discriptions}</p>
                  </div>
                </div>      
    );
};

export default SingleServises;