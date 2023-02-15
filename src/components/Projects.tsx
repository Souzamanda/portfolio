import Image from 'next/image';
import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import rocketPayImg from '../assets/rocketpay.jpg';

const Projects = () => {
  

  return (
    <div id='projects' className='w-full p-10 py-16'>
      <div className='max-w-[1240px] md:pl-[100px] m-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='col-span-2 md:col-span-3'>
          <h2
            className='text-gray-700 tracking-widest text-xl sm:text-2xl md:text-3xl text-shadow
          '>
            Projects
          </h2>
        </div>
        
        <div className='pt-8 -z-1'>
          <ProjectItem title='RocketPay' bgImg={rocketPayImg} stack='React, Vite' />
          
        </div>
        <div className='pt-8'>
          <ProjectItem title='RocketPay' bgImg={rocketPayImg} stack='React, Vite' />
        </div>
        <div className='pt-8'>
          <ProjectItem title='RocketPay' bgImg={rocketPayImg} stack='React, Vite' />
        </div>
        <div className='pt-8'>
          <ProjectItem title='RocketPay' bgImg={rocketPayImg} stack='React, Vite' />
        </div>
        <div className='pt-8'>
          <ProjectItem title='RocketPay' bgImg={rocketPayImg} stack='React, Vite' />
        </div>
        <div className='pt-8'>
          <ProjectItem title='RocketPay' bgImg={rocketPayImg} stack='React, Vite' />
        </div>

      </div>
    </div>
  );
};

export default Projects;
