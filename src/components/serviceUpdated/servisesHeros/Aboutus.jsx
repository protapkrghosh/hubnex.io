import React, { useEffect, useState } from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, FreeMode, Pagination } from "swiper";

const Aboutus = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    const getTestimonials = async ()=>{
      try {
        const res = await fetch(`https://${import.meta.env.VITE_API_URL}/api/v1/testimonials`)
        const data = await res.json()
        if (!res.ok){
          return setErr(true)
        }
        setData(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getTestimonials();
  },[])

  return (
    <>
    <div className='w-full flex gap-5 md:gap-24 justify-center items-center h-[617px] flex-col xl:w-full ' id="display">
          <div className='font-gilroy lg:text-[60px] text-white font-gilroy-bold text-center  text-2xl'>
            <h1>what people say about us</h1>
          </div>
        
        <div className=' w-[80%] mx-auto justify-center items-center text-white'>
          <Swiper
                slidesPerView={1}
                spaceBetween={50}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination,Autoplay]}
                autoplay={true}
                className="mySwiper"
              >
                {data?.map((data)=> (
                <SwiperSlide className=' py-12'>  
                <div className=' flex flex-col gap-5 md:gap-8 justify-center items-center w-full'>          
                  <div className=' w-full xl:text-[20px] font-gilroy-semi-bold'>
                    <p className='text-center'>{data.description}</p></div>
                  <div className=' w-fulls items-center flex flex-col justify-between'>
                    <h1 className='font-gilroy-bold text-[26px]'>{data.author}</h1>
                    <h2>{data.role}</h2>
                  </div>
                </div>
                </SwiperSlide>
                ))}
                  
            </Swiper>
            </div>
    </div>
    </>
  )
}

export default Aboutus