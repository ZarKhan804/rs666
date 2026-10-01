import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ArticleSection from "./ArticleSection";

const SITE_URL = "https://666rspak.com";
const PAGE_URL = `${SITE_URL}/contact`;

const TITLE = "Contact 666RS – Pakistan Game Support Information";

const DESCRIPTION =
  "Contact 666RS Game for questions, feedback, account guidance, platform information, mobile access and general gaming assistance.";

const SOCIAL_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10";

function Contact() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>

        <meta name="description" content={DESCRIPTION} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="666RS" />

        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="666RS" />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta property="og:image:alt" content="Contact 666RS Game" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <meta name="twitter:image:alt" content="Contact 666RS Game" />
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