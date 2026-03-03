import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { WiTime3 } from "react-icons/wi";

const LatestNews = () => {
  return (
    <div className='max-w-[1314px] mx-auto mt-25 mb-25 px-4 md:px-0'>
      <p className='text-[#D37302] text-center font-medium text-[16px] leading-[8%] uppercase mb-4'>
        OUR LATEST NEWS
      </p>

      <h2 className='text-[#0D083A] text-center font-semibold text-[32px] md:text-[48px] leading-[120%] mb-10'>
        Our latest updates
      </h2>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-0 justify-items-center'>
        {/* Card 1 */}
        <div className='py-[30px] px-6 bg-white shadow-[20px_40px_80px_0_rgba(0,0,0,0.1)] w-full max-w-[340px] lg:max-w-[418px]'>
          <img
            src='assets/images//latest1.png'
            alt=''
            className='rounded-[8px] w-full'
          />

          <div className='flex mt-4 gap-[10px] mb-6 flex-wrap items-center'>
            <p className='text-[#7A797C] font-normal text-[14px] leading-[16px] bg-[#EFECFF] rounded-[2px] py-[6px] px-3'>
              Branding
            </p>
            <span className='text-[#D37302]'>
              <WiTime3 />
            </span>
            <p className='font-normal text-[14px] leading-[16px]'>
              April 3, 2023
            </p>
          </div>

          <h2 className='text-[#0D083A] font-semibold text-[24px] md:text-[30px] leading-[38px] mb-6'>
            How to collaborate with companies
          </h2>

          <div className='flex gap-3 items-center'>
            <p>Read Mores</p>
            <span className='bg-[#6140FF] rounded-full text-white w-[24px] h-[24px] flex items-center justify-center'>
              <FaArrowRight size={14} />
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className='py-[30px] px-6 bg-white shadow-[20px_40px_80px_0_rgba(0,0,0,0.1)] w-full max-w-[340px] lg:max-w-[418px]'>
          <img
            src='assets/images//latest1.png'
            alt=''
            className='rounded-[8px] w-full'
          />

          <div className='flex mt-4 gap-[10px] mb-6 flex-wrap items-center'>
            <p className='text-[#7A797C] font-normal text-[14px] leading-[16px] bg-[#EFECFF] rounded-[2px] py-[6px] px-3'>
              Marketing
            </p>
            <span className='text-[#D37302]'>
              <WiTime3 />
            </span>
            <p className='font-normal text-[14px] leading-[16px]'>
              April 3, 2023
            </p>
          </div>

          <h2 className='text-[#0D083A] font-semibold text-[24px] md:text-[30px] leading-[38px] mb-6'>
            We develop effective marketing
          </h2>

          <div className='flex gap-3 items-center'>
            <p>Read Mores</p>
            <span className='bg-[#6140FF] rounded-full text-white w-[24px] h-[24px] flex items-center justify-center'>
              <FaArrowRight size={14} />
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className='py-[30px] px-6 bg-white shadow-[20px_40px_80px_0_rgba(0,0,0,0.1)] w-full max-w-[340px] lg:max-w-[418px]'>
          <img
            src='assets/images//latest1.png'
            alt=''
            className='rounded-[8px] w-full'
          />

          <div className='flex mt-4 gap-[10px] mb-6 flex-wrap items-center'>
            <p className='text-[#7A797C] font-normal text-[14px] leading-[16px] bg-[#EFECFF] rounded-[2px] py-[6px] px-3'>
              Financial
            </p>
            <span className='text-[#D37302]'>
              <WiTime3 />
            </span>
            <p className='font-normal text-[14px] leading-[16px]'>
              April 3, 2023
            </p>
          </div>

          <h2 className='text-[#0D083A] font-semibold text-[24px] md:text-[30px] leading-[38px] mb-6'>
            Guidance on financial management
          </h2>

          <div className='flex gap-3 items-center'>
            <p>Read Mores</p>
            <span className='bg-[#6140FF] rounded-full text-white w-[24px] h-[24px] flex items-center justify-center'>
              <FaArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
