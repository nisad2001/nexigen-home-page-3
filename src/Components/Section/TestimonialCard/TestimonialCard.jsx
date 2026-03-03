import React from "react";
import { FaStar } from "react-icons/fa";
import { VscQuote } from "react-icons/vsc";

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  const { userName, ratings, review, role, user_photoURL } = testimonial;

  const starCount = Math.min(5, Math.max(0, parseInt(ratings) || 0));

  return (
    <div
      className='
        bg-white
        py-8 px-6
        lg:py-11 lg:pl-10 lg:pr-[96px]
        shadow-[30px_60px_100px_0_rgba(0,0,0,0.3)]
        rounded-2xl
        w-full max-w-[340px]
        lg:w-[563px] lg:max-w-none
        mx-auto
        relative
        mt-12
      '
    >
      {/* Quote Icon */}
      <VscQuote
        className='
          absolute
          -top-6 right-4
          text-5xl
          lg:-top-8 lg:right-6
          lg:text-7xl lg:w-[90px] lg:h-[70px]
          text-[#D37302]
        '
      />

      <div className='flex flex-col'>
        {/* Profile + Info Header */}
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-3'>
          <div className='flex items-center gap-4'>
            <img
              src={user_photoURL}
              alt='profile'
              className='w-11 h-11 rounded-full object-cover border'
            />
            <div>
              <h4 className='font-bold text-[#0D083A] mb-1'>{userName}</h4>
              <p className='text-xs text-[#7A798B] uppercase tracking-wider'>
                {role}
              </p>
            </div>
          </div>

          {/* Stars */}
          <div className='flex gap-2 text-[#FCB009] lg:ml-30'>
            {Array.from({ length: starCount }, (_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>

        {/* Review Text */}
        <p className='text-[#4D4C50] font-normal leading-[24px] text-[16px]'>
          "{review || "No review provided."}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
