import React from 'react' 

const Abouts = () => {
  return (
    <div className=' aboutsPageFirstDiv'>
        <div className='aboutsPageSecondDiv'> 
          <div className='aboutsPageThirdDiv'>
            {/*bug fix: add -mt-32 md:-mt-0 */}
            <div className='aboutsPageFourthDiv '>
              <h1 className='aboutsPageH1'>Digital guidance <br/>expertise</h1>
              {/* bug fix: add w-[400px] lg:w-[861px] */}
              <p className='aboutsPageP'>We are a leading IT consultancy with expertise in innovative solutions for modern challenges. Our client-centric approach enables us to design tailored solutions that keep businesses ahead in the ever-evolving digital landscape.</p>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Abouts