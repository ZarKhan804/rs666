import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import ArticleSection from "./ArticleSection";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact 666RS – Pakistan Game Support Information</title>
        <meta name="description" content="Contact 666RS Game for questions, feedback, account guidance, platform information, mobile access and general gaming assistance." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="666RS" />
        <link rel="canonical" href="https://666rspak.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact 666RS – Pakistan Game Support Information" />
        <meta property="og:description" content="Contact 666RS Game for questions, feedback, account guidance, platform information, mobile access and general gaming assistance." />
        <meta property="og:url" content="https://666rspak.com/contact" />
        <meta property="og:site_name" content="666RS" />
        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10" />
        <meta property="og:image:alt" content="Contact 666RS Game" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact 666RS – Pakistan Game Support Information" />
        <meta name="twitter:description" content="Contact 666RS Game for questions, feedback, account guidance, platform information, mobile access and general gaming assistance." />
        <meta name="twitter:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10" />
      </Helmet>
      <main>
        <HeroSection />
        <ContentSection />
        <ArticleSection />
      </main>
    </>
  );
}
export default Contact;