import Head from 'next/head';
import experience from '@/data/data.json';
import { ExperienceCard } from '@/components/ui';

const about = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Osvaldo Valentin - About Me" />
        <meta
          property="og:url"
          content="https://osvaldo-portfolio.vercel.app/about"
        />
        <title>About me</title>
      </Head>

      <section className="container">
        <article className="mb-4 max-w-screen-sm">
          <h2 className="text-5xl font-semibold text-teal-400 mb-2">
            About me
          </h2>
          <p className="text-gray-300">
            FrontEnd Developer studying computer science degree and 1+ year
            experience in software development. Certifications in responsive
            design and web development. Increased code delivery speed by 15% and
            best practices across all software projects. Regularly creating
            projects independently to improve skills and testing new
            technologies.
          </p>

          <a
            href="./osvaldo_valentin_garcia.pdf"
            download
            className="
              py-2
              px-4
              block
              border-teal-400
              border-2
              text-teal-400
              bg-transparent
              mt-2
              w-full
              rounded-md
              text-center
              font-medium
              transition-all
              sm:w-fit
              hover:bg-teal-500/25
            "
          >
            Download Resume
          </a>
        </article>

        <article className="mb-4 max-w-screen-sm">
          <h3 className="text-3xl font-semibold text-teal-400">Skills</h3>

          <ul className="list-disc mt-2 pl-6 grid sm:grid-cols-3 gap-2 marker:text-teal-300">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React.js</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Git (Github, Git Flow)</li>
            <li>Node.js with Express</li>
          </ul>
        </article>

        <article className="mb-4 max-w-screen-sm">
          <h3 className="text-3xl font-semibold text-teal-400">Experience</h3>

          {experience.experience.map((job, index) => (
            <ExperienceCard key={index} {...job} />
          ))}
        </article>

        <article className="mb-4 max-w-screen-sm">
          <h3 className="text-3xl font-semibold text-teal-400">Education</h3>

          <ul className="list-disc mt-2 pl-6 text-gray-300 marker:text-teal-300">
            <li>Self-taught Person.</li>
            <li>
              Lic. Informática Administrativa (2023 - 2026)(Remote) -{' '}
              <a
                href="http://www.ucnl.edu.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300"
              >
                Universidad Ciudadana de Nuevo León
              </a>
            </li>
            <li>
              Bachiller Técnico en Informática (2017 - 2020) -{' '}
              <a
                href="https://www.conalep.edu.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300"
              >
                Conalep
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default about;
