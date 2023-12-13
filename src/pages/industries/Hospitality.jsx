import React from 'react'
import Work from '../../components/industrypage/Work'
import Partners from '../../components/aboutpage/Partners';
import Swiperpartners from '../../components/aboutpage/Swiperpartners';
import Aboutus from '../../components/Aboutus';
import Footer from '../../components/footer/Footer';
import Innovation from '../../components/industrypage/Innovation';
import Herohospi from '../../components/industrypage/Herohospi';
import IndustryHeros from '../../components/industryHeros/IndustryHeros';
import IndustryOthersPage from '../../components/industryHeros/IndustryOthersPage';

const Hospitality = () => {

    const isMobile=()=> {
        const match=window.matchMedia("(max-width:912px)");
        return(match && match.matches); 
      }

  return (
    <div className='overflow-hidden'>
       <IndustryHeros title={"Efficient Logistics for Your Supply Chain"  } discriptions={"Travel, Transportation, Logistics and Hospitality"} background={"ind2"} />
        <IndustryOthersPage />
    </div>
  )
}

export default Hospitality