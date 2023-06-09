import Image from 'next/image';
import { AiOutlineLink } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';

interface Props {
  title: string;
  technologies: string[];
  demo?: string;
  code?: string;
  image: string;
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
    <article className="bg-white dark:bg-slate-800 flex flex-col relative p-4 shadow-lg dark:shadow-none rounded-lg overflow-hidden justify-between gap-4 lg:items-center group lg:justify-between">
      <Image
        src={image}
        alt={title}
        width={500}
        height={400}
        placeholder='blur'
        blurDataURL='/placeholder.png'
        className="shadow-lg w-full lg:max-w-[500px]"
      />
      <div className="flex flex-col flex-nowrap justify-between">
        <h3 className="font-semibold text-2xl dark:text-teal-400">{title}</h3>

        <p className="mb-2">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            Tech Stack:{' '}
          </span>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {technologies.join(', ')}
          </span>
        </p>

        <p className="dark:text-gray-300">{description}</p>

        <div className="flex flex-row gap-4 mt-2">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="card-button"
            >
              <span>Demo</span>
              <AiOutlineLink />
            </a>
          )}
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            <span>Code</span>
            <BsGithub />
          </a>
        </div>
      </div>
    </article>
  );
};
