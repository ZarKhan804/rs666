import { useState } from "react";
import { Mail, MessageCircle, Send, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

function ContentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_yx5kvr4",
        "template_z3th0n8",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "zaarkhan483@gmail.com",
        },
        "o51quF5mpQW-ucABt"
      );

      console.log("EmailJS Success:", result.text);

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        `Message could not be sent.\n\nStatus: ${
          error?.status || "Unknown"
        }\nText: ${error?.text || "Please try again later."}`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-title"
      className="bg-gray-200"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:py-16 md:grid-cols-2 lg:px-8">
        <div>
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-yellow-700 sm:text-sm md:text-left">
            666RS Game Contact
          </p>

          <h2
            id="contact-form-title"
            className="mt-3 text-center text-3xl font-black text-gray-950 sm:text-4xl md:text-left"
          >
            Contact 666RS Game
          </h2>

          <p className="mt-5 text-center text-sm leading-7 text-gray-700 sm:text-base md:text-left">
            Visitors can use the 666RS contact form to send questions,
            feedback, account-related enquiries, download questions, mobile
            access requests, or general platform information requests. Provide
            accurate details so your message can be understood clearly.
          </p>

          <div className="mt-7 space-y-3">
            <a
              href="mailto:zaarkhan483@gmail.com"
              aria-label="Email 666RS Game Support"
              className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              <Mail
                aria-hidden="true"
                className="shrink-0 text-yellow-500"
              />

              <span className="text-sm font-medium text-gray-700 sm:text-base">
                zaarkhan483@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4">
              <Phone
                aria-hidden="true"
                className="shrink-0 text-yellow-500"
              />

              <span className="text-sm font-medium text-gray-700 sm:text-base">
                666RS Contact Support
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4">
              <MessageCircle
                aria-hidden="true"
                className="shrink-0 text-yellow-500"
              />

              <span className="text-sm font-medium text-gray-700 sm:text-base">
                666RS Customer Assistance
              </span>
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link
              to="/"
              className="rounded-xl border border-gray-300 bg-white p-4 text-center text-sm font-bold text-gray-800 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              666RS Game
            </Link>

            <Link
              to="/about-us"
              className="rounded-xl border border-gray-300 bg-white p-4 text-center text-sm font-bold text-gray-800 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              About 666RS
            </Link>

            <Link
              to="/blog"
              className="rounded-xl border border-gray-300 bg-white p-4 text-center text-sm font-bold text-gray-800 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              666RS Blog
            </Link>

            <Link
              to="/download"
              className="rounded-xl border border-gray-300 bg-white p-4 text-center text-sm font-bold text-gray-800 transition hover:-translate-y-1 hover:border-yellow-400 hover:shadow-md"
            >
              666RS Download
            </Link>
          </div>

          {/* حقیقی بیرونی لنک */}
          <div className="mt-6 rounded-xl border border-gray-300 bg-white p-5">
            <h3 className="text-lg font-extrabold text-gray-950">
              General Online Safety
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              For general information about online safety, account protection,
              and safer use of online services, visitors can also review the
              Google Safety Center.
            </p>

            <a
              href="https://safety.google/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-bold text-yellow-700 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-800"
            >
              Visit Google Safety Center
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label="666RS Game contact form"
          className="rounded-2xl border border-gray-300 bg-white p-6 shadow-lg sm:p-8"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Name
            </label>

            <input
              id="contact-name"
              required
              autoComplete="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Email
            </label>

            <input
              id="contact-email"
              required
              autoComplete="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Phone Number
            </label>

            <input
              id="contact-phone"
              required
              autoComplete="tel"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-semibold text-gray-800"
            >
              Message
            </label>

            <textarea
              id="contact-message"
              required
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-bold text-gray-950 transition ${
              loading
                ? "cursor-not-allowed bg-gray-400"
                : "bg-yellow-400 hover:bg-yellow-300"
            }`}
          >
            <span>{loading ? "Sending..." : "Send Message"}</span>

            <Send size={18} aria-hidden="true" />
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-gray-500">
            Please provide accurate information when submitting your 666RS
            Game enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContentSection;