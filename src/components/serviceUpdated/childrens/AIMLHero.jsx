import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";

const Hero = () => {
  return (
    
    <div className=' h-screen xl:h-[908px] bg-serv1 bg-cover bg-center w-full relative '>
        <Navbar />
        <div className=''>
            <div className=' '>
                <div className=' '>
                    <div className=' '></div>
                    <p className=' '>""</p>
                    <Link to='/contact' className='btn-primary'>Get in touch</Link>
                </div>  
            </div>
        </div>
      </div>
  );
};

export default Hero;
