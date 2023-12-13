import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useParams } from 'react-router-dom';

const LeftNavbar = ({ bg, scrollRef }) => {
  const [activeSection, setActiveSection] = useState('section-1');
  const [colorChange, setColorChange] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (!scrollRef.current) return;
      const scrollPosition = scrollRef.current.scrollTop;
      const sectionElements = document.querySelectorAll('section[id^="section-"]');
      const currentSection = Array.from(sectionElements).reduce((acc, section) => {
        if (section.offsetTop - 1 <= scrollPosition) {
          acc = section.id;
          // console.log(acc);
        }
        return acc;
      }, 'section-1');
      setActiveSection(currentSection);
      if ((currentSection === 'section-3') || (currentSection === 'section-4'))
        setColorChange(true)
      else
        setColorChange(false)
    };

    scrollRef.current?.addEventListener('scroll', onScroll);
    return () => scrollRef.current?.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="h-screen flex flex-col items-start justify-center gap-10 text-2xl fixed">
      <li className="cursor-pointer text-white">
        <Link
          activeClass="active"
          className="flex flex-col"
          hashSpy={false}
          smooth

          to="section-1"
          isDynamic={true}
          containerId="scroll-container"
        >
          <span className={`line ${activeSection === 'section-1' && 'bg-white w-20'} ${colorChange ? 'bg-black' : 'bg-white'}   w-10 h-[2px]`}></span>
          <span className={`text-1 ${activeSection === 'section-1' ? 'inline-block' : 'hidden'} font-gilroy-light text-[14px] w-[70px] leading-5  text-white`}>scale your business</span>
        </Link>
      </li>
      <li className="cursor-pointer text-white">
        <Link
          activeClass="active"
          className="flex flex-col"
          hashSpy={false}
          smooth

          to="section-2"
          isDynamic={true}
          containerId="scroll-container"
        >
          <span className={`line ${activeSection === 'section-2' && 'bg-white w-20'} ${colorChange ? 'bg-black' : 'bg-white'} w-10 h-[2px] `}></span>
          <span className={`text-1 font-gilroy-light text-[14px] w-[70px] leading-5 ${activeSection === 'section-2' ? 'inline-block' : 'hidden'}`}>products that shine</span>
        </Link>
      </li>
      <li className="cursor-pointer text-white">
        <Link
          activeClass="active"
          className="flex flex-col"
          hashSpy={false}
          smooth

          to="section-3"
          isDynamic={true}
          containerId="scroll-container"
        >
          <span className={`line ${activeSection === 'section-3' && `bg-black w-20 `} ${colorChange ? 'bg-black' : 'bg-white'} w-10 h-[2px] `}></span>
          <span className={`text-1 font-gilroy-light text-[14px] w-[75px] leading-5 ${activeSection === 'section-3' ? 'inline-block' : 'hidden'} text-black`}>services we provide</span>
        </Link>
      </li>
      <li className="cursor-pointer text-white">
        <Link
          activeClass="active"
          className="flex flex-col"
          hashSpy={false}
          smooth

          to="section-4"
          isDynamic={true}
          containerId="scroll-container"
        >
          <span className={`line ${activeSection === 'section-4' && 'bg-black w-20'} ${colorChange ? 'bg-black' : 'bg-white'}  w-10 h-[2px] `}></span>
          <span className={`text-1 font-gilroy-light text-[14px] w-[75px] leading-5 ${activeSection === 'section-4' ? 'inline-block' : 'hidden'} text-black`}>testimonials</span>
        </Link>
      </li>
      <li className="cursor-pointer text-white">
        <Link
          activeClass="active"
          className="flex flex-col"
          hashSpy={false}
          smooth

          to="section-5"
          isDynamic={true}
          containerId="scroll-container"
        >
          <span className={`line ${activeSection === 'section-5' && 'bg-white w-20'} ${colorChange ? 'bg-black' : 'bg-white'} w-10 h-[2px] `}></span>
          <span className={`text-1 font-gilroy-light text-[14px] w-[75px] leading-5 ${activeSection === 'section-5' ? 'inline-block' : 'hidden'}`}>our core values</span>
        </Link>
      </li>
      <li className="cursor-pointer text-white">
        <Link
          activeClass="active"
          className="flex flex-col"
          hashSpy={false}
          smooth

          to="section-6"
          isDynamic={true}
          containerId="scroll-container"
        >
          <span className={`line ${activeSection === 'section-6' && 'bg-white w-20'} ${colorChange ? 'bg-black' : 'bg-white'} w-10 h-[2px] `}></span>
          <span className={`text-1 font-gilroy-light text-[14px] w-[75px] leading-5 ${activeSection === 'section-6' ? 'inline-block' : 'hidden'}`}>connect with us</span>
        </Link>
      </li>
    </div>
  );
};

export default LeftNavbar;