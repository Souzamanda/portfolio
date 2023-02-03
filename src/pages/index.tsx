import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Main from '@/components/Main';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
