
import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

export default function Download() {
  return (
    <>
      <Helmet>
        <title>666RS Game Download – Latest APK for Android in Pakistan</title>

        <meta
          name="description"
          content="Learn about 666RS Game Download, 666RS APK, mobile access, app information, Android compatibility, account access and safe gaming resources."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://666rs2fs.com/download"
        />

        <meta
          property="og:title"
          content="666RS Game Download | 666RS APK & Mobile Access"
        />

        <meta
          property="og:description"
          content="Explore 666RS Game Download information, mobile access, APK guidance, app information and useful platform resources."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://666rs2fs.com/download"
        />
      </Helmet>

      <main id="main-content " className="bg-gray-200">
        <HeroSection />
        <ArticleSection />
        <ContentSection />
      </main>
    </>
  );
}

