import React from "react";

const projects = [
  {
    img: "/assets/images/latestProject1.png",
    title: "Project One",
    description: "This is the description of Project One",
  },
  {
    img: "/assets/images/latestproject2.png",
    title: "Project Two",
    description: "This is the description of Project Two",
  },
  {
    img: "/assets/images/latestproject3.png",
    title: "Project Three",
    description: "This is the description of Project Three",
  },
];

const LatestProject = () => {
  return (
    <div className='mt-25 px-4'>
      <p className='text-[#D37302] font-medium text-[16px] uppercase leading-[8%] text-center mb-4'>
        latest projects
      </p>
      <h2 className='font-semibold text-[48px] leading-[120%] text-center mb-15'>
        Our Consulting Success
      </h2>
      <div className='max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full justify-items-center md:justify-items-start mb-25'>
        {projects.map((project, index) => (
          <div key={index} className='relative group w-full cursor-pointer'>
            <img
              src={project.img}
              alt={project.title}
              className='w-full h-auto object-cover'
            />
            {/* Overlay */}
            <div className='absolute inset-0 bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4'>
              <h3 className='text-[#D37302] text-xl font-semibold mb-2'>
                {project.title}
              </h3>
              <p className='text-[#D37302] text-sm'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProject;
