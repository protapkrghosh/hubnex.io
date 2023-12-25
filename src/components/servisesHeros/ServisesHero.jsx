import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
const ServisesHero = ({title,discriptions,background,isAiml}) => {

  // add this custom styles to handle background
  const imgeStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
};
    
    return (
             <div style={imgeStyle} className={`h-screen  bg-center w-full relative`}  >
        <Navbar />
        <div className={`${isAiml ? 'servesHeroAimlFirstDiv' : 'servesHeroFirstDiv'}`}>
            <div className='servesHeroSecondDiv '>
                <div className={`${isAiml ? 'servesAiMlThirdDiv' : 'servesHeroThirdDiv'}`}>
                    <h1 className={`servesH1`}>{title}</h1>
                    {/* add margin bottom in the mobile view */}
                    <p className='servesP'>{discriptions}</p>
                      {/* change the btn primary to btn servise to handle both mobile view and pc view */}
                    <Link to='/contact' className='btn-service'>Get in touch</Link>
                </div>  
            </div>
          </div>
        </div>
  );
};

export default ServisesHero;
