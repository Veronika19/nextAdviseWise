import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">
            <a>Go Back</a>
          </Link>
        </h1>
      </main>
    </>
  );
};

export default About;
