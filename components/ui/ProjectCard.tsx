import Image from 'next/image';

interface Props {
  title: string;
  technologies: string[];
  demo?: string;
  code?: string;
  image?: string;
  description?: string;
}

export const ProjectCard: React.FC<Props> = ({
  title,
  technologies,
  code,
  demo,
  description,
  image,
}) => {
  return (
    <article className="flex flex-col relative md:flex-row md:items-center overflow-hidden rounded-xl md:rounded-none my-4 md:odd:flex-row-reverse group md:justify-between">
      <div className="z-10 p-4 bg-gradient-to-t from-teal-700 to-black/50 md:from-transparent md:to-transparent flex flex-col md:group-odd:items-end md:group-odd:text-right">
        <h3 className="text-3xl font-bold text-teal-500">{title}</h3>
        <span className="text-gray-200 font-medium block mb-2">
          {technologies.join(', ')}
        </span>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <div className="flex flex-row gap-4">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-teal-500 px-4 py-2 rounded-lg font-medium transition-all duration-500 hover:brightness-75"
            >
              Demo
            </a>
          )}
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-transparent px-4 py-2 rounded-lg border-teal-400 border-2 text-teal-400 transition-all duration-500 hover:bg-teal-200/25 font-medium"
          >
            Code
          </a>
        </div>
      </div>
      <div className="absolute z-0 w-full h-full md:relative md:w-[400px]">
        <Image
          src={
            image
              ? image
              : 'https://fastly.picsum.photos/id/235/300/200.jpg?hmac=OgmBtL2QjDkQL7wZKMebAZnkfCuZs7GtBi9ngOokiWU'
          }
          alt="random"
          height={300}
          width={400}
          className="w-full h-full object-cover"
          placeholder="blur"
          blurDataURL="./react.svg"
        />
      </div>
    </article>
  );
};
