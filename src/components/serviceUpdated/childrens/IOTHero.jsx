import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";

const Hero = () => {
  return (
    
    <div className=' h-screen xl:h-[908px] bg-serv4 bg-cover bg-center w-full relative '>
        <Navbar />
        <div className='w-full h-full flex items-center justify-center'>
            <div className=' text-white w-[85%] flex justify-start h-full  items-center'>
                <div className=''>
                  {/*  Whatdo:make text degain reusable */}
                    <span className=' survise-text'></span>
                    <p className=' text-peragrap'>""</p>
                    <Link to='/contact' className=' btn-primary'>Get in touch</Link>

                </div>  
            </div>
        </div>
      </div>
  );
};

export default Hero;
