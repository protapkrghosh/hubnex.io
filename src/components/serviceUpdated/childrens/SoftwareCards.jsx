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
import '../Ourservice.css';



const CardSoftware   = () => {
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

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className='  flex justify-between items-center bg-500'>
                    <img src={testImg1} alt="" className=' w-[70px] h-[70px] '/>
                    <span className=' text-[70px] text-gray-400 font-gilroy-bold'>01</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5 '>
                    <p className='   font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Functional Testing</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white '> We use the latest automation tools and frameworks to implement comprehensive functional testing, focusing on the user interface, security, APIs, client or server functionalities, and other similar app.</p>
                  </div>
                </div>

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  
                  <div className=' flex justify-between items-center bg-500'>
                  <img src={testImg2} alt="" className=' w-[70px] h-[70px] '/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>02</span>
                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Usability Testing</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Leverage our extensive industry knowledge, advanced technology stack, UX trends, and cross-industry experience to assess the usability and convenience of your application for end-users.</p>
                  </div>
                </div>
                

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg3} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>03</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <span className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Performance Testing</span>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> We help you predict app behavior and performance in real-life environments by identifying and addressing bottlenecks. We ensure that your software is stable, agile, and performs optimally under  loads.</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg4} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>04</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Security Testing</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Our in-depth security assessment & validation services and best practices proactively protect your system and information from possible intruders, increasing business continuity. </p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg5} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>05</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Compatibility Testing</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Test your software for compatibility across different browsers, operating systems, networks, databases, hardware, server, devices, etc., to ensure it meets diverse users’ requirements.</p>
                  </div>
                </div>
                

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg6} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>06</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Web & Mobile App Testing</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> We provide end-to-end cross-platform/ functional/ non-functional testing with both manual & automated testing approaches to ensure your mobile & web app are scalable, secure, & compatible. </p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg7} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>07</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Automated Testing</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> Leverage our full-cycle test automation services, to achieve lower testing costs and faster time-to-market while ensuring zero flaws in production. Deliver error-free and quality web, mobile, and enterprise.</p>
                  </div>
                </div>

                <div className='card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg8} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>08</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>Manual Testing</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '>Supplement automated testing with a manual component that tests user interface, installation, error handling, security, and much more to verify that all features work as expected.</p>
                  </div>
                </div>
                

                <div className=' card h-auto py-5 lg:py-[35px] 2xl:h-[345px] 2xl:w-[414px] w-[350px] px-5 relative rounded-md bg-100 bg-opacity-20   flex flex-col justify-evenly lg:h-[300px] '>
                  <div className=' flex justify-between items-center bg--500'>
                  <img src={testImg9} alt="" className=' w-[70px] h-[70px] rounded-full'/>
                  <span className=' text-[70px] text-gray-400 font-gilroy-bold'>09</span>

                  </div>
                  <div className=' w-full flex flex-col gap-5'>
                    <p className='  font-gilroy-semi-bold text-[20px] 2xl:text-[24px] text-white'>API Testing</p>
                    <p className='  font-gilroy-regular 2xl:text-[18px] text-[16px] text-white  '> We undertake API specification review, test case development and execution to infuse your software with the greater functionality, reliability, and security of that.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CardSoftware