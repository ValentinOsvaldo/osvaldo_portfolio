import { useScheme } from '@/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsLightbulbFill, BsLightbulbOff } from 'react-icons/bs';

const links = [
  { url: '/projects', text: 'Projects' },
  { url: '/contact', text: 'Contact' },
];

export const Navbar = () => {
  const { asPath } = useRouter();
  const { colorScheme, toggleTheme } = useScheme();

  return (
    <header className="dark:bg-slate-800 dark:text-white py-4">
      <div className="flex justify-center px-6 sm:justify-between flex-row flex-wrap items-center max-w-screen-2xl m-auto w-full gap-4">
        <Link href="/">
          <h1 className="font-bold text-2xl text-black dark:text-teal-400 text-center">
            Osvaldo Valentin
          </h1>
        </Link>
        <nav className="flex items-center flex-row flex-wrap justify-center gap-4">
          {links.map((page) => (
            <Link
              key={page.url}
              href={page.url}
              className={`text-black dark:text-gray-200 hover:border-b-black font-medium border-b-2 transition-all ${
                asPath === page.url
                  ? 'border-b-black dark:text-teal-300 dark:border-b-teal-300'
                  : 'border-b-transparent'
              } dark:hover:border-b-teal-300 dark:hover:text-teal-300`}
            >
              {page.text}
            </Link>
          ))}

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

          {/* <a
            href="./osvaldo_valentin_garcia.pdf"
            target='_blank'
            rel="noopener noreferrer"
            className="hidden px-4 py-2 bg-teal-400 font-medium text-black rounded-md sm:inline-block w-fit transition-all hover:brightness-90"
          >
            Resume
          </a> */}
        </nav>
      </div>
    </header>
  );
};
