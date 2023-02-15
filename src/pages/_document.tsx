import { Html, Head, Main, NextScript } from 'next/document';
import { RiCodeFill } from 'react-icons/ri';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-white bg-app bg-cover bg-opacity-25 dark:bg-purple-700'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
