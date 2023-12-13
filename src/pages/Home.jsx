import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../components/footer/Footer';
import About from '../components/homepage/About';
import Brand from '../components/homepage/Brand';
import Hero from '../components/homepage/Hero';
import Services from '../components/homepage/Services';
import Testimonial from '../components/homepage/Testimonial';
import LeftNavbar from '../components/navbar/LeftNavbar';
import Navbar from '../components/navbar/Navbar';
import { scroller } from 'react-scroll';
import { useRef } from 'react';

const sectionIds = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6'];

const Home = () => {
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

  return (
    <>
      <div className='h-screen w-full'>
        <div className='hidden xl:inline-block absolute left-10 z-50'>
          <LeftNavbar scrollRef={scrollRef}/>
        </div>

        <div className='h-full w-full overflow-y-scroll' ref={scrollRef} style={{ scrollSnapType: 'y mandatory' }}>
          <section
            id='section-1'
            className='snap-start  overflow-hidden h-full w-full bg-landerImg md:bg-cover bg-no-repeat bg-[80%] md:bg-center'
          >
            <Navbar />
            <Hero />
          </section>

          <section id='section-2' className=' h-full w-full snap-start'>
            <Brand />
          </section>

          <section id='section-3' className='h-auto xs:h-full snap-start w-full bg-vector relative bg-cover bg-no-repeat bg-center'>
            <Services />
          </section>

          <section id='section-4' className='h-full w-full snap-start lg:bg-balloon bg-balloonMob bg-blue-200 relative bg-center bg-cover bg-[length:100%_100%] bg-no-repeat '>
            <Testimonial />
          </section>

          <section id='section-5' className='h-auto xs:h-full w-full snap-start'>
            <About />
          </section>

          <section id='section-6' className='h-auto w-full snap-start'>
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
