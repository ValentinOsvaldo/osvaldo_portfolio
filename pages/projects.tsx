import { ProjectCard } from '@/components/ui';
import Head from 'next/head';
import data from '@/data/data.json';

const projects = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Osvaldo Valentin - Projects" />
        <meta
          property="og:url"
          content="https://osvaldo-portfolio.vercel.app/projects"
        />
        <title>Projects</title>
      </Head>

      <section className="container">
        <div className="max-w-screen-lg m-auto">
          <h2 className="text-5xl font-bold dark:text-teal-400 mb-2">
            Projects
          </h2>
          {data.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default projects;
