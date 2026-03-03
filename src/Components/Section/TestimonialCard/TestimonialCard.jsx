import React from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { VscQuote } from "react-icons/vsc";

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  const { userName, ratings, review, role, user_photoURL } = testimonial;

  const starCount = Math.min(5, Math.max(0, parseInt(ratings) || 0));

  return (
    <div className='bg-white py-11 pl-10 pr-[96px] shadow-[30px_60px_100px_0_rgba(0,0,0,0.3)] bg-[#FFFFFF] rounded-2xl shadow-md mx-auto w-[563px] relative mt-12'>
      {/* Quote Icon - Right side layout */}
      <VscQuote className='absolute -top-8 right-6 text-[#D37302] text-7xl w-[90px] h-[70px]' />

      <div className='flex flex-col'>
        {/* Profile + Info Header */}
        <div className='flex items-center justify-between mb-4'>
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
            <div className='flex ml-30 gap-2 text-[#FCB009]'>
              {Array.from({ length: starCount }, (_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Review Text */}
        <p className='text-[#4D4C50] font-normal leading-[24px] text-[16px] '>
          "{review || "No review provided."}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
