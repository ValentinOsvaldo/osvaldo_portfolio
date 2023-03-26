import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { url: '/about', text: 'About me' },
  { url: '/projects', text: 'Projects' },
  { url: '/contact', text: 'Contact' },
];

export const Navbar = () => {
  const { asPath } = useRouter();

  return (
    <header className="bg-slate-800 text-white py-4">
      <div className="flex justify-center px-6 sm:justify-between flex-row flex-wrap items-center max-w-screen-2xl m-auto w-full gap-4">
        <Link href="/">
          <h1 className="font-bold text-2xl text-teal-400 text-center">Osvaldo Valentin</h1>
        </Link>
        <nav className="flex items-center flex-row flex-wrap justify-center gap-4">
          {links.map((page) => (
            <Link
              key={page.url}
              href={page.url}
              className={`font-medium border-b-transparent border-b-2 transition-all ${
                asPath === page.url && 'text-teal-300 border-b-teal-300'
              } hover:border-b-teal-300 hover:text-teal-300`}
            >
              {page.text}
            </Link>
          ))}

          <a
            href="./osvaldo_valentin_garcia.pdf"
            target='_blank'
            rel="noopener noreferrer"
            className="hidden px-4 py-2 bg-teal-400 font-medium text-black rounded-md sm:inline-block w-fit transition-all hover:brightness-90"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};
