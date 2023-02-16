import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logoLoading from '../assets/logo-loading.svg'

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);

  return (
    <>
      {loading ? (
        <div className='flex w-full h-screen bg-gray-100 dark:bg-purple-700 justify-center items-center'>
        <Image src={logoLoading} alt='' />
        </div>
      ) : (
        <ThemeProvider attribute='class'>
          <Toaster position='top-center' reverseOrder={false} />
          <Navbar />
          <Component {...pageProps} />{' '}
        </ThemeProvider>
      )}
    </>
  );
}
