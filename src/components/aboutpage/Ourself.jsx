import React from 'react'
import Chooses from '../servisesHeros/Chooses'

const Ourself = () => {
  return (
    <div>
        <Chooses header={'Who We Are'} hederTitle={'Our values shape the culture of our organization and define who we are. These are at the core of how we work and what we do. We are:'} firsTitle={'Your Next-Gen Technology Partner'} firstDescriptions={'We provide industry expertise and solution IPs to help customers achieve successful business outcomes.'} secondTitle={'Team-Oriented'} secondDescriptions={'We work together to drive change by setting the bar for future technologies and our way of working and build long-term partnerships.'} thirdTitle={'Client-Focused'} thirdDescriptions={'We are, above all else, customer-centric. We are in it for the long run and have an unwavering passion for client success.'} isOurself={true} />
    </div>
  )
}

export default Ourself