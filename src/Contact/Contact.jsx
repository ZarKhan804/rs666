import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ArticleSection from "./ArticleSection";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact 666RS – Pakistan Game Support Information</title>

        <meta
          name="description"
          content="Contact 666RS Game for questions, feedback, account guidance, platform information, mobile access, and general gaming assistance."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://royalxcasinos777.com/666rs/contact"
        />
      </Helmet>

      <main className="bg-gray-200">
        <HeroSection />
        <ContentSection />
        <ArticleSection />
      </main>
    </>
  );
}

export default Contact;