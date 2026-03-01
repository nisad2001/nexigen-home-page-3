import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { MdOutlineCheck } from "react-icons/md";

const AboutUs = () => {
  return (
    <div className='bg-[#FBF1E6]'>
      <div className='flex flex-col md:flex-row justify-between mx-auto gap-10 md:gap-[123px] max-w-[1170px] px-4 md:px-0'>
        {/* Left */}
        <div className='w-full md:w-1/2 mt-16 md:mt-[178px] mb-12 md:mb-[87px]'>
          <div className='w-full'>
            <img
              src='/public/assets/images/aboutImg .png'
              alt='about'
              className='w-full h-[220px] md:h-[353px] object-cover'
            />
          </div>

          <div className='flex items-center justify-between py-4 md:py-5 px-5 md:px-[31px] bg-white rounded-[4px] max-w-[553px] '>
            <div>
              <h1 className='text-[#4D4C50] font-bold text-[20px] md:text-[30px] leading-[130%]'>
                <span className='text-[#D37302]'>25+</span>
                Years experience <br /> our company
              </h1>
            </div>

            <div className='flex gap-4 md:gap-6'>
              <span className='bg-[#D3D2D3] text-[#6140FF] rounded-full w-[32px] h-[32px] md:w-[38px] md:h-[38px] flex items-center justify-center'>
                <IoMdArrowBack size={16} />
              </span>

              <span className='bg-[#6140FF] text-[#EFECFF] rounded-full w-[32px] h-[32px] md:w-[38px] md:h-[38px] flex items-center justify-center'>
                <IoMdArrowForward size={16} />
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className='w-full md:w-1/2 mt-0 md:mt-[178px] mb-12 md:mb-[87px] text-center md:text-left'>
          <h4 className='text-[#D37302] font-medium uppercase text-[14px] md:text-[16px] leading-[22px] mb-4'>
            about us
          </h4>

          <h2 className='font-semibold text-[26px] md:text-[48px] leading-[120%] text-[#0D083A] mb-4'>
            Our skilled team <br /> grow your business
          </h2>

          <p className='font-normal text-[#7A798B] text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] mb-6'>
            We are specializes in helping companies accelerate their growth
            through expert guidance, strategic planning, and implementation
            support.
          </p>

          {[
            "Performing market research",
            "Providing information to a client",
            "Strategic planning",
          ].map((item, index) => (
            <p
              key={index}
              className='flex items-center justify-center md:justify-start mb-4 text-[14px] md:text-[16px]'
            >
              <span className='border border-[#D37302] text-[#D37302] rounded-full w-[18px] h-[18px] flex items-center justify-center mr-2'>
                <MdOutlineCheck size={14} />
              </span>
              {item}
            </p>
          ))}

          <button className='mt-8 md:mt-12 bg-[#6140FF] text-white py-3 md:py-4 px-6 md:px-9 rounded-[8px] w-full md:w-auto mx-auto md:mx-0'>
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
