/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TbPhoneCall } from 'react-icons/tb';
import { FaLinkedinIn } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { FiMail } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const contact = () => {
  return (
    <div id='contact' className='w-full p-10 py-16 mt-16'>
      <div className='max-w-[1240px] md:pl-[100px] m-auto grid md:grid-cols-5 gap-8'>
        {/* left */}
        <div className='col-span-3 md:col-span-2 w-full h-full p-4'>
          <h2
            className='text-gray-700 tracking-widest text-xl sm:text-2xl md:text-3xl text-shadow
          '>
            Let's Connect
          </h2>
          <p className='py-4 text-gray-600 bg-white'>
            If you want to know more about me, discuss a project or grab a
            coffee and talk about series, you can find me on social media or
            send a message in here!
          </p>
          <div className='flex flex-col items-center lg:items-start'>
            <div className='flex pt-4 pb-2 justify-center items-center'>
              <HiOutlineLocationMarker className='text-xl lg:text-2xl text-gray-500' />
              <p className='px-4 text-gray-600 text-center'>
                São Paulo/SP - Brazil
              </p>
            </div>
            <div className='flex py-2 justify-center items-center'>
              <TbPhoneCall className='text-xl lg:text-2xl text-gray-500' />
              <p className='px-4 text-gray-600 text-center'>
                +55 11 98591-9388
              </p>
            </div>
          </div>
          <div className='flex max-w-[200px] mx-auto lg:ml-0 py-8 justify-between items-center'>
            <FaLinkedinIn className='text-xl lg:text-2xl text-gray-500 hover:text-teal-500 hover:scale-110 ease-in duration-300' />
            <VscGithub className='text-xl lg:text-2xl text-gray-500 hover:text-teal-500 hover:scale-110 ease-in duration-300' />
            <AiOutlineWhatsApp className='text-xl lg:text-2xl text-gray-500 hover:text-teal-500 hover:scale-110 ease-in duration-300' />
            <FiMail className='text-xl lg:text-2xl text-gray-500 hover:text-teal-500 hover:scale-110 ease-in duration-300' />
          </div>
        </div>

        {/* right */}
        <div className='col-span-3 w-full h-auto lg:p-4'>
          <div className='px-4'>
            <form>
              <div className='flex flex-col'>
                <label className='uppercase pb-2'>Name</label>
                <input
                  type='text'
                  className='border-2 rounded-lg p-3 flex border-gray-400 focus:outline-none focus:border-teal-500'
                />
              </div>

              <div className='flex flex-col py-2'>
                <label className='uppercase py-2'>Email</label>
                <input
                  type='email'
                  className='border-2 rounded-lg p-3 flex border-gray-400 focus:outline-none focus:border-teal-500 invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                />
              </div>

              <div className='flex flex-col py-2'>
                <label className='uppercase py-2'>Subject</label>
                <input
                  type='text'
                  className='border-2 rounded-lg p-3 flex border-gray-400 focus:outline-none focus:border-teal-500'
                />
              </div>

              <div className='flex flex-col py-2'>
                <label className='uppercase py-2'>Message</label>
                <textarea
                  className='border-2 rounded-lg p-3 border-gray-400 focus:outline-none focus:border-teal-500'
                  rows={5}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
