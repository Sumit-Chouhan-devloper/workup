import React from "react";
import AboutImage from "../../assets/webp/AboutImage.webp";
import AboutTop from "../../assets/svg/AboutTopDots.svg";
import AboutBottom from "../../assets/svg/AboutBottomDot.svg";
import sideDots from "../../assets/svg/PitchDots.svg";
const BrandAbout = () => {
  return (
    <>
      <div className="relative mt-1 mb-[80px] md:mb-0 pt-2">
        <img
          src={sideDots}
          alt="sideDots"
          className="absolute start-0 top-[-10%] pointer-events-none"
        />
        <p className="text-center ff_outfit font-semibold 2xl:text-[44px] lg:text-xl md:text-[36px] sm:text-[34px] text-[30px] text-lightBlack leading-[120%] mt-16 relative after:contents-[''] after:absolute after:w-[132px] after:start-[50%] after:translate-x-[-50%] after:h-[4px]  after:rounded-md after:bg-blue after:top-[-6%] lg:mb-24 mb-10">
          Pitch Deck
        </p>
        <div className="container xl:max-w-[1140px] 3xl:max-w-[1320px] mx-auto px-5 xl:px-0">
          <div className="flex flex-wrap items-center justify-between lg:flex-row flex-col-reverse">
            <div className="lg:w-6/12 w-full lg:mt-0 mt-5">
              <p className="ff_outfit font-medium lg:text-xl 2xl:text-[44px] md:text-[36px] sm:text-[34px] text-[30px] text-Black leading-normal relative after:contents-[''] after:absolute after:w-[132px] after:start-0 after:h-[4px]  after:rounded-md after:bg-blue after:top-[-6%] mb-0">
                About Us
              </p>
              <p className="ff_inter text-xs sm:text-sm 2xl:text-[18px] font-normal leading-[160%] text-[#4D4D4D] lg:max-w-[485px] lg:mt-5 mt-1">
                WorkUp is a
                <span className="font-medium">
                  comprehensive banking solution
                </span>{" "}
                designed specifically for Australian SMEs and accounting
                professionals,
                <span className="font-medium">
                  offering an automated approach to managing business finances.
                </span>
              </p>
              <p className="ff_inter text-xs sm:text-sm 2xl:text-[18px] font-normal leading-[160%] text-[#4D4D4D] lg:max-w-[451px] mt-2">
                Our minimum viable product (MVP) will include{" "}
                <span className="font-medium">
                  seamless integration with Xero
                </span>
                , the renowned accounting software, as well as Australian
                business transaction accounts featuring auto rules for automated
                payments and transfers
              </p>
            </div>
            <div className="lg:w-6/12 md:w-10/12 w-full relative">
              <img
                src={AboutTop}
                alt="AboutTop"
                className=" absolute pointer-events-none start-[13%] top-[3%]"
              />
              <img
                src={AboutBottom}
                alt="AboutTop"
                className=" absolute end-0 pointer-events-none bottom-[10%]"
              />
              <img
                src={AboutImage}
                alt="AboutImage"
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAbout;
