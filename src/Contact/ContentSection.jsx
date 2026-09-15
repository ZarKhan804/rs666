function ContentSection() {
  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-gray-400 py-16 text-gray-900 sm:py-20 lg:py-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="absolute bottom-[-150px] right-[-120px] h-[350px] w-[350px] rounded-full bg-amber-400/10 blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-5 inline-flex rounded-full border border-yellow-600/30 bg-gray-300 px-5 py-2 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-800">
              Contact 666RS
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Send Us a{" "}
            <span className="text-yellow-700">
              Message
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-700 sm:text-lg">
            Have a question or want to share something with us?
            Fill out the form below and send your message.
          </p>

        </div>

        {/* Form Area */}
        <div className="mx-auto mt-12 max-w-3xl">

          <form
            className="rounded-3xl border border-gray-300/70 bg-gray-300/70 p-6 shadow-2xl shadow-gray-500/20 backdrop-blur-md sm:p-8 lg:p-10"
          >

            {/* Name + Email */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-gray-400/70 bg-gray-200/70 px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-500 focus:border-yellow-500 focus:bg-white/80 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-gray-800"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-gray-400/70 bg-gray-200/70 px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-500 focus:border-yellow-500 focus:bg-white/80 focus:ring-2 focus:ring-yellow-400/20"
                />
              </div>

            </div>

            {/* Subject */}
            <div className="mt-5">

              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-bold text-gray-800"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What would you like to ask?"
                required
                className="w-full rounded-xl border border-gray-400/70 bg-gray-200/70 px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 placeholder:text-gray-500 focus:border-yellow-500 focus:bg-white/80 focus:ring-2 focus:ring-yellow-400/20"
              />

            </div>

            {/* Message */}
            <div className="mt-5">

              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-gray-800"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                required
                className="w-full resize-none rounded-xl border border-gray-400/70 bg-gray-200/70 px-4 py-3.5 text-sm leading-7 text-gray-900 outline-none transition duration-300 placeholder:text-gray-500 focus:border-yellow-500 focus:bg-white/80 focus:ring-2 focus:ring-yellow-400/20"
              ></textarea>

            </div>

            {/* Submit Button */}
            <div className="mt-7 text-center">

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400 px-8 py-4 text-sm font-black text-gray-950 shadow-lg shadow-yellow-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-600/30 sm:w-auto sm:min-w-[220px]"
              >
                Send Message
              </button>

            </div>

            {/* Bottom Text */}
            <p className="mt-5 text-center text-xs leading-6 text-gray-600">
              Please provide accurate information so we can better
              understand your message.
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContentSection;