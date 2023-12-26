import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../navbar/Navbar';

const IndustryHeros = ({title,discriptions,background,button}) => {
  const imge = "https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D"

  const imgeStyle = {
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
  };
  console.log(background)
    return (
        // add xl:h-[838px] h-screen to handle the background  and also removed extra div
        <div style={imgeStyle} className={`h-screen  bg-center w-full relative`} >
         <Navbar />
         <div className=' h-screen w-full xl:-ml-[70px] flex items-center justify-center'>
         <div className=' w-[80%] flex items-center'>
             <div className=' text-white flex-cols lg:items-start gap-10 w-90 max-[820px]:text-center'>
                 <div className='  text-[28px] md:text-[50px] lg:text-[60px] font-gilroy-bold leading-tight lg:w-[700px]'>{title}</div>
                 <p className=' text-paragraph '>{discriptions}</p>
                   {/* change the btn primary to btn servise to handle both mobile view and pc view */}
                 <Link to='/contact' className='btn-service'>{button}</Link>
               </div>
           </div>
         </div>
     </div> 
    );
};

export default IndustryHeros;