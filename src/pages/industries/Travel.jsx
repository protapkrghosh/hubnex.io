import React from 'react'
import IndustryHeros from '../../components/industryHeros/IndustryHeros';
import IndustryOthersPage from '../../components/industryHeros/IndustryOthersPage';

const Travel = () => {

    const isMobile=()=> {
        const match=window.matchMedia("(max-width:912px)");
        return(match && match.matches); 
      }

  return (
    <div className='overflow-hidden'>
       <IndustryHeros title={"Public Sector Solutions"  } discriptions={"Your Voice, Your Government Bridging the Gap for Better Governance"} background={"ind5"}  button={"Let's talk"} />
        <IndustryOthersPage />
    </div>
  )
}

export default Travel