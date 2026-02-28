import React from "react";

const Banner = () => {
  return (
    <div className='max-w-[1169px] mx-auto flex flex-col lg:flex-row   justify-start gap-50 items-center mt-[103px] mb-50 '>
      {/* banner left */}
      <div className='text-center md:text-left'>
        <p className='text-[#6140FF] font-normal text-[14px] leading-[22px] uppercase'>
          Welcome to NexiGen
        </p>
        <h1 className='font-semibold text-[32px] md:text-[64px]  mt-4'>
          Solutions for <br /> every organization
        </h1>
        <p className='font-normal text-[16px] leading-[24px] mt-4'>
          If your company is facing financial challenges, struggling with
          operations, <br /> or looking to expand, we can help identify the root
          cause of the problem <br /> and develop a strategic plan to address
          it.
        </p>

        <div className='flex flex-col sm:flex-row mt-12 items-center text-center sm:justify-start gap-6 sm:gap-4'>
          <button className='btn bg-[#6140FF] text-[#FFFFFF] py-4 px-9 rounded-[8px]'>
            Discover More
          </button>
          <div className='flex items-center'>
            <img src='/assets/images/Play.png' alt='' className='mr-4' />
            <p className='font-medium text-[#7A797C] text-[16px] leading-[18px]'>
              How we work
            </p>
          </div>
        </div>
      </div>

      {/* Banner right */}
      <div className='relative '>
        {/* person image */}
        <div className='w-full h-auto'>
          <img src='/assets/images/bannerImg.png' alt='' />
        </div>
        {/* group images left */}

        <div className='absolute right-[315px] top-[14px] bg-white shadow-[20px_40px_80px_0px_rgba(0,0,0,0.25)] flex items-center -space-x-6 rounded-[16px] p-5 w-[163px] h-auto'>
          <img
            src='/assets/images/skillimage3.png'
            className='w-[54px] h-[54px] relative z-10'
            alt=''
          />

          <img
            src='/assets/images/skillimage2.png'
            className='w-[54px] h-[54px] relative z-20'
            alt=''
          />

          <img
            src='/assets/images/skillimage1.png'
            className='w-[54px] h-[54px] relative z-30'
            alt=''
          />
        </div>
        {/* overview card left */}
        <div className='absolute right-[200px] top-[339px] rounded-[6px] w-full h-auto'>
          <img src='/assets/images/Overview - Light.png' alt='' />
        </div>
        {/* customer growth right */}
        <div className='absolute left-[150px] top-[245px] w-full h-auto'>
          <img src='/assets/images/Customer Growth - Light.png' alt='' />
        </div>
        {/* pattern right */}
        <div className='absolute left-[286px] bottom-[347px] w-full h-auto'>
          <img src='/assets/images/pattern 1.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
