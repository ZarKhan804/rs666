
import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>
         About 666RS Game – Pakistan Gaming Platform Information
        </title>

        <meta
          name="description"
          content="Learn about 666RS Game, 666RS Game Pakistan, 666RS APK, mobile access, gaming features, account information, download guidance and useful gaming resources."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://666rs2fs.com/about-us"
        />

        <meta
          property="og:title"
          content="About 666RS Game | 666RS Game Pakistan"
        />

        <meta
          property="og:description"
          content="Explore 666RS Game information, mobile access, download guidance, platform features and useful gaming resources."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main
        id="main-content"
        className="bg-gray-200"
      >
        <HeroSection />
        <ArticleSection />
        <ContentSection />
      </main>
    </>
  );
}

