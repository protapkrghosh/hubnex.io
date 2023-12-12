import React from 'react'
import testImg1 from '../../assets/costom devp.png';
import testImg2 from '../../assets/Communication.png';
import testImg3 from '../../assets/gg.png';
import testImg4 from '../../assets/Management.png';
import testImg5 from '../../assets/Mobile Development.png';
import testImg6 from '../../assets/Group.png';
import testImg7 from '../../assets/API Programming.png';
import testImg8 from '../../assets/Ux Design.png';
import testImg9 from '../../assets/Address marker.png';
import './Ourservice.css'



const Ourservice = () => {
  return (
    <div className=' py-10 w-full bg-black flex justify-center items-center h-auto'>
        <div className=' h-full w-full flex justify-center items-center'>
            <div className='w-[90%] flex flex-col gap-10 md:justify-around h-full items-center text-black'>  
                <div className='w-full gap-5 flex flex-col items-center justify-center'>
                    <h1 className=' text-white text-[28px] text-center md:text-[50px] xl:text-[55px] font-gilroy-bold'>Our Services</h1>
                    <div className=' md:w-[700px] flex items-center justify-center'>
                        <span className='  text-white text-center text-[18px] md:text-[20px] font-gilroy-regular'>Our goal is to provide a comprehensive platform that empowers individuals and businesses to achieve their full potential. Whether you're looking to advance your career, improve your health and wellness, or grow your...  </span>
                    </div>
                </div>
                
                <div className='  flex flex-wrap w-full justify-center gap-[35px] '>

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className='  flex justify-between items-center bg-500'>
                    <img src={testImg1} alt="" className=' w-[70px] h-[70px] '/>
                    <span className=' text-[50px] md:text-[70px] text-gray-400 font-gilroy-bold'>01</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5 '>
                    <p className='   font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Custom Web Development</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white '> We build customized, intuitive web app  solutions that optimize operations,  accelerate workflows, boost revenue, and  deliver an exceptional product experience.</p>
                  </div>
                </div>

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  
                  <div className=' flex justify-between items-center bg-500'>
                  <img src={testImg2} alt="" className=' w-[70px] h-[70px] '/>
                  <span className=' text-[50px] md:text-[70px] text-gray-400 font-gilroy-bold'>02</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Software Consulting</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> We analyze  businesses  needs and create a  roadmap for  building a software solution    optimized  to  specific  requirement's  and  delivering the best value.</p>
                  </div>
                </div>
                

                 <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg3} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[50px] md:text-[70px] text-gray-400 font-gilroy-bold'>03</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <span className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Implementation & Deployment</span>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> We device comprehensive and agile  deployment & implementation plans using proven methodologies to deliver enhanced and cost-effective solutions to end-users.</p>
                  </div>
                </div>

                 <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg4} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[50px] md:text-[70px] text-gray-400 font-gilroy-bold'>04</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Maintenance & Management</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Our app maintenance and management  services ensure that your software  infrastructure stays relevant, scalable,  sustainable, and high-performing. </p>
                  </div>
                </div>

                 <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg5} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[50px] md:text-[70px] text-gray-400 font-gilroy-bold'>05</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Mobile Web Development</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Our robust & customizable frameworks help develop smart ,mobile apps that analyze user data and incorporate AI ML to deliver personalized user experiences. </p>
                  </div>
                </div>
                

                 <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg6} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[50px] md:text-[70px] text-gray-400 font-gilroy-bold'>06</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Custom Application Devlopment</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Leverage our deep domain expertise to develop robust,scalable & interoperable  mobile, web, desktop & hybrid applications  that deliver optimal business. </p>
                  </div>
                </div>

                 <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg7} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[50px] md:text-[70px] text-gray-400 font-gilroy-bold'>07</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>API Development & Integration</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Develop reliable and easy to consume custom APIs that seamlessly integrate custom software with enterprise and third- party systems & services to maximize uptime  & scalability</p>
                  </div>
                </div>

                 <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg8} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[50px] md:text-[70px] text-gray-400 font-gilroy-bold'>08</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Custom UX/UI Design</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>Leverage the latest UX/UI technologies, architectures, and trends to design responsive & scalable user-centric apps that transform user experiences across channels.</p>
                  </div>
                </div>
                

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px]'>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg9} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[50px] md:text-[70px] text-gray-400 font-gilroy-bold'>09</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>System Integration</p>
                    <p className=' font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Our Software integration engineers adopt next-gen technologies and process to  streamline and integrate everything from  design, development, and testing to execution.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Ourservice