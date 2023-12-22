import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import reddit from '../../assets/reddit.png'
import chorus from '../../assets/chorus.png'
import tcs from '../../assets/Tata Consultancy Services - png 0.png'
import pantera from '../../assets/pantera.png'


// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const Swiperpartners = () => {
  return (
    <div className='bg-black text-white '>
      {/* add pt-28 add align the text in the center  */}
        <div className="md:text-7xl text-5xl  text-white font-gilroy-bold pt-32 text-center pb-4"><h1>Our Partners</h1></div>
     <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide ><img src={reddit} alt="reddit"></img></SwiperSlide>
        <SwiperSlide ><img src={chorus} alt="chorus"></img></SwiperSlide>
        <SwiperSlide className='mb-6' ><img src={tcs} alt="tcs"></img></SwiperSlide>
        <SwiperSlide><img src={pantera} alt="pantera"></img></SwiperSlide>
       
      </Swiper>
      
    </div>
  )
}

export default Swiperpartners