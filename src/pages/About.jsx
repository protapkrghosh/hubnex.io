import React, { Suspense,useEffect,useRef,useState } from 'react'
import Hero from '../components/aboutpage/Hero'
import Abouts from '../components/aboutpage/Abouts' 
import Ourself from '../components/aboutpage/Ourself' 
import Partners from '../components/aboutpage/Partners' 
import Footer from '../components/footer/Footer' 
import AboutCards from '../components/aboutpage/AboutCards' 
import Swiperpartners from '../components/aboutpage/Swiperpartners'
import Navbar from '../components/navbar/Navbar'

const sectionIds = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'];

const About = () => {
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
        <section id='section-1'className='snap-start h-screen lg:h-[982px] w-full bg-black overflow-hidden'>
        <Navbar/>
        <Hero/>
      </section>

          <section id='section-2' className='snap-start'>
          <Abouts/>
          </section>
          <section id='section-3' className='snap-start'>
          <AboutCards/>
          </section>
          <section id='section-4' className='snap-start'>
          <Ourself/>
          </section>
          <section id='section-5' className='snap-start'>
          {isMobile()?<Swiperpartners/> :<Partners/>}
          </section>
          <section id='section-6' className='snap-start'>
          <Footer />
          </section>
        </div>
      </div>
  )
}

export default About