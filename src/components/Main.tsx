/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import {FaLinkedinIn, FaChevronDown} from 'react-icons/fa'
import {VscGithub} from 'react-icons/vsc'
import {FiMail} from 'react-icons/fi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
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
        <h1 className='bg-white pt-6 md:pt-8 text-3xl sm:text-4xl md:text-5xl tracking-widest text-gray-600 font-bold'>
          <span className='hover:text-purple-500 ease-in duration-300'>Amanda</span> <span className='text-teal-500 hover:text-purple-500 ease-in duration-300'>Souza</span> 
        </h1>
        <p className='bg-white  tracking-widest pt-2 md:pt-4 text-gray-600'>
          I'm a Software Engineer
        </p>
        <div className='bg-white flex items-center justify-between max-w-[330px] pt-4'>
          <div className='p-4 md:p-6 cursor-pointer text-xl lg:text-2xl text-gray-500 hover:text-teal-500 hover:scale-110 ease-in duration-300'>
            <FaLinkedinIn />
          </div>
          <div className='p-4 md:p-6 cursor-pointer text-gray-500 text-xl lg:text-2xl hover:text-teal-500 hover:scale-110 ease-in duration-300'>
            <VscGithub />
          </div>
          <div className='p-4 md:p-6 cursor-pointer text-gray-500 text-xl lg:text-2xl hover:text-teal-500 hover:scale-110 ease-in duration-300'>
            <AiOutlineWhatsApp />
          </div>
          <div className='p-4 md:p-6 cursor-pointer text-gray-500 text-xl lg:text-2xl hover:text-teal-500 hover:scale-110 ease-in duration-300'>
            <FiMail />
          </div>
        </div>
        <div className='absolute bottom-8 text-purple-500 text-2xl hover:text-yellow-500 hover:scale-110 ease-in duration-300 animate-bounce'>
          <Link href='/#about'><FaChevronDown /></Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
