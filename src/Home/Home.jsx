import React from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

const SITE_URL = "https://666rspak.com";
const PAGE_URL = `${SITE_URL}/`;

const TITLE = "666RS Game – Download APK & Play Online in Pakistan";

const DESCRIPTION =
  "Explore 666RS Game Pakistan information, mobile access, download guidance, gaming features, account resources and useful 666RS gaming guides.";

const SOCIAL_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10";

const Home = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />

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
        <meta property="og:image:alt" content="666RS Game Pakistan" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <meta name="twitter:image:alt" content="666RS Game Pakistan" />
      </Helmet>

      <main className="bg-gray-200 text-gray-900">
        <HeroSection />
        <ArticleSection />
        <ContentSection />
      </main>
    </>
  );
};

export default Home;