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
      <Head>
        <title>Amanda Souza</title>
        <meta
          name='description'
          content='My name is Amanda Souza, I am a Software Engineer and in this portfolio I show some of my projects'
        />
        <meta property='og:image' content='/public/ogimage.png' />
        <meta property='og:image:secure_url' content='/public/ogimage.png' />
        <meta name='twitter:image' content='/public/ogimage.png' />
        <meta name='twitter:image:src' content='/public/ogimage.png' />
        <meta property='og:description' content='My name is Amanda Souza, I am a Software Engineer and in this portfolio I show some of my projects' />
      </Head>
      <Main />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
