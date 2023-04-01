import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Navbar } from '@/components/ui';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="m-auto w-full max-w-screen-xl">{children}</main>
      <footer className="flex flex-col gap-2 py-6 2xl:py-0 2xl:gap-0">
        <nav className="flex items-center justify-center flex-row gap-4 text-gray-700 dark:text-gray-400 2xl:flex-col 2xl:fixed 2xl:bottom-2 2xl:right-16 2xl:after:block 2xl:after:h-36 2xl:after:w-0.5 2xl:after:bg-gray-500">
          <a
            href="https://github.com/ValentinOsvaldo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-teal-300"
          >
            <BsGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/valentin-osvaldo/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-teal-300"
          >
            <BsLinkedin size={24} />
          </a>
        </nav>
        <p className="text-gray-700 dark:text-gray-400 font-mono text-center text-sm 2xl:hidden">
          Designed and created by Osvaldo Valentin
        </p>
      </footer>
    </>
  );
};
