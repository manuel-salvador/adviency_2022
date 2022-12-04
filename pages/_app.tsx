import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adviency | Manuel Salvador</title>
        <meta name="description" content="Adviency hecho por Manuel Salvador" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link
        href="/"
        className="absolute top-2 left-2 flex items-center justify-center w-10 h-10 bg-gray-700 bg-opacity-60 rounded-full"
      >
        <img
          src="https://img.icons8.com/sf-black-filled/64/000000/home-page.png"
          className="invert w-7"
        />
      </Link>
      <Component {...pageProps} />
    </>
  );
}
