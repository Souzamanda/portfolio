/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { VscGithub } from 'react-icons/vsc';
import RocketPay from '../assets/rocketpay.jpg';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      className='bg-gray-900 fixed w-full h-screen z-[100]'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='fixed max-w-2xl w-full left-1/2 top-1/2 flex flex-col bg-white shadow-md shadow-gray-800 rounded-xl -translate-x-1/2 -translate-y-1/2'>
        <Image
          src={RocketPay}
          alt='/'
          className='w-full object-cover h-52 rounded-xl'
        />

        <div className='w-full'>
          <div className='text-white text-lg'>
            <AiOutlineClose
              onClick={onClose}
              className='fixed top-4 right-4 cursor-pointer'
            />
          </div>

          <div className='flex flex-col justify-center mt-12 py-4 px-8'>
            <h4 className='text-center text-gray-700 tracking-widest text-xl sm:text-2xl md:text-3xl font-bold'>
              Rocket Pay
            </h4>
            <h6 className='text-center pb-8 text-xl text-gray-600'>
              Technologies used: React, ViteJS
            </h6>
            <div className='max-w-lg mx-auto text-justify text-lg text-gray-600 '>
              <p>
                • Project from{' '}
                <a
                  target='https://www.rocketseat.com.br'
                  rel='noopener noreferrer'
                  className='text-purple-500 hover:text-teal-500 ease-in duration-300'>
                  Rocketseat's
                </a>{' '}
                explorer lab. There were 3 classes in which a component was
                developed with <span className='text-teal-500'>ViteJS</span> to
                simulate the credit card filling form, where a mask was added to
                the inputs - using{' '}
                <span className='text-teal-500'>iMaskJS</span> and{' '}
                <span className='text-teal-500'>RegEx</span> - and HTML elements
                were updated via DOM.
              </p>
              <p className='pt-4'>
                • I also added a{' '}
                <span className='text-teal-500'>light/dark theme switch</span>,
                updating styles according to the user's choice via DOM and CSS
                variables.
              </p>
            </div>
          </div>

          <div className='flex max-w-xs mx-auto justify-between text-center p-4 '>
            <a
              href='https://explorer-lab-01-henna.vercel.app'
              rel='noopener noreferrer'>
              <div className='py-4 text-3xl text-gray-500 hover:text-purple-500 hover:scale-110 ease-in duration-300 cursor-pointer '>
                <HiOutlineExternalLink />
              </div>
            </a>

            <a
              href='https://github.com/Souzamanda/explorer-lab1'
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
