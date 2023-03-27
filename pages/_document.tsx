import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Osvaldo Valentin - FrontEnd Dev" />
        <meta
          property="og:url"
          content="https://osvaldo-portfolio.vercel.app/"
        />
        <meta
          name="description"
          content="FrontEnd Developer studying computer science degree and 1+ year
            experience in software development. Certifications in responsive
            design and web development. Increased code delivery speed by 15% and
            best practices across all software projects. Regularly creating
            projects independently to improve skills and testing new
            technologies."
        />
        <meta
          name="keywords"
          content="FrontEnd, React.js, React Native, Web Developer, Osvaldo Valentin, Developer"
        />
        <link rel="canonical" href="https://osvaldo-portfolio.vercel.app/" />
        <meta name="robots" content="index" />
        <meta
          property="og:description"
          content="FrontEnd Developer studying computer science degree and 1+ year
            experience in software development. Certifications in responsive
            design and web development. Increased code delivery speed by 15% and
            best practices across all software projects. Regularly creating
            projects independently to improve skills and testing new
            technologies."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://osvaldo-portfolio.vercel.app/dev.jpg"
        />
        <meta
          name="twitter:card"
          content="FrontEnd Developer studying computer science degree and 1+ year
            experience in software development. Certifications in responsive
            design and web development. Increased code delivery speed by 15% and
            best practices across all software projects. Regularly creating
            projects independently to improve skills and testing new
            technologies."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
