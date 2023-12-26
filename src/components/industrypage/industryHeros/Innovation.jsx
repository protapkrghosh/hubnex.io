import React from 'react'
import { inovetionData } from '../../../data/data'

const Innovation = () => {
  return (
    <div>
      <div className=' innovetionsTopDiv'>
      
          {/* Note: Added padding top in heading text */}
          <h1 className='innovetionsTopH1 font-gilroy-bold '>Innovating for the Future of Care</h1>
        <div className='innovetionsTopSecondDiv '>
          <p className='innovetionsTopP font-gilroy-regular'>Our focus is on assisting healthcare and life sciences companies on a global scale to rethink their operational procedures and provide exceptional patient experiences. By combining our extensive knowledge of the industry and business processes with advanced technological expertise, we are dedicated to creating groundbreaking solutions that revolutionize the way our clients conduct their business.</p>
        </div>
        <div className=' md:grid grid-cols-3 gap-8 gap-y-24 mt-5 xl:mt-[97px]'>
{/* add map method to make this statics data dynamic */}
        {
  inovetionData.map((inovat) => (
    <div key={inovat.title}>
      <div className='innovetionsDiv'>
        <div className='innovetionsSecondDiv'></div>
        <p className='innovetionsP'>{inovat.title}</p>
      </div>
    </div>
  ))
}

        </div>
        
      </div>
    </div>
  )
}

export default Innovation
