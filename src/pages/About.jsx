import React, { Suspense, useEffect, useState, useRef } from 'react'
import Hero from '../components/aboutpage/Hero'
import Abouts from '../components/aboutpage/Abouts'
import Ourself from '../components/aboutpage/Ourself'
import Partners from '../components/aboutpage/Partners'
import Footer from '../components/footer/Footer'
import AboutCards from '../components/aboutpage/AboutCards'
import Swiperpartners from '../components/aboutpage/Swiperpartners'
import Navbar from '../components/navbar/Navbar'

const aboutSectionIds = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'];

const About = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScrollDown = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const totalSections = aboutSectionIds.length;
    const sectionHeight = scrollHeight / totalSections;
    const nextSectionIndex = Math.min(totalSections - 1, Math.floor((scrollTop + windowHeight / 0.9) / sectionHeight));

    if (nextSectionIndex !== currentSectionIndex) {
      setCurrentSectionIndex(nextSectionIndex);
      window.scrollTo({ top: nextSectionIndex * sectionHeight, behavior: "smooth" });
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScrollDown);
    return () => window.removeEventListener('scroll', handleScrollDown);
  }, [currentSectionIndex]);


  const isMobile = () => {
    const match = window.matchMedia("(max-width:912px)");
    return (match && match.matches);
  }

  return (
    <div className='h-full w-full' ref={scrollRef} style={{ scrollSnapType: 'y mandatory' }}>
      <section id='sections-1' className='snap-start h-screen lg:h-[982px] w-full bg-black overflow-hidden'>
        <Navbar />
        <Hero />
      </section>

      <section id='section-2 snap-start h-full w-full'>
        <Abouts />
      </section>

      <section id='section-3 snap-start h-full w-full'>
        <AboutCards />
      </section>

      <section id='section-4 snap-start h-full w-full'>
        <Ourself />
        {isMobile() ? <Swiperpartners /> : <Partners />}
      </section>

      <section id='section-5 snap-start h-full w-full'>
        <Footer />
      </section>
    </div>
  )
}

export default About