import React from 'react'

import Hero from '../../components/serviceUpdated/childrens/AIMLHero'
import Ourservice from '../../components/serviceUpdated/childrens/AIMLCards'
import Choose from '../../components/serviceUpdated/Choose'
import Partners from '../../components/aboutpage/Partners'
import Footer from '../../components/footer/Footer'
import Ourself from '../../components/Aboutus'
import Swiperpartners from '../../components/aboutpage/Swiperpartners'
import ServisesHero from '../../components/servisesHeros/ServisesHero'
import ServisesOtherSections from '../../components/servisesHeros/ServisesOtherSections'
import ServisesDataMap from '../../components/servisesHeros/ServisesDataMap'
import { aimldatas } from '../../data/data'

const AIML = () => {
  return (
    <div className='overflow-hidden'>
        <ServisesHero title={"Smarter Business Decisions with AI/ML"  } discriptions={`"Empowering Smarter Business Decisions with this"`} background={"serv1"} />
        <ServisesDataMap datas={aimldatas} />
        <ServisesOtherSections />
    </div>
  )
}

export default AIML