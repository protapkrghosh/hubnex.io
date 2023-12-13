import React from 'react'
import Hero from '../../components/serviceUpdated/childrens/DigitalHero'
import Ourservice from '../../components/serviceUpdated/childrens/DigitalCards'
import ServisesHero from '../../components/servisesHeros/ServisesHero'
import ServisesOtherSections from '../../components/servisesHeros/ServisesOtherSections'
import ServisesDataMap from '../../components/servisesHeros/ServisesDataMap'
import { digitalMarketingDatas } from '../../data/data'

const DigitalMarketing = () => {


  return (
    <div className='overflow-hidden'>
       <ServisesHero title={"Mastering SEO for Digital Marketing Success"  } discriptions={`"Tailored IoT Solutions for Your Business Success"`} background={"serv6"} />
        <ServisesDataMap datas={digitalMarketingDatas} />
        <ServisesOtherSections />
    </div>
  )
}

export default DigitalMarketing