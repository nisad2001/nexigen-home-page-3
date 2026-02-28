import React from "react";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? "text-[#D37302] font-semibold" : "hover:text-[#D37302]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/services'
          className={({ isActive }) =>
            isActive ? "text-[#D37302] font-semibold" : "hover:text-[#D37302]"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/pages'
          className={({ isActive }) =>
            isActive ? "text-[#D37302] font-semibold" : "hover:text-[#D37302]"
          }
        >
          Pages
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/products'
          className={({ isActive }) =>
            isActive ? "text-[#D37302] font-semibold" : "hover:text-[#D37302]"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/blog'
          className={({ isActive }) =>
            isActive ? "text-[#D37302] font-semibold" : "hover:text-[#D37302]"
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? "text-[#D37302] font-semibold" : "hover:text-[#D37302]"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='navbar mt-2 max-w-[1169px] mx-auto flex justify-between items-center'>
      {/* Left Side */}
      <div className='flex items-center gap-8'>
        {/* Mobile Menu */}
        <div className='dropdown lg:hidden'>
          <div tabIndex={0} role='button' className='btn btn-ghost'>
            ☰
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow'
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <NavLink to='/' className='flex items-center'>
          <img
            src='/assets/images/navLogo .png'
            alt='logo'
            className='mr-2 w-6 h-6'
          />
          <p className='font-bold text-2xl'>Nexigen</p>
        </NavLink>

        {/* Links for Large Screen */}
        <ul className='menu menu-horizontal hidden lg:flex gap-6'>{links}</ul>
      </div>

      {/* Right Side */}
      <div className='flex items-center gap-4'>
        <IoIosSearch size={18} className='cursor-pointer' />
        <button className='btn bg-[#D37302] text-white text-[16px] leading-[16px] font-semibold px-7 py-5 rounded-lg hover:bg-[#b85f00]'>
          Make Appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
