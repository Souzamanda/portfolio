/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { VscGithub } from 'react-icons/vsc';
import { IoClose } from 'react-icons/io5';


const Modal = ({ open, onClose, closeColor = 'dark', bgImg, title, stack, description, liveLink, repoLink }) => {
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  }
  if (!open) return null;
  return (
    <div onClick={(e) => {
          e.stopPropagation();
        }}>
    <div
      onClick={handleClose}
      className='bg-gray-900/50 fixed top-0 left-0 w-full h-screen z-[100]'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='fixed max-w-2xl w-full h-screen sm:h-fit left-1/2 top-1/2 flex flex-col bg-white shadow-md shadow-purple-700/75 sm:rounded-xl -translate-x-1/2 -translate-y-1/2 dark:bg-neutral-700'>
        <Image
          src={bgImg}
          alt='/'
          className='w-full object-cover h-52 sm:rounded-t-xl'
        />

        <div className='w-full'>
          <div className='text-2xl' style={{color: closeColor === 'dark' ? '#3D3D3F' : '#F3F4F6'}}>
            <IoClose
              onClick={handleClose}
              className='fixed top-4 right-4 cursor-pointer'
            />
          </div>

          <div className='flex flex-col justify-center mt-8 py-4 px-8'>
            <h4 className='text-center text-gray-700 tracking-widest text-xl sm:text-2xl md:text-3xl font-bold dark:text-gray-100'>
              {title}
            </h4>
            <h6 className='text-center pb-8 text-xl text-gray-600 dark:text-gray-200'>
              Technologies used: {stack}
            </h6>
            <div className='max-w-lg mx-auto text-justify text-lg text-gray-600 dark:text-gray-200'>
              {description}
            </div>
          </div>

          <div className='flex max-w-[200px] sm:max-w-xs mx-auto justify-between text-center p-4 '>
            <a
              href={liveLink}
              rel='noopener noreferrer'>
              <div className='py-4 text-3xl text-gray-500 hover:text-purple-500 hover:scale-110 ease-in duration-300 cursor-pointer dark:text-gray-100 dark:hover:text-yellow-500'>
                <HiOutlineExternalLink />
              </div>
            </a>

            <a
              href={repoLink}
              rel='noopener noreferrer'>
              <div className='py-4 text-3xl text-gray-500 hover:text-purple-500 hover:scale-110 ease-in duration-300 cursor-pointer dark:text-gray-100 dark:hover:text-yellow-500'>
                <VscGithub />
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
