import React, { useEffect, useRef, useState } from 'react';
import Partners from '../../components/aboutpage/Partners';
import Swiperpartners from '../../components/aboutpage/Swiperpartners';
import Aboutus from '../../components/Aboutus';
import Footer from '../../components/footer/Footer';
import Innovation from './Innovation';
import Works from './Works';

const isMobile = () => {
  const match = window.matchMedia("(max-width:912px)");
  return (match && match.matches);
}
const sectionIds = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'];

const IndustryOthersPage = () => {
  const scrollRef = useRef(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
 

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
  return (
    <div className='h-screen w-full'>
      <div className='h-full w-full ' ref={scrollRef} style={{ scrollSnapType: 'y mandatory' }}>   
          <Innovation />
        <section id='section-2' className='snap-start'>
          <Works />
        </section>
        <section id='section-3' className='snap-start'>
          <Aboutus />
        </section>
        <section id='section-4' className='snap-start'>
          {isMobile() ? <Swiperpartners /> : <Partners />}
        </section>
        <section id='section-5' className='snap-start'>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default IndustryOthersPage;