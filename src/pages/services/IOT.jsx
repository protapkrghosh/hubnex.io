import React, { useEffect, useRef, useState } from 'react'
import ServisesOtherSections from '../../components/servisesHeros/ServisesOtherSections'
import ServisesDataMap from '../../components/servisesHeros/ServisesDataMap'
import { iotDatas } from '../../data/data'
import IndustryHeros from '../../components/industryHeros/IndustryHeros'
import ServisesHero from '../../components/servisesHeros/ServisesHero'
const sectionIds = ['section-1', 'section-2', 'section-3'];

const IOT = () => {
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
            {/* change industry hero to services hero to make all things align */}
            <ServisesHero h1classNames={"text-[28px] md:text-[50px] lg:text-[70px] xl:text-[60px] 2xl:text-[60px] font-gilroy-bold leading-tight lg:w-[700px]"} divClassName={" w-90 flex flex-col gap-8 xl:gap-14 lg:mb-[180px] xl:mb-48"} title={"Efficient and Effective  Integration Services"  } discriptions={`"Tailored IoT Solutions for Your Business Success"`} background={"serv4"} button={"Get in touch"}/>
          </section>

          <section id='section-2' className='snap-start'>
          <ServisesDataMap datas={iotDatas} />
          </section>

          <section id='section-3' className='snap-start'>
          <ServisesOtherSections />
          </section>
        </div>
      </div>
  )
}

export default IOT