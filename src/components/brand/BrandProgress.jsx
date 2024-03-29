import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImage from "../../assets/webp/Progress1.webp";
import sliderImage2 from "../../assets/webp/progress2.webp";
import sliderImage3 from "../../assets/webp/Progress3.webp";
import { ProgressLeft, ProgressRight } from "../common/Icons";
const BrandProgress = () => {
  const ProgressSlider = {
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    centerPadding: "140px",
    dots: false,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          dots: false,
          centerPadding: "140px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const first = React.useRef();
  return (
    <>
      <div className="bg-[#F7FCFE] md:py-20 py-[70px] lg:mb-28 mb-5">
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <p className=" ff_outfit 2xl:text-[44px] lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] font-medium text-black leading-[135%] text-center relative after:contents-[''] after:absolute after:w-[132px] after:start-[50%] after:h-[4px] after:rounded-md after:bg-blue after:top-[-6%] after:translate-x-[-50%]">
            What’s Our Progress?
          </p>
          <div className="flex justify-center mt-4 mb-12">
            <p className="text-center ff_inter 2xl:pb-10 sm:text-md text-[18px] 2xl:text-[22px] text-[#4A4C4C] font-normal max-w-[940px]">
              We have made substantial progress in our development journey. We
              initiated the design phase for our prototype, and we are now ready
              to commence development and fulfil the banking partnership
              requirements to launch the MVP as soon as possible.
            </p>
          </div>
        </div>
        <Slider {...ProgressSlider} ref={first} className="ProgressSlide py-10">
          <div className="mx-5">
            <img
              src={sliderImage}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage2}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage3}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage3}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage2}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
          <div className="mx-5">
            <img
              src={sliderImage3}
              alt="sliderImage"
              className="w-full h-full"
            />
          </div>
        </Slider>
        <div className="flex items-center justify-center gap-6 sm:mt-12">
          <div
            className="sm:h-[42px] h-[38px] w-[38px] sm:w-[42px] border-[2.5px] progress_left_arrow group border-solid hover:bg-btnGradient hover:border-none border-[#2ABAE9] rounded-[100px] flex justify-center items-center cursor-pointer"
            onClick={() => first.current.slickNext()}
          >
            <ProgressLeft />
          </div>
          <div
            className="sm:h-[42px] h-[38px] w-[38px] sm:w-[42px] border-[2.5px] progress_left_arrow group border-solid hover:bg-btnGradient hover:border-none border-[#2ABAE9] rounded-[100px] flex justify-center items-center cursor-pointer"
            onClick={() => first.current.slickPrev()}
          >
            <ProgressRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandProgress;
