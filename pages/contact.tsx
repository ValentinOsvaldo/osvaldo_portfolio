import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { Form } from '@/components/ui';

const contact = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Osvaldo Valentin - Contact" />
        <meta
          property="og:url"
          content="https://osvaldo-portfolio.vercel.app/contact"
        />
        <title>Contact</title>
      </Head>

      <section className="container max-w-screen-md">
        <h2 className="text-4xl text-teal-400 font-bold mb-2">Contact</h2>

        <article className="mb-4 bg-slate-900 p-4 rounded-md shadow-sm">
          <h3 className="text-2xl text-teal-500 font-bold mb-2">
            Contact me directly
          </h3>

          <a
            href="mailto:valentingarcia.osvaldo@gmail.com"
            className="block text-lg text-gray-300"
          >
            <span className="font-semibold">Email: </span>
            <span className="underline underline-offset-2 text-teal-400">
              valentingarcia.osvaldo@gmail.com
            </span>
          </a>
        </article>

        <Form />
        <Toaster />
      </section>
    </>
  );
};

export default contact;
