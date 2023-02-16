import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { HiOutlineHome, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { BsFiles, BsGrid } from 'react-icons/bs';
import { IoPersonOutline, IoClose } from 'react-icons/io5';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import logoDark from '../assets/logo-dark.svg';
import logoLight from '../assets/logo-light.svg'
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [shadow, setShadow] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
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

  const themeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <RiSunFill
          className='text-yellow-400'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <RiMoonClearFill
          className='text-purple-600'
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  const logoChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <Image src={logoDark} alt='logo' />
      );
    } else {
      return (
        <Image src={logoLight} alt='logo' />
      );
    }
  }

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div>
        {/* Large screens navbar */}
        <aside className='hidden bg-white fixed left-0 top-0 border-r-[1px] border-gray-200 p-10 w-28 h-[100%] md:flex flex-col justify-between z-10 dark:bg-purple-700 dark:border-purple-600'>
          <Link href='/'>
            <div className='w-[50px] -ml-2'>
              {logoChanger()}
            </div>
          </Link>

          <nav className='nav'>
            <div className='menu'>
              <ul className='flex flex-col gap-8'>
                <Link href='/'>
                  <li
                    style={{ color: router.asPath === '/' ? '#2CC3E3' : '' }}
                    className='text-3xl text-gray-400 font-bold hover:text-purple-500 dark:text-gray-100 dark:hover:text-yellow-500 ease-in duration-150'>
                    <HiOutlineHome />
                  </li>
                </Link>

                <Link href='/#about'>
                  <li
                    style={{
                      color: router.asPath === '/#about' ? '#2CC3E3' : '',
                    }}
                    className='text-3xl text-gray-400 font-bold hover:text-purple-500 dark:text-gray-100 dark:hover:text-yellow-500 ease-in duration-150'>
                    <IoPersonOutline />
                  </li>
                </Link>

                <Link href='/#projects'>
                  <li
                    style={{
                      color: router.asPath === '/#projects' ? '#2CC3E3' : '',
                    }}
                    className='text-3xl text-gray-400 font-bold hover:text-purple-500 dark:text-gray-100 dark:hover:text-yellow-500 ease-in duration-150'>
                    <BsFiles />
                  </li>
                </Link>

                <Link href='/#contact'>
                  <li
                    style={{
                      color: router.asPath === '/#contact' ? '#2CC3E3' : '',
                    }}
                    className='text-3xl text-gray-400 font-bold hover:text-purple-500 dark:text-gray-100 dark:hover:text-yellow-500 ease-in duration-150'>
                    <HiOutlineChatBubbleLeftRight />
                  </li>
                </Link>
              </ul>
            </div>
          </nav>

          <div className='text-3xl cursor-pointer '>{themeChanger()}</div>
        </aside>

        {/* Mobile navbar */}
        <div
          className={
            shadow
              ? 'fixed w-full bg-white shadow-md shadow-gray-200 z-[100] dark:bg-purple-700 dark:shadow-purple-600'
              : 'fixed w-full z-[100]'
          }>
          <div className=' flex justify-between items-center px-10 py-5  md:pt-0 md:hidden'>
            <Link href='/'>
            <div className='w-10 '>
            {logoChanger()}
            </div>
            </Link>
            <div
              onClick={handleNav}
              className='block cursor-pointer text-gray-900 font-bold hover:text-purple-500 ease-in duration-150 dark:text-gray-100 dark:hover:text-yellow-500'>
              <BsGrid size={20} />
            </div>

            <div
              className={
                !nav
                  ? 'fixed top-[-10px] left-0 w-[100%] h-[35%]  border-t rounded-2xl bg-gray-100 ease-in duration-500 dark:bg-purple-600'
                  : 'fixed top-[-100%] ease-out duration-500'
              }>
              <div onClick={handleNav} className='p-10 flex justify-between'>
                <div className='text-xl'>{themeChanger()}</div>

                <div className='text-2xl cursor-pointer text-gray-900 font-bold hover:text-purple-500 ease-in duration-150 dark:text-gray-100 dark:hover:text-yellow-500'>
                  <IoClose />
                </div>
              </div>
              <div>
                <ul className='px-10 py-2 grid grid-cols-2 gap-8'>
                  <div className='flex flex-col justify-center items-center'>
                    <Link href='/' onClick={handleNav}>
                      <li
                        style={{
                          color: router.asPath === '/' ? '#2CC3E3' : '',
                        }}
                        className='text-2xl text-gray-900 font-bold hover:text-purple-500 ease-in duration-150 focus:text-teal-500 dark:text-gray-100 dark:hover:text-yellow-500'>
                        <HiOutlineHome />
                      </li>
                    </Link>
                    <p className='text-sm p-2 text-gray-600 dark:text-gray-200'>
                      Home
                    </p>
                  </div>

                  <div className='flex flex-col justify-center items-center'>
                    <Link href='/#about' onClick={handleNav}>
                      <li
                        style={{
                          color: router.asPath === '/#about' ? '#2CC3E3' : '',
                        }}
                        className='text-2xl text-gray-900 font-bold hover:text-purple-500 ease-in duration-150 focus:text-teal-500 dark:text-gray-100 dark:hover:text-yellow-500'>
                        <IoPersonOutline />
                      </li>
                    </Link>
                    <p className='text-sm p-2 text-gray-600 dark:text-gray-200'>
                      About
                    </p>
                  </div>

                  <div className='flex flex-col justify-center items-center'>
                    <Link href='/#projects' onClick={handleNav}>
                      <li
                        style={{
                          color:
                            router.asPath === '/#projects' ? '#2CC3E3' : '',
                        }}
                        className='text-2xl text-gray-900 font-bold hover:text-purple-500 ease-in duration-150 dark:text-gray-100 dark:hover:text-yellow-500'>
                        <BsFiles />
                      </li>
                    </Link>
                    <p className='text-sm p-2 text-gray-600 dark:text-gray-200'>
                      Projects
                    </p>
                  </div>

                  <div className='flex flex-col justify-center items-center'>
                    <Link href='/#contact' onClick={handleNav}>
                      <li
                        style={{
                          color: router.asPath === '/#contact' ? '#2CC3E3' : '',
                        }}
                        className='text-2xl text-gray-900 font-bold hover:text-purple-500 ease-in duration-150 dark:text-gray-100 dark:hover:text-yellow-500'>
                        <HiOutlineChatBubbleLeftRight />
                      </li>
                    </Link>
                    <p className='text-sm p-2 text-gray-600 dark:text-gray-200'>
                      Contact
                    </p>
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
