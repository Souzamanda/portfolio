/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { TbFileDownload } from 'react-icons/tb';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-10 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 md:pl-[100px]'>
        <div className='col-span-2'>
          <h2
            className='text-gray-700 tracking-widest text-xl sm:text-2xl md:text-3xl text-shadow dark:text-gray-200 dark:text-shadow-dark
          '>
            About me
          </h2>
          <div className='py-8'>
            <p className='py-2 text-lg text-gray-600 bg-white dark:bg-purple-700 dark:text-gray-100'>
              Hello!! I am a Software Engineer graduated at Centennial College
              in Toronto, Canada, but now I am back in Brazil, my home country.
            </p>

            <p className='py-2 text-lg text-gray-600 bg-white dark:bg-purple-700 dark:text-gray-100'>
              I am motivated, focused, and passionate about learning new things.
              My degree abroad allowed me to increase my fluency in the English
              language, improving my verbal and written communication.
            </p>

            <p className='py-2 text-lg text-gray-600 bg-white dark:bg-purple-700 dark:text-gray-100'>
              Other than coding, I love playing Valorant, hanging out with my
              friends and family and watching series, if you don't know what to
              watch next, I can recommend you something good!
            </p>
          </div>
          <div className='flex items-center justify-center md:justify-start'>
            <a download href='../assets/AmandaCordeiro_Curriculo.pdf'>
              <button className='px-6 py-4 rounded-lg bg-gradient-to-br from-purple-500/75 via-purple-500 to-teal-500/50 text-white font-bold hover:from-teal-500 hover:to-purple-500/75 hover:scale-105 ease-linear duration-500 transition flex items-center'>
                <p className='text-lg'>Resume </p>
                <TbFileDownload className='text-2xl ml-4' />
              </button>
            </a>
          </div>
        </div>
        <div className='max-w-[80%] md:max-w-[100%] h-auto mx-auto my-16 md:my-auto'>
          <Image
            src={aboutImg}
            alt='/'
            className='rounded-xl shadow-md shadow-teal-500/50 dark:shadow-yellow-500'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
