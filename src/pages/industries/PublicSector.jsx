import React from 'react'
import Work from '../../components/industrypage/Work'
import Partners from '../../components/aboutpage/Partners';
import Swiperpartners from '../../components/aboutpage/Swiperpartners';
import Aboutus from '../../components/Aboutus';
import Footer from '../../components/footer/Footer';
import Innovation from '../../components/industrypage/Innovation';
import HeroPublic from '../../components/industrypage/HeroPublic';
import IndustryHeros from '../../components/industryHeros/IndustryHeros';
import IndustryOthersPage from '../../components/industryHeros/IndustryOthersPage';

const PublicSector = () => {

    const isMobile=()=> {
        const match=window.matchMedia("(max-width:912px)");
        return(match && match.matches); 
      }

  return (
    <div className='overflow-hidden'>
       <IndustryHeros title={"Empowering Your Financial Future"  } discriptions={"Banking, Financial Services, and Insurance Solutions for Every Stage of Life"} background={"ind4"}  button={"Let's talk"} />
       <IndustryOthersPage />
    </div>
  )
}

export default PublicSector