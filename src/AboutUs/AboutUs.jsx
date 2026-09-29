import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

function About() {
  return (
    <>
      <Helmet>
        <title>About 666RS Game – Pakistan Gaming Platform Information</title>
        <meta name="description" content="Learn about 666RS Game, 666RS Game Pakistan, 666RS APK, mobile access, gaming features, account information, download guidance and useful gaming resources." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="666RS" />
        <link rel="canonical" href="https://666rspak.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About 666RS Game – Pakistan Gaming Platform Information" />
        <meta property="og:description" content="Learn about 666RS Game, 666RS Game Pakistan, 666RS APK, mobile access, gaming features, account information, download guidance and useful gaming resources." />
        <meta property="og:url" content="https://666rspak.com/about" />
        <meta property="og:site_name" content="666RS" />
        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10" />
        <meta property="og:image:alt" content="About 666RS Game Pakistan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About 666RS Game – Pakistan Gaming Platform Information" />
        <meta name="twitter:description" content="Learn about 666RS Game, 666RS Game Pakistan, 666RS APK, mobile access, gaming features, account information, download guidance and useful gaming resources." />
        <meta name="twitter:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10" />
      </Helmet>
      <main>
        <HeroSection />
        <ArticleSection />
        <ContentSection />
      </main>
    </>
  );
}
export default About;