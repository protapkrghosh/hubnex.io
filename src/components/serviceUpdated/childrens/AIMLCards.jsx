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
                    <h1 className=' text-white text-center text-[28px] md:text-[50px] xl:text-[55px] font-gilroy-bold'>Our Services</h1>
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
                    <p className='   font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Machine Learning</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white '> Build and deploy an E2E machine learning lifecycle in your system. Take accurate business decisions by interpreting complex data, detecting trends & patterns, and integrating advanced ML.</p>
                  </div>
                </div>

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  
                  <div className=' flex justify-between items-center bg-500'>
                  <img src={testImg2} alt="" className=' w-[70px] h-[70px] '/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>02</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Chatbot Development</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Build intelligent AI-powered apps trained to interact with humans using touch sensing, voice, language recognition, and programmed decision making to offer highly evolved chatbot solutions.</p>
                  </div>
                </div>
                

                  <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg3} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>03</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <span className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Natural Language Processing</span>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Set algorithms that will work across large data sets to extract meaningful insights for an unsupervised machine learning experience. Analyze existing text data for trends,threats,and new business prospect.</p>
                  </div>
                </div>

                  <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg4} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>04</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>IoT Analytics</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>Leverage ML to transform IoT data into actionable business insights. Capture, process & analyze data to reduce equipment downtime, minimize accidents, and identify trends & anomalies in sensor.</p>
                  </div>
                </div>

                  <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg5} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>05</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Data Mining</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>Explore data in-depth and structure it into appropriate models to make critical business decisions. Extract information and transform it into a relevant model for real-time use</p>
                  </div>
                </div>
                

                  <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg6} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>06</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Image Processing</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Build custom applications for automated analysis,recognize, process images, & integrate neural network for translation. Optimize production environments, scale-up operations to the cloud.</p>
                  </div>
                </div>

                  <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg7} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>07</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Voice-Based AI</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Deploy powerful customized voice-enabled applications that facilitate streamlined and faster app operations. Leverage language-based localization, custom skill development & mobile app integration.</p>
                  </div>
                </div>

                  <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg8} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>08</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>AI Consulting & Integration</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white     
                    '>Modernize existing systems and sharpen the functionality of cross-platform interface applications. Automate internal processes and provide solutions that redefine how your customers interact with your products.</p>
                  </div>
                </div>
                

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg9} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>09</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Robotic Process Automation</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>Use RBA to create solutions that help reduce overall manual efforts, minimize risks of human error, increase the productivity of daily processes, and leverage exclusive data validation & data search.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Ourservice