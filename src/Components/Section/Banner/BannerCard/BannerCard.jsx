import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BannerCard = () => {
  return (
    <div className='max-w-[1170px] mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
      {/* Card 1 */}
      <div className='py-[30px] pr-[30px] lg:pr-[98px] pl-[30px] bg-white shadow-[20px_40px_80px_rgba(0,0,0,0.25)] relative rounded-[4px]'>
        <h1 className='font-semibold text-2xl leading-[120%] text-[#4D4C50] mb-2'>
          Business Consulting
        </h1>

        <p className='text-[#7A798B] text-[14px] leading-[140%]'>
          We provide the best services to <br />
          ensure the high-level success of your business
        </p>

        {/* Arrow */}
        <span className='absolute bottom-[10px] right-[20px] bg-[#6140FF] rounded-full text-white w-[38px] h-[38px] flex items-center justify-center'>
          <FaArrowRight />
        </span>

        {/* Image (Hidden on small device) */}
        <div className='hidden lg:block absolute top-0 left-[290px]'>
          <img src='/assets/images/bannercardImg.png' alt='' />
        </div>
      </div>

      {/* Card 2 */}
      <div className='py-[30px] pr-[30px] lg:pr-[98px] pl-[30px] bg-white shadow-[20px_40px_80px_rgba(0,0,0,0.25)] relative rounded-[4px]'>
        <h1 className='font-semibold text-2xl leading-[120%] text-[#4D4C50] mb-2'>
          Business Consulting
        </h1>

        <p className='text-[#7A798B] text-[14px] leading-[140%]'>
          We provide the best services to <br />
          ensure the high-level success of your business
        </p>

        <span className='absolute bottom-[10px] right-[20px] bg-[#6140FF] rounded-full text-white w-[38px] h-[38px] flex items-center justify-center'>
          <FaArrowRight />
        </span>

        <div className='hidden lg:block absolute top-0 left-[290px]'>
          <img src='/assets/images/bannercardImg.png' alt='' />
        </div>
      </div>

      {/* Card 3 */}
      <div className='py-[30px] pr-[30px] lg:pr-[98px] pl-[30px] bg-white shadow-[20px_40px_80px_rgba(0,0,0,0.25)] relative rounded-[4px]'>
        <h1 className='font-semibold text-2xl leading-[120%] text-[#4D4C50] mb-2'>
          Business Consulting
        </h1>

        <p className='text-[#7A798B] text-[14px] leading-[140%]'>
          We provide the best services to <br />
          ensure the high-level success of your business
        </p>

        <span className='absolute bottom-[10px] right-[20px] bg-[#6140FF] rounded-full text-white w-[38px] h-[38px] flex items-center justify-center'>
          <FaArrowRight />
        </span>

        <div className='hidden lg:block absolute top-0 left-[290px]'>
          <img src='/assets/images/bannercardImg.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
