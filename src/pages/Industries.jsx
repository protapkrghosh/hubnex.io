import React from 'react'
import Hero from '../components/industrypage/Hero'
import Work from '../components/industrypage/Work'
import Footer from '../components/footer/Footer'
import About from '../components/Aboutus'
import Innovation from '../components/industrypage/Innovation'
import Swiperpartners from '../components/aboutpage/Swiperpartners'
import Partners from '../components/aboutpage/Partners'


const Industries = ()=>{

  const isMobile=()=> {
    const match=window.matchMedia("(max-width:912px)");
    return(match && match.matches); 
  }
  
  return (
    <div className=' overflow-hidden'>
        <Hero/>
        <Innovation/>
        <Work/>
        <About/>
        {isMobile() ? <Swiperpartners/> : <Partners/>}
        <Footer />
    </div>
  )
}

export default Industries