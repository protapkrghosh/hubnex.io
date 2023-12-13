import React from 'react'
import IndustryHeros from '../../components/industryHeros/IndustryHeros';
import IndustryOthersPage from '../../components/industryHeros/IndustryOthersPage';

const Retail = () => {

  return (
    <div className='overflow-hidden'>
       <IndustryHeros title={"Revolutionizing the way we connect"  } discriptions={"Digitalizing Communication Empowering Businesses to Thrive in the Future"} background={"ind3"} button={"Let's talk"}  />
       <IndustryOthersPage />
    </div>
  )
}

export default Retail