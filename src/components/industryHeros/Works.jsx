import React from 'react';
import { whatWeDoData } from '../../data/data';

const Works = () => {
    return (
        <>
        {/* Note: Fixed section padding */}
        <div className='worksTopDiv'>
          {/* Bug Fix: Added mt-10 */}
            <h1 className='worksTopH1 font-gilroy-bold'>What We Do</h1>
          <p className='worksTopP font-gilroy-regular'>Delivering exponential value throughout the care ecosystem</p>
          <div className='flex flex-wrap justify-center'>
  
          {
            // add map method to make this data dynamic
  whatWeDoData.map((whatWeDo) => (
    <div key={whatWeDo.title}>
      <div className='worksDiv card'>
        <h1 className='worksH1 font-inter-semibold'>{whatWeDo.title}</h1>
        <p className="font-inter-semibold worksP">
          {whatWeDo.discriptions}
        </p>
      </div>
    </div>
  ))
}
            
          </div>
  
        </div>
      </>
    );
};

export default Works;