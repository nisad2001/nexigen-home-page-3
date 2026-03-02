import React from "react";
import { MdMessage } from "react-icons/md";
import { RiQuestionMark } from "react-icons/ri";

const ChooseUs = () => {
  return (
    <div className='max-w-[1170px] mx-auto flex flex-col md:flex-row gap-[118px]'>
      {/* left chooseus */}
      <div className='w-full md:w-1/2 mb-8 md:mb-25 px-4 md:px-0'>
        {/* Title small text */}
        <p className='text-[#D37302] font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] tracking-[6%] sm:tracking-[8%] uppercase mb-2 sm:mb-4'>
          why choose us
        </p>

        {/* Heading */}
        <h2 className='text-[#0D083A] font-semibold text-[32px] sm:text-[48px] leading-[110%] sm:leading-[120%] mb-3 sm:mb-4'>
          Consultant <br /> reputation matters
        </h2>

        {/* Description */}
        <p className='font-normal text-[#7A798B] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-4 sm:mb-6'>
          The reputation of a consultant is a critical factor in their{" "}
          <br className='hidden sm:block' />
          success. A consultant's reputation is built on their past{" "}
          <br className='hidden sm:block' /> work, the feedback from their
          clients, and the opinions of <br className='hidden sm:block' /> their
          peers in the industry
        </p>

        {/* Question section */}
        <div className='flex items-center gap-3 sm:gap-6 mb-4 sm:mb-6'>
          <div className='relative'>
            <span>
              <MdMessage size={28} sm={33} />
            </span>
            <span className='absolute -top-2 -left-2 sm:-top-[15px] sm:left-[15px] bg-[#D37302] rounded-full p-1'>
              <RiQuestionMark size={12} sm={15} />
            </span>
          </div>
          <p className='text-[#212024] font-medium text-[18px] sm:text-[22px] leading-[150%] sm:leading-[160%]'>
            Have any question?
          </p>
        </div>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'>
          <div className='flex items-center gap-2 sm:gap-4'>
            <button className='text-[#6140FF] underline font-medium text-[18px] sm:text-[22px] leading-[150%] sm:leading-[160%]'>
              Click here
            </button>
            <p className='text-[#212024] font-medium text-[18px] sm:text-[22px] leading-[150%] sm:leading-[160%]'>
              FAQS
            </p>
          </div>

          {/* Scribble Image */}
          <div className='mt-2 sm:mt-0 sm:ml-4'>
            <img
              src='/public/assets/images/choseUsscribble.png'
              alt=''
              className='w-[60px] ml-40 sm:w-auto'
            />
          </div>
        </div>
      </div>

      {/* right chooseus */}
      <div className='relative pt-0 md:pt-0'>
        {" "}
        <img src='/assets/images/video image.png' alt='' />
        {/* Expert Team Box */}
        <div className='hidden md:flex absolute -top-[14px] -left-[62px] bg-[#FFFFFF] shadow-[20px_40px_80px_0px_rgba(0,0,0,0.25)] w-[165px] h-[96px] rounded-2xl flex-col justify-center items-center py-[17px]'>
          <h2 className='font-bold text-[24px] leading-[150%] text-[#0D083A] text-center'>
            1.289
          </h2>
          <p className='font-medium text-[16px] leading-[160%] text-[#7A798B] text-center'>
            Our Expert Team
          </p>
        </div>
        {/* Pattern Image */}
        <div className='hidden md:block absolute bottom-[81px] -left-[42px] text-[#D1C8FD]'>
          <img src='/assets/images/pattern 1.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
