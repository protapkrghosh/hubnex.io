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
import { useRef } from 'react';

const sectionIds = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6'];

const Home = () => {
  const scrollRef = useRef(null);
  // Navbar shorted
  const sectionContent = [
    <Hero />,
    <Brand />,
    <Services />,
    <Testimonial />,
    <About />,
    <Footer />
  ];
  const sectionClasses = [
    'snap-start  overflow-hidden h-full w-full bg-landerImg md:bg-cover bg-no-repeat bg-[80%] md:bg-center', //class 1
    ' h-full w-full snap-start',//class 2
    'h-auto xs:h-full snap-start w-full bg-vector relative bg-cover bg-no-repeat bg-center',//class 3
    'h-full w-full snap-start lg:bg-balloon bg-balloonMob relative bg-blue-300 bg-[right_top_1rem] bg-[length:100%_110%] bg-no-repeat',//class 4
    'h-auto xs:h-full w-full snap-start',//class 5
    'h-auto w-full snap-start' //class 6
  ];
  


  return (
    <>
      
      <div className='h-screen w-full'>
        <div className={`hidden xl:inline-block absolute left-10 z-50`}>
          <LeftNavbar scrollRef={scrollRef} />
        </div>

        <div className='h-full w-full ' ref={scrollRef} style={{ scrollSnapType: 'y mandatory' }}>
          {sectionIds.map((section, index) => (
            <section
              key={section}
              id={section}
              className={`snap-start overflow-hidden h-full w-full ${sectionClasses[index]}`}
            >
              <Navbar />
              {sectionContent[index]}
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
