import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Qwant Junior</title>
      </Head>
      <div className="pt-32 px-4 pb-12 md:pt-40 md:pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate">
          Redefining HR{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            with AI-powered Chatbot
          </span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 mb-12 aos-init aos-animate">
            An HR chatbot can automate regular tasks that are taken care of by
            the HR team, thereby enhancing their efficiency. Studies show that
            intelligent assistants can improve the productivity of HR
            professionals by up to 45%.
          </p>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate">
            <div>
              <Link href="https://telegram.me/qwantjunior_bot">
                <a
                  className="max-w-sm text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-base px-12 py-4 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get started
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl m-auto text-center px-4">
        <div className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-8 aos-init aos-animate">
          Members of the human resources team say that 50% of their time is
          spent in addressing repetitive employee queries regarding business
          policies.
        </div>
      </div>
      <section className="max-w-2xl m-auto text-center px-4">
        <div className="flex flex-col py-12 text-center">
          <span className="inline-block text-2xl font-bold">
            Automating Employee Engagement to Improve Retention
          </span>
          <span className="mt-2">
            An employee engagement chatbot can help organizations stay connected
            with their employees better. Bots can help keep employees updated
            about the recent developments within the organization, capture
            feedback and also handle various aspects pertaining to an employee’s
            lifecycle.
          </span>
        </div>
      </section>
      <section className="max-w-2xl m-auto text-center px-4">
        <div className="flex flex-col py-12 text-center">
          <span className="inline-block text-2xl font-bold">
            Streamlining HR Support with Digital Assistants
          </span>
          <span className="mt-2">
            HR professionals spend a considerable amount of time onboarding new
            employees and addressing policy-related inquiries. Our AI chatbot
            can identify and address regular employee queries, thus reducing the
            time taken and boosting overall productivity.
          </span>
        </div>
      </section>
      <section className="max-w-2xl m-auto text-center px-4">
        <div className="flex flex-col py-12 text-center">
          <span className="inline-block text-2xl font-bold">
            Helping Recruiters Seamlessly Connect with Candidates
          </span>
          <span className="mt-2">
            Using an HR chatbot for recruitment can not only help optimize
            hiring costs but also decrease the time to hire. AI bots can
            automate multiple stages of the recruitment cycle, such as profile
            submission, assessment tests and documentation.
          </span>
        </div>
      </section>
      <div className="max-w-2xl m-auto text-center px-4">
        <div className="flex flex-col py-12 text-center">
          <span className="inline-block text-2xl font-extrabold">
            Stay connected.
          </span>
          <span className="mt-2">
            Be the first to hear about exciting product updates & latest trends
            in HR technology.
          </span>
          <div className="flex flex-row items-baseline mt-4">
            <input
              type="email"
              name="email"
              className="h-10 mt-1 mr-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg m-auto px-12 h-16 md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li>
            <Link href="/">
              <a className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out">
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"></path>
                </svg>
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <a className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out">
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                </svg>
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/">
              <a className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out">
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"></path>
                </svg>
              </a>
            </Link>
          </li>
        </ul>
        <div className="text-sm text-gray-600 mr-4">
          © 2022 Qwant Junior, Inc.
        </div>
      </div>
    </div>
  );
}
