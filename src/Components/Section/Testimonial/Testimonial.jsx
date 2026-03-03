import React, { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonial = ({ testimonialPromise }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!testimonialPromise) return;

    if (testimonialPromise.then) {
      testimonialPromise
        .then((data) => setTestimonials(data))
        .catch((err) => console.error("Failed to load testimonials:", err));
    }
  }, [testimonialPromise]);

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className='bg-[#EFECFF]  md:py-[132px] relative overflow-hidden'>
      <div className='max-w-[1170px] mx-auto px-4 md:px-0 gap-12 md:gap-21 flex flex-col md:flex-row items-center md:items-start'>
        {/* Left Section */}
        <div className='w-[421px] text-center md:text-left'>
          <p className='font-medium text-[#D37302] uppercase text-[16px] leading-[22px] tracking-[8%] mb-4'>
            Our Testimonial
          </p>

          <h2 className='font-semibold text-[#0D083A] text-[32px] md:text-[48px] leading-[120%] mb-4'>
            Clients Feedback
          </h2>

          <p className='font-normal text-[#7A798B] text-[16px] leading-[24px] mb-8 md:mb-12'>
            Customer feedback on our services is crucial to our success. It
            helps us understand what we're doing well and where we need to
            improve.
          </p>

          {/* Navigation Buttons */}
          <div className='flex gap-4 md:gap-6 justify-center md:justify-start'>
            <span
              onClick={handlePrev}
              className='bg-[#D3D2D3] text-[#6140FF] rounded-full w-[32px] h-[32px] md:w-[38px] md:h-[38px] flex items-center justify-center cursor-pointer'
            >
              <IoMdArrowBack size={16} />
            </span>

            <span
              onClick={handleNext}
              className='bg-[#6140FF] text-[#EFECFF] rounded-full w-[32px] h-[32px] md:w-[38px] md:h-[38px] flex items-center justify-center cursor-pointer'
            >
              <IoMdArrowForward size={16} />
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className='max-w-[563px] flex justify-center md:justify-end'>
          <div className='w-full max-w-[340px] md:max-w-none'>
            {testimonials.length > 0 && (
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
