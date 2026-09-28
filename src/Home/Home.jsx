import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

function Home() {
  const canonicalUrl = "https://666rspak.com/";

  return (
    <>
      <Helmet>
        <html lang="en" />

        <title>666RS Game – Download, Features & Gaming Guide 2026</title>

        <meta
          name="description"
          content="Explore 666RS Game, 666RS APK information, mobile access, game features, registration guidance, and helpful gaming resources for Pakistan."
        />

        <meta
          name="keywords"
          content="666RS Game, 666RS Game Download, 666RS APK, 666RS Game Pakistan, 666RS App, 666RS Online, 666RS mobile game, 666RS gaming"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="666RS" />

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="666RS Game – Download, Features & Gaming Guide 2026"
        />
        <meta
          property="og:description"
          content="Learn about 666RS Game, mobile access, APK information, game features, registration guidance, and useful gaming resources."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="666RS" />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10"
        />
        <meta property="og:image:alt" content="666RS Game" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="666RS Game – Download, Features & Gaming Guide 2026"
        />
        <meta
          name="twitter:description"
          content="Explore 666RS Game features, mobile access, APK information, registration guidance, and gaming resources."
        />
        <meta
          name="twitter:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10"
        />
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