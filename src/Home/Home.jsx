import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

function Home() {
  return (
    <>
      <Helmet>
        <title>666RS Game – Download APK & Play Online in Pakistan</title>
        <meta name="description" content="Explore 666RS Game Pakistan information, mobile access, download guidance, gaming features, account resources and useful 666RS gaming guides." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="666RS" />
        <link rel="canonical" href="https://666rspak.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="666RS Game – Download APK & Play Online in Pakistan" />
        <meta property="og:description" content="Explore 666RS Game Pakistan information, mobile access, download guidance, gaming features, account resources and useful 666RS gaming guides." />
        <meta property="og:url" content="https://666rspak.com/" />
        <meta property="og:site_name" content="666RS" />
        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10" />
        <meta property="og:image:alt" content="666RS Game Pakistan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="666RS Game – Download APK & Play Online in Pakistan" />
        <meta name="twitter:description" content="Explore 666RS Game Pakistan information, mobile access, download guidance, gaming features, account resources and useful 666RS gaming guides." />
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
export default Home;