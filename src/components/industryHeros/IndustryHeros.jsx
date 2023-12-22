import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'

const IndustryHeros = ({title,discriptions,background,button}) => {
    return (
        // add xl:h-[838px] h-screen to handle the background  and also removed extra div
        <div className={`  h-screen  bg-${background} bg-cover bg-center w-full relative`} >
         <Navbar />
         <div className=' h-screen w-full xl:-ml-[70px] flex items-center justify-center'>
         <div className=' w-[80%] flex items-center'>
             <div className=' text-white flex-cols lg:items-start gap-10 w-90 max-[820px]:text-center'>
                 <div className='  text-[28px] md:text-[50px] lg:text-[60px] font-gilroy-bold leading-tight lg:w-[700px]'>{title}</div>
                 <p className=' text-peragrap'>{discriptions}</p>
                   {/* change the btn primary to btn servise to handle both mobile view and pc view */}
                 <Link to='/contact' className='btn-service'>{button}</Link>
               </div>
           </div>
         </div>
     </div> 
    );
};

export default IndustryHeros;