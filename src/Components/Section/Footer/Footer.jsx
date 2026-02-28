import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-[#0b0b2e] to-[#140f3d] text-gray-300 px-6 md:px-16 pt-16'>
      {/* Newsletter */}
      <div className='flex max-w-[1119px] mx-auto flex-col md:flex-row justify-between items-center md:items-center gap-6 border-b border-gray-700 pb-10 text-center md:text-left'>
        <div>
          <h3 className='text-white text-2xl font-semibold mb-3'>
            Subscribe to our Newsletter
          </h3>
          <div className='flex justify-center md:justify-start'>
            <input
              type='email'
              placeholder='Email address'
              className='input input-bordered rounded-r-none w-64 bg-white text-black'
            />
            <button className='btn btn-primary rounded-l-none'>→</button>
          </div>
        </div>

        <div>
          <h4 className='text-white mb-3'>Follow us</h4>
          <div className='flex justify-center md:justify-start gap-3'>
            <a className='btn btn-circle btn-outline btn-sm text-white'>
              <FaFacebookF />
            </a>
            <a className='btn btn-circle btn-outline btn-sm text-white'>
              <FaTwitter />
            </a>
            <a className='btn btn-circle btn-outline btn-sm text-white'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className='max-w-[1168px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 text-center md:text-left'>
        {/* Brand */}
        <div>
          <h2 className='text-white text-2xl font-bold mb-4'>Nexigen</h2>
          <p className='text-sm mb-6'>
            We are dedicated to helping you achieve your business goals and
            overcome any challenges that may arise.
          </p>

          <div className='space-y-3 text-sm'>
            <p className='flex justify-center md:justify-start items-center gap-2'>
              <FaPhoneAlt /> +95 664 333 2221
            </p>
            <p className='flex justify-center md:justify-start items-center gap-2'>
              <FaEnvelope /> nexigen@gmail.com
            </p>
            <p className='flex justify-center md:justify-start items-center gap-2'>
              <FaMapMarkerAlt /> 3972 Westheimer Rd, Canada
            </p>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className='text-white font-semibold mb-4'>Explore</h4>
          <ul className='grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-1 md:gap-x-0'>
            <li>
              <a className='hover:text-white'>Home</a>
            </li>
            <li>
              <a className='hover:text-white'>Services</a>
            </li>
            <li>
              <a className='hover:text-white'>Testimonials</a>
            </li>
            <li>
              <a className='hover:text-white'>Projects</a>
            </li>
            <li>
              <a className='hover:text-white'>Blogs</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className='text-white font-semibold mb-4'>Quick Links</h4>
          <ul className='grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-1 md:gap-x-0'>
            <li>
              <a className='hover:text-white'>About Us</a>
            </li>
            <li>
              <a className='hover:text-white'>Our Team</a>
            </li>
            <li>
              <a className='hover:text-white'>Support</a>
            </li>
            <li>
              <a className='hover:text-white'>FAQ</a>
            </li>
            <li>
              <a className='hover:text-white'>Help</a>
            </li>
          </ul>
        </div>

        {/* Recent Projects */}
      </div>

      {/* Bottom */}
      <div className='border-t max-w-[1168px] mx-auto border-gray-700 py-6 flex flex-col md:flex-row justify-center md:justify-between text-sm text-gray-400 text-center md:text-left'>
        <p>© Copyright 2023 by nexigen.com</p>
        <div className='flex justify-center md:justify-start gap-4 mt-3 md:mt-0'>
          <a className='hover:text-white'>Privacy & Terms</a>
          <a className='hover:text-white'>Legal Notice</a>
          <a className='hover:text-white'>Languages</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
