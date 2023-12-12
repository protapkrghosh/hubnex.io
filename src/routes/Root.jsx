import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollTop from './ScrollTop.js'


const Root = () => {

  const location = useLocation()
  useEffect(()=>{
    if(location.pathname == '/'){
      localStorage.removeItem('token')
    }
  }, [])

  return (
    <>
      <div className='font-gilroy-regular'>
        <ScrollTop/>
          <Outlet />
      </div>
    </>
  )
}

export default Root 