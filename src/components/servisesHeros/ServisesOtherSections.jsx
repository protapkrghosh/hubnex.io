

import Choose from '../../components/serviceUpdated/Choose'
import Partners from '../../components/aboutpage/Partners'
import Footer from '../../components/footer/Footer'
import Ourself from '../../components/Aboutus'
import Swiperpartners from '../../components/aboutpage/Swiperpartners'
import { useEffect, useRef, useState } from 'react'
const sectionIds = ['section-1', 'section-2', 'section-3'];
const ServisesOtherSections = () => {
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
        <div className='h-full w-full overflow-y-scroll' ref={scrollRef} style={{ scrollSnapType: 'y mandatory' }}>
          <section
            id='section-1' className='snap-start'
          >
            <Choose/>
          </section>

          <section id='section-2' className='snap-start'>
          <Ourself/> 
          </section>

          <section id='section-3' className='snap-start'>
          {isMobile()? <Swiperpartners/> :<Partners/>}
          </section>
          <section id='section-4' className='snap-start'>
          <Footer/> 
          </section>
        </div>
      </div>
    );
};

export default ServisesOtherSections;