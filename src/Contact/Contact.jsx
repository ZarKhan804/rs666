import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ArticleSection from "./ArticleSection";

function Contact() {
  const canonicalUrl = "https://666rspak.com/contact";

  const title =
    "Contact 666RS – Pakistan Game Support Information";

  const description =
    "Contact 666RS Game for questions, feedback, account guidance, platform information, mobile access and general gaming assistance.";

  const socialImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10";

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="666RS" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="666RS" />
        <meta property="og:image" content={socialImage} />
        <meta
          property="og:image:alt"
          content="Contact 666RS Game"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <meta
          name="twitter:image:alt"
          content="Contact 666RS Game"
        />
      </Helmet>

      <main id="main-content" className="bg-gray-200">
        <HeroSection />
        <ContentSection />
        <ArticleSection />
      </main>
    </>
  );
}

export default Contact;