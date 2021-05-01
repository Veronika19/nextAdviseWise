import { useEffect, useState } from 'react';
import Head from 'next/head';

import Team from '../components/Team';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                  OUR TEAM
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway
                  tile poke farm-to-table. Franzen you probably haven't heard of them.
                </p>
              </div>
              <Team />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
