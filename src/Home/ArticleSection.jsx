import { Link } from "react-router-dom";

function ArticleSection() {
  return (
    <section className="bg-gray-200 px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="rounded-3xl border border-gray-400/70 bg-gray-100 p-6 shadow-sm sm:p-10">
          
          <h2 className="text-3xl font-black text-gray-950 sm:text-4xl">
            666RS Game Information
          </h2>

          <p className="mt-5 text-sm leading-8 text-gray-800 sm:text-base">
            666RS Game is an online gaming information platform that provides
            visitors with useful information about mobile access, gaming
            features, download resources, account-related guidance and other
            helpful website sections. The website is designed to make it easy
            for visitors to find relevant 666RS information from one place.
          </p>

          <p className="mt-4 text-sm leading-8 text-gray-800 sm:text-base">
            Visitors can explore the available pages to learn more about
            666RS, read gaming-related articles, review download information,
            and find contact details. Each section provides additional
            information so users can navigate between related topics easily.
          </p>

          <h3 className="mt-10 text-2xl font-black text-gray-950 sm:text-3xl">
            666RS Mobile Gaming Information
          </h3>

          <p className="mt-4 text-sm leading-8 text-gray-800 sm:text-base">
            Mobile users can access the website through compatible devices and
            explore the available gaming information. The website content
            focuses on simple navigation, mobile access, useful resources and
            clear information for visitors looking for 666RS-related topics.
          </p>

          <p className="mt-4 text-sm leading-8 text-gray-800 sm:text-base">
            For additional information, visitors can use the website
            navigation to move between the home page, about section, blog,
            contact page and download guide. These sections are connected
            internally to provide a straightforward browsing experience.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-black text-gray-950 sm:text-3xl">
              Useful 666RS Resources
            </h3>

            <p className="mt-4 text-sm leading-8 text-gray-800 sm:text-base">
              Explore the main 666RS website pages below to find gaming
              information, guides, contact details, download resources, and
              additional information. These internal links help visitors move
              between related sections easily.
            </p>

            <nav
              aria-label="666RS resource navigation"
              className="mt-6 grid gap-4 sm:grid-cols-2"
            >
              <Link
                to="/"
                className="group rounded-2xl border border-gray-400/70 bg-gray-300/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-100 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <span className="font-bold text-gray-950">
                  666RS Home
                </span>

                <span className="mt-2 block text-sm leading-6 text-gray-700">
                  Visit the main 666RS Game information page.
                </span>
              </Link>

              <Link
                to="/about-us"
                className="group rounded-2xl border border-gray-400/70 bg-gray-300/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-100 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <span className="font-bold text-gray-950">
                  About 666RS
                </span>

                <span className="mt-2 block text-sm leading-6 text-gray-700">
                  Learn more about this website and its gaming information.
                </span>
              </Link>

              <Link
                to="/blog"
                className="group rounded-2xl border border-gray-400/70 bg-gray-300/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-100 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <span className="font-bold text-gray-950">
                  666RS Blog
                </span>

                <span className="mt-2 block text-sm leading-6 text-gray-700">
                  Explore additional gaming guides and articles.
                </span>
              </Link>

              <Link
                to="/contact"
                className="group rounded-2xl border border-gray-400/70 bg-gray-300/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-100 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <span className="font-bold text-gray-950">
                  Contact 666RS
                </span>

                <span className="mt-2 block text-sm leading-6 text-gray-700">
                  Find the website contact and support information.
                </span>
              </Link>

              <Link
                to="/download"
                className="group rounded-2xl border border-gray-400/70 bg-gray-300/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500 hover:bg-yellow-100 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <span className="font-bold text-gray-950">
                  666RS Download Guide
                </span>

                <span className="mt-2 block text-sm leading-6 text-gray-700">
                  Review download and mobile access information.
                </span>
              </Link>
            </nav>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ArticleSection;