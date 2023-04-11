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

      <section className="px-4 mb-4">
        <h2 className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">Projects</h2>
        <article
          className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
        >
          {data.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </article>
      </section>

      <section className="container">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400">
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
            <span className="text-sm text-gray-600 dark:text-gray-400">
              2022 - Present | Torreon, MX (Remote)
            </span>
            <p className="font-medium text-gray-700 dark:text-gray-300">
              Lead one of the company{"'"}s main projects, which was delivered
              in record time. The code quality standard was improved and an
              improvement in delivery of 15%. Improvements in the user interface
              which increased user satisfaction by 80%. Close collaboration with
              teams from other areas for the implementation of new features.
            </p>

            <p className='text-sm text-gray-600 mt-1 dark:text-gray-400'>
              Tech stack: Javascript · Typescript · React · React Native
            </p>
          </article>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-4">
            Education
          </h2>

          <article className="mb-4 pb-2">
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
            <span className="text-sm text-gray-600 dark:text-gray-400">
              2023 - Present | Nuevo León, MX (Remote)
            </span>
          </article>
        </div>
      </section>
    </>
  );
}
