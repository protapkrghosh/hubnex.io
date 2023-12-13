import React from 'react'
import Work from '../../components/industrypage/Work'
import Partners from '../../components/aboutpage/Partners';
import Swiperpartners from '../../components/aboutpage/Swiperpartners';
import Aboutus from '../../components/Aboutus';
import Footer from '../../components/footer/Footer';
import Innovation from '../../components/industrypage/Innovation';
import Herocomm from '../../components/industrypage/Herocomm';
import IndustryHeros from '../../components/industryHeros/IndustryHeros';
import IndustryOthersPage from '../../components/industryHeros/IndustryOthersPage';


const Communication = () => {

    const isMobile=()=> {
        const match=window.matchMedia("(max-width:912px)");
        return(match && match.matches); 
      }

  return (
    <div className=' overflow-hidden'>
      <IndustryHeros title={"Revolutionizing the way we connect"  } discriptions={"Digitalizing Communication Empowering Businesses to Thrive in the Future"} background={"ind1"} />
        <IndustryOthersPage />
    </div>
  )
}

export default Communication