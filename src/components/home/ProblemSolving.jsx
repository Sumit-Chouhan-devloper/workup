import React from "react";
import Slider from "react-slick";
import { ProblemSolvingData } from "../common/Helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftArrow, RightArrow } from "../common/Icons";
import arrow from "../../assets/svg/waitlist-arrow.svg"
import right_img from "../../assets/png/problome-solving-right.png";
const ProblemSolving = () => {
  const settings = {
    centerMode: true, // Enable center mode
    arrows: false,
    centerPadding: "0", // Adjust this value to control spacing between centered slide and partially visible slides
    dots: false,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  const first = React.useRef();
  return (
    <>
      <div className="relative py-12 lg:pt-0 lg:pb-[135px]">
        <img
          className="absolute end-0 hidden xl:block top-[15%] w-[5%]"
          src={right_img}
          alt="dots-group"
        />
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <h2 className="text-center ff_railway text-black lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] opacity-80 font-medium leading-normal mb-12 linline-block">
            Problem
            <span className="relative before:absolute before:h-1 before:w-full before:rounded before:bg-[#2ABAE9]  lg:before:top-[-3%] before:content-[''] before:start-0">
              We are
            </span>
            solving
          </h2>
          <div className="relative">
            <Slider {...settings} ref={first}>
              {ProblemSolvingData.map((ProblemData, i) => {
                return (
                  <div className="lg:py-6 px-3">
                    <div
                      key={i}
                      className="px-[29px]  py-[38px] card_bg min-h-[293px] sm:min-h-[317px] bg-white rounded-xl border border-solid border-[#E5E5E5]"
                    >
                      <span>{ProblemData.icon}</span>
                      <h3 className="ff_outfit text-black text-md font-medium leading-normal pt-4 pb-[10px]">
                        {ProblemData.heading}
                      </h3>
                      <p className="ff_inter text-black text-sm font-normal opacity-70 leading-[160%]">
                        {ProblemData.para}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="hidden xl:inline-block">
              <div
                className="absolute top-[50%] translate-y-[-50%] lg:left-[-3%] xl:left-[-5%] sm:h-[38px] sm:w-[38px] group h-[30px] w-[30px]  transition duration-300 flex justify-center items-center rounded-full border border-solid border-[#4D4D4D] arrows_bg hover:border-hidden cursor-pointer"
                onClick={() => first.current.slickNext()}
              >
                <span>
                  <LeftArrow />
                </span>
              </div>
              <div
                className="absolute top-[50%] translate-y-[-50%] lg:right-[-3%] xl:right-[-5%] sm:h-[38px] sm:w-[38px] h-[30px] w-[30px] flex justify-center transition duration-300 items-center rounded-full border border-solid border-[#4D4D4D] arrows_bg hover:border-hidden cursor-pointer"
                onClick={() => first.current.slickPrev()}
              >
                <RightArrow />
              </div>
            </div>
          </div>
          <div className="bg-white h-[44px] sm:h-[52px] max-w-[264px] mx-auto rounded-[100px] ps-[17px] flex items-center border border-solid border-[#4AB6FE] mb-0 mt-14">
                <input className="w-full outline-none ff_inter text-sm font-normal leading-normal text-[#666666] placeholder:text-[#666666]" type="text" placeholder="List Goes On"/>
                <button className="bg-gradientOne h-[32px] sm:h-[36px] w-[70px] rounded-[100px] py-[18px] px-[27px] flex justify-center items-center sm:mx-2 mx-1 mt-[1px]"><img src={arrow} alt="arrow" /></button>
            </div>
        </div>
      </div>
    </>
  );
};

export default ProblemSolving;