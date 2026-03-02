import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const services = [
  { id: 1, img: "/assets/images/services1.png", title: "Business Consulting" },
  { id: 2, img: "/assets/images/services2.png", title: "Financial Planning" },
  { id: 3, img: "/assets/images/services3.png", title: "Insurance Consulting" },
  {
    id: 4,
    img: "/assets/images/services4.png",
    title: "Marketing Research",
    hiddenOnMobile: true,
  },
];

const OurServices = () => {
  return (
    <div className='max-w-[1170px] mx-auto mb-25'>
      <p className='font-medium text-[#D37302] text-[16px] leading-[22px] uppercase tracking-[8%] text-center mb-4'>
        Our Services
      </p>

      <h2 className='text-[#0D083A] font-semibold text-[48px] leading-[120%] text-center mb-15'>
        Consulting Services
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center md:justify-items-start gap-8'>
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative group flex flex-col items-center md:items-start ${
              service.hiddenOnMobile
                ? "hidden lg:flex lg:mt-[-72px] lg:ml-12 w-[270px] h-[368px]"
                : ""
            }`}
          >
            {/* Image */}
            <img src={service.img} alt='' className='w-full' />

            {/* Hover text over image */}
            <h3 className='absolute top-64 w-full text-center text-white text-[22px] leading-[120%] font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'>
              {service.title}
            </h3>

            {/* Button + arrow */}
            <div className='flex items-center mt-4'>
              <button className='font-medium'>Know More</button>

              <span className='p-[1px] rounded-full bg-[linear-gradient(270deg,#6140FF_0%,rgba(97,64,255,0)_100%)] ml-3'>
                <span className='flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full'>
                  <IoIosArrowRoundForward className='text-xl text-[#6140FF]' />
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
