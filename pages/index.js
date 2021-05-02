import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Modal from '../components/modal';

export default function Home() {
  return (
    <>
      <Modal title="Welcome!" text="Thank you for joining the Gust community" />
      <div className="flex flex-col items-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center flex-1 px-8 text-center">
          <section className="text-gray-600 body-font">
            <div className="container px-2 py-2 mx-auto">
              <div className="lg:w-full mx-auto flex flex-wrap">
                <Image
                  alt="blind lady justice status"
                  width={400}
                  height={500}
                  className="lg:w-2/6 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src="/justice-lady-1.png"
                />
                <div className="lg:w-4/6 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-red text-4xl title-font font-bold mb-8 underline">
                    WELCOME TO ADVISE WISE ASSOCIATES
                  </h1>

                  <p className="leading-relaxed text-left mb-4 text-lg">
                    <b>Advise Wise Associates</b> is a full-service law firm, with a PAN India
                    presence, providing innovative legal solutions to its domestic as well as
                    international clients. The firm offers a large portfolio of legal services. We
                    are headquartered at NOIDA with branch offices in Allahabad, Lucknow, Mumbai and
                    network offices at Delhi NCR.
                  </p>
                  <p className="leading-relaxed text-left mb-4 text-lg">
                    At, <b>Advise Wise Associates</b> we empathize with our clients and strive to
                    provide legal solutions in their best interest. We feel responsible for the
                    clients taking our services and endeavour to provide results to their complete
                    satisfaction. In doing so, we build and maintain strong client relationships.
                    Our practice extends across diverse areas of law in various forums and
                    jurisdictions.
                  </p>
                  <p className="leading-relaxed text-left mb-4 text-lg">
                    The stimulating work environment brings together the best legal brains at Advise
                    Wise Associates to take care of the legal needs of our clients. Our law firm
                    contains experienced, dynamic, venturesome and creative legal specialists having
                    remarkable scholastic and technical records.
                  </p>
                  <p className="leading-relaxed text-left mb-4 text-lg">
                    <b>Advise Wise Associates</b> has expertise and experience across various
                    sectors such as banking and finance, land laws, insolvency and bankruptcy law,
                    infrastructure and real estate, civil, criminal & commercial litigation,
                    arbitration and reconciliation,corporate laws, family law, and consumer law.
                  </p>
                  <p className="leading-relaxed text-left mb-4 text-lg">
                    Under the able guidance of our partners who are leading experts in various areas
                    of law, highest standards of services are maintained and seamlessly delivered to
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-14 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-red underline">
                  Our Expertise
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway
                  tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep
                  jianbing selfies heirloom.
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative rounded overflow-hidden">
                    <Image
                      alt="ecommerce"
                      width={280}
                      height={260}
                      className="object-cover object-center w-full h-full block"
                      src="/real-estate.png"
                    />
                  </a>
                  <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">RERA</h2>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative rounded overflow-hidden">
                    <Image
                      width={280}
                      height={260}
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/civil-criminal-cases.png"
                    />
                  </a>
                  <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      CIVIL, CRIMINAL & CORPORATE LITIGATION
                    </h2>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative rounded overflow-hidden">
                    <Image
                      width={280}
                      height={260}
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/banking-recovery-debt.png"
                    />
                  </a>
                  <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      BANKING & RECOVERY OF DEBTS
                    </h2>
                  </div>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative rounded overflow-hidden">
                    <Image
                      width={280}
                      height={260}
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="/land-laws.png"
                    />
                  </a>
                  <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium">LAND LAWS</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
