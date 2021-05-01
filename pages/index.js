import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Modal from '../components/modal';

export default function Home() {
  return (
    <>
      <Modal title="Welcome!" text="Thank you for joining the Gust community" />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">Welcome home</h1>
        </main>
      </div>
    </>
  );
}
