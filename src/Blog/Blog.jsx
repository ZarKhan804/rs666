import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

function Blog() {
  return (
    <>
      <Helmet>
        <title>666RS Game Blog – Download, Login & Registration Guides</title>
        <meta name="description" content="Explore useful 666RS Game guides covering mobile access, APK information, account topics, games, payments, responsible gaming and related platform resources." />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="666RS" />
        <link rel="canonical" href="https://666rspak.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="666RS Game Blog – Download, Login & Registration Guides" />
        <meta property="og:description" content="Explore useful 666RS Game guides covering mobile access, APK information, account topics, games, payments, responsible gaming and related platform resources." />
        <meta property="og:url" content="https://666rspak.com/blog" />
        <meta property="og:site_name" content="666RS" />
        <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_WP8_RE8VQ3n5hRA6qQGwJ17yuor8qbHdXmmqvmLz4yzvNfun1p7YVcg&s=10" />
        <meta property="og:image:alt" content="666RS Game Blog and Gaming Guides" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="666RS Game Blog – Download, Login & Registration Guides" />
        <meta name="twitter:description" content="Explore useful 666RS Game guides covering mobile access, APK information, account topics, games, payments, responsible gaming and related platform resources." />
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
export default Blog;