import Head from 'next/head';
import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ui';
import data from '@/data/data.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Osvaldo Valentin</title>
      </Head>
      <Hero />

      <section className="container">
        <div className="mb-4">
          <h2 className="text-5xl font-bold text-teal-600 dark:text-teal-400">
            Experience
          </h2>

          <article className="job-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Front-End Developer{' '}
              <a
                href="https://www.aeto.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400"
              >
                @AETO
              </a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400">
              2022 - Present | Torreon, MX (Remote)
            </span>
            <p className="font-medium text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              dolores earum quae odio inventore maxime deserunt ipsum culpa
              quis. Vitae unde inventore praesentium eligendi blanditiis, cum a
              culpa provident ab.
            </p>
          </article>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-teal-600 dark:text-teal-400">
            Education
          </h2>

          <article className="job-card">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Licenciatura en Informática Administrativa{' '}
              <a
                href="http://www.ucnl.edu.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400"
              >
                @Universidad Ciudadana de Nuevo León
              </a>
            </h3>
            <span className="text-gray-600 dark:text-gray-400">
              2023 - Present | Nuevo León, MX (Remote)
            </span>
          </article>
        </div>
      </section>

      <section className="px-4">
          <h2 className="text-5xl font-bold dark:text-teal-400 mb-2">
            Projects
          </h2>
          {data.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
      </section>
    </>
  );
}
