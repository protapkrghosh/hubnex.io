import React, { useEffect, useRef, useState } from 'react'

import Hero from '../../components/serviceUpdated/childrens/SoftwareHero'
import Ourservice from '../../components/serviceUpdated/childrens/SoftwareCards'
import Choose from '../../components/serviceUpdated/Choose'
import Partners from '../../components/aboutpage/Partners'
import Footer from '../../components/footer/Footer'
import Ourself from '../../components/Aboutus'
import Swiperpartners from '../../components/aboutpage/Swiperpartners'
import ServisesHero from '../../components/servisesHeros/ServisesHero'
import ServisesOtherSections from '../../components/servisesHeros/ServisesOtherSections'
import ServisesDataMap from '../../components/servisesHeros/ServisesDataMap'
import { softwarTestingDatas } from '../../data/data'
import IndustryHeros from '../../components/industryHeros/IndustryHeros'
const sectionIds = ['section-1', 'section-2', 'section-3'];

const SoftwareTesting = () => {
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
    <div className='h-screen w-full'>
        <div className='h-full w-full overflow-y-scroll' ref={scrollRef} style={{ scrollSnapType: 'y mandatory' }}>
          <section
            id='section-1' className='snap-start'
          >
            <IndustryHeros title={"Ensuring High-Quality Software Delivery"  } discriptions={`"Maximizing Your Software Potential with Advanced Testing Solutions"`} background={"serv3"} button={"Get in touch"} />
          </section>

          <section id='section-2' className='snap-start'>
          <ServisesDataMap datas={softwarTestingDatas} />
          </section>

          <section id='section-3' className='snap-start'>
          <ServisesOtherSections />
          </section>
        </div>
      </div>
  )
}

export default SoftwareTesting