import React from 'react';
import SingleServises from './SingleServises';

const ServisesDataMap = ({datas}) => {
    return (
        <div className=' py-16  w-full bg-black flex justify-center items-center h-auto'>
        <div className=' h-full w-full flex justify-center items-center'>
            <div className='w-[90%] flex flex-col gap-10 md:justify-around h-full items-center text-black'>  
                <div className='w-full gap-5 flex flex-col items-center justify-center'>
                    <h1 className=' text-white text-[28px] text-center md:text-[50px] xl:text-[55px] font-gilroy-bold'>Our Services</h1>
                    <div className=' md:w-[700px] flex items-center justify-center'>
                        <span className='  text-white text-center text-[18px] md:text-[20px] font-gilroy-regular'>Our goal is to provide a comprehensive platform that empowers individuals and businesses to achieve their full potential. Whether you're looking to advance your career, improve your health and wellness, or grow your...  </span>
                    </div>
                </div>
                
                <div className='flex flex-wrap w-full justify-center gap-[35px] '>
            {
                datas.map(data=><SingleServises key={data.id} data={data} />)
            }
        </div>
            </div>
        </div>
    </div>
    );
};

export default ServisesDataMap;