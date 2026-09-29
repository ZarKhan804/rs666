import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

const SITE_URL = "https://666rs2fs.com";
const PAGE_URL = `${SITE_URL}/blog`;
const SOCIAL_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10";

const title = "666RS Game Blog | Gaming Guides & Information";
const description =
  "Explore useful 666RS Game guides covering mobile access, APK information, account topics, games, payments, responsible gaming and related platform resources.";

export default function Blog() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "666RS Game Blog",
    description,
    url: PAGE_URL,
    publisher: {
      "@type": "Organization",
      name: "666RS",
    },
  };

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

        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="666RS" />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta
          property="og:image:alt"
          content="666RS Game Blog and Gaming Guides"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="666RS Game Blog and Gaming Guides"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main id="main-content" className="bg-gray-200 text-gray-900">
        <HeroSection />
        <ArticleSection />
        <ContentSection />
      </main>
    </>
  );
}