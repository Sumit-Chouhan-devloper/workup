import React from "react";
import dashboard from "../../assets/webp/dahboart-img.webp";
import { DashboardImgTopCircle } from "../common/Icons";
const CardsData = () => {
  return (
    <>
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="md:w-6/12 w-11/12 sm:w-10/12 pt-3 sm:pt-0 relative">
            <span
              className="absolute  top-[-10%] hidden lg:block w-[30%] left-[-10%]"
            >
              <DashboardImgTopCircle/>
            </span>
            <img
              className="drop-shadow-lg w-full xl:h-[447px] xl:w-[570px]"
              src={dashboard}
              alt="dashboard-img"
            />
          </div>
          <div className="md:w-5/12 text-start">
            <h3 className="ff_outfit text-[20px] sm:text-lg font-semibold leading-normal text-[#111223] pt-4 sm:pt-5 pt-md-0">
              Cards
            </h3>
            <p className="ff_inter text-black opacity-70 text-xs sm:text-sm font-normal leading-[155%] lg:pe-10">
              Et tempor justo aliquam orci augue vitae fringilla purus eget. Id
              vitae odio consequat aliquet volutpat convallis mi tortor. Eget
              mattis malesuada commodo urnavolutpat nisi rutrum leo. Curabitur
              id gravida urna consectetur.
            </p>
          </div>
        </div>
    </>
  );
};

export default CardsData;
