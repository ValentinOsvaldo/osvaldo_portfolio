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
    <section className="min-h-[calc(100vh-110px)] sm:h-[calc(100vh_-_75px)] flex justify-center p-4 flex-col gap-2 ">
      <h2 className="font-bold text-5xl text-teal-400 relative">
        Hi, my name is Osvaldo Valentin
        <span className="absolute ml-2 inline-block border-l-8 border-teal-400 w-1 h-12 animate-cursor"></span>
      </h2>
      <h3 className="font-mono font-medium text-2xl text-gray-300">
        Front-End Developer
      </h3>

      <div className="hidden sm:flex flex-row flex-wrap gap-2 mt-2">
        {icons.map((icon) => (
          <Image
            key={icon.name}
            src={icon.path}
            alt={icon.name}
            height={35}
            width={35}
            className="grayscale transition-all hover:grayscale-0 hover:rotate-12 hover:scale-125 cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};
