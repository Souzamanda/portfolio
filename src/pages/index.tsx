/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { Inter } from '@next/font/google';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Main from '@/components/Main';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Amanda Souza's Portfolio</title>
        <meta
          name='description'
          content='Hello! I am a Software Engineer and in this portfolio I show some of my projects'
        />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property='og:url' content='https://amandasouza.vercel.app' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content="Amanda Souza's Portfolio" />
        <meta
          property='og:description'
          content='Hello! I am a Software Engineer and in this portfolio I show some of my projects'
        />
        <meta property='og:image' content='ogimage.png' />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content="Amanda Souza's Portfolio" />
        <meta
          name='twitter:description'
          content='Hello! I am a Software Engineer and in this portfolio I show some of my projects'
        />
        <meta name='twitter:image' content='ogimage.png' />
      </Head>
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
