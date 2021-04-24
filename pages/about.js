import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <Head>
        <title>About Uss</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold">
          <Link href="/">
            <a className="text-blue-600">Go Back</a>
          </Link>
        </h1>
      </main>
    </>
  );
};

export default About;
