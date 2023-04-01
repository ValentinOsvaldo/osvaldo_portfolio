import Image from 'next/image';

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
    <section className="min-h-[calc(100vh-110px)] sm:h-[calc(100vh_-_75px)] flex justify-center p-6 flex-col gap-2 max-w-screen-sm text-center md:text-left">
      <h2 className="font-bold text-5xl dark:text-teal-400 relative">
        Front-End React Developer
        <span className="absolute ml-2 inline-block border-l-8 border-gray-800 dark:border-teal-400 w-1 h-12 animate-cursor"></span>
      </h2>
      <h3 className="font-medium text-lg text-gray-700 dark:text-gray-300 mb-4">
        Hi my name is Osvaldo Valentin and I'm a Front End developer from Monterrey, MX.
      </h3>

      <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-3">
        <div className='flex flex-col items-center text-gray-700 dark:text-gray-300 md:flex-row md:gap-4'>
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
              className="transition-all hover:grayscale-0 hover:rotate-12 hover:scale-125 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
