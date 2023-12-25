import React from 'react'
import { Link } from 'react-router-dom'
import aboutLander from '../../assets/aboutLander.png'

const Hero = () => {
  return (
    <div className='aboutUsHeroFirstDiv'>
      <img src={aboutLander} alt='aboutLanderPage' className=' aboutUsHeroImage' />
      <div className=' aboutUsHeroSecondDiv'>
        {/* bug fix:   -top-24 md:-top-16  xl:-top-48 */}
        <div className='aboutUsHeroThirdDiv'>
            <h1 className='aboutUsHeroH1'>About Us</h1>
            <p className='aboutUsHeroP font-gilroy-medium'>Passionate about exceptional IT services, delivering innovative solutions to meet unique needs.</p>
          <div>
            {/* Bug Fix: Change sm device button background color */}
            <Link to='/contact' className='btn-service'>Know more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero