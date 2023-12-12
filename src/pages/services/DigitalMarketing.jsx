import React from 'react'

import Hero from '../../components/serviceUpdated/childrens/DigitalHero'
import Ourservice from '../../components/serviceUpdated/childrens/DigitalCards'
import Choose from '../../components/serviceUpdated/Choose'
import Partners from '../../components/aboutpage/Partners'
import Footer from '../../components/footer/Footer'
import Ourself from '../../components/Aboutus'
import Swiperpartners from '../../components/aboutpage/Swiperpartners'

const DigitalMarketing = () => {

  const isMobile=()=> {
    const match=window.matchMedia("(max-width:912px)");
    return(match && match.matches); 
  }

  return (
    <div className='overflow-hidden'>
        <Hero/>
        <Ourservice/>
        <Choose/>
        <Ourself/> 
        {isMobile()? <Swiperpartners/> :<Partners/>}
        <Footer/>
    </div>
  )
}

export default DigitalMarketing