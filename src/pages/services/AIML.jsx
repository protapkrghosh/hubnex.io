import React, { useEffect, useRef, useState } from 'react'
import ServisesOtherSections from '../../components/serviceUpdated/servisesHeros/ServisesOtherSections';
import ServisesDataMap from '../../components/serviceUpdated/servisesHeros/ServisesDataMap';
import ServisesHero from '../../components/serviceUpdated/servisesHeros/ServisesHero';
import { aimldatas } from '../../data/data';
import imge from "../../assets/serv1.png"
const sectionIds = ['section-1', 'section-2', 'section-3'];

const AIML = () => {
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
            {/* change industry hero to aiml hero make aiml hero align */}
            <ServisesHero title={"Smarter Business Decisions with AI/ML"  } discriptions={`"Empowering Smarter Business Decisions with this"`} background={imge} isAiml={true}  />
          </section>

          <section id='section-2' className='snap-start'>
          <ServisesDataMap datas={aimldatas} />
          </section>

          <section id='section-3' className='snap-start'>
          <ServisesOtherSections />
          </section>
        </div>
      </div>
  )
}

export default AIML