import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <footer className='bg-[#212024] text-white relative '>
      {/* Stay Connected Section */}
      <div className='max-w-[1200px] mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0'>
        <div className='text-center md:text-left'>
          <h2 className='text-3xl md:text-4xl font-bold'>Stay Connected</h2>
          <p className='text-[#D37302] mt-2 flex items-center justify-center md:justify-start gap-2'>
            Get Notifications{" "}
            <span className='bg-white text-[#6140FF] rounded-full p-1'>🔔</span>
          </p>
        </div>
        <div className='w-full md:w-auto'>
          <div className='flex justify-center md:justify-end'>
            <input
              type='email'
              placeholder='Email address'
              className='px-4 py-3 rounded-l-lg text-black w-full max-w-[300px]'
            />
            <button className='bg-[#6140FF] px-4 rounded-r-lg flex items-center justify-center'>
              <FaArrowRight className='text-white' />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className='max-w-[1200px] mx-auto px-4 py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-gray-700 bg-[url(/assets/images/footetLeft.png)] mt-[33px] bg-no-repeat  bg-left'>
        {/* Company Info */}
        <div>
          <h3 className='font-bold text-xl mb-2 flex items-center gap-2'>
            <span className='text-[#6140FF]'>⚡</span> Nexigen
          </h3>
          <p className='text-gray-300 mb-4'>
            We are dedicated to helping you achieve your business goals
          </p>
          <h4 className='font-bold mb-2'>Follow us</h4>
          <div className='flex gap-3'>
            <FaFacebookF className='bg-[#1A1A2E] p-2 rounded-full hover:bg-[#6140FF] cursor-pointer' />
            <FaTwitter className='bg-[#1A1A2E] p-2 rounded-full hover:bg-[#6140FF] cursor-pointer' />
            <FaLinkedinIn className='bg-[#1A1A2E] p-2 rounded-full hover:bg-[#6140FF] cursor-pointer' />
          </div>
        </div>

        {/* Explore Links */}
        <div className='ml-35'>
          <h4 className='font-bold mb-4'>Explore</h4>
          <ul className='space-y-2 text-gray-300'>
            <li className='hover:text-white cursor-pointer'>Home</li>
            <li className='hover:text-white cursor-pointer'>Services</li>
            <li className='hover:text-white cursor-pointer'>Testimonial</li>
            <li className='hover:text-white cursor-pointer'>Projects</li>
            <li className='hover:text-white cursor-pointer'>Blogs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className='ml-20'>
          <h4 className='font-bold mb-4'>Quick Links</h4>
          <ul className='space-y-2 text-gray-300'>
            <li className='hover:text-white cursor-pointer'>About Us</li>
            <li className='hover:text-white cursor-pointer'>Our Team</li>
            <li className='hover:text-white cursor-pointer'>Supports</li>
            <li className='hover:text-white cursor-pointer'>FAQ</li>
            <li className='hover:text-white cursor-pointer'>Help</li>
          </ul>
        </div>

        {/* Contact */}
        <div className='ml-20'>
          <h4 className='font-bold mb-4'>Contact Us</h4>
          <p className='flex items-center gap-2 text-gray-300 mb-2'>
            <AiOutlinePhone className='text-[#D37302]' /> +95 664 333 2221
          </p>
          <p className='flex items-center gap-2 text-gray-300 mb-2'>
            <AiOutlineMail className='text-[#D37302]' /> nexigen@gmail.com
          </p>
          <p className='flex items-center gap-2 text-gray-300'>
            <GoLocation className='text-[#D37302]' /> 3972 Westheimer Rd, Canada
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='border-t border-gray-700 py-4 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 px-4 max-w-[1168px] mx-auto'>
        <span>© Copyright 2023 by nexigen.com</span>
        <div className='flex gap-4'>
          <span className='hover:text-white cursor-pointer border-r pr-4'>
            Privacy and Terms
          </span>
          <span className='hover:text-white cursor-pointer border-r pr-4'>
            Legal Notice
          </span>
          <span className='hover:text-white cursor-pointer border-r pr-4'>
            Languages
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
