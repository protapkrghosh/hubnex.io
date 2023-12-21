import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
const ServisesHero = ({ title, discriptions, background }) => {
  return (
    <div>
      <div
        className={`h-screen xl:h-[908px] bg-${background} bg-cover bg-center w-full relative`}
      >
        <Navbar />
        <div className="w-full h-full flex items-center justify-center">
          <div className=" text-white w-[85%] flex justify-start h-full  items-center">
            <div className=" w-90 flex flex-col gap-8 xl:gap-14 lg:mb-[180px] xl:mb-40">
              <div className=" text-[24px] md:text-[60px] lg:text-[70px] xl:text-[60px] 2xl:text-[60px] font-gilroy-bold mt-20 leading-tight lg:w-[700px]">
                {title}
              </div>
              <p className=" text-[16px]  md:text-[24px] font-gilroy-semi-bold">
                {discriptions}
              </p>
              <Link to="/contact" className="btn-primary">
                Let's talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServisesHero;
