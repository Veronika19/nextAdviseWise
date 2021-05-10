import Head from 'next/head';

import Team from '../components/Team';
import ExpertiseData from '../expertise.json';
import TeamData from '../teams.json';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Expertise | ADVISE WISE ASSOCIATES</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-4xl font-bold title-font mb-4 text-red tracking-widest">
                  OUR EXPERTISE
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway
                  tile poke farm-to-table. Franzen you probably haven't heard of them.
                </p>
              </div>
              <Team data={ExpertiseData} social={false} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
