import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

function Download() {
  const SITE_URL = "https://666rspak.com";
  const canonicalUrl = `${SITE_URL}/download`;

  const title = "666RS Game Download – Latest APK & Mobile Access";

  const description =
    "Learn about 666RS Game Download, 666RS APK, mobile access, Android compatibility, account access, gaming information and safe download practices.";

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

      <div className="bg-gray-200 text-gray-900">
        <HeroSection />
        <ArticleSection />
        <ContentSection />
      </div>
    </>
  );
}

export default Download;