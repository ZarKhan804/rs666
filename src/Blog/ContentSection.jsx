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
              The 666RS Game Blog connects visitors with useful information
              about the platform, mobile access, gaming topics, account
              guidance and related website resources.
            </p>
          </header>

          <div className="mt-8 space-y-8 text-base leading-8 text-gray-700">

            <section>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Learn More About 666RS Game
              </h3>

              <p className="mt-4">
                Visitors who want to understand the platform in more detail
                can explore the{" "}
                <Link
                  to="/about-us"
                  className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
                >
                  About 666RS Game
                </Link>{" "}
                page. It provides additional information about 666RS Game,
                platform features, mobile access and general gaming resources.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-extrabold text-gray-900">
                666RS Mobile and Download Information
              </h3>

              <p className="mt-4">
                Visitors researching{" "}
                <strong>666RS Game Download</strong>, mobile access and
                application-related information can explore the{" "}
                <Link
                  to="/download"
                  className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
                >
                  666RS Download & Access Guide
                </Link>{" "}
                for additional platform access information.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-extrabold text-gray-900">
                666RS Home and Platform Information
              </h3>

              <p className="mt-4">
                Users who want to return to the main 666RS platform information
                can visit the{" "}
                <Link
                  to="/"
                  className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
                >
                  666RS Game Home Page
                </Link>
                . This provides a central navigation point for exploring the
                website and its available sections.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Contact and General Support
              </h3>

              <p className="mt-4">
                For general questions, feedback or website-related enquiries,
                visitors can use the{" "}
                <Link
                  to="/contact"
                  className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
                >
                  666RS Contact Page
                </Link>{" "}
                to access the available contact information.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Explore 666RS Information Naturally
              </h3>

              <p className="mt-4">
                The internal structure of this website connects the main
                666RS Game pages through relevant contextual links. Visitors
                can move from the home page to About, Blog, Download and
                Contact sections without placing unnecessary links throughout
                every paragraph.
              </p>

              <p className="mt-4">
                This approach keeps the content readable while making related
                666RS resources easier to discover. Each page should provide
                its own useful information instead of repeating the same text
                across multiple sections.
              </p>
            </section>

            <section className="rounded-2xl border border-yellow-300/60 bg-yellow-50 p-5 sm:p-6">
              <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                Important Gaming Information
              </h3>

              <p className="mt-3 text-gray-700">
                Gaming involving money can involve financial risk. Users
                should review current terms, conditions, age requirements,
                availability and applicable rules before participating in any
                gaming-related activity.
              </p>
            </section>

          </div>
        </article>
      </div>
    </section>
  );
}