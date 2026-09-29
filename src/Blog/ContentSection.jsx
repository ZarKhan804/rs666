import { Link } from "react-router-dom";

export default function ContentSection() {
  return (
    <section
      aria-labelledby="666rs-blog-resources"
      className="bg-gray-200 pb-14 pt-0 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-5 lg:px-8">

        <article className="rounded-3xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

          <header>
            <h2
              id="666rs-blog-resources"
              className="text-3xl font-black leading-tight text-gray-950 sm:text-4xl"
            >
              666RS Game Resources and Related Information
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Explore related sections of the website for platform information,
              mobile access guidance, account topics and additional resources.
            </p>
          </header>

          <div className="mt-8 space-y-8 text-base leading-8 text-gray-700">

            <section>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Learn More About 666RS Game
              </h3>

              <p className="mt-4">
                Visitors who want a broader overview can explore the{" "}
                <Link
                  to="/about-us"
                  className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
                >
                  About 666RS Game
                </Link>{" "}
                page for additional information about the platform and related
                resources.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-extrabold text-gray-900">
                666RS Mobile and Download Information
              </h3>

              <p className="mt-4">
                Visitors researching application access and download topics can
                visit the{" "}
                <Link
                  to="/download"
                  className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
                >
                  666RS Download & Access Guide
                </Link>{" "}
                for additional information.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Return to the 666RS Home Page
              </h3>

              <p className="mt-4">
                The{" "}
                <Link
                  to="/"
                  className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
                >
                  666RS Game Home Page
                </Link>{" "}
                provides the main starting point for exploring the website and
                its available sections.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Contact and General Support
              </h3>

              <p className="mt-4">
                For website-related questions and general enquiries, visitors
                can use the{" "}
                <Link
                  to="/contact"
                  className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
                >
                  666RS Contact Page
                </Link>
                .
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Explore 666RS Information
              </h3>

              <p className="mt-4">
                The website connects related pages through contextual internal
                links so visitors can move between useful resources without
                unnecessary repetition. Each section should provide distinct
                information rather than duplicating the same content across
                multiple pages.
              </p>
            </section>

            <section className="rounded-2xl border border-yellow-300/60 bg-yellow-50 p-5 sm:p-6">
              <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                Important Gaming Information
              </h3>

              <p className="mt-3 text-gray-700">
                Gaming involving money can involve financial risk. Users should
                review current terms, conditions, age requirements, availability
                and applicable rules before participating in gaming-related
                activities.
              </p>
            </section>

            <nav
              aria-label="666RS website resources"
              className="border-t border-gray-200 pt-8"
            >
              <h3 className="text-2xl font-extrabold text-gray-900">
                666RS Website Resources
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <Link
                  to="/"
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md"
                >
                  <span className="block text-lg font-bold text-gray-900 group-hover:text-yellow-700">
                    Home
                  </span>

                  <span className="mt-1 block text-sm text-gray-500">
                    Main website
                  </span>
                </Link>

                <Link
                  to="/about-us"
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md"
                >
                  <span className="block text-lg font-bold text-gray-900 group-hover:text-yellow-700">
                    About
                  </span>

                  <span className="mt-1 block text-sm text-gray-500">
                    Platform information
                  </span>
                </Link>

                <Link
                  to="/download"
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md"
                >
                  <span className="block text-lg font-bold text-gray-900 group-hover:text-yellow-700">
                    Download
                  </span>

                  <span className="mt-1 block text-sm text-gray-500">
                    Access information
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md"
                >
                  <span className="block text-lg font-bold text-gray-900 group-hover:text-yellow-700">
                    Contact
                  </span>

                  <span className="mt-1 block text-sm text-gray-500">
                    Website enquiries
                  </span>
                </Link>

              </div>
            </nav>

          </div>
        </article>
      </div>
    </section>
  );
}