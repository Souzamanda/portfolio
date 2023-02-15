/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { VscGithub } from 'react-icons/vsc';


const Modal = ({ open, onClose, bgImg, title, stack, description, liveLink, repoLink }) => {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      className='bg-gray-900/50 fixed top-0 left-0 w-full h-screen z-[9999]'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='fixed max-w-2xl w-full h-screen sm:h-fit left-1/2 top-1/2 flex flex-col bg-white shadow-md shadow-purple-700/75 sm:rounded-xl -translate-x-1/2 -translate-y-1/2'>
        <Image
          src={bgImg}
          alt='/'
          className='w-full object-cover h-52 sm:rounded-t-xl'
        />

        <div className='w-full'>
          <div className='text-white text-lg'>
            <AiOutlineClose
              onClick={onClose}
              className='fixed top-4 right-4 cursor-pointer'
            />
          </div>

          <div className='flex flex-col justify-center mt-8 py-4 px-8'>
            <h4 className='text-center text-gray-700 tracking-widest text-xl sm:text-2xl md:text-3xl font-bold'>
              {title}
            </h4>
            <h6 className='text-center pb-8 text-xl text-gray-600'>
              Technologies used: {stack}
            </h6>
            <div className='max-w-lg mx-auto text-justify text-lg text-gray-600 '>
              {description}
            </div>
          </div>

          <div className='flex max-w-[200px] sm:max-w-xs mx-auto justify-between text-center p-4 '>
            <a
              href={liveLink}
              rel='noopener noreferrer'>
              <div className='py-4 text-3xl text-gray-500 hover:text-purple-500 hover:scale-110 ease-in duration-300 cursor-pointer '>
                <HiOutlineExternalLink />
              </div>
            </a>

            <a
              href={repoLink}
              rel='noopener noreferrer'>
              <div className='py-4 text-3xl text-gray-500 hover:text-purple-500 hover:scale-110 ease-in duration-300 cursor-pointer '>
                <VscGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
