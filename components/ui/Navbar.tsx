import { useScheme } from '@/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BsLightbulbFill,
  BsLightbulbOff,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs';

const links = [
  { url: '/projects', text: 'Projects' },
  { url: '/contact', text: 'Contact' },
];

export const Navbar = () => {
  const { asPath } = useRouter();
  const { colorScheme, toggleTheme } = useScheme();

  return (
    <header className="bg-slate-100 dark:bg-slate-800 dark:text-white py-4 sticky top-0 z-50">
      <div className="flex justify-center px-6 sm:justify-between flex-row flex-wrap items-center max-w-screen-2xl m-auto w-full gap-4">
        <Link href="/">
          <h1 className="hidden sm:block font-bold text-2xl text-black dark:text-teal-400 text-center">
            Osvaldo Valentin
          </h1>
        </Link>
        <nav className="flex items-center flex-row flex-wrap justify-center gap-4">
          <a
            href="https://github.com/ValentinOsvaldo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-gray-800 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500"
          >
            <BsGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/valentin-osvaldo/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-gray-800 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-500"
          >
            <BsLinkedin size={24} />
          </a>

          <button
            className="bg-gray-400 text-white p-2 rounded-full flex items-center justify-center cursor-pointer"
            onClick={toggleTheme}
          >
            {colorScheme === 'light' ? (
              <BsLightbulbFill size={14} />
            ) : (
              <BsLightbulbOff size={14} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
