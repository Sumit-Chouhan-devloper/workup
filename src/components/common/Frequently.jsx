import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AwsomeRightImg, MinusIconFaq, PlusIconFaq } from "./Icons";
import awsome_img from "../../assets/webp/awsome-question-img.webp";
import { useLocation } from "react-router-dom";
function Icon({ id, open }) {
  return (
    <div className="h-5 w-5 absolute right-0 transform origin-center top-[50%] lg:top-[50%] translate-y-[-50%] transition-transform ease-in-out duration-300 cursor-pointer rotate-0">
      {id === open ? <MinusIconFaq /> : <PlusIconFaq />}
    </div>
  );
}

const Frequently = () => {
  const [open, setOpen] = useState();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const path = useLocation().pathname;
  return (
    <>
      <div
        className=" lg:pt-[116px] py-12 sm:py-[70px] lg:pb-[97px] relative"
        id="faqs"
      >
        {path === "/" ? (
          <span className="absolute pointer-events-none right-0 top-[8%] hidden lg:block">
            <AwsomeRightImg />
          </span>
        ) : (
          ""
        )}

        <div className="container 2xl:max-w-[1320px] xl:max-w-[1140px] mx-auto px-5 xl:px-0">
          <h2 className="text-center ff_outfit text-lightBlack lg:text-xl 2xl:text-[44px] md:text-[36px] sm:text-[34px] text-[30px]  font-medium max-[459px]:leading-[100%] leading-[150%] linline-block">
            Frequently
            <span className="ps-2 relative before:absolute before:h-1 before:w-full before:rounded before:bg-[#2ABAE9]  lg:before:top-[-20%] before:content-[''] before:start-0">
              Awesome
            </span>
            <span className="ps-2">Questions</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            <div className="lg:w-6/12 lg:pe-4 xl:pe-0">
              <img src={awsome_img} alt="people group" />
            </div>
            <div className="lg:w-6/12 lg:min-h-[656px] lg:pt-[50px] sm:mb-12 lg:mb-0">
              <Fragment>
                <Accordion
                data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  className="border-b-[1px] border-[#EBEBEB] border-solid"
                  open={open === 1}
                  icon={<Icon id={1} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className="py-[14px] sm:py-[18px]  border-b-[0px] cursor-pointer relative"
                  >
                    <p
                      className={`ff_outfit font-medium text-black opacity-70 leading-[150%] text-start text-sm 2xl:text-base pe-8 ${
                        open === 1 ? "!text-[#2ABAE9]" : ""
                      }`}
                    >
                      Q1 What is WorkUp's visionary approach?
                    </p>
                  </AccordionHeader>
                  <AccordionBody
                    className={`pb-4 pt-0 sm:pt-0 sm:pb-6 text-black ff_inter text-xs sm:text-sm 2xl:text-base font-normal leading-[150%] opacity-70 transition-all duration-[1s] ease-linear ${
                      open === 1 ? " h-full" : " h-0"
                    }`}
                  >
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </AccordionBody>
                </Accordion>
                <Accordion
                 data-aos="fade-up"
                 data-aos-easing="linear"
                 data-aos-duration="1200"
                  className="border-b-[1px] border-[#EBEBEB] border-solid"
                  open={open === 2}
                  icon={<Icon id={2} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="py-[14px] sm:py-[18px] border-b-[0px] cursor-pointer relative"
                  >
                    <p
                      className={`ff_outfit font-medium text-black opacity-70 leading-[150%] text-start text-sm 2xl:text-base pe-8 ${
                        open === 2 ? "!text-[#2ABAE9]" : ""
                      }`}
                    >
                      Q2 How does WorkUp tackle financial control challenges
                      using AI?
                    </p>
                  </AccordionHeader>
                  <AccordionBody
                    className={`pb-4 pt-0 sm:pt-0 sm:pb-6 text-black ff_inter text-xs sm:text-sm 2xl:text-base font-normal leading-[150%] opacity-70 transition-all duration-[1s] ease-linear ${
                      open === 2 ? " h-full" : " h-0"
                    }`}
                  >
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1400"
                  className="border-b-[1px] border-[#EBEBEB] border-solid"
                  open={open === 3}
                  icon={<Icon id={3} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="py-[14px] sm:py-[18px]  border-b-[0px] cursor-pointer relative"
                  >
                    <p
                      className={`ff_outfit font-medium text-black opacity-70 leading-[150%] text-start text-sm 2xl:text-base pe-8 ${
                        open === 3 ? "!text-[#2ABAE9]" : ""
                      }`}
                    >
                      Q3 How does WorkUp's real-time automation set it apart in
                      the realm of finance?
                    </p>
                  </AccordionHeader>

                  <AccordionBody
                    className={`pb-4 pt-0 sm:pt-0 sm:pb-6  text-black ff_inter text-xs sm:text-sm 2xl:text-base font-normal leading-[150%] opacity-70 transition-all duration-[1s] ease-linear ${
                      open === 3 ? " h-full" : " h-0"
                    }`}
                  >
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1600"
                  className="border-b-[1px] border-[#EBEBEB] border-solid"
                  open={open === 4}
                  icon={<Icon id={4} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className="py-[14px] sm:py-[18px] border-b-[0px] cursor-pointer relative"
                  >
                    <p
                      className={`ff_outfit font-medium text-black opacity-70 leading-[150%] text-start text-sm 2xl:text-base pe-8 ${
                        open === 4 ? "!text-[#2ABAE9]" : ""
                      }`}
                    >
                      Q4 How does WorkUp redefine the role of accounting
                      professionals with automation?
                    </p>
                  </AccordionHeader>
                  <AccordionBody
                    className={`pb-4 pt-0 sm:pt-0 sm:pb-6 text-black ff_inter text-xs sm:text-sm 2xl:text-base font-normal leading-[150%] opacity-70 transition-all duration-[1s] ease-linear ${
                      open === 4 ? " h-full" : " h-0"
                    }`}
                  >
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </AccordionBody>
                </Accordion>
                <Accordion
                   data-aos="fade-up"
                   data-aos-easing="linear"
                   data-aos-duration="1800"
                  className="border-b-[1px] border-[#EBEBEB] border-solid"
                  open={open === 5}
                  icon={<Icon id={5} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(5)}
                    className="py-[14px] sm:py-[18px] border-b-[0px] cursor-pointer relative"
                  >
                    <p
                      className={`ff_outfit font-medium text-black opacity-70 leading-[150%] text-start text-sm 2xl:text-base pe-8 ${
                        open === 5 ? "!text-[#2ABAE9]" : ""
                      }`}
                    >
                      Q5 Why is WorkUp the perfect choice for businesses seeking
                      financial empowerment?
                    </p>
                  </AccordionHeader>

                  <AccordionBody
                    className={`pb-4 pt-0 sm:pt-0 sm:pb-6 text-black ff_inter text-xs sm:text-sm 2xl:text-base font-normal leading-[150%] opacity-70 transition-all duration-[1s] ease-linear ${
                      open === 5 ? " h-full" : " h-0"
                    }`}
                  >
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </AccordionBody>
                </Accordion>
                <Accordion
                   data-aos="fade-up"
                   data-aos-easing="linear"
                   data-aos-duration="2000"
                  className="border-b-[1px] border-[#EBEBEB] border-solid"
                  open={open === 6}
                  icon={<Icon id={6} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(6)}
                    className="py-[14px] sm:py-[18px] border-b-[0px] cursor-pointer relative"
                  >
                    <p
                      className={`ff_outfit font-medium  text-black opacity-70 leading-[150%] text-start text-sm 2xl:text-base pe-8 ${
                        open === 6 ? "!text-[#2ABAE9]" : ""
                      }`}
                    >
                      Q6 How does WorkUp showcase its genuine commitment to
                      businesses' success?
                    </p>
                  </AccordionHeader>

                  <AccordionBody
                    className={`pb-4 pt-0 sm:pt-0 sm:pb-6 text-black ff_inter text-xs sm:text-sm 2xl:text-base font-normal leading-[150%] opacity-70 transition-all duration-[1s] ease-linear ${
                      open === 6 ? " h-full" : " h-0"
                    }`}
                  >
                    WorkUp envisions becoming the ultimate integrated business
                    automation platform, leveraging AI and automation to empower
                    business owners and accounting professionals. Our goal is to
                    revolutionise the accessibility and management of financial
                    information, leading to unparalleled efficiency and control.
                  </AccordionBody>
                </Accordion>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frequently;
