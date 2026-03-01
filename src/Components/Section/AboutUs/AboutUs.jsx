import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className='bg-[#FBF1E6] max-w-[1170px] flex justify-between mx-auto gap-[123px] '>
      <div className='w-1/2 '>
        <div className='w-full'>
          <img src='/public/assets/images/aboutImg .png' alt='' />
        </div>
        <div className='flex items-center justify-between py-5 px-[31px] bg-[#FFFFFF] rounded-[4px] max-w-[553px]'>
          <div>
            <h1 className='text-[#4D4C50]  font-bold text-[30px] leading-[130%]'>
              <span className='text-[#D37302] '>25+</span>
              Years experience <br /> our company
            </h1>
          </div>
          <div className='flex gap-6 '>
            <span className='bg-[#D3D2D3] text-[#6140FF] rounded-full w-[38px] h-[38px] flex items-center justify-center'>
              <IoMdArrowBack />
            </span>
            <span className='bg-[#6140FF] text-[#EFECFF] rounded-full w-[38px] h-[38px] flex items-center justify-center'>
              <IoMdArrowForward />
            </span>
          </div>
        </div>
      </div>

      {/* right  */}
      <div className='w-1/2'>
        <h4>about us</h4>
        <h2>Our skilled team grow your business</h2>
        <p>
          We are specializes in helping companies accelerate their growth
          through expert guidance, strategic planning, and implementation
          support.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
