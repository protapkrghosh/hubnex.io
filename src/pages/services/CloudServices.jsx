import React from 'react'

import Hero from '../../components/serviceUpdated/childrens/CloudHero'
import Ourservice from '../../components/serviceUpdated/childrens/CloudServiceCards'
import Choose from '../../components/serviceUpdated/Choose'
import Partners from '../../components/aboutpage/Partners'
import Footer from '../../components/footer/Footer'
import Ourself from '../../components/Aboutus'
import Swiperpartners from '../../components/aboutpage/Swiperpartners'
import ServisesHero from '../../components/servisesHeros/ServisesHero'
import ServisesOtherSections from '../../components/servisesHeros/ServisesOtherSections'
import ServisesDataMap from '../../components/servisesHeros/ServisesDataMap'
import { cloudServiseDatas } from '../../data/data'
import IndustryHeros from '../../components/industryHeros/IndustryHeros'

const CloudServices = () => {

  return (
    <div className='overflow-hidden'>
        <IndustryHeros title={"Secure and Reliable Cloud Services"  } discriptions={`"Powering Your Business with Cloud Confidence"`} background={"serv2"} button={"Get in touch"}/>
        <ServisesDataMap datas={cloudServiseDatas} />
        <ServisesOtherSections />
    </div>
  )
}

export default CloudServices