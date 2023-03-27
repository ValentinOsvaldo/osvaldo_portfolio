import { Hero } from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Osvaldo Valentin - FrontEnd Dev" />
        <meta
          property="og:url"
          content="https://osvaldo-portfolio.vercel.app"
        />
        <meta
          property="og:image"
          content="https://osvaldo-portfolio.vercel.app/dev.jpg"
        />
        <title>Osvaldo Valentin</title>
      </Head>
      <Hero />
    </>
  );
}
