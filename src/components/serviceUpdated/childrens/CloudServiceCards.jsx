import React from 'react'
import testImg1 from '@assets/costom devp.png';
import testImg2 from '@assets/Communication.png';
import testImg3 from '@assets/gg.png';
import testImg4 from '@assets/Management.png';
import testImg5 from '@assets/Mobile Development.png';
import testImg6 from '@assets/Group.png';
import '../Ourservice.css'



const CloudServiceCard = () => {
  return (
    <div className=' py-10 w-full bg-black flex justify-center items-center h-auto'>
        <div className=' h-full w-full flex justify-center items-center'>
            <div className='w-[90%] flex flex-col gap-10 md:justify-around h-full items-center text-black'>
                <div className='w-full gap-5 flex flex-col items-center justify-center'>
                    <h1 className=' text-white text-[28px] md:text-[50px] text-center xl:text-[55px] font-gilroy-bold'>Our Services</h1>
                    <div className=' md:w-[700px] flex items-center justify-center'>
                        <span className='  text-white text-center text-[18px] md:text-[20px] font-gilroy-regular'>Our goal is to provide a comprehensive platform that empowers individuals and businesses to achieve their full potential. Whether you're looking to advance your career, improve your health and wellness, or grow your...  </span>
                    </div>
                </div>
                
                <div className='  flex flex-wrap w-full justify-center gap-[35px] '>

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className='  flex justify-between items-center bg-500'>
                    <img src={testImg1} alt="" className=' w-[70px] h-[70px] '/>
                    <span className=' text-[70px] text-gray-400 font-gilroy-bold'>01</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5 '>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Cloud Discovery & Roadmap</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white '>Streamline cloud adoption and transformation based on an in-depth analysis of the current environment, possible opportunities and limitations using tried and tested technologies.</p>
                  </div>
                </div>

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  
                  <div className=' flex justify-between items-center bg-500'>
                  <img src={testImg2} alt="" className=' w-[70px] h-[70px] '/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>02</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className=' font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Cloud Migration & Deployment</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> We combine exhaustive practical experience with technological expertise to determine the best migration strategy based on business objectives and a future-proof roadmap.</p>
                  </div>
                </div>
                

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg3} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>03</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <span className=' font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Cloud Applications & Platforms</span>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> We help you leverage Software as a Service (SaaS) platforms like Office, SharePoint and CRM for process automation, business productivity and maximizing ROI.</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg4} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>04</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className=' font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Cloud Integration & Orchestrtion</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> We help you manage core infrastructure & workflows across cloud environments and unite several independent automation processes into a cohesive system for effective infrastructure management.</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg5} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>05</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className=' font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Cloud Management & Maintenance</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> OOur DevOps methodology increases speed and agility, helping our clients scale and flex rapidly to stay relevant in the evolving marketplace.</p>
                  </div>
                </div>
                

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg6} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>06</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className=' font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Cloud Governance & Security</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Our data management services comprise continuous monitoring, performance optimization, risk assessment, and data protection, and enabling secure & smooth data transfer. </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CloudServiceCard