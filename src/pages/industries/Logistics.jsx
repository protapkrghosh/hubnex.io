import React from 'react'
import Work from '../../components/industrypage/Work'
import Partners from '../../components/aboutpage/Partners';
import Swiperpartners from '../../components/aboutpage/Swiperpartners';
import Aboutus from '../../components/Aboutus';
import Footer from '../../components/footer/Footer';
import Innovation from '../../components/industrypage/Innovation';
import Herologi from '../../components/industrypage/Herologi';
import IndustryHeros from '../../components/industryHeros/IndustryHeros';
import IndustryOthersPage from '../../components/industryHeros/IndustryOthersPage';

const Logistic = () => {

    const isMobile=()=> {
        const match=window.matchMedia("(max-width:912px)");
        return(match && match.matches); 
      }

  return (
    <div className='overflow-hidden'>
       <IndustryHeros title={"Retail and Customer Goods"  } discriptions={"Delivering with Care Sustainable Solutions for a Healthier Planet"} background={"ind3"} />
        <IndustryOthersPage />
    </div>
  )
}

export default Logistic