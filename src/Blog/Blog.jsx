import React from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

const SITE_URL = "https://666rspak.com";
const PAGE_URL = `${SITE_URL}/blog`;

const TITLE =
  "666RS Game Blog – Download, Login & Registration Guides";

const DESCRIPTION =
  "Explore the 666RS Game Blog for useful guides covering mobile access, APK information, account topics, gaming features, payments, responsible gaming and related platform resources.";

const SOCIAL_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10";

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "666RS Game Blog",
    description: DESCRIPTION,
    url: PAGE_URL,
    publisher: {
      "@type": "Organization",
      name: "666RS",
      url: SITE_URL,
    },
  };

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
        <meta
          property="og:image:alt"
          content="666RS Gaming Blog and Guides"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="666RS Gaming Blog and Guides"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="bg-gray-200 text-gray-900">
        <HeroSection />
        <ArticleSection />
        <ContentSection />
      </main>
    </>
  );
};

export default Blog;