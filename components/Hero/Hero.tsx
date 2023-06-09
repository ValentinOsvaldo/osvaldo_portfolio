import Image from 'next/image';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const icons = [
  { path: './html.svg', name: 'html' },
  { path: './css.svg', name: 'css' },
  { path: './js.svg', name: 'js' },
  { path: './ts.svg', name: 'ts' },
  { path: './react.svg', name: 'react' },
  { path: './nextjs.svg', name: 'next' },
  { path: './android.svg', name: 'android' },
  { path: './tailwindcss.svg', name: 'tailwindcss' },
  { path: './git.svg', name: 'git' },
];

export const Hero = () => {
  return (
    <section className="flex justify-center p-6 flex-col gap-2 max-w-screen-sm text-center md:text-left">
      <h2 className="font-bold text-6xl text-teal-600 dark:text-teal-400 relative">
        Osvaldo Valentin
        <span className="absolute ml-2 inline-block border-l-8 border-teal-600 dark:border-teal-400 w-1 h-14 animate-cursor"></span>
      </h2>
      <article className="mb-2">
        <span className="font-bold text-4xl text-gray-700 dark:text-gray-300">
          Front-End Developer
        </span>
        <p className="font-medium text-base text-gray-600 dark:text-gray-400">
          +1 year of experience developing professional applications with React
          and React Native, working with a team and leading a project.
        </p>
      </article>

      <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-3">
        <div className="flex flex-col items-center text-gray-700 dark:text-gray-300 md:flex-row md:gap-4">
          <span className="font-semibold">Tech Stack</span>
          <span className="h-px w-full md:h-8 md:w-px inline-block bg-gray-600 dark:bg-gray-300"></span>
        </div>
        <div className="items-center flex flex-row flex-wrap gap-2 justify-center">
          {icons.map((icon) => (
            <Image
              key={icon.name}
              src={icon.path}
              alt={icon.name}
              height={35}
              width={35}
              className="transition-all hover:grayscale-0 hover:rotate-12 hover:scale-125"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
