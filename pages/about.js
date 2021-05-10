import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>About Us | ADVISE WISE ASSOCIATES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-6xl font-bold">Welcome About</h1>
      </main>
    </div>
  );
};

export default About;
