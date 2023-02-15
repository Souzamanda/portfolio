/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TbPhoneCall, TbLocation } from 'react-icons/tb';
import { FaLinkedinIn } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { FiMail } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import sendIcon from '../assets/send.svg';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { sendContactMail } from '../services/sendMail';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error('Please, fill all fields to send your message', {
        style: {
          border: '1px solid #FF3366',
          background: '#ffeef2',
          padding: '16px',
          color: '#FF3366',
        },
        iconTheme: {
          primary: '#FF3366',
          secondary: '#ffeef2',
        },
      });
      return;
    }

    try {
      setLoading(true);

      const toastId = toast.loading('Loading...', {
        style: {
          border: '1px solid #D8B4FE',
          background: '#fff',
          padding: '16px',
          color: '#C400FF',
        },
        iconTheme: {
          primary: '#0CECDD',
          secondary: '#C400FF'
        }
      });

      await sendContactMail(name, email, subject, message)
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      toast.success('Message sent!', {
        id: toastId,
        style: {
          border: '1px solid #8DCD8D',
          background: '#f3faf3',
          padding: '16px',
          color: '#8DCD8D',
        },
        iconTheme: {
          primary: '#8DCD8D',
          secondary: '#f3faf3',
        },
      });

    } catch {
      toast.error('An error occurred when sending your message.\n Please try again!', {
        style: {
          border: '1px solid #FF3366',
          background: '#ffeef2',
          padding: '16px',
          color: '#FF3366',
        },
        iconTheme: {
          primary: '#FF3366',
          secondary: '#ffeef2',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contact' className='w-full p-10 py-16 mt-16'>
      <div className='max-w-[1240px] md:pl-[100px] m-auto grid md:grid-cols-5 gap-8'>
        {/* left */}
        <div className='col-span-3 md:col-span-2 w-full h-full p-4'>
          <h2
            className='text-gray-700 tracking-widest text-xl sm:text-2xl md:text-3xl text-shadow 0CECDD
            dark:text-gray-200 dark:text-shadow-dark
          '>
            Let's Connect
          </h2>
          <p className='py-4 text-gray-600 bg-white dark:bg-purple-700 dark:text-gray-100'>
            If you want to know more about me, discuss a project or grab a
            coffee and talk about series, you can find me on social media or
            send a message in here!
          </p>
          <div className='flex flex-col items-center lg:items-start'>
            <div className='flex pt-4 pb-2 justify-center items-center'>
              <HiOutlineLocationMarker className='text-xl lg:text-2xl text-gray-500 dark:text-gray-100' />
              <p className='px-4 text-gray-600 text-center dark:text-gray-100'>
                São Paulo/SP - Brazil
              </p>
            </div>
            <div className='flex py-2 justify-center items-center'>
              <TbPhoneCall className='text-xl lg:text-2xl text-gray-500 dark:text-gray-100' />
              <p className='px-4 text-gray-600 text-center dark:text-gray-100'>
                +55 11 98591-9388
              </p>
            </div>
          </div>

          <div className='flex max-w-[200px] mx-auto lg:ml-0 py-8 justify-between items-center'>
            <Link
              href='https://www.linkedin.com/in/amanda-puttomatti/'
              passHref
              legacyBehavior>
              <a target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn className='text-xl lg:text-2xl text-gray-500 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-500 hover:scale-110 ease-in duration-300' />
              </a>
            </Link>

            <Link href='https://github.com/Souzamanda' passHref legacyBehavior>
              <a target='_blank' rel='noopener noreferrer'>
                <VscGithub className='text-xl lg:text-2xl text-gray-500 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-500 hover:scale-110 ease-in duration-300' />
              </a>
            </Link>

            <Link href='https://wa.me/5511985919388' passHref legacyBehavior>
              <a target='_blank' rel='noopener noreferrer'>
                <AiOutlineWhatsApp className='text-xl lg:text-2xl text-gray-500 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-500 hover:scale-110 ease-in duration-300' />
              </a>
            </Link>

            <Link href='mailto:acsputtomatti@gmail.com?Subject=[P]%20Hello'>
              <FiMail className='text-xl lg:text-2xl text-gray-500 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-500 hover:scale-110 ease-in duration-300' />
            </Link>
          </div>
        </div>

        {/* right */}
        <div className='col-span-3 w-full h-auto lg:p-4 '>
          <div className='px-4'>
            <form onSubmit={handleSubmit} method='POST' className='grid gap-4'>
              <div className='relative'>
                <input
                  type='text'
                  id='name'
                  placeholder='Name'
                  onChange={({ target }) => setName(target.value)}
                  value={name}
                  className='peer form-input w-full border-2 rounded-lg p-3 flex border-purple-300 text-gray-900 focus:outline-none focus:ring-1 focus:border-teal-500 focus:ring-teal-500 placeholder-transparent caret-teal-600 dark:bg-purple-700 dark:text-gray-100 dark:border-purple-500 dark:focus:border-teal-500 dark:focus:ring-teal-500'
                />
                <label
                  htmlFor='name'
                  className='text-gray-500 absolute -top-2.5 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500  peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-800 dark:peer-placeholder-shown:text-gray-300 dark:peer-focus:text-gray-100'>
                  Name
                </label>
              </div>

              <div className='relative py-2'>
                <input
                  type='email'
                  id='email'
                  placeholder='Email'
                  onChange={({ target }) => setEmail(target.value)}
                  value={email}
                  className='peer form-input w-full border-2 rounded-lg p-3 flex border-purple-300 text-gray-900 focus:outline-none focus:ring-1 focus:border-teal-500 focus:ring-teal-500 placeholder-transparent caret-teal-600 dark:bg-purple-700 dark:text-gray-100 dark:border-purple-500 dark:focus:border-teal-500 dark:focus:ring-teal-500'
                />
                <label
                  htmlFor='email'
                  className='text-gray-500 absolute -top-1 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500  peer-focus:-top-1 peer-focus:left-2 peer-focus:text-gray-800 dark:peer-placeholder-shown:text-gray-300 dark:peer-focus:text-gray-100'>
                  Email
                </label>
              </div>

              <div className='relative py-2'>
                <input
                  type='text'
                  id='subject'
                  placeholder='Subject'
                  onChange={({ target }) => setSubject(target.value)}
                  value={subject}
                  className='peer form-input w-full border-2 rounded-lg p-3 flex border-purple-300 text-gray-900 focus:outline-none focus:ring-1 focus:border-teal-500 focus:ring-teal-500 placeholder-transparent caret-teal-600 dark:bg-purple-700 dark:text-gray-100 dark:border-purple-500 dark:focus:border-teal-500 dark:focus:ring-teal-500'
                />
                <label
                  htmlFor='subject'
                  className='text-gray-500 absolute -top-1 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500  peer-focus:-top-1 peer-focus:left-2 peer-focus:text-gray-800 dark:peer-placeholder-shown:text-gray-300 dark:peer-focus:text-gray-100'>
                  Subject
                </label>
              </div>

              <div className='relative py-2'>
                <textarea
                  id='message'
                  placeholder='Message'
                  onChange={({ target }) => setMessage(target.value)}
                  value={message}
                   className='peer form-input w-full border-2 rounded-lg p-3 flex border-purple-300 focus:outline-none focus:ring-1 focus:border-teal-500 text-gray-900 focus:ring-teal-500 placeholder-transparent caret-teal-600 resize-none dark:bg-purple-700 dark:text-gray-100 dark:border-purple-500  dark:focus:border-teal-500 dark:focus:ring-teal-500'
                  rows={5}
                />
                <label
                  htmlFor='message'
                  className='absolute -top-2.5 left-2 -translate-y-[15%] transition-all peer-placeholder-shown:top-[15%] peer-placeholder-shown:text-gray-500  peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-gray-800 dark:peer-placeholder-shown:text-gray-300 dark:peer-focus:text-gray-100'>
                  Message
                </label>
              </div>

              <div className='flex items-center justify-center md:justify-start'>
                <button
                  type='submit'
                  disabled={loading}
                  className='px-6 py-4 rounded-lg bg-gradient-to-br from-purple-500/75 via-purple-500 to-teal-500/50 text-white hover:from-teal-500 hover:to-purple-500/75 hover:scale-105 ease-linear duration-500 transition flex items-center disabled:opacity-50 disabled:cursor-not-allowed'>
                  <p className='text-lg font-bold'>Send </p>
                  <Image
                    src={sendIcon}
                    alt=''
                    width={30}
                    className='ml-4 text-gray-900'
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
