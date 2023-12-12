import React from 'react'
import testImg1 from '@assets/costom devp.png';
import testImg2 from '@assets/Communication.png';
import testImg3 from '@assets/gg.png';
import testImg4 from '@assets/Management.png';
import testImg5 from '@assets/Mobile Development.png';
import testImg6 from '@assets/Group.png';
import testImg7 from '@assets/API Programming.png';
import testImg8 from '@assets/Ux Design.png';
import testImg9 from '@assets/Address marker.png';
import '../Ourservice.css'



const Ourservice = () => {
  return (
    <div className=' py-10 w-full bg-black flex justify-center items-center h-auto'>
        <div className=' h-full w-full flex justify-center items-center'>
            <div className='w-[90%] flex flex-col gap-10 md:justify-around h-full items-center text-black'>
                <div className='w-full gap-5 flex flex-col items-center justify-center'>
                    <h1 className=' text-white text-[28px] md:text-[50px] xl:text-[55px] text-center font-gilroy-bold'>Our Services</h1>
                    <div className=' md:w-[700px] flex items-center justify-center'>
                        <span className='  text-white text-center text-[18px] md:text-[20px] font-gilroy-regular'>Our goal is to provide a comprehensive platform that empowers individuals and businesses to achieve their full potential. Whether you're looking to advance your career, improve your health and wellness, or grow your...  </span>
                    </div>
                </div>
                
                <div className='  flex flex-wrap w-full justify-center gap-[35px] '>

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className='  flex justify-between items-center bg-500'>
                    <img src={testImg1} alt="" className=' w-[70px] h-[70px] '/>
                    <span className=' text-[70px] text-gray-400 font-gilroy-bold'>01</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5 '>
                    <p className='   font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Search Engine Optimization</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white '>In the world of digital revolution, a fantastic user friendly website making good business sense will fetch you far more customers than a regular website. We provide you with...</p>
                  </div>
                </div>

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  
                  <div className=' flex justify-between items-center bg-500'>
                  <img src={testImg2} alt="" className=' w-[70px] h-[70px] '/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>02</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>PR & Brand Management</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>PR & Brand Management is prominent for every business to attain perfect growth, whether you have a worldwide business with millions of the customers or just a simple... </p>
                  </div>
                </div>
                

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg3} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>03</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <span className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Social Media Optimisation</span>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>Social media optimization uses social media as a catalyst to increase your brand presence. Through strategy and creative campaigns, we increase the awareness of... </p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg4} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>04</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Political   Campaign Management</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>At HubNex we have an experienced team with a proven track record in managing successful political and election campaigns at state and national level. Our team... </p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg5} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>05</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Content Management</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>Content is King! We provide you with relatable high quality content, logo designs, promotional graphics, infographics and videos to give your brand an outstanding... </p>
                  </div>
                </div>
                

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg6} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>06</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Outdoor Media Marketing</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>The outdoor media advertising comprises billboards, taxis, interior and exterior of buses, and business vehicles. The transit advertising, bus benches, billboards are the...</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg7} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>07</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Business Consulting</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> We provide excellent strategic business solutions to various corporates. We develop distinctive and adaptive strategies that help companies succeed in today’s complex and uncertain world...</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg8} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>08</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Video Production</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>We live in a world driven by images and visual storytelling. HubNex has helped countless businesses tell their unique stories. And we have the delighted customers to prove it! Whether you need...</p>
                  </div>
                </div>
                

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg9} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>09</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Print Media</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>Print Media Marketing is a physical form of advertising that uses physical printed media platforms such as newspapers, magazines, catalogs, pamphlets, etc. Despite the fact that print media has... </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Ourservice