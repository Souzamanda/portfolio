import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Toaster position='top-center' reverseOrder={false} />
      <Navbar />
      <Component {...pageProps} />{' '}
    </ThemeProvider>
  );
}
