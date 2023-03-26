// import { github } from 'react-icons/md'
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
      <footer className="flex flex-col gap-2 py-6 sm:py-0 sm:gap-0">
        <nav className="flex items-center justify-center flex-row gap-4 sm:flex-col sm:fixed sm:bottom-2 sm:right-16 sm:after:block sm:after:h-36 sm:after:w-0.5 sm:after:bg-gray-500">
          <a
            href="https://github.com/ValentinOsvaldo"
            target="_blank"
            rel="noopener noreferrer"
            className='text-gray-400 transition-all hover:text-teal-300'
          >
            <BsGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/valentin-osvaldo/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-gray-400 transition-all hover:text-teal-300'
          >
            <BsLinkedin size={24} />
          </a>
        </nav>
        <p className='text-gray-400 font-mono text-center text-sm sm:hidden'>Designed and created by Osvaldo Valentin</p>
      </footer>
    </>
  );
};
