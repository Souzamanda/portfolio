import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ProjectItemProps {
  title: string;
  bgImg: StaticImageData;
  stack: string;
}

const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div className='relative flex item justify-center h-auto w-full rounded-xl bg-gradient-to-br from-teal-500/50 via-purple-500 to-teal-500/50 cursor-pointer group hover:scale-105 ease-linear duration-500'>
      <Image
        src={props.bgImg}
        alt='Rocket Pay app picture'
        className='rounded-xl opacity-[15%] duration-500 group-hover:opacity-95'
      />
      <div className='block group-hover:hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h4 className='text-white tracking-wider text-center text-xl md:text-2xl font-bold'>
          {props.title}
        </h4>
        <p className='pt-4 text-gray-100 tracking-wider text-center '>
          {props.stack}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
