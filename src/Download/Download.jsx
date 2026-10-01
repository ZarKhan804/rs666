import React from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

const Download = () => {
  const title =
    "666RS Game Download – Latest APK for Android in Pakistan";

  const description =
    "Learn about 666RS Game Download, 666RS APK, Android mobile access, app information, compatibility, account access and useful gaming resources.";

  const canonicalUrl = "https://666rspak.com/download";

  const socialImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10";

  return (
    <>
      <Helmet>
        <html lang="en" />

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
          content="666RS Game Download and APK"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <meta
          name="twitter:image:alt"
          content="666RS Game Download and APK"
        />
      </Helmet>

      <main className="bg-gray-200 text-gray-900">
        <HeroSection />
        <ArticleSection />
        <ContentSection />
      </main>
    </>
  );
};

export default Download;