import { Link } from "react-router-dom";

export default function ContentSection() {
  return (
    <section
      aria-labelledby="666rs-platform-overview"
      className="bg-gray-200 pb-14 sm:pb-20"
    >
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <article className="rounded-3xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <header>
            <h2
              id="666rs-platform-overview"
              className="text-2xl font-extrabold text-gray-900 sm:text-3xl"
            >
              666RS Game Platform Overview
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600">
              This overview explains the main topics visitors may want to
              understand when researching 666RS Game, including mobile access,
              download information, account resources, gaming features and
              related website guides.
            </p>
          </header>

          <div className="mt-8 space-y-7 text-base leading-8 text-gray-600">
            <section>
              <h3 className="text-xl font-extrabold text-gray-900">
                Platform Information
              </h3>

              <p className="mt-3">
                666RS Game is searched by visitors looking for information
                about online gaming, mobile access and related platform
                resources. This website organizes those topics into dedicated
                pages so visitors can move between general information,
                articles and access guides.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-extrabold text-gray-900">
                Mobile and APK Information
              </h3>

              <p className="mt-3">
                Visitors interested in 666RS APK or mobile access should check
                the source of any application file, confirm compatibility with
                their device and review permissions before installation.
                Downloading software from unknown sources can create security
                risks.
              </p>

              <p className="mt-3">
                Read the{" "}
                <Link
                  to="/download"
                  className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
                >
                  666RS Download Guide
                </Link>{" "}
                for additional information about mobile access.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-extrabold text-gray-900">
                Gaming Features
              </h3>

              <p className="mt-3">
                Platform features can include mobile compatibility, account
                access, navigation and information about available gaming
                services. Features, requirements and availability may change,
                so visitors should confirm current details before relying on
                specific information.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-extrabold text-gray-900">
                Account and Login Information
              </h3>

              <p className="mt-3">
                Visitors researching account registration or login should use
                the access instructions provided by the relevant platform.
                Passwords, OTP codes, payment information and other sensitive
                account details should not be shared with unofficial contacts.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-extrabold text-gray-900">
                666RS Game Pakistan
              </h3>

              <p className="mt-3">
                Visitors in Pakistan researching 666RS Game can use this
                website to review general platform information, mobile access
                resources and gaming guides. Local requirements, age
                restrictions, financial considerations and service availability
                should be checked before participating in any gaming activity.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-extrabold text-gray-900">
                Responsible Gaming
              </h3>

              <p className="mt-3">
                Gaming involving money carries financial risk. There is no
                guaranteed winning strategy or guaranteed income from gaming.
                Users should understand applicable rules, limits and conditions
                and only use funds they can afford to lose.
              </p>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Useful 666RS Game Resources
              </h3>

              <p className="mt-3 text-gray-600">
                Use these internal links to continue exploring the website.
              </p>

              <nav
                aria-label="666RS website resources"
                className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                <Link
                  to="/"
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md"
                >
                  <span className="block text-lg font-bold text-gray-900 group-hover:text-yellow-700">
                    Home
                  </span>

                  <span className="mt-1 block text-sm text-gray-500">
                    Explore 666RS
                  </span>
                </Link>

                <Link
                  to="/about-us"
                  aria-current="page"
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
                  to="/blog"
                  className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:shadow-md"
                >
                  <span className="block text-lg font-bold text-gray-900 group-hover:text-yellow-700">
                    Blog
                  </span>

                  <span className="mt-1 block text-sm text-gray-500">
                    Gaming guides
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
                    Mobile access guide
                  </span>
                </Link>
              </nav>

              <div className="mt-5">
                <Link
                  to="/contact"
                  className="inline-flex rounded-xl bg-yellow-400 px-6 py-3 font-bold text-gray-950 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
                >
                  Contact 666RS
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}