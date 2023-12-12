import React from 'react';
import vector2 from '@assets/vector2.png'
import '../serviceUpdated/Ourservice.css'

const OueWork = () => {
  return (
    <div>
       <div className='bg-black 2xl:h-[902px] py-3 md:py-0 min-h-screen  flex justify-center items-center flex-col gap-0'>
       
            <div className='text-white text-[28px] md:text-[60px] font-gilroy-bold '><h1>What We Do</h1></div>
            <div className='text-white text-[20px] text-center md:text-[24px] font-gilroy-regular p-6' ><p>Delivering exponential value throughout the care ecosystem</p></div>
            <div className='flex flex-wrap justify-center'>

                <div className='card text-white bg-white/5 backdrop-blur-lg rounded-md border p-5 md:p-8 h-[360px] w-[250px]  md:w-[640px] md:h-[302px] xl:w-[550px] 2xl:w-[640px] m-4'>
                    <h1 className='font-inter-semibold text-[28px] md:text-[32px] mb-5 lg:mb-10 '>Healthcare Provider</h1>
                    <p className="font-inter-semibold text-[14px] md:text-[16px]">Technology led value-driven solutions for patient care. We offer innovative and end-to-end integrated solutions for healthcare providers. Our solutions enhance the efficiency of physicians, 
                        hospitals, ancillary facilities, clinics, governmental health bodies and public health organizations.</p>

                </div>
                <div className='card text-white bg-white/5 backdrop-blur-lg rounded-md border p-5 md:p-8 h-[360px] w-[250px] md:w-[640px] md:h-[302px] xl:w-[550px] 2xl:w-[640px] m-4'>
                    <h1 className='font-inter-semibold text-[28px] md:text-[32px] mb-5 lg:mb-10 '>MedTech</h1>
                    <p className="font-inter-semibold text-[14px] md:text-[16px]">Enabling device manufacturers to design and build nexgen healthcare technologies. Our MedTech practice is a partner of choice for global industry majors. We develop next generation products and 
                        technologies through strong domain capabilities in end to end medical product development solutions.</p>

                </div>
                <div className='card text-white bg-white/5 backdrop-blur-lg rounded-md border p-5 md:p-8 h-[360px] w-[250px] md:w-[640px] md:h-[302px]  xl:w-[550px] 2xl:w-[640px] m-4'>
                    <h1 className='font-inter-semibold text-[28px] md:text-[32px]  mb-5 lg:mb-10'>Pharmaceuticals</h1>
                    <p className="font-inter-semibold text-[14px] md:text-[16px]">Committed to enhance continuum of care for our clients by innovative and disruptive technologies. Our deep pharmaceutical domain expertise, historical R&D experience, outcome-based partnerships with global giants 
                        and diverse geographical outreach have enabled our clients to achieve seamless digital transformation</p>

                </div>
                <div className='card text-white bg-white/5 backdrop-blur-lg rounded-md border p-5 md:p-8 h-[360px] w-[250px] md:w-[640px] md:h-[302px] xl:w-[550px] 2xl:w-[640px] m-4'>
                    <h1 className='font-inter-semibold text-[28px] md:text-[32px]  mb-5 lg:mb-10'>Healthcare Payors</h1>
                    <p className="font-inter-semibold text-[14px] md:text-[16px]">Next-generation solutions empowering Payors to improve care quality and increase member satisfaction. Our Healthcare Payer Practice has been consistently ranked as one of the
                         most matured practices in the industry, with over 15 years’ experience in serving several US Health Insurers.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OueWork
