import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Maya Patel",
    role: "Marketing Manager",
    img: "/assets/images/teamImg1.png",
  },
  {
    id: 2,
    name: "Jacob Wright",
    role: "Project Manager",
    img: "/assets/images/teamImg2.png",
  },
  {
    id: 3,
    name: "Zash Jen",
    role: "HR Coordinator",
    img: "/assets/images/teamImg3.png",
  },
];

const OurTeam = () => {
  return (
    <div className='mb-25 max-w-[1170px] mx-auto px-4'>
      <p className='text-[#D37302] font-medium text-[16px] leading-[22px] tracking-[8%] uppercase mb-4 text-center md:text-left'>
        our team
      </p>

      <h2 className='text-[#0D083A] text-[36px] md:text-[48px] leading-[120%] font-semibold mb-15 text-center md:text-left'>
        Meet our experts
      </h2>

      {/* Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className='w-full max-w-[370px] rounded-xl overflow-hidden shadow-lg mx-auto'
          >
            {/* Image Container */}
            <div className='relative'>
              <img
                src={member.img}
                alt={member.name}
                className='w-full h-full object-cover'
              />

              {/* Overlay */}
              <div
                className='absolute bottom-0 left-0 w-full h-[160px] 
                bg-[#6140FF] text-white p-6 
                flex flex-col justify-end'
                style={{
                  clipPath: "polygon(0 35%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              >
                {/* Text */}
                <div className='flex flex-col text-right -mb-11'>
                  <h3 className='text-[24px] text-[#EFECFF] leading-[120%] font-semibold mb-2'>
                    {member.name}
                  </h3>
                  <p className='text-[18px] text-[#EFECFF] leading-[120%] font-semibold'>
                    {member.role}
                  </p>
                </div>

                {/* Social Icons */}
                <div className='flex gap-4 mt-4'>
                  <div className='w-8 h-8 flex items-center justify-center rounded-full bg-white/20'>
                    <FaFacebookF size={14} />
                  </div>
                  <div className='w-8 h-8 flex items-center justify-center rounded-full bg-white/20'>
                    <FaTwitter size={14} />
                  </div>
                  <div className='w-8 h-8 flex items-center justify-center rounded-full bg-white/20'>
                    <FaLinkedinIn size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
