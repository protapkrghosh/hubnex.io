import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/hubnex_logo.png'
import Search from '../searchbar/Search'
import MobileNavbar from './MobileNavbar'
import './navbar.css'
import { useOnHover } from './useOnHover'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import menu from '@assets/menuUp.png'
import close from '@assets/Xmark.png'
import { IndustryNavDataFirst, IndustryNavDataSecond, servicesNavDataFirst, servicesNavDataSecond } from '../../data/data'



const Navbar = () => {
  // Bug Fix: change dynamic background color in button 
  const location = useLocation();
  const isServicesPage = location.pathname.includes('/services');
  const isIndustriesPage = location.pathname.includes('/industries');

  const [searchToggle, setSearchToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);


  const handleSearch = () => {
    setSearchToggle((prev) => !prev)
  }
  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  const industrydropdownRef = useRef(null);
  const servicedropdownRef = useRef(null);
  const [isServiceMenuDropDownOpen, setServiceMenuDropDownOpen] = useState(false);
  const [isIndustryMenuDropDownOpen, setIndustryMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeServiceHoverMenu = () => {
    setServiceMenuDropDownOpen(false);
  };
  const closeIndustryHoverMenu = () => {
    setIndustryMenuDropDownOpen(false);
  };

  useOnHover(industrydropdownRef, closeIndustryHoverMenu);
  useOnHover(servicedropdownRef, closeServiceHoverMenu);

  const isMobile = () => {
    const match = window.matchMedia("(max-width:315px)");
    return (match && match.matches);
  }

  const handleIndustries = () => {
    setDropIndustries((prev) => !prev);
    setDropServices(false);
  }

  const handleServices = () => {
    setDropServices((prev) => !prev);
    setDropIndustries(false);
  }

  const [fix, setFix] = useState(false)
  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY > 300) {
        setFix(true);

      } else {
        setFix(false);
      }
    };

    window.addEventListener('scroll', setFixed);
    return () => window.removeEventListener('scroll', setFixed);
  }, []);



  return (
    <div className={`w-full h-14 bg-black bg-opacity-60 shadow-md lg:h-[80px] fixed z-40 transition-all duration-300 ease-in-out ${fix ? 'bg-black shadow-md' : ''}`}>
      <div className={`w-full h-14 lg:h-[80px] fixed z-40 `}>

        {searchToggle && <Search toggler={searchToggle} />}

        <div className=' h-full xl:max-w-[95%] xl:min-w-[90%] w-[90%] m-auto items-center flex justify-between'>

          {/* Note: Change hubnex project logo and logo resize in navbar */}
          <div className='cursor-pointer z-50'>
            <Link to='/' className=' flex gap-2 items-center'>
              <img src={logo} alt='Logo' className='md:w-[110px] w-[80px]' />
            </Link>
          </div>

          <div className=' text-[18px] hidden xl:flex xl:gap-10 items-center font-gilroy-semi-bold text-white z-10'>

            <NavLink to='/about' className={({ isActive }) => isActive ? 'decoration-white underline decoration-2 underline-offset-4' : 'hover-underline-animation'}>About Us</NavLink>

            <div ref={servicedropdownRef} className=' flex items-center relative'>


              <span activeClassName='your-active-class' onMouseOver={() => setServiceMenuDropDownOpen(true)} className=' cursor-pointer' onClick={handleServices}>Services {isServiceMenuDropDownOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}</span>
              {
                isServiceMenuDropDownOpen &&
                <div className="navbarDiv">
                  <div className=' flex flex-col'>
                   {
                    servicesNavDataFirst.map(serves=> <Link to={serves.to}><div className='navDataDiv'>{serves.title}</div></Link>)
                   }
                  </div>
                  <div className=' flex flex-col'>
                  {
                    servicesNavDataSecond.map(serves=> <Link to={serves.to}><div className='navDataDiv'>{serves.title}</div></Link>)
                   }
                  </div>
                </div>
              }

            </div>

            <div ref={industrydropdownRef} className=' flex items-center relative justify-center'>

              <span onMouseOver={() => setIndustryMenuDropDownOpen(true)} onClick={handleIndustries} className=' cursor-pointer'>Industries {isIndustryMenuDropDownOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}</span>

              {
                isIndustryMenuDropDownOpen &&
                <div className="navbarDiv">
                  <div className=' flex flex-col'>
                  {
                    IndustryNavDataFirst.map(industry=> <Link to={industry.to}><div className='navDataDiv'>{industry.title}</div></Link>)
                   }
                  </div>
                  <div className=' flex flex-col'>
                  {
                    IndustryNavDataSecond.map(industry=> <Link to={industry.to}><div className='navDataDiv'>{industry.title}</div></Link>)
                   }
                  </div>
                </div>
              }
            </div>

            <NavLink to='/contact' className={({ isActive }) => isActive ? 'decoration-white underline decoration-2 underline-offset-4' : 'hover-underline-animation'}>Contact</NavLink>

            {/* Bug Fix: change dynamic background color in button  */}
            <Link
              to='https://startups.hubnex.in'
              className={`border-white ${isServicesPage || isIndustriesPage ? 'bg-white text-black' : 'bg-transparent text-white'}  border-2 py-[8px] px-[12px] rounded-full text-[16px] font-gilroy-semi-bold hover:bg-white hover:text-black duration-150 ease-in-out transition-all`}
            >
              Startup Programme
            </Link>

          </div>
          <div className=' flex xl:hidden z-50'>
              {/* bug fix: remove  right-4 top-6 absolute */}
            {!open ?
              <img onClick={handleOpen} src={menu} className=" w-[30px] cursor-pointer" />
              :
              <img onClick={handleOpen} src={close} className=" w-[25px] z-[100] cursor-pointer right-8 top-7 absolute" />
            }
          </div>
          <MobileNavbar open={open} />
        </div>
      </div>
    </div>
    
  )
}

export default Navbar