import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { HiOutlineHome, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { BsFiles, BsGrid } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [shadow, setShadow] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <>
      <div>
        <aside className='hidden bg-white fixed left-0 top-0 border-r-[1px] border-gray-200 p-10 w-28 h-[100%] md:flex flex-col justify-between z-10'>
          <Link href='/'> logo</Link>

          <nav className='nav'>
            <div className='menu'>
              <ul className='flex flex-col gap-8'>
                <Link href='/'>
                  <li style={{color: router.asPath === '/' ? '#2CC3E3' : ''}} className='text-3xl text-gray-400 font-bold hover:text-purple-500 ease-in duration-300'>
                    <HiOutlineHome />
                  </li>
                </Link>

                <Link href='/#about'>
                  <li style={{color: router.asPath === '/#about' ? '#2CC3E3' : ''}} className='text-3xl text-gray-400 font-bold hover:text-purple-500 ease-in duration-300'>
                    <IoPersonOutline />
                  </li>
                </Link>

                <Link href='/#projects'>
                  <li style={{color: router.asPath === '/#projects' ? '#2CC3E3' : ''}} className='text-3xl text-gray-400 font-bold hover:text-purple-500 ease-in duration-300'>
                    <BsFiles />
                  </li>
                </Link>

                <Link href='/#contact'>
                  <li style={{color: router.asPath === '/#contact' ? '#2CC3E3' : ''}} className='text-3xl text-gray-400 font-bold hover:text-purple-500 ease-in duration-300'>
                    <HiOutlineChatBubbleLeftRight />
                  </li>
                </Link>
              </ul>
            </div>
          </nav>

          <div className='text-gray-400 text-sm -rotate-90 flex gap-2'>
            <span className=' '>&copy; </span>
            <span className=''>2023</span>
          </div>
        </aside>

<div className={
        shadow
          ? 'fixed w-full bg-white shadow-md shadow-gray-200 z-[100]'
          : 'fixed w-full z-[100]'
      }>
        <div className=' flex justify-between items-center p-10  md:pt-0 md:hidden'>
          <Link href='/'> logo</Link>
          <div
            onClick={handleNav}
            className='block cursor-pointer text-gray-900 font-bold hover:text-purple-500 ease-in duration-300'>
            <BsGrid size={20} />
          </div>

          <div
            className={
              !nav
                ? 'fixed top-[-10px] left-0 w-[100%] h-[35%]  border-t rounded-2xl bg-gray-100 ease-in duration-500'
                : 'fixed top-[-100%] ease-out duration-500'
            }>
              <div
              onClick={handleNav}
              className='absolute top-10 right-10 cursor-pointer text-gray-900 font-bold hover:text-purple-500 ease-in duration-300'>
              <AiOutlineClose size={20} />
            </div>
            <div className=' mt-16'>
              <ul className='p-10 grid grid-cols-2 gap-8'>
                <div className='flex flex-col justify-center items-center'>
                  <Link href='/' onClick={handleNav}>
                    <li style={{color: router.asPath === '/' ? '#2CC3E3' : ''}} className='text-2xl text-gray-900 font-bold hover:text-purple-500 ease-in duration-300 focus:text-teal-500'>
                      <HiOutlineHome />
                    </li>
                  </Link>
                  <p className='text-sm p-2 text-gray-600'>Home</p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                  <Link href='/#about' onClick={handleNav}>
                    <li style={{color: router.asPath === '/#about' ? '#2CC3E3' : ''}} className='text-2xl text-gray-900 font-bold hover:text-purple-500 ease-in duration-300 focus:text-teal-500'>
                      <IoPersonOutline />
                    </li>
                  </Link>
                  <p className='text-sm p-2 text-gray-600'>About</p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                  <Link href='/#projects' onClick={handleNav}>
                    <li style={{color: router.asPath === '/#projects' ? '#2CC3E3' : ''}} className='text-2xl text-gray-900 font-bold hover:text-purple-500 ease-in duration-300'>
                      <BsFiles />
                    </li>
                  </Link>
                  <p className='text-sm p-2 text-gray-600'>Projects</p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                  <Link href='/#contact' onClick={handleNav}>
                    <li style={{color: router.asPath === '/#contact' ? '#2CC3E3' : ''}} className='text-2xl text-gray-900 font-bold hover:text-purple-500 ease-in duration-300'>
                      <HiOutlineChatBubbleLeftRight />
                    </li>
                  </Link>
                  <p className='text-sm p-2 text-gray-600'>Contact</p>
                </div>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
