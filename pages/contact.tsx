import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { FiMail } from 'react-icons/fi';
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
        <h2 className="text-4xl dark:text-teal-400 font-bold mb-2">Contact</h2>

        <article className='my-4'>
          <div className='flex flow-row gap-4 items-center'>
            <div className='flex items-center justify-center p-4 shadow-lg rounded-full bg-black text-white dark:bg-teal-500'>
              <FiMail size={32} />
            </div>
            <div className='truncate'>
              <h3 className='font-bold text-xl'>Email</h3>
              <a href="mailto:valentingarcia.osvaldo@gmail.com" className='transition-colors hover:text-cyan-500'>
                valentingarcia.osvaldo@gmail.com
              </a>
            </div>
          </div>
        </article>

        <Form />
        <Toaster />
      </section>
    </>
  );
};

export default contact;
