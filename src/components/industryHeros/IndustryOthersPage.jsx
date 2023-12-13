import React from 'react';
import Work from '../../components/industrypage/Work'
import Partners from '../../components/aboutpage/Partners';
import Swiperpartners from '../../components/aboutpage/Swiperpartners';
import Aboutus from '../../components/Aboutus';
import Footer from '../../components/footer/Footer';
import Innovation from '../../components/industrypage/Innovation';

const isMobile=()=> {
    const match=window.matchMedia("(max-width:912px)");
    return(match && match.matches); 
  }

const IndustryOthersPage = () => {
    return (
        <div>
        <Innovation/>
        <Work/>
        <Aboutus/>
        {isMobile() ? <Swiperpartners/> : <Partners/>}
        <Footer />
        </div>
    );
};

export default IndustryOthersPage;