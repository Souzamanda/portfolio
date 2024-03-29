/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { FaLinkedinIn, FaChevronDown } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { FiMail } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import profileImg from '../assets/profile.png';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center md:pl-[100px]'>
        <Image
          src={profileImg}
          alt=''
          className='w-[150px] sm:w-[200px]'></Image>
        <h1 className='bg-white pt-6 md:pt-8 text-3xl sm:text-4xl md:text-5xl tracking-widest text-gray-600 font-bold dark:bg-purple-700 dark:text-gray-100'>
          <span className='hover:text-purple-500 ease-in duration-300'>
            Amanda
          </span>{' '}
          <span className='text-teal-500 hover:text-purple-500 ease-in duration-300'>
            Souza
          </span>
        </h1>
        <p className='bg-white  tracking-widest pt-2 md:pt-4 text-gray-600 text-xl dark:bg-purple-700 dark:text-gray-100'>
          I'm a Software Engineer
        </p>
        <div className='bg-white flex items-center justify-between max-w-[330px] pt-4 dark:bg-purple-700'>
          <Link
            href='https://www.linkedin.com/in/amanda-puttomatti/'
            passHref
            legacyBehavior>
            <a target='_blank' rel='noopener noreferrer'>
              <div className='p-4 md:p-6 cursor-pointer text-xl lg:text-2xl text-gray-500 hover:text-teal-500 dark:text-gray-100 dark:hover:text-teal-500 hover:scale-110 ease-in duration-200'>
                <FaLinkedinIn />
              </div>
            </a>
          </Link>

          <Link href='https://github.com/Souzamanda' passHref legacyBehavior>
            <a target='_blank' rel='noopener noreferrer'>
              <div className='p-4 md:p-6 cursor-pointer text-gray-500 text-xl lg:text-2xl hover:text-teal-500 dark:text-gray-100 dark:hover:text-teal-500 hover:scale-110 ease-in duration-200'>
                <VscGithub />
              </div>
            </a>
          </Link>

          <Link href='https://wa.me/5511985919388' passHref legacyBehavior>
            <a target='_blank' rel='noopener noreferrer'>
              <div className='p-4 md:p-6 cursor-pointer text-gray-500 text-xl lg:text-2xl hover:text-teal-500 dark:text-gray-100 dark:hover:text-teal-500 hover:scale-110 ease-in duration-200'>
                <AiOutlineWhatsApp />
              </div>
            </a>
          </Link>

          <Link href='mailto:acsputtomatti@gmail.com?Subject=[P]%20Hello'>
            <div className='p-4 md:p-6 cursor-pointer text-gray-500 text-xl lg:text-2xl hover:text-teal-500 dark:text-gray-100 dark:hover:text-teal-500 hover:scale-110 ease-in duration-200'>
              <FiMail />
            </div>
          </Link>
        </div>

        <div className='absolute bottom-8 text-purple-500 hover:text-yellow-500 dark:text-yellow-500 text-2xl dark:hover:text-purple-500 hover:scale-110 ease-in duration-300 animate-bounce'>
          <Link href='/#about'>
            <FaChevronDown />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
