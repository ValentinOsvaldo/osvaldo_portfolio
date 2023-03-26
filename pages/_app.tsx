import { AppLayout } from '@/layouts';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

import { Poppins, Roboto_Mono } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <style jsx global>
        {`
          :root {
            --poppins-font: ${poppins.style.fontFamily};
            --roboto-mono-font: ${robotoMono.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </AppLayout>
  );
}
