import React, { useEffect, useRef, useState } from 'react'
import imge from "../../assets/serv2.png"
import Swiperpartners from '../../components/aboutpage/Swiperpartners'
import ServisesHero from '../../components/servisesHeros/ServisesHero'
import ServisesOtherSections from '../../components/servisesHeros/ServisesOtherSections'
import ServisesDataMap from '../../components/servisesHeros/ServisesDataMap'
import { cloudServiseDatas } from '../../data/data'
import IndustryHeros from '../../components/industryHeros/IndustryHeros'
const sectionIds = ['section-1', 'section-2', 'section-3'];

const CloudServices = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const totalSections = sectionIds.length;
    const sectionHeight = scrollHeight / totalSections;
    const nextSectionIndex = Math.min(
      totalSections - 1,
      Math.floor((scrollTop + windowHeight / 2) / sectionHeight)
    );

    if (nextSectionIndex !== currentSectionIndex) {
      setCurrentSectionIndex(nextSectionIndex);
      window.scrollTo({
        top: nextSectionIndex * sectionHeight,
        behavior: "smooth",
      });
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSectionIndex]);
  return (
    <div className='h-screen w-full'>
        <div className='h-full w-full overflow-y-scroll' ref={scrollRef} style={{ scrollSnapType: 'y mandatory' }}>
          <section
            id='section-1' className='snap-start'
          >
            {/* change industry hero to services hero to make all things align  and also add specific componnet degain */}
            <ServisesHero isAiml={false} title={"Secure and Reliable Cloud Services"  } discriptions={`"Powering Your Business with Cloud Confidence"`} background={imge} button={"Get in touch"}/>
          </section>

        <section id="section-2" className="snap-start">
          <ServisesDataMap datas={cloudServiseDatas} />
        </section>

        <section id="section-3" className="snap-start">
          <ServisesOtherSections />
        </section>
      </div>
    </div>
  );
};

export default CloudServices;
