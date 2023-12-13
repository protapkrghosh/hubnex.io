import React from 'react'

import Hero from '../../components/serviceUpdated/childrens/IOTHero'
import Ourservice from '../../components/serviceUpdated/Ourservice'
import Choose from '../../components/serviceUpdated/Choose'
import Partners from '../../components/aboutpage/Partners'
import Footer from '../../components/footer/Footer'
import Ourself from '../../components/Aboutus'
import Swiperpartners from '../../components/aboutpage/Swiperpartners'
import ServisesHero from '../../components/servisesHeros/ServisesHero'
import ServisesOtherSections from '../../components/servisesHeros/ServisesOtherSections'
import ServisesDataMap from '../../components/servisesHeros/ServisesDataMap'
import { iotDatas } from '../../data/data'

const IOT = () => {

  const isMobile=()=> {
    const match=window.matchMedia("(max-width:912px)");
    return(match && match.matches); 
  }

  return (
    <div className='overflow-hidden'>
        <ServisesHero title={"Efficient and Effective  Integration Services"  } discriptions={`"Enhancing Your Site's Performance and User Experience"`} background={"serv4"} />
        <ServisesDataMap datas={iotDatas} />
        <ServisesOtherSections />
    </div>
  )
}

export default IOT