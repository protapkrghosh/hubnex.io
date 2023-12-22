import React, { useEffect, useRef, useState } from 'react'
import IndustryHeros from '../../components/industryHeros/IndustryHeros';
import IndustryOthersPage from '../../components/industryHeros/IndustryOthersPage';
const Travel = () => {

  const scrollRef = useRef(null);


  

  

  return (
    <div className='h-screen w-full'>
      
      <div className='h-full w-full overflow-y-scroll ' ref={scrollRef} style={{ scrollSnapType: 'y mandatory' }}>
      <section
        id='section-1' className='snap-start'
      >
         <IndustryHeros title={"Public Sector Solutions"  } discriptions={"Your Voice, Your Government Bridging the Gap for Better Governance"} background={"ind4"}  button={"Let's talk"} />
      </section>

      <section id='section-2' className='snap-start'>
      <IndustryOthersPage />
      </section>
    </div>
    </div>
  )
}

export default Travel