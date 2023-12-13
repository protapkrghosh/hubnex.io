import React from 'react'

import Hero from '../../components/serviceUpdated/childrens/SoftwareHero'
import Ourservice from '../../components/serviceUpdated/childrens/SoftwareCards'
import Choose from '../../components/serviceUpdated/Choose'
import Partners from '../../components/aboutpage/Partners'
import Footer from '../../components/footer/Footer'
import Ourself from '../../components/Aboutus'
import Swiperpartners from '../../components/aboutpage/Swiperpartners'
import ServisesHero from '../../components/servisesHeros/ServisesHero'
import ServisesOtherSections from '../../components/servisesHeros/ServisesOtherSections'
import ServisesDataMap from '../../components/servisesHeros/ServisesDataMap'
import { softwarTestingDatas } from '../../data/data'

const SoftwareTesting = () => {

  return (
    <div className='overflow-hidden'>
        <ServisesHero title={"Ensuring High-Quality Software Delivery"  } discriptions={`"Maximizing Your Software Potential with Advanced Testing Solutions"`} background={"serv3"} />
       <ServisesDataMap datas={softwarTestingDatas} />
       <ServisesOtherSections />
    </div>
  )
}

export default SoftwareTesting