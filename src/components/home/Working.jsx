import React from "react";
import people_graff from "../../assets/webp/Working-img.webp";
import { WorkingData } from "../common/Helper";
import semicircle_group from "../../assets/png/working-semocircle-group.png";
import { WorkingLeftImg } from "../common/Icons";
const Working = () => {
  return (
    <>
      <div className="bg-[#F7FCFE] lg:pt-[56px] lg:pb-4 py-12 sm:py-[70px] relative" id="cofounder">
        <span
          className="absolute pointer-events-none start-0 top-0 hidden sm:block"
        ><WorkingLeftImg/></span>
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <h2 className="text-center ff_outfit text-lightBlack lg:text-xl 2xl:text-[44px] md:text-[36px] sm:text-[34px] text-[30px] font-medium leading-normal mb-10 linline-block">
            Ho
            <span className="relative before:absolute before:h-1 before:w-full before:rounded before:bg-[#2ABAE9]  lg:before:top-[-20%] before:content-[''] before:start-0">
              w it’s wor
            </span>
            king
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-between items-center">
            <div className="lg:w-6/12 w-10/12">
              <img
                className="lg:h-[560px] w-full lg:w-[570px]"
                src={people_graff}
                alt="workin-graff"
              />
            </div>
            <div className="lg:w-5/12 relative pt-5 lg:pt-0">
              <img
                className="absolute top-[45%] translate-y-[-50%] hidden lg:block  lg:start-[-11%] xl:start-[-10%]"
                src={semicircle_group}
                alt="semicircle-group"
              />
              {WorkingData.map((MyData, i) => {
                return (
                  <div key={i} className="mb-4 border-b-[2px] xl:w-[500px] border-[#e5e5e5]  rounded-xl hover:border-transparent">
                    <div className="flex bg-white px-4 sm:px-[22px] py-3 xl:py-4 rounded-xl hover:box-shadow: 0px 10px 22px 0px rgba(0, 0, 0, 0.05); border border-transparent border-rgb(rgba(0, 0, 0, 0.10)) border-solid hover:shadow-lg border-b-[2px] transition duration-300">
                      <span>{MyData.icon}</span>
                      <div className="sm:ps-5 ps-3">
                        <h4 className="text-lightBlack 2xl:text-lg ff_outfit font-medium leading-normal text-base sm:text-md mb-1">
                          {MyData.heading}
                        </h4>
                        <p className="ff_inter text-black text-xs sm:text-sm font-normal leading-[160%] opacity-70">
                          {MyData.para}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Working;
