import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BannerCard = () => {
  return (
    <div
      className='absolute lg:absolute relative max-w-[1170px] mx-auto px-4 lg:px-0 
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]'
    >
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className='relative lg:left-[173px] lg:-top-[50%]
                     py-6 lg:py-[30px]
                     px-5 lg:pl-[30px] lg:pr-[98px]
                     bg-white 
                     shadow-[20px_40px_80px_rgba(0,0,0,0.25)]
                     rounded-[4px]'
        >
          {/* Content */}
          <h1 className='font-semibold text-xl lg:text-2xl leading-[120%] text-[#4D4C50] mb-4'>
            Business Consulting
          </h1>

          <p className='text-[#7A798B] text-[14px] leading-[140%] mb-6'>
            We provide the best services to <br className='hidden sm:block' />
            ensure the high-level success of your business
          </p>

          {/* Arrow */}
          <span
            className='absolute bottom-5 right-5 lg:bottom-[10px] lg:right-[20px] 
                           bg-[#6140FF] rounded-full text-white w-[34px] h-[34px] 
                           lg:w-[38px] lg:h-[38px] flex items-center justify-center'
          >
            <FaArrowRight size={14} />
          </span>

          {/* Image (Hidden on small device) */}
          <div className='hidden lg:block absolute top-0 left-[290px]'>
            <img src='/assets/images/bannercardImg.png' alt='' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerCard;
