import React, { useEffect, useRef, useState } from 'react'
import IndustryHeros from '../../components/industryHeros/IndustryHeros';
import IndustryOthersPage from '../../components/industryHeros/IndustryOthersPage';
const Travel = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const totalSections = sectionIds.length;
    const sectionHeight = scrollHeight / totalSections;
    const nextSectionIndex = Math.min(totalSections - 1, Math.floor((scrollTop + windowHeight / 2) / sectionHeight));
  
    if (nextSectionIndex !== currentSectionIndex) {
      setCurrentSectionIndex(nextSectionIndex);
      window.scrollTo({ top: nextSectionIndex * sectionHeight, behavior: "smooth" });
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSectionIndex]);
    const isMobile=()=> {
        const match=window.matchMedia("(max-width:912px)");
        return(match && match.matches); 
      }

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