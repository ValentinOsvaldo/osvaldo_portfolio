import { Form, Input } from '@/components/ui';
import Head from 'next/head';

const contact = () => {
  return (
    <>
      <Head>
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
          <a href="tel:+528123236394" className="block text-lg text-gray-300">
            <span className="font-semibold">Tel: </span>
            <span className="underline underline-offset-2 text-teal-400">
              +52 81 2323 6394
            </span>
          </a>
        </article>

        <Form />
      </section>
    </>
  );
};

export default contact;
